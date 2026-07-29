// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

/**
 * Unit tests for the `listAgents` example. Every boundary that would touch the outside world is
 * replaced: the gRPC client is MOCKED (a plain object recording the request + metadata), the Keycloak
 * token endpoint is mocked via the injectable `fetchImpl`, and `console` is captured via `node:test`
 * mocks -- there is NO network access and NO live NLU server.
 *
 * Every case that depends on configuration runs inside {@link withEnv}, which clears all
 * `ONDEWO_*` / `KEYCLOAK_*` variables the example reads, applies a scripted set, and reinstates the
 * previous values afterwards -- so the suite is independent of the developer's shell environment and
 * of `examples/environment.env`, and the test cases pass in any order.
 *
 * @example
 * ```sh
 * npm test
 * ```
 */

import { test as runTestCase, mock } from 'node:test';
import assert from 'node:assert/strict';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import * as dotenv from 'dotenv';
import * as grpc from '@grpc/grpc-js';

import { Agent, AgentWithOwner, ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import {
	buildChannelCredentials,
	buildListAgentsRequest,
	createAgentsClient,
	fetchAgents,
	main,
	requireEnv,
	type AgentsClientFactory,
	type AgentsListClient,
	type LoginFunction
} from './listAgents';
import {
	login,
	OfflineTokenProvider,
	type OfflineTokenLoginOptions,
	type TokenFetch,
	type TokenFetchInit,
	type TokenFetchResponse
} from '../auth/offlineTokenProvider';

/** The page size the example asks for, shared between the request input and the expected token. */
const PAGE_SIZE: number = 10000;
/** The page-size sentinel token {@link PAGE_SIZE} must serialize into. */
const EXPECTED_PAGE_TOKEN: string = 'page_size-10000';

/**
 * Every environment variable `examples/listAgents.ts` reads. {@link withEnv} deletes all of them
 * before applying a scripted set, so no ambient value (shell export, `examples/environment.env`) can
 * influence a test case.
 */
const MANAGED_ENV_KEYS: string[] = [
	'ONDEWO_HOST',
	'ONDEWO_PORT',
	'ONDEWO_USE_SECURE_CHANNEL',
	'ONDEWO_GRPC_CERT',
	'ONDEWO_NLU_PAGE_SIZE',
	'KEYCLOAK_URL',
	'KEYCLOAK_REALM',
	'KEYCLOAK_CLIENT_ID',
	'KEYCLOAK_USER_NAME',
	'KEYCLOAK_PASSWORD',
	'KEYCLOAK_VERIFY_SSL'
];

/**
 * A complete, valid environment for {@link main}: every REQUIRED variable and no optional one, so the
 * optional-variable defaults (`ONDEWO_NLU_PAGE_SIZE`, `KEYCLOAK_VERIFY_SSL`, the secure-channel pair)
 * are the ones under test.
 */
const MAIN_ENV: Record<string, string> = {
	ONDEWO_HOST: 'nlu.example.com',
	ONDEWO_PORT: '50055',
	KEYCLOAK_URL: 'https://auth.example.com/auth',
	KEYCLOAK_REALM: 'ondewo-ccai-platform',
	KEYCLOAK_CLIENT_ID: 'ondewo-nlu-cai-sdk-public',
	KEYCLOAK_USER_NAME: 'tech-user@example.com',
	KEYCLOAK_PASSWORD: 'super-secret'
};

/**
 * Run `body` with a scripted environment: every key in {@link MANAGED_ENV_KEYS} is deleted, then
 * `overrides` is applied, and the previous values (including "was unset") are reinstated afterwards.
 *
 * `body` is AWAITED inside the `try` on purpose: {@link main} reads `ONDEWO_USE_SECURE_CHANNEL` only
 * AFTER it has awaited the login, so a helper that restored the environment as soon as `body`
 * returned its promise would put the real environment back before that code runs.
 *
 * @param overrides - Variables to set for the duration of `body`; keys must be in {@link MANAGED_ENV_KEYS}.
 * @param body - The scenario to run under the scripted environment; may be synchronous or async.
 * @returns A promise that resolves once `body` has settled and the environment has been reinstated.
 */
async function withEnv(overrides: Record<string, string>, body: () => void | Promise<void>): Promise<void> {
	const saved: Record<string, string | undefined> = {};
	for (const key of MANAGED_ENV_KEYS) {
		saved[key] = process.env[key];
		delete process.env[key];
	}
	for (const key of Object.keys(overrides)) {
		process.env[key] = overrides[key];
	}
	try {
		await body();
	} finally {
		for (const key of MANAGED_ENV_KEYS) {
			const previous: string | undefined = saved[key];
			if (previous === undefined) {
				delete process.env[key];
			} else {
				process.env[key] = previous;
			}
		}
	}
}

/** The console output a test case captured, in call order, one entry per `console` call. */
interface ConsoleRecorder {
	/** The messages passed to `console.log`. */
	logLines: string[];
	/** The messages passed to `console.error`. */
	errorLines: string[];
}

/**
 * Replace `console.log` / `console.error` with recording no-ops, so the printed output can be asserted
 * exactly and the example's chatter stays out of the test report.
 *
 * The caller MUST undo this with `mock.restoreAll()` in a `finally` block.
 *
 * @returns A {@link ConsoleRecorder} whose arrays fill up while the mocks are installed.
 */
function captureConsole(): ConsoleRecorder {
	const logLines: string[] = [];
	const errorLines: string[] = [];
	mock.method(console, 'log', (...args: unknown[]): void => {
		logLines.push(args.map((argument: unknown): string => String(argument)).join(' '));
	});
	mock.method(console, 'error', (...args: unknown[]): void => {
		errorLines.push(args.map((argument: unknown): string => String(argument)).join(' '));
	});
	return { logLines, errorLines };
}

/** The root-certificate arguments a `grpc.credentials.createSsl` spy observed, in call order. */
interface CreateSslSpy {
	/** The `rootCerts` argument of each `createSsl` call (`undefined` means "system trust store"). */
	rootCertsSeen: (Buffer | null | undefined)[];
}

/**
 * Spy on `grpc.credentials.createSsl` while still building the real TLS credentials, so a test can
 * assert exactly which root certificate bytes reached gRPC.
 *
 * The caller MUST undo this with `mock.restoreAll()` in a `finally` block.
 *
 * @returns A {@link CreateSslSpy} whose array fills up while the spy is installed.
 */
function spyOnCreateSsl(): CreateSslSpy {
	const rootCertsSeen: (Buffer | null | undefined)[] = [];
	const createRealSsl: typeof grpc.credentials.createSsl = grpc.credentials.createSsl;
	mock.method(grpc.credentials, 'createSsl', (rootCerts?: Buffer | null): grpc.ChannelCredentials => {
		rootCertsSeen.push(rootCerts);
		return createRealSsl(rootCerts);
	});
	return { rootCertsSeen };
}

/** A mocked {@link AgentsListClient} plus accessors for the request + metadata it recorded. */
interface RecordingClient {
	/** The injectable mock to pass to {@link fetchAgents}. */
	client: AgentsListClient;
	/** The {@link ListAgentsRequest} the last `listAgents` call received, or `null` if uncalled. */
	getRequest(): ListAgentsRequest | null;
	/** The {@link grpc.Metadata} the last `listAgents` call received, or `null` if uncalled. */
	getMetadata(): grpc.Metadata | null;
}

/**
 * Build a mock gRPC client whose `listAgents` records the request + metadata and immediately invokes
 * the callback with `response` (no network).
 *
 * @param response - The {@link ListAgentsResponse} the mock hands back to the callback.
 * @returns A {@link RecordingClient} exposing the mock and its captured request + metadata.
 */
function makeRecordingClient(response: ListAgentsResponse): RecordingClient {
	let capturedRequest: ListAgentsRequest | null = null;
	let capturedMetadata: grpc.Metadata | null = null;
	const client: AgentsListClient = {
		listAgents(
			request: ListAgentsRequest,
			metadata: grpc.Metadata,
			handler: (error: grpc.ServiceError | null, listResponse: ListAgentsResponse) => void
		): grpc.ClientUnaryCall {
			capturedRequest = request;
			capturedMetadata = metadata;
			handler(null, response);
			return {} as grpc.ClientUnaryCall;
		}
	};
	return {
		client,
		getRequest: (): ListAgentsRequest | null => capturedRequest,
		getMetadata: (): grpc.Metadata | null => capturedMetadata
	};
}

/**
 * Build a mock gRPC client whose `listAgents` throws `failure` synchronously, modelling a non-gRPC
 * transport/programming failure inside the promise wrapper of {@link fetchAgents}.
 *
 * @param failure - The value the mock throws.
 * @returns The injectable {@link AgentsListClient}.
 */
function makeThrowingClient(failure: unknown): AgentsListClient {
	return {
		listAgents(): void {
			throw failure;
		}
	};
}

/** A fake {@link AgentsClientFactory} recording every dial {@link main} performed. */
interface ClientFactoryRecorder {
	/** The injectable factory for `ListAgentsOverrides.createClient`. */
	createClient: AgentsClientFactory;
	/** The `host:port` of each dial, in call order. */
	addressesSeen: string[];
	/** The channel credentials of each dial, in call order. */
	credentialsSeen: grpc.ChannelCredentials[];
}

/**
 * Build a fake gRPC-client factory that records the address + credentials it was asked to dial and
 * always hands back the same mocked client.
 *
 * @param client - The mocked {@link AgentsListClient} the factory returns.
 * @returns A {@link ClientFactoryRecorder} exposing the factory and everything it recorded.
 */
function makeClientFactoryRecorder(client: AgentsListClient): ClientFactoryRecorder {
	const addressesSeen: string[] = [];
	const credentialsSeen: grpc.ChannelCredentials[] = [];
	const createClient: AgentsClientFactory = (
		address: string,
		credentials: grpc.ChannelCredentials
	): AgentsListClient => {
		addressesSeen.push(address);
		credentialsSeen.push(credentials);
		return client;
	};
	return { createClient, addressesSeen, credentialsSeen };
}

/**
 * Build a fake Keycloak token endpoint for the real {@link login}, so a test gets a genuine
 * {@link OfflineTokenProvider} without touching the network.
 *
 * @param accessToken - The access token the scripted endpoint hands back.
 * @returns The injectable {@link TokenFetch} to pass as `fetchImpl`.
 */
function makeTokenEndpointStub(accessToken: string): TokenFetch {
	return (_url: string, _init: TokenFetchInit): Promise<TokenFetchResponse> =>
		Promise.resolve({
			ok: true,
			status: 200,
			text: (): Promise<string> =>
				Promise.resolve(JSON.stringify({ access_token: accessToken, refresh_token: 'offline-1', expires_in: 300 }))
		});
}

/** A fake {@link LoginFunction} recording its options and the `stop()` calls on the provider it made. */
interface LoginRecorder {
	/** The injectable login for `ListAgentsOverrides.loginImpl`. */
	loginImpl: LoginFunction;
	/** The {@link OfflineTokenLoginOptions} of each login call, in call order. */
	optionsSeen: OfflineTokenLoginOptions[];
	/**
	 * How often {@link OfflineTokenProvider.stop} was called on the provider handed to the caller.
	 *
	 * @returns The number of `stop()` calls observed so far.
	 */
	stopCount(): number;
}

/**
 * Build a fake login that records the options it received and delegates to the REAL {@link login}
 * against a mocked token endpoint, so the returned {@link OfflineTokenProvider}, its bearer header and
 * its background-refresh shutdown are genuinely exercised rather than faked.
 *
 * @param accessToken - The access token the scripted token endpoint issues.
 * @returns A {@link LoginRecorder} exposing the injectable login and everything it recorded.
 */
function makeLoginRecorder(accessToken: string): LoginRecorder {
	const optionsSeen: OfflineTokenLoginOptions[] = [];
	let stopCalls: number = 0;
	const loginImpl: LoginFunction = async (options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider> => {
		optionsSeen.push(options);
		const provider: OfflineTokenProvider = await login({ ...options, fetchImpl: makeTokenEndpointStub(accessToken) });
		const stopProvider: () => void = provider.stop.bind(provider);
		// Count the shutdown while still performing it, so a failing test cannot leave a refresh armed.
		provider.stop = (): void => {
			stopCalls += 1;
			stopProvider();
		};
		return provider;
	};
	return { loginImpl, optionsSeen, stopCount: (): number => stopCalls };
}

/** One scripted secure-channel environment, labelled for use in assertion messages. */
interface ChannelCredentialsCase {
	/** Human-readable description of the scripted environment. */
	label: string;
	/** The environment {@link withEnv} applies; an absent key means the variable stays unset. */
	env: Record<string, string>;
}

/**
 * The one `@grpc/grpc-js` `InternalChannel` field a test reads: the channel credentials the client was
 * constructed with, which the internal channel stores verbatim (it never wraps or replaces them).
 */
interface InternalChannelCredentials {
	/** The exact {@link grpc.ChannelCredentials} instance handed to the client constructor. */
	credentials?: grpc.ChannelCredentials;
}

/**
 * The channel surface a test needs: the dialled address plus the single internal hop that reveals which
 * credentials the client dials with (grpc-js keeps them on the channel's private `internalChannel`, which
 * is why {@link grpc.Channel} itself cannot be extended here). That hop and its field are OPTIONAL on
 * purpose, so a future grpc-js refactor of those internals surfaces as an explicit assertion failure with
 * a readable message rather than as a compile error.
 */
interface InspectableChannel {
	/**
	 * The address the channel was bound to.
	 *
	 * @returns The gRPC target string, e.g. `dns:nlu.example.com:50055`.
	 */
	getTarget(): string;
	/** The private inner channel implementation, which holds the credentials the channel dials with. */
	internalChannel?: InternalChannelCredentials;
}

/** The generated-client members a test needs: the bound channel and the shutdown hook. */
interface InspectableClient {
	/** Release the channel so no gRPC handle outlives the test case. */
	close(): void;
	/**
	 * The client's channel.
	 *
	 * @returns The channel, whose `getTarget()` reveals the address the client was bound to and whose
	 *   `internalChannel.credentials` reveals the credentials it was bound with.
	 */
	getChannel(): InspectableChannel;
}

/** Asserts the request builder encodes the page size as the `page_size-<N>` sentinel token. */
runTestCase('buildListAgentsRequest encodes the page size as a page_size sentinel token', () => {
	const request: ListAgentsRequest = buildListAgentsRequest(PAGE_SIZE);
	assert.equal(request.getPageToken(), EXPECTED_PAGE_TOKEN);
});

/**
 * Asserts {@link fetchAgents} sends the paged request + `Authorization: Bearer` metadata to the
 * (mocked) client and resolves with the response the stub returned.
 */
runTestCase('fetchAgents attaches the bearer token, sends the paged request, and returns the response', async () => {
	const authorizationHeader: string = 'Bearer test-access-token';
	const nextPageToken: string = 'next-page-42';
	const response: ListAgentsResponse = new ListAgentsResponse();
	response.setNextPageToken(nextPageToken);
	const recording: RecordingClient = makeRecordingClient(response);

	const result: ListAgentsResponse = await fetchAgents(recording.client, authorizationHeader, PAGE_SIZE);

	assert.equal(result.getNextPageToken(), nextPageToken);

	const sentRequest: ListAgentsRequest | null = recording.getRequest();
	assert.ok(sentRequest !== null);
	assert.equal(sentRequest.getPageToken(), EXPECTED_PAGE_TOKEN);

	const sentMetadata: grpc.Metadata | null = recording.getMetadata();
	assert.ok(sentMetadata !== null);
	assert.deepEqual(sentMetadata.get('Authorization'), [authorizationHeader]);
});

/** Asserts a gRPC error from the (mocked) client rejects the {@link fetchAgents} promise. */
runTestCase('fetchAgents rejects when the mocked client returns a gRPC error', async () => {
	const grpcError: grpc.ServiceError = Object.assign(new Error('boom'), {
		code: grpc.status.UNAVAILABLE,
		details: 'boom',
		metadata: new grpc.Metadata()
	});
	const client: AgentsListClient = {
		listAgents(
			_request: ListAgentsRequest,
			_metadata: grpc.Metadata,
			handler: (error: grpc.ServiceError | null, listResponse: ListAgentsResponse) => void
		): grpc.ClientUnaryCall {
			handler(grpcError, new ListAgentsResponse());
			return {} as grpc.ClientUnaryCall;
		}
	};
	await assert.rejects(() => fetchAgents(client, 'Bearer x', PAGE_SIZE), /boom/);
});

/**
 * Asserts the full example flow with BOTH boundaries mocked: an offline-token {@link login} (mocked
 * `fetchImpl`) yields the bearer header, and the subsequent {@link fetchAgents} call carries exactly
 * that `Bearer <access_token>` on its gRPC metadata.
 */
runTestCase('example flow: offline-token login then listAgents carries the fresh bearer token', async () => {
	const accessToken: string = 'access-xyz';
	const fetchImpl: TokenFetch = (_url: string, _init: TokenFetchInit): Promise<TokenFetchResponse> =>
		Promise.resolve({
			ok: true,
			status: 200,
			text: (): Promise<string> =>
				Promise.resolve(JSON.stringify({ access_token: accessToken, refresh_token: 'offline-1', expires_in: 300 }))
		});

	const provider: OfflineTokenProvider = await login({
		keycloakUrl: 'https://auth.example.com/auth',
		realm: 'ondewo-ccai-platform',
		clientId: 'ondewo-nlu-cai-sdk-public',
		username: 'tech-user@example.com',
		password: 'super-secret',
		fetchImpl
	});
	try {
		const recording: RecordingClient = makeRecordingClient(new ListAgentsResponse());
		await fetchAgents(recording.client, provider.getAuthorizationHeader(), PAGE_SIZE);

		const sentMetadata: grpc.Metadata | null = recording.getMetadata();
		assert.ok(sentMetadata !== null);
		assert.deepEqual(sentMetadata.get('Authorization'), [`Bearer ${accessToken}`]);
	} finally {
		provider.stop();
	}
});

/**
 * Asserts the example's module-level `dotenv.config(...)` really loads its configuration from the
 * `environment.env` file sitting NEXT TO the module -- the property that makes the example runnable from
 * any working directory -- rather than from the process's current directory or not at all.
 *
 * The example is a CommonJS module whose `dotenv.config(...)` runs exactly ONCE, at load time, and this
 * spec has already imported it. The call is therefore observed by (a) replacing `config` on the LIVE
 * `dotenv` module object taken from the require cache -- a TypeScript namespace import of a CommonJS
 * module is a copy whose properties are getters that read that object, so the copy itself cannot be
 * patched -- (b) evicting the example from the require cache and loading it a second time, and
 * (c) reinstating both the real `config` and the originally cached module afterwards, leaving the rest of
 * the suite untouched. The stand-in `config` reads no file and writes nothing, so `process.env` is not
 * mutated by this case.
 *
 * The expected path is built from THIS spec's `__dirname` because the spec and the module under test are
 * compiled side by side into the same directory, so the module's own `__dirname` is identical to it.
 */
runTestCase('the example loads its dotenv configuration from the environment.env next to the module', () => {
	const dotenvRecord: NodeModule | undefined = require.cache[require.resolve('dotenv')];
	assert.ok(dotenvRecord !== undefined, 'dotenv is not in the require cache, so its config cannot be replaced');
	const liveDotenv: typeof dotenv = dotenvRecord.exports as typeof dotenv;
	const modulePath: string = require.resolve('./listAgents');
	const cachedModule: NodeModule | undefined = require.cache[modulePath];
	const configOptionsSeen: (dotenv.DotenvConfigOptions | undefined)[] = [];
	mock.method(liveDotenv, 'config', (options?: dotenv.DotenvConfigOptions): dotenv.DotenvConfigOutput => {
		configOptionsSeen.push(options);
		return { parsed: {} };
	});
	try {
		delete require.cache[modulePath];
		// `module.require` is the same CommonJS loader (and cache) as a bare `require`, spelled the one way
		// the lint rule `@typescript-eslint/no-require-imports` allows.
		module.require('./listAgents');
		assert.deepEqual(configOptionsSeen, [{ path: path.join(__dirname, 'environment.env') }]);
	} finally {
		mock.restoreAll();
		require.cache[modulePath] = cachedModule;
	}
});

/**
 * Asserts {@link requireEnv} returns a configured value VERBATIM -- the documented contract is that
 * the value is not trimmed, so surrounding whitespace reaches the host/port/URL strings unchanged.
 */
runTestCase('requireEnv returns a configured value verbatim, without trimming it', async () => {
	await withEnv({ ONDEWO_HOST: 'nlu.example.com', ONDEWO_PORT: '  50055  ' }, (): void => {
		assert.equal(requireEnv('ONDEWO_HOST'), 'nlu.example.com');
		assert.equal(requireEnv('ONDEWO_PORT'), '  50055  ');
	});
});

/**
 * Asserts {@link requireEnv} rejects an unset, empty and whitespace-only variable with an error that
 * names the variable and points the reader at `examples/environment.env`.
 */
runTestCase('requireEnv throws for an unset, empty or blank variable, naming it and the env file', async () => {
	await withEnv({}, (): void => {
		const expectedMessage: string =
			'Missing required environment variable ONDEWO_HOST (set it in examples/environment.env).';
		// Unset.
		assert.throws(() => requireEnv('ONDEWO_HOST'), { message: expectedMessage });
		// Present but empty.
		process.env.ONDEWO_HOST = '';
		assert.throws(() => requireEnv('ONDEWO_HOST'), { message: expectedMessage });
		// Present but whitespace-only.
		process.env.ONDEWO_HOST = ' \t ';
		assert.throws(() => requireEnv('ONDEWO_HOST'), { message: expectedMessage });
	});
});

/**
 * Asserts {@link buildChannelCredentials} builds PLAINTEXT credentials unless
 * `ONDEWO_USE_SECURE_CHANNEL` is (case-insensitively) `true`, and that a configured root certificate
 * is not even read while the channel is plaintext.
 */
runTestCase(
	'buildChannelCredentials builds a plaintext channel when ONDEWO_USE_SECURE_CHANNEL is unset, false or FALSE',
	async () => {
		const cases: ChannelCredentialsCase[] = [
			{ label: 'unset', env: {} },
			{ label: 'false', env: { ONDEWO_USE_SECURE_CHANNEL: 'false' } },
			{ label: 'FALSE', env: { ONDEWO_USE_SECURE_CHANNEL: 'FALSE' } },
			{
				// An unreadable cert path proves the certificate is never touched on the plaintext path.
				label: 'false with a cert configured',
				env: { ONDEWO_USE_SECURE_CHANNEL: 'false', ONDEWO_GRPC_CERT: '/nonexistent/root.pem' }
			}
		];
		for (const scenario of cases) {
			await withEnv(scenario.env, (): void => {
				const recorder: ConsoleRecorder = captureConsole();
				try {
					const credentials: grpc.ChannelCredentials = buildChannelCredentials();
					assert.equal(credentials._isSecure(), false, `ONDEWO_USE_SECURE_CHANNEL=${scenario.label}`);
					assert.deepEqual(recorder.logLines, ['[listAgents] Using an INSECURE (plaintext) gRPC channel.']);
				} finally {
					mock.restoreAll();
				}
			});
		}
	}
);

/**
 * Asserts a secure channel with no usable `ONDEWO_GRPC_CERT` falls back to the system trust store
 * (`createSsl` receives no root certificate), and that the secure-channel flag is matched
 * case-insensitively.
 */
runTestCase(
	'buildChannelCredentials builds a TLS channel from the system trust store when no cert is set',
	async () => {
		const cases: ChannelCredentialsCase[] = [
			{ label: 'TrUe with no cert configured', env: { ONDEWO_USE_SECURE_CHANNEL: 'TrUe' } },
			{ label: 'true with a blank cert path', env: { ONDEWO_USE_SECURE_CHANNEL: 'true', ONDEWO_GRPC_CERT: '   ' } }
		];
		for (const scenario of cases) {
			await withEnv(scenario.env, (): void => {
				const recorder: ConsoleRecorder = captureConsole();
				const createSslSpy: CreateSslSpy = spyOnCreateSsl();
				try {
					const credentials: grpc.ChannelCredentials = buildChannelCredentials();
					assert.equal(credentials._isSecure(), true, scenario.label);
					// No root certificate handed to gRPC => the OS trust store is used.
					assert.deepEqual(createSslSpy.rootCertsSeen, [undefined], scenario.label);
					assert.deepEqual(recorder.logLines, [
						'[listAgents] Using a SECURE gRPC channel with the system trust store.'
					]);
				} finally {
					mock.restoreAll();
				}
			});
		}
	}
);

/**
 * Asserts a secure channel with `ONDEWO_GRPC_CERT` set reads that PEM file and hands its exact bytes
 * to `grpc.credentials.createSsl` as the root certificate.
 */
runTestCase('buildChannelCredentials builds a TLS channel from the exact ONDEWO_GRPC_CERT file bytes', async () => {
	const certDirectory: string = fs.mkdtempSync(path.join(os.tmpdir(), 'ondewo-listagents-cert-'));
	const certPath: string = path.join(certDirectory, 'root.pem');
	const certBytes: Buffer = Buffer.from(
		'-----BEGIN CERTIFICATE-----\nlistAgents-spec-root\n-----END CERTIFICATE-----\n'
	);
	fs.writeFileSync(certPath, certBytes);
	try {
		await withEnv({ ONDEWO_USE_SECURE_CHANNEL: 'true', ONDEWO_GRPC_CERT: certPath }, (): void => {
			const recorder: ConsoleRecorder = captureConsole();
			const createSslSpy: CreateSslSpy = spyOnCreateSsl();
			try {
				const credentials: grpc.ChannelCredentials = buildChannelCredentials();
				assert.equal(credentials._isSecure(), true);
				// The file CONTENTS must reach gRPC -- not the path, and not `undefined`.
				assert.deepEqual(createSslSpy.rootCertsSeen, [certBytes]);
				assert.deepEqual(recorder.logLines, [
					`[listAgents] Using a SECURE gRPC channel with root cert from ${certPath}.`
				]);
			} finally {
				mock.restoreAll();
			}
		});
	} finally {
		fs.rmSync(certDirectory, { recursive: true, force: true });
	}
});

/**
 * Asserts an unreadable `ONDEWO_GRPC_CERT` fails loudly (the `fs.readFileSync` error propagates)
 * instead of silently degrading to the system trust store.
 */
runTestCase('buildChannelCredentials propagates the read error when ONDEWO_GRPC_CERT is unreadable', async () => {
	const certDirectory: string = fs.mkdtempSync(path.join(os.tmpdir(), 'ondewo-listagents-nocert-'));
	const missingCertPath: string = path.join(certDirectory, 'root.pem');
	try {
		await withEnv({ ONDEWO_USE_SECURE_CHANNEL: 'true', ONDEWO_GRPC_CERT: missingCertPath }, (): void => {
			const recorder: ConsoleRecorder = captureConsole();
			try {
				assert.throws(() => buildChannelCredentials(), { code: 'ENOENT' });
				assert.deepEqual(recorder.logLines, [
					`[listAgents] Using a SECURE gRPC channel with root cert from ${missingCertPath}.`
				]);
			} finally {
				mock.restoreAll();
			}
		});
	} finally {
		fs.rmSync(certDirectory, { recursive: true, force: true });
	}
});

/**
 * Asserts {@link createAgentsClient} -- the default client factory of {@link main} -- binds the
 * generated `Agents` client to BOTH the requested address and the requested channel credentials.
 *
 * The credentials are TLS ones built by `grpc.credentials.createSsl()`, which are distinguishable from
 * the plaintext default: the test asserts the client's channel holds that EXACT instance and that it is
 * still the secure one, so a factory that dropped the argument (and let gRPC default to plaintext) or
 * swapped in different credentials would fail here.
 *
 * gRPC-js dials lazily, so constructing the client opens no connection; the channel is closed again so
 * no handle outlives the test case.
 */
runTestCase('createAgentsClient binds the generated Agents client to the given address and credentials', () => {
	const secureCredentials: grpc.ChannelCredentials = grpc.credentials.createSsl();
	const client: AgentsListClient = createAgentsClient('nlu.example.com:50055', secureCredentials);
	assert.equal(typeof client.listAgents, 'function');
	const inspectable: InspectableClient = client as unknown as InspectableClient;
	try {
		const channel: InspectableChannel = inspectable.getChannel();
		assert.equal(channel.getTarget(), 'dns:nlu.example.com:50055');
		const boundCredentials: grpc.ChannelCredentials | undefined = channel.internalChannel?.credentials;
		assert.ok(
			boundCredentials !== undefined,
			'@grpc/grpc-js no longer keeps the channel credentials on channel.internalChannel.credentials'
		);
		// The credentials must arrive at the client unchanged -- same object, and still a SECURE one.
		assert.equal(boundCredentials, secureCredentials);
		assert.equal(boundCredentials._isSecure(), true);
	} finally {
		inspectable.close();
	}
});

/**
 * Asserts the whole {@link main} flow against injected fakes: it logs in with the options derived from
 * the `KEYCLOAK_*` variables, dials `<host>:<port>` with the (plaintext) credentials, sends the
 * default page-size sentinel plus the fresh bearer token, prints one line per agent -- falling back to
 * `<unknown>` for an entry without an agent -- and stops the token provider exactly once.
 */
runTestCase('main logs in, dials host:port, lists the agents and stops the token provider exactly once', async () => {
	await withEnv(MAIN_ENV, async (): Promise<void> => {
		const agent: Agent = new Agent();
		agent.setDisplayName('my-agent');
		const entryWithAgent: AgentWithOwner = new AgentWithOwner();
		entryWithAgent.setAgent(agent);
		// A second entry WITHOUT an agent exercises the '<unknown>' display-name fallback.
		const entryWithoutAgent: AgentWithOwner = new AgentWithOwner();
		const response: ListAgentsResponse = new ListAgentsResponse();
		response.setAgentsWithOwnersList([entryWithAgent, entryWithoutAgent]);

		const recording: RecordingClient = makeRecordingClient(response);
		const factory: ClientFactoryRecorder = makeClientFactoryRecorder(recording.client);
		const loginRecorder: LoginRecorder = makeLoginRecorder('access-main');
		const recorder: ConsoleRecorder = captureConsole();
		try {
			await main({ loginImpl: loginRecorder.loginImpl, createClient: factory.createClient });
		} finally {
			mock.restoreAll();
		}

		assert.deepEqual(loginRecorder.optionsSeen, [
			{
				keycloakUrl: 'https://auth.example.com/auth',
				realm: 'ondewo-ccai-platform',
				clientId: 'ondewo-nlu-cai-sdk-public',
				username: 'tech-user@example.com',
				password: 'super-secret',
				// KEYCLOAK_VERIFY_SSL unset => TLS verification stays ON.
				keycloakVerifySsl: true
			}
		]);

		assert.deepEqual(factory.addressesSeen, ['nlu.example.com:50055']);
		assert.equal(factory.credentialsSeen.length, 1);
		assert.equal(factory.credentialsSeen[0]._isSecure(), false);

		const sentRequest: ListAgentsRequest | null = recording.getRequest();
		assert.ok(sentRequest !== null);
		assert.equal(sentRequest.getPageToken(), EXPECTED_PAGE_TOKEN);
		const sentMetadata: grpc.Metadata | null = recording.getMetadata();
		assert.ok(sentMetadata !== null);
		assert.deepEqual(sentMetadata.get('Authorization'), ['Bearer access-main']);

		assert.equal(loginRecorder.stopCount(), 1);
		assert.deepEqual(recorder.logLines, [
			'START: listAgents example',
			'[listAgents] Logging in to Keycloak realm "ondewo-ccai-platform" at https://auth.example.com/auth ...',
			'[listAgents] Keycloak login succeeded; access token acquired.',
			'[listAgents] Using an INSECURE (plaintext) gRPC channel.',
			'[listAgents] Calling Agents.ListAgents on nlu.example.com:50055 (pageSize=10000) ...',
			'[listAgents] Found 2 agent(s):',
			'  - my-agent',
			'  - <unknown>',
			'DONE: listAgents example'
		]);
		assert.deepEqual(recorder.errorLines, []);
	});
});

/**
 * Asserts the two optional variables are honoured: `ONDEWO_NLU_PAGE_SIZE` replaces the default page
 * size in both the request token and the log line, and `KEYCLOAK_VERIFY_SSL=FALSE` (upper case, so the
 * comparison must be case-insensitive) turns Keycloak TLS verification off.
 */
runTestCase('main honours ONDEWO_NLU_PAGE_SIZE and the case-insensitive KEYCLOAK_VERIFY_SSL=FALSE', async () => {
	const overrides: Record<string, string> = { ...MAIN_ENV, ONDEWO_NLU_PAGE_SIZE: '25', KEYCLOAK_VERIFY_SSL: 'FALSE' };
	await withEnv(overrides, async (): Promise<void> => {
		const recording: RecordingClient = makeRecordingClient(new ListAgentsResponse());
		const factory: ClientFactoryRecorder = makeClientFactoryRecorder(recording.client);
		const loginRecorder: LoginRecorder = makeLoginRecorder('access-paged');
		const recorder: ConsoleRecorder = captureConsole();
		try {
			await main({ loginImpl: loginRecorder.loginImpl, createClient: factory.createClient });
		} finally {
			mock.restoreAll();
		}

		assert.equal(loginRecorder.optionsSeen.length, 1);
		assert.equal(loginRecorder.optionsSeen[0].keycloakVerifySsl, false);

		const sentRequest: ListAgentsRequest | null = recording.getRequest();
		assert.ok(sentRequest !== null);
		assert.equal(sentRequest.getPageToken(), 'page_size-25');
		assert.ok(
			recorder.logLines.includes('[listAgents] Calling Agents.ListAgents on nlu.example.com:50055 (pageSize=25) ...')
		);
		// An empty page prints the count and no agent lines.
		assert.ok(recorder.logLines.includes('[listAgents] Found 0 agent(s):'));
		assert.equal(loginRecorder.stopCount(), 1);
	});
});

/**
 * Asserts a failed `Agents.ListAgents` call is reported with its gRPC status NAME and server details,
 * that the token provider is still stopped by the `finally` block, and that the error is re-thrown
 * unchanged instead of being swallowed.
 */
runTestCase('main reports the gRPC status of a failed ListAgents call, stops the provider and re-throws', async () => {
	await withEnv(MAIN_ENV, async (): Promise<void> => {
		const serviceError: grpc.ServiceError = Object.assign(new Error('server is down'), {
			code: grpc.status.UNAVAILABLE,
			details: 'server is down',
			metadata: new grpc.Metadata()
		});
		const client: AgentsListClient = {
			listAgents(
				_request: ListAgentsRequest,
				_metadata: grpc.Metadata,
				handler: (error: grpc.ServiceError | null, listResponse: ListAgentsResponse) => void
			): void {
				handler(serviceError, new ListAgentsResponse());
			}
		};
		const factory: ClientFactoryRecorder = makeClientFactoryRecorder(client);
		const loginRecorder: LoginRecorder = makeLoginRecorder('access-unavailable');
		const recorder: ConsoleRecorder = captureConsole();
		let caught: unknown = null;
		try {
			await main({ loginImpl: loginRecorder.loginImpl, createClient: factory.createClient });
		} catch (error: unknown) {
			caught = error;
		} finally {
			mock.restoreAll();
		}

		assert.equal(caught, serviceError);
		assert.deepEqual(recorder.errorLines, [
			'[listAgents] Agents.ListAgents RPC failed: code=UNAVAILABLE details="server is down"'
		]);
		// The `finally` block must stop the background refresh loop even on the failure path.
		assert.equal(loginRecorder.stopCount(), 1);
		// The run aborted before the summary line.
		assert.ok(!recorder.logLines.includes('DONE: listAgents example'));
	});
});

/**
 * Asserts a failure that is NOT a gRPC status error is re-thrown as-is with no bogus status report:
 * neither a plain {@link Error} nor a Node-style error whose `code` is a STRING may be mistaken for a
 * {@link grpc.ServiceError} (which would print `code=undefined details=undefined`). The token provider
 * is stopped in both cases.
 */
runTestCase(
	'main re-throws a non-gRPC failure without reporting a gRPC status, and still stops the provider',
	async () => {
		const failures: Error[] = [
			new Error('plain failure'),
			Object.assign(new Error('socket hang up'), { code: 'ECONNRESET' })
		];
		for (const failure of failures) {
			await withEnv(MAIN_ENV, async (): Promise<void> => {
				const factory: ClientFactoryRecorder = makeClientFactoryRecorder(makeThrowingClient(failure));
				const loginRecorder: LoginRecorder = makeLoginRecorder('access-broken');
				const recorder: ConsoleRecorder = captureConsole();
				let caught: unknown = null;
				try {
					await main({ loginImpl: loginRecorder.loginImpl, createClient: factory.createClient });
				} catch (error: unknown) {
					caught = error;
				} finally {
					mock.restoreAll();
				}

				assert.equal(caught, failure, failure.message);
				assert.deepEqual(recorder.errorLines, [], failure.message);
				assert.equal(loginRecorder.stopCount(), 1, failure.message);
			});
		}
	}
);

/**
 * Asserts {@link main} validates its configuration before doing any work: called with NO overrides
 * (so the real login and the real client factory are selected) and an empty environment, it rejects
 * with the {@link requireEnv} error for the first missing variable, having printed only its banner --
 * i.e. no Keycloak call and no gRPC dial were attempted.
 */
runTestCase('main propagates the requireEnv error for a missing variable before contacting anything', async () => {
	await withEnv({}, async (): Promise<void> => {
		const recorder: ConsoleRecorder = captureConsole();
		try {
			await assert.rejects(() => main(), {
				message: 'Missing required environment variable ONDEWO_HOST (set it in examples/environment.env).'
			});
			assert.deepEqual(recorder.logLines, ['START: listAgents example']);
			assert.deepEqual(recorder.errorLines, []);
		} finally {
			mock.restoreAll();
		}
	});
});
