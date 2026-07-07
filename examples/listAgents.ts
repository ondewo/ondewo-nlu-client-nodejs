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
 * Minimal, idiomatic example: authenticate with the Keycloak offline-token flow and call the NLU
 * `Agents.ListAgents` unary RPC.
 *
 * Auth follows the current (post-Keycloak-migration) bearer convention: obtain a live access token
 * from {@link login} and pass it as an `Authorization: Bearer <token>` gRPC metadata header. The
 * legacy `cai-token` / HTTP-basic / `users.login()` credentials no longer exist.
 *
 * Connection + credentials are read from `examples/environment.env` (loaded via dotenv), using the
 * canonical `ONDEWO_HOST` / `ONDEWO_PORT` / `KEYCLOAK_*` variable names shared across all examples.
 *
 * The RPC call itself is factored into {@link fetchAgents}, which takes an injected client and the
 * bearer header, so it can be unit-tested against a mocked gRPC stub with NO live server (see
 * `listAgents.spec.ts`). {@link main} wires the real {@link AgentsClient} + {@link login} together.
 *
 * @packageDocumentation
 */

import * as fs from 'fs';
import * as path from 'path';

import * as dotenv from 'dotenv';
import * as grpc from '@grpc/grpc-js';

import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_pb';
import { Agent, AgentWithOwner, ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';

// Load the examples configuration next to this script so the example runs regardless of cwd.
dotenv.config({ path: path.join(__dirname, 'environment.env') });

/**
 * Structural subset of {@link AgentsClient} used by {@link fetchAgents}: just the unary `listAgents`
 * call. Declaring the seam as an interface lets a unit test inject a mocked gRPC client (no live
 * server) while the real generated client satisfies it unchanged.
 */
export interface AgentsListClient {
	/**
	 * Unary `Agents.ListAgents` call.
	 *
	 * @param request - The list request (carries the `page_token` page-size sentinel).
	 * @param metadata - Per-call gRPC metadata; carries the `Authorization: Bearer <token>` header.
	 * @param handler - Node-style callback invoked with either a {@link grpc.ServiceError} or the response.
	 * @returns The in-flight unary call handle.
	 */
	listAgents(
		request: ListAgentsRequest,
		metadata: grpc.Metadata,
		handler: (error: grpc.ServiceError | null, response: ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
}

/**
 * Build a {@link ListAgentsRequest} that asks for up to `pageSize` agents in a single page.
 *
 * The NLU list endpoints default to only 10 records per page; the `"page_size-<N>"` page-token
 * sentinel raises that cap so a single call returns everything the caller expects.
 *
 * @param pageSize - Maximum number of agents to return in one page.
 * @returns The populated {@link ListAgentsRequest}.
 */
export function buildListAgentsRequest(pageSize: number): ListAgentsRequest {
	const request: ListAgentsRequest = new ListAgentsRequest();
	request.setPageToken(`page_size-${pageSize}`);
	return request;
}

/**
 * Call `Agents.ListAgents`, wrapping the callback-style gRPC stub in a promise and attaching the
 * bearer token as `Authorization` metadata.
 *
 * @param client - The gRPC client (the real {@link AgentsClient} or a test mock).
 * @param authorizationHeader - The `Bearer <access_token>` value from {@link OfflineTokenProvider.getAuthorizationHeader}.
 * @param pageSize - Maximum number of agents to request in one page.
 * @returns A promise resolving to the {@link ListAgentsResponse}, or rejecting with the gRPC error.
 */
export function fetchAgents(
	client: AgentsListClient,
	authorizationHeader: string,
	pageSize: number
): Promise<ListAgentsResponse> {
	const request: ListAgentsRequest = buildListAgentsRequest(pageSize);
	const metadata: grpc.Metadata = new grpc.Metadata();
	metadata.add('Authorization', authorizationHeader);
	return new Promise<ListAgentsResponse>(
		(resolve: (response: ListAgentsResponse) => void, reject: (reason: grpc.ServiceError) => void): void => {
			client.listAgents(request, metadata, (error: grpc.ServiceError | null, response: ListAgentsResponse): void => {
				if (error !== null) {
					reject(error);
					return;
				}
				resolve(response);
			});
		}
	);
}

/**
 * Read a required environment variable, throwing a descriptive error if it is missing or blank.
 *
 * @param name - The canonical environment variable name (see `examples/environment.env`).
 * @returns The trimmed, non-empty value.
 */
function requireEnv(name: string): string {
	const value: string | undefined = process.env[name];
	if (value === undefined || value.trim() === '') {
		throw new Error(`Missing required environment variable ${name} (set it in examples/environment.env).`);
	}
	return value;
}

/**
 * Build the gRPC channel credentials from the canonical secure-channel env vars.
 *
 * `ONDEWO_USE_SECURE_CHANNEL=true` selects a TLS channel; the optional `ONDEWO_GRPC_CERT` points at a
 * PEM root certificate (falling back to the system trust store when blank). Anything else yields a
 * plaintext channel, which is the right default for a local server.
 *
 * @returns The {@link grpc.ChannelCredentials} to hand to {@link AgentsClient}.
 */
function buildChannelCredentials(): grpc.ChannelCredentials {
	const useSecureChannel: boolean = (process.env.ONDEWO_USE_SECURE_CHANNEL ?? 'false').toLowerCase() === 'true';
	if (!useSecureChannel) {
		console.log('[listAgents] Using an INSECURE (plaintext) gRPC channel.');
		return grpc.credentials.createInsecure();
	}
	const certPath: string | undefined = process.env.ONDEWO_GRPC_CERT;
	if (certPath !== undefined && certPath.trim() !== '') {
		console.log(`[listAgents] Using a SECURE gRPC channel with root cert from ${certPath}.`);
		return grpc.credentials.createSsl(fs.readFileSync(certPath));
	}
	console.log('[listAgents] Using a SECURE gRPC channel with the system trust store.');
	return grpc.credentials.createSsl();
}

/**
 * End-to-end example: log in via the offline-token flow, construct the real {@link AgentsClient},
 * list the agents, and print their display names. Connection + credentials are read from
 * `examples/environment.env` (via dotenv) so the file stays runnable without edits.
 *
 * @returns A promise that resolves once the agents have been listed and printed.
 */
async function main(): Promise<void> {
	console.log('START: listAgents example');

	const host: string = requireEnv('ONDEWO_HOST');
	const port: string = requireEnv('ONDEWO_PORT');
	const pageSize: number = Number(process.env.ONDEWO_NLU_PAGE_SIZE ?? '10000');
	const verifySsl: boolean = (process.env.KEYCLOAK_VERIFY_SSL ?? 'true').toLowerCase() !== 'false';

	// One-time ROPC + offline_access login against the PUBLIC SDK client; the returned provider keeps
	// the short-lived access token fresh in the background until `stop()` is called.
	console.log(
		`[listAgents] Logging in to Keycloak realm "${requireEnv('KEYCLOAK_REALM')}" at ${requireEnv('KEYCLOAK_URL')} ...`
	);
	const tokenProvider: OfflineTokenProvider = await login({
		keycloakUrl: requireEnv('KEYCLOAK_URL'),
		realm: requireEnv('KEYCLOAK_REALM'),
		clientId: requireEnv('KEYCLOAK_CLIENT_ID'),
		username: requireEnv('KEYCLOAK_USER_NAME'),
		password: requireEnv('KEYCLOAK_PASSWORD'),
		keycloakVerifySsl: verifySsl
	});
	console.log('[listAgents] Keycloak login succeeded; access token acquired.');

	const client: AgentsClient = new AgentsClient(`${host}:${port}`, buildChannelCredentials());
	try {
		console.log(`[listAgents] Calling Agents.ListAgents on ${host}:${port} (pageSize=${pageSize}) ...`);
		const response: ListAgentsResponse = await fetchAgents(client, tokenProvider.getAuthorizationHeader(), pageSize);
		const agentsWithOwners: AgentWithOwner[] = response.getAgentsWithOwnersList();
		console.log(`[listAgents] Found ${agentsWithOwners.length} agent(s):`);
		for (const agentWithOwner of agentsWithOwners) {
			const agent: Agent | undefined = agentWithOwner.getAgent();
			let displayName: string = '<unknown>';
			if (agent !== undefined) {
				displayName = agent.getDisplayName();
			}
			console.log(`  - ${displayName}`);
		}
	} catch (error: unknown) {
		// Surface gRPC-specific failure details (status code + server message) where available.
		const serviceError: grpc.ServiceError | null =
			error !== null && typeof error === 'object' && 'code' in error ? (error as grpc.ServiceError) : null;
		if (serviceError !== null) {
			console.error(
				`[listAgents] Agents.ListAgents RPC failed: code=${grpc.status[serviceError.code]} details="${serviceError.details}"`
			);
		}
		throw error;
	} finally {
		tokenProvider.stop();
	}
	console.log('DONE: listAgents example');
}

// Run only when executed directly (`node listAgents.js`), not when imported by the unit test.
if (require.main === module) {
	main().catch((error: unknown): void => {
		console.error(
			`[listAgents] Example failed: ${error instanceof Error ? (error.stack ?? error.message) : String(error)}`
		);
		process.exit(1);
	});
}
