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
 * Unit tests for the `listAgents` example. The gRPC client is MOCKED (a plain object recording the
 * request + metadata) and the Keycloak token endpoint is mocked via the injectable `fetchImpl` --
 * there is NO network access and NO live NLU server.
 *
 * @example
 * ```sh
 * tsc examples/listAgents.ts examples/listAgents.spec.ts --ignoreConfig --module commonjs \
 *   --target es2020 --strict --lib es2020,dom --skipLibCheck --types node \
 *   --typeRoots ./node_modules/@types --outDir .test-build
 * ln -sfn ../api .test-build/api
 * node --test .test-build/examples/listAgents.spec.js
 * ```
 */

import { test as runTestCase } from 'node:test';
import assert from 'node:assert/strict';
import * as grpc from '@grpc/grpc-js';

import { ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import { buildListAgentsRequest, fetchAgents, type AgentsListClient } from './listAgents';
import {
	login,
	OfflineTokenProvider,
	type TokenFetch,
	type TokenFetchInit,
	type TokenFetchResponse
} from '../auth/offlineTokenProvider';

/** The page size the example asks for, shared between the request input and the expected token. */
const PAGE_SIZE: number = 10000;
/** The page-size sentinel token {@link PAGE_SIZE} must serialize into. */
const EXPECTED_PAGE_TOKEN: string = 'page_size-10000';

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
