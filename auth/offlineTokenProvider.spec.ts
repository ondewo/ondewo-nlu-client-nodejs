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
 * Unit tests for the D18 offline-token helper. The token endpoint is mocked via the injectable
 * `fetchImpl` option -- there is NO network access.
 *
 * @example
 * ```sh
 * node --test --experimental-strip-types auth/offlineTokenProvider.spec.ts
 * ```
 */

import { test as runTestCase, mock } from 'node:test';
import assert from 'node:assert/strict';

import {
	login,
	OfflineTokenProvider,
	TokenError,
	type OfflineTokenLoginOptions,
	type TokenFetch,
	type TokenFetchInit,
	type TokenFetchResponse
} from './offlineTokenProvider';

/** Reusable, valid login options shared (via spread) by every test case. */
const BASE_OPTIONS: OfflineTokenLoginOptions = {
	keycloakUrl: 'https://auth.example.com/auth',
	realm: 'ondewo-ccai-platform',
	clientId: 'ondewo-nlu-cai-sdk-public',
	username: 'tech-user@example.com',
	password: 'super-secret'
};

/** The token endpoint URL {@link BASE_OPTIONS} is expected to resolve to. */
const EXPECTED_TOKEN_ENDPOINT: string =
	'https://auth.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token';

/** One scripted response in a {@link makeFetchStub} sequence. */
interface StubResponse {
	/** HTTP status to report; defaults to `200` when omitted. */
	status?: number;
	/** Response body: a string is sent verbatim, anything else is JSON-stringified. */
	body: unknown;
}

/** A single fetch invocation captured by the stub, for post-hoc assertions. */
interface RecordedCall {
	/** The URL the stub was called with. */
	url: string;
	/** The request init (method, headers, body) the stub received. */
	init: TokenFetchInit;
	/** The form-encoded request body parsed into `URLSearchParams` for convenient field assertions. */
	params: URLSearchParams;
}

/** A scripted fetch implementation paired with the list it records calls into. */
interface FetchStub {
	/** The injectable {@link TokenFetch} to pass as `fetchImpl`. */
	fetchImpl: TokenFetch;
	/** The {@link RecordedCall}s captured so far, in call order. */
	calls: RecordedCall[];
}

/**
 * Build a fake fetch that returns a sequence of JSON responses (one per call) and records the
 * requests it received, so assertions can inspect the form-encoded body and the URL.
 *
 * @param responses - The scripted responses, consumed in order (one per fetch call).
 * @returns A {@link FetchStub} exposing the injectable `fetchImpl` and its recorded `calls`.
 * @throws {Error} If the stub is called more times than there are scripted responses.
 */
function makeFetchStub(responses: StubResponse[]): FetchStub {
	const calls: RecordedCall[] = [];
	const fetchImpl: TokenFetch = (url: string, init: TokenFetchInit): Promise<TokenFetchResponse> => {
		calls.push({ url, init, params: new URLSearchParams(init.body) });
		const next: StubResponse | undefined = responses.shift();
		if (next === undefined) {
			throw new Error('fetch stub called more times than expected');
		}
		const status: number = next.status !== undefined ? next.status : 200;
		const bodyText: string = typeof next.body === 'string' ? next.body : JSON.stringify(next.body);
		return Promise.resolve({
			ok: status >= 200 && status < 300,
			status,
			text: (): Promise<string> => Promise.resolve(bodyText)
		});
	};
	return { fetchImpl, calls };
}

/**
 * Yield to the microtask queue so an awaited refresh inside a fired timer can settle.
 *
 * @returns A promise that resolves on the next tick of the event loop.
 */
function flushMicrotasks(): Promise<void> {
	return new Promise((resolve: () => void): void => {
		process.nextTick(resolve);
	});
}

/**
 * Asserts the initial login posts a ROPC + `offline_access` request to the realm token endpoint
 * using the public client and exposes the resulting access token / `Authorization` header (no
 * `client_secret` on the wire — Q1).
 */
runTestCase(
	'login posts ROPC + offline_access to the realm token endpoint with the public client (no secret)',
	async () => {
		const stub: FetchStub = makeFetchStub([
			{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 } }
		]);

		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl });

		assert.equal(stub.calls.length, 1);
		assert.equal(stub.calls[0].url, EXPECTED_TOKEN_ENDPOINT);
		assert.equal(stub.calls[0].init.method, 'POST');
		assert.equal(stub.calls[0].init.headers['Content-Type'], 'application/x-www-form-urlencoded');

		const params: URLSearchParams = stub.calls[0].params;
		assert.equal(params.get('grant_type'), 'password');
		assert.equal(params.get('client_id'), 'ondewo-nlu-cai-sdk-public');
		assert.equal(params.get('username'), 'tech-user@example.com');
		assert.equal(params.get('password'), 'super-secret');
		assert.equal(params.get('scope'), 'offline_access');
		// Q1: PUBLIC client -- there must be NO client_secret on the wire.
		assert.equal(params.get('client_secret'), null);

		assert.equal(provider.getAccessToken(), 'access-1');
		assert.equal(provider.getAuthorizationHeader(), 'Bearer access-1');
		provider.stop();
	}
);

/**
 * Asserts the background loop exchanges the offline `refresh_token` for a fresh access token before
 * the previous one expires, swapping in the new access token / `Authorization` header.
 */
runTestCase('auto-refresh exchanges the offline refresh_token for a fresh access token before expiry', async () => {
	const stub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 31 } },
		{ body: { access_token: 'access-2', refresh_token: 'offline-2', expires_in: 31 } }
	]);

	// expires_in 31 - 30 skew = 1s scheduled delay; drive it deterministically via fake timers.
	mock.timers.enable({ apis: ['setTimeout'] });
	try {
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl });
		assert.equal(provider.getAccessToken(), 'access-1');

		mock.timers.tick(1000);
		await flushMicrotasks();

		assert.equal(stub.calls.length, 2);
		const refreshParams: URLSearchParams = stub.calls[1].params;
		assert.equal(refreshParams.get('grant_type'), 'refresh_token');
		assert.equal(refreshParams.get('refresh_token'), 'offline-1');
		assert.equal(refreshParams.get('client_id'), 'ondewo-nlu-cai-sdk-public');
		assert.equal(refreshParams.get('client_secret'), null);

		assert.equal(provider.getAccessToken(), 'access-2');
		assert.equal(provider.getAuthorizationHeader(), 'Bearer access-2');
		provider.stop();
	} finally {
		mock.timers.reset();
	}
});

/**
 * Asserts the bounded loop performs no further renewal once `tokenExpirationInS` has elapsed: the
 * deadline passes before the armed timer fires, so only the initial login call is observed.
 */
runTestCase('the refresh loop stops after tokenExpirationInS elapses (no further renewal)', async () => {
	const stub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 31 } }
	]);

	let fakeNowInMs: number = 1_000_000;
	const nowInMs: () => number = (): number => fakeNowInMs;

	mock.timers.enable({ apis: ['setTimeout'] });
	try {
		// Bound the loop to 2s; the first refresh is armed at ~1s but the deadline passes before it fires.
		const provider: OfflineTokenProvider = await login({
			...BASE_OPTIONS,
			fetchImpl: stub.fetchImpl,
			nowInMs,
			tokenExpirationInS: 2
		});

		// Advance the wall clock past the deadline before the timer fires.
		fakeNowInMs += 3000;
		mock.timers.tick(1000);
		await flushMicrotasks();

		// Deadline already passed -> refresh must NOT have fired; only the initial login call happened.
		assert.equal(stub.calls.length, 1);
		provider.stop();
	} finally {
		mock.timers.reset();
	}
});

/** Asserts a non-2xx token response rejects {@link login} with a {@link TokenError}. */
runTestCase('login rejects a non-2xx token response with TokenError', async () => {
	const stub: FetchStub = makeFetchStub([{ status: 401, body: { error: 'invalid_grant' } }]);
	await assert.rejects(() => login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl }), TokenError);
});

/**
 * Asserts a 2xx token response without a `refresh_token` (the SDK client lacks `offline_access`)
 * rejects {@link login} with a {@link TokenError}.
 */
runTestCase('login rejects when the token response carries no refresh_token (missing offline_access)', async () => {
	const stub: FetchStub = makeFetchStub([{ body: { access_token: 'access-1', expires_in: 300 } }]);
	await assert.rejects(() => login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl }), TokenError);
});

/** Asserts {@link login} rejects with a {@link TokenError} when a required option is empty. */
runTestCase('login validates required options', async () => {
	const stub: FetchStub = makeFetchStub([]);
	await assert.rejects(() => login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl, clientId: '' }), TokenError);
});

/**
 * Asserts {@link OfflineTokenProvider.getAuthorizationHeader} throws a {@link TokenError} (and
 * {@link OfflineTokenProvider.getAccessToken} returns `null`) before bootstrap has run.
 */
runTestCase('getAuthorizationHeader throws before bootstrap when no token is available', () => {
	const stub: FetchStub = makeFetchStub([]);
	const provider: OfflineTokenProvider = new OfflineTokenProvider({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl });
	assert.throws(() => provider.getAuthorizationHeader(), TokenError);
	assert.equal(provider.getAccessToken(), null);
});

/** Asserts a 2xx token response with a non-JSON body rejects {@link login} with a {@link TokenError}. */
runTestCase('login rejects a 2xx token response whose body is not valid JSON', async () => {
	const stub: FetchStub = makeFetchStub([{ body: '<<<not-json>>>' }]);
	await assert.rejects(() => login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl }), TokenError);
});

/**
 * Asserts a parseable 2xx token response without an `access_token` rejects {@link login} with a
 * {@link TokenError}.
 */
runTestCase('login rejects a parseable token response that carries no access_token', async () => {
	const stub: FetchStub = makeFetchStub([{ body: { refresh_token: 'offline-1', expires_in: 300 } }]);
	await assert.rejects(() => login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl }), TokenError);
});

/** Asserts {@link login} rejects with a {@link TokenError} for a `null` or `undefined` options object. */
runTestCase('login rejects a missing options object', async () => {
	await assert.rejects(() => login(null as unknown as OfflineTokenLoginOptions), TokenError);
	await assert.rejects(() => login(undefined as unknown as OfflineTokenLoginOptions), TokenError);
});

/**
 * Asserts a failed background refresh is reported to the {@link OfflineTokenProvider.onRefreshError}
 * handler (as a {@link TokenError}) while the still-valid stale access token is preserved.
 */
runTestCase('a failed background refresh is surfaced to onRefreshError and keeps the stale token', async () => {
	const stub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 31 } },
		{ status: 500, body: 'boom' }
	]);

	mock.timers.enable({ apis: ['setTimeout'] });
	try {
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl });
		let captured: unknown = null;
		provider.onRefreshError((error: unknown): void => {
			captured = error;
		});

		mock.timers.tick(1000);
		await flushMicrotasks();
		await flushMicrotasks();

		assert.ok(captured instanceof TokenError);
		assert.match(captured.message, /500/);
		// The transient failure must NOT clobber the still-valid access token.
		assert.equal(provider.getAccessToken(), 'access-1');
		provider.stop();
	} finally {
		mock.timers.reset();
	}
});

/**
 * Asserts that, with no {@link OfflineTokenProvider.onRefreshError} handler registered, a failed
 * background refresh is swallowed silently and the stale access token survives.
 */
runTestCase('a failed background refresh without a registered handler is swallowed silently', async () => {
	const stub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 31 } },
		{ status: 503, body: 'down' }
	]);

	mock.timers.enable({ apis: ['setTimeout'] });
	try {
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl });

		mock.timers.tick(1000);
		await flushMicrotasks();
		await flushMicrotasks();

		// No handler -> the rejection is swallowed; the stale token survives and nothing throws.
		assert.equal(provider.getAccessToken(), 'access-1');
		provider.stop();
	} finally {
		mock.timers.reset();
	}
});

/**
 * Asserts the provider keeps reusing the previous offline `refresh_token` across refreshes when
 * Keycloak does not rotate it (i.e. a refresh response carries no new `refresh_token`).
 */
runTestCase('a refresh response without a rotated refresh_token keeps reusing the previous one', async () => {
	const stub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 31 } },
		// First refresh succeeds but Keycloak does NOT rotate the offline token.
		{ body: { access_token: 'access-2', expires_in: 31 } },
		{ body: { access_token: 'access-3', refresh_token: 'offline-3', expires_in: 31 } }
	]);

	mock.timers.enable({ apis: ['setTimeout'] });
	try {
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl });

		mock.timers.tick(1000);
		await flushMicrotasks();
		assert.equal(provider.getAccessToken(), 'access-2');

		mock.timers.tick(1000);
		await flushMicrotasks();
		// The second refresh must still send the original offline-1 token (it was never rotated).
		assert.equal(stub.calls[2].params.get('refresh_token'), 'offline-1');
		assert.equal(provider.getAccessToken(), 'access-3');
		provider.stop();
	} finally {
		mock.timers.reset();
	}
});

/**
 * Asserts a missing or zero `expires_in` clamps the scheduled delay to `MIN_REFRESH_DELAY_IN_S`
 * (1s) rather than spinning a hot loop, and the refresh fires at exactly that minimum.
 */
runTestCase('an absent/zero expires_in falls back to the minimum refresh delay', async () => {
	const stub: FetchStub = makeFetchStub([
		// No expires_in -> the scheduler must clamp to MIN_REFRESH_DELAY_IN_S (1s), not spin a hot loop.
		{ body: { access_token: 'access-1', refresh_token: 'offline-1' } },
		{ body: { access_token: 'access-2', refresh_token: 'offline-2', expires_in: 31 } }
	]);

	mock.timers.enable({ apis: ['setTimeout'] });
	try {
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: stub.fetchImpl });
		assert.equal(provider.getAccessToken(), 'access-1');

		// The refresh must fire exactly at the 1s minimum delay.
		mock.timers.tick(1000);
		await flushMicrotasks();

		assert.equal(stub.calls.length, 2);
		assert.equal(provider.getAccessToken(), 'access-2');
		provider.stop();
	} finally {
		mock.timers.reset();
	}
});

/**
 * Asserts a non-positive `tokenExpirationInS` (here `0`) makes the deadline coincide with bootstrap,
 * so `scheduleRefresh` sees no remaining time, arms no timer, and never refreshes.
 */
runTestCase('a non-positive tokenExpirationInS lapses the loop immediately at schedule time', async () => {
	const stub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 31 } }
	]);

	let fakeNowInMs: number = 5_000_000;
	const nowInMs: () => number = (): number => fakeNowInMs;

	mock.timers.enable({ apis: ['setTimeout'] });
	try {
		// tokenExpirationInS=0 -> deadline == now at bootstrap -> scheduleRefresh sees remaining <= 0 and stops.
		const provider: OfflineTokenProvider = await login({
			...BASE_OPTIONS,
			fetchImpl: stub.fetchImpl,
			nowInMs,
			tokenExpirationInS: 0
		});
		assert.equal(provider.getAccessToken(), 'access-1');

		// No timer was armed; advancing the clock must not trigger a refresh.
		fakeNowInMs += 100_000;
		mock.timers.tick(100_000);
		await flushMicrotasks();

		assert.equal(stub.calls.length, 1);
		provider.stop();
	} finally {
		mock.timers.reset();
	}
});

/**
 * Asserts {@link login} uses `globalThis.fetch` when no `fetchImpl` is injected, exercising the
 * default-branch by temporarily overriding the global fetch (no network access).
 */
runTestCase('login falls back to the global fetch when no fetchImpl is provided', async () => {
	const calls: string[] = [];
	const originalFetch: typeof globalThis.fetch = globalThis.fetch;
	// Override the global fetch so the default-branch (`globalThis.fetch`) is exercised without network.
	globalThis.fetch = ((url: string): Promise<TokenFetchResponse> => {
		calls.push(url);
		return Promise.resolve({
			ok: true,
			status: 200,
			text: (): Promise<string> =>
				Promise.resolve(JSON.stringify({ access_token: 'global-1', refresh_token: 'offline-1', expires_in: 31 }))
		});
	}) as unknown as typeof globalThis.fetch;

	mock.timers.enable({ apis: ['setTimeout'] });
	try {
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS });
		assert.equal(calls.length, 1);
		assert.equal(calls[0], EXPECTED_TOKEN_ENDPOINT);
		assert.equal(provider.getAccessToken(), 'global-1');
		provider.stop();
	} finally {
		globalThis.fetch = originalFetch;
		mock.timers.reset();
	}
});

/**
 * Asserts that by default (flag omitted) the default transport uses the plain global `fetch` with NO
 * dispatcher, so TLS verification stays ON (the secure, unchanged behaviour).
 */
runTestCase('keycloakVerifySsl default: the default transport attaches no dispatcher (TLS verify ON)', async () => {
	const originalFetch: typeof globalThis.fetch = globalThis.fetch;
	let capturedInit: TokenFetchInit | undefined;
	globalThis.fetch = ((_url: string, init: TokenFetchInit): Promise<TokenFetchResponse> => {
		capturedInit = init;
		return Promise.resolve({
			ok: true,
			status: 200,
			text: (): Promise<string> =>
				Promise.resolve(
					JSON.stringify({ access_token: 'access-secure', refresh_token: 'offline-secure', expires_in: 300 })
				)
		});
	}) as unknown as typeof globalThis.fetch;
	try {
		// Omit fetchImpl (-> default transport) and keycloakVerifySsl (-> defaults to verify ON).
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS });
		try {
			assert.ok(capturedInit !== undefined);
			// No undici dispatcher => undici's global dispatcher with TLS verification ON.
			assert.equal(capturedInit.dispatcher, undefined);
			assert.equal(provider.getAccessToken(), 'access-secure');
		} finally {
			provider.stop();
		}
	} finally {
		globalThis.fetch = originalFetch;
	}
});

/**
 * Asserts that with `keycloakVerifySsl: false` the default transport attaches an undici `Agent`
 * dispatcher, disabling TLS verification for the token call.
 */
runTestCase(
	'keycloakVerifySsl false: the default transport attaches an undici Agent dispatcher (TLS verify OFF)',
	async () => {
		const originalFetch: typeof globalThis.fetch = globalThis.fetch;
		let capturedInit: TokenFetchInit | undefined;
		globalThis.fetch = ((_url: string, init: TokenFetchInit): Promise<TokenFetchResponse> => {
			capturedInit = init;
			return Promise.resolve({
				ok: true,
				status: 200,
				text: (): Promise<string> =>
					Promise.resolve(
						JSON.stringify({ access_token: 'access-insecure', refresh_token: 'offline-insecure', expires_in: 300 })
					)
			});
		}) as unknown as typeof globalThis.fetch;
		try {
			const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, keycloakVerifySsl: false });
			try {
				// eslint-disable-next-line @typescript-eslint/no-require-imports
				const undici: { Agent: new (options: unknown) => unknown } = require('undici') as {
					Agent: new (options: unknown) => unknown;
				};
				assert.ok(capturedInit !== undefined);
				// The insecure undici Agent (rejectUnauthorized:false) reached the token POST.
				assert.ok(capturedInit.dispatcher instanceof undici.Agent);
				assert.equal(provider.getAccessToken(), 'access-insecure');
			} finally {
				provider.stop();
			}
		} finally {
			globalThis.fetch = originalFetch;
		}
	}
);

/**
 * Asserts an injected `fetchImpl` is used verbatim, so `keycloakVerifySsl: false` is a no-op (no
 * dispatcher) for custom transports.
 */
runTestCase('keycloakVerifySsl false is ignored when a custom fetchImpl is injected', async () => {
	const stub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 } }
	]);
	const provider: OfflineTokenProvider = await login({
		...BASE_OPTIONS,
		keycloakVerifySsl: false,
		fetchImpl: stub.fetchImpl
	});
	try {
		assert.equal(stub.calls.length, 1);
		// The injected transport receives the request unchanged — the flag never touches it.
		assert.equal(stub.calls[0].init.dispatcher, undefined);
		assert.equal(provider.getAccessToken(), 'access-1');
	} finally {
		provider.stop();
	}
});

/**
 * Asserts that calling {@link OfflineTokenProvider.stop} while a refresh is in flight still applies
 * that refresh's token but suppresses re-arming any further refresh (`scheduleRefresh` sees
 * `stopped`), so no additional fetch occurs even after advancing the clock.
 */
runTestCase('stop() during an in-flight refresh suppresses re-arming the next refresh', async () => {
	const calls: URLSearchParams[] = [];
	// Captures the refresh resolver so the test can complete the in-flight refresh on demand.
	let releaseRefresh: () => void = (): void => {};
	const fetchImpl: TokenFetch = (_url: string, init: TokenFetchInit): Promise<TokenFetchResponse> => {
		calls.push(new URLSearchParams(init.body));
		if (calls.length === 1) {
			return Promise.resolve({
				ok: true,
				status: 200,
				text: (): Promise<string> =>
					Promise.resolve(JSON.stringify({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 31 }))
			});
		}
		// Hold the refresh response open until the test releases it, after calling stop().
		return new Promise((resolve: (value: TokenFetchResponse) => void): void => {
			releaseRefresh = (): void => {
				resolve({
					ok: true,
					status: 200,
					text: (): Promise<string> =>
						Promise.resolve(JSON.stringify({ access_token: 'access-2', refresh_token: 'offline-2', expires_in: 31 }))
				});
			};
		});
	};

	mock.timers.enable({ apis: ['setTimeout'] });
	try {
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl });

		// Fire the timer so refresh() starts and is parked awaiting the (pending) refresh response.
		mock.timers.tick(1000);
		await flushMicrotasks();
		assert.equal(calls.length, 2);

		// Stop while the refresh is in flight, then let it complete.
		provider.stop();
		releaseRefresh();
		await flushMicrotasks();
		await flushMicrotasks();

		// The completed refresh still updated the token, but scheduleRefresh saw `stopped` and armed nothing.
		assert.equal(provider.getAccessToken(), 'access-2');
		mock.timers.tick(100_000);
		await flushMicrotasks();
		assert.equal(calls.length, 2);
	} finally {
		mock.timers.reset();
	}
});
