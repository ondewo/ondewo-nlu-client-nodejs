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
 * The RPC call itself is factored into {@link fetchAgents}, which takes an injected client and the
 * bearer header, so it can be unit-tested against a mocked gRPC stub with NO live server (see
 * `listAgents.spec.ts`). {@link main} wires the real {@link AgentsClient} + {@link login} together.
 *
 * @packageDocumentation
 */

import * as grpc from '@grpc/grpc-js';

import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_pb';
import { Agent, AgentWithOwner, ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';

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
 * End-to-end example: log in via the offline-token flow, construct the real {@link AgentsClient},
 * list the agents, and print their display names. Connection + credentials are read from the
 * environment so the file stays runnable without edits.
 *
 * @returns A promise that resolves once the agents have been listed and printed.
 */
async function main(): Promise<void> {
	const host: string = process.env.ONDEWO_NLU_HOST ?? 'localhost';
	const port: string = process.env.ONDEWO_NLU_PORT ?? '50055';

	// One-time ROPC + offline_access login against the PUBLIC SDK client; the returned provider keeps
	// the short-lived access token fresh in the background until `stop()` is called.
	const tokenProvider: OfflineTokenProvider = await login({
		keycloakUrl: process.env.ONDEWO_NLU_KEYCLOAK_URL ?? 'https://auth.example.com/auth',
		realm: process.env.ONDEWO_NLU_KEYCLOAK_REALM ?? 'ondewo-ccai-platform',
		clientId: process.env.ONDEWO_NLU_KEYCLOAK_CLIENT_ID ?? 'ondewo-nlu-cai-sdk-public',
		username: process.env.ONDEWO_NLU_USER_NAME ?? '',
		password: process.env.ONDEWO_NLU_PASSWORD ?? ''
	});

	// Plaintext channel for a local server; use `grpc.credentials.createSsl(...)` against TLS deployments.
	const client: AgentsClient = new AgentsClient(`${host}:${port}`, grpc.credentials.createInsecure());
	try {
		const response: ListAgentsResponse = await fetchAgents(client, tokenProvider.getAuthorizationHeader(), 10000);
		const agentsWithOwners: AgentWithOwner[] = response.getAgentsWithOwnersList();
		process.stdout.write(`Found ${agentsWithOwners.length} agent(s):\n`);
		for (const agentWithOwner of agentsWithOwners) {
			const agent: Agent | undefined = agentWithOwner.getAgent();
			let displayName: string = '<unknown>';
			if (agent !== undefined) {
				displayName = agent.getDisplayName();
			}
			process.stdout.write(`  - ${displayName}\n`);
		}
	} finally {
		tokenProvider.stop();
	}
}

// Run only when executed directly (`node listAgents.js`), not when imported by the unit test.
if (require.main === module) {
	main().catch((error: unknown): void => {
		process.stderr.write(`${String(error)}\n`);
		process.exitCode = 1;
	});
}
