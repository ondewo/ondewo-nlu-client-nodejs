// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google Inc.
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
// Modifications Copyright 2020-2026 ONDEWO GmbH
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
// File-level comment for <code>ondewo/nlu/rag.proto</code>.
// This file contains a single service <a href="#ondewo.nlu.Rags">Rags</a>. The Rags service provides integration with RAGFlow for Retrieval-Augmented Generation (RAG), including dataset management, document processing, chunk retrieval, conversational AI with chat and agent assistants, and file management. Key message types include <a href="#ondewo.nlu.RagDataset">RagDataset</a>, <a href="#ondewo.nlu.RagChat">RagChat</a>, and <a href="#ondewo.nlu.RagAgent">RagAgent</a>.
// All message fields that are marked as <code>optional</code> are not actually optional but marked as such to enable presence tracking so that it is possible to distinguish between null and default value fields. Without the <code>optional</code> keyword it would for instance not be possible to distinguish between an integer <code>0</code> and <code>null</code>.
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_nlu_rag_pb = require('../../ondewo/nlu/rag_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_operation_metadata_pb = require('../../ondewo/nlu/operation_metadata_pb.js');
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Operation(arg) {
  if (!(arg instanceof ondewo_nlu_operations_pb.Operation)) {
    throw new Error('Expected argument of type ondewo.nlu.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Operation(buffer_arg) {
  return ondewo_nlu_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAddChunkRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAddChunkRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAddChunkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAddChunkRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAddChunkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAddChunkResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAddChunkResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAddChunkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAddChunkResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAddChunkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAddCrawlerResultsToDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAddCrawlerResultsToDatasetsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAgentCompletionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAgentCompletionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAgentCompletionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAgentCompletionRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAgentCompletionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAgentCompletionResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAgentCompletionResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAgentCompletionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAgentCompletionResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAgentCompletionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAgentList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAgentList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAgentList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAgentList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAgentList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAgentSessionList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAgentSessionList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAgentSessionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAgentSessionList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAgentSessionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAskRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAskRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAskRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAskResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAskResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAskResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagChatAssistant(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatAssistant)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatAssistant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatAssistant(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatAssistant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagChatAssistantList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatAssistantList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatAssistantList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatAssistantList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatAssistantList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagChatCompletionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatCompletionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatCompletionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatCompletionRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatCompletionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagChatCompletionResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatCompletionResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatCompletionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatCompletionResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatCompletionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagChatSession(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatSession)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatSession');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatSession(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatSession.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagChatSessionList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatSessionList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatSessionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatSessionList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatSessionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagConstructKnowledgeGraphResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagConstructKnowledgeGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagConstructKnowledgeGraphResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagConstructRaptorResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagConstructRaptorResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagConstructRaptorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagConstructRaptorResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagConstructRaptorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCrawler(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCrawler)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCrawler');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCrawler(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCrawler.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCrawlerResult(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCrawlerResult)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCrawlerResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCrawlerResult(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCrawlerResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCreateAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateAgentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCreateChatAssistantRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateChatAssistantRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateChatAssistantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateChatAssistantRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateChatAssistantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCreateChatSessionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateChatSessionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateChatSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateChatSessionRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateChatSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCreateCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCreateDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateDatasetRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDataset(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDataset)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDataset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDataset(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDataset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDatasetIdRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDatasetIdRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDatasetIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDatasetIdRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDatasetIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDatasetList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDatasetList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDatasetList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDatasetList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDatasetList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteAgentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteAgentSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteAgentSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteAgentSessionsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteChatSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteChatSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteChatSessionsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlerResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlerResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlerResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlerRunsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlerRunsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlerRunsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlerRunsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlerRunsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlerRunsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlersRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlersRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlersRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlersResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlersResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlersResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteDocumentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteDocumentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteDocumentsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDocument(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDocument)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDocument');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDocument(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDocument.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDocumentList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDocumentList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDocumentList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDocumentList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDocumentList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDownloadDocumentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDownloadDocumentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDownloadDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDownloadDocumentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDownloadDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagFileChunk(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagFileChunk)) {
    throw new Error('Expected argument of type ondewo.nlu.RagFileChunk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagFileChunk(buffer_arg) {
  return ondewo_nlu_rag_pb.RagFileChunk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerResultRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerResultRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerResultRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerResultsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerResultsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerResultsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerResultsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerResultsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerRunRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerRunRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerRunRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetKnowledgeGraphResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetKnowledgeGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetKnowledgeGraphResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListAgentSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListAgentSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListAgentSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListAgentSessionsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListAgentSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListAgentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListAgentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListAgentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListAgentsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListAgentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListChatAssistantsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListChatAssistantsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListChatAssistantsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListChatAssistantsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListChatAssistantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListChatSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListChatSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListChatSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListChatSessionsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListChatSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListChunksRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListChunksRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListChunksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListChunksRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListChunksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListChunksResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListChunksResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListChunksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListChunksResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListChunksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListCrawlerRunsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListCrawlerRunsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListCrawlerRunsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListCrawlerRunsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListCrawlerRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListCrawlerRunsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListCrawlerRunsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListCrawlerRunsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListCrawlerRunsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListCrawlerRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListCrawlersRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListCrawlersRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListCrawlersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListCrawlersRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListCrawlersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListCrawlersResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListCrawlersResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListCrawlersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListCrawlersResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListCrawlersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListDatasetsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListDocumentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListDocumentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListDocumentsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagParseDocumentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagParseDocumentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagParseDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagParseDocumentsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagParseDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagPartialSuccess(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagPartialSuccess)) {
    throw new Error('Expected argument of type ondewo.nlu.RagPartialSuccess');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagPartialSuccess(buffer_arg) {
  return ondewo_nlu_rag_pb.RagPartialSuccess.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagRelatedQuestionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRelatedQuestionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRelatedQuestionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRelatedQuestionsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRelatedQuestionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagRelatedQuestionsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRelatedQuestionsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRelatedQuestionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRelatedQuestionsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRelatedQuestionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagRemoveChunksRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRemoveChunksRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRemoveChunksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRemoveChunksRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRemoveChunksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagRemoveCrawlerResultsFromDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRemoveCrawlerResultsFromDatasetsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagRetrievalRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRetrievalRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRetrievalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRetrievalRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRetrievalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagRetrievalResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRetrievalResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRetrievalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRetrievalResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRetrievalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagStartCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagStartCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagStartCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagStartCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagStartCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagStopCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagStopCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagStopCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagStopCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagStopCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagStopCrawlerResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagStopCrawlerResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagStopCrawlerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagStopCrawlerResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagStopCrawlerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagStopParsingRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagStopParsingRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagStopParsingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagStopParsingRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagStopParsingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagTaskStatus(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagTaskStatus)) {
    throw new Error('Expected argument of type ondewo.nlu.RagTaskStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagTaskStatus(buffer_arg) {
  return ondewo_nlu_rag_pb.RagTaskStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateAgentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateChatAssistantRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateChatAssistantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateChatAssistantRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateChatSessionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateChatSessionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateChatSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateChatSessionRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateChatSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateChunkRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateChunkRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateChunkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateChunkRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateChunkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateDatasetRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateDocumentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateDocumentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateDocumentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUploadDocumentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUploadDocumentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUploadDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUploadDocumentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUploadDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// TODO change Github link if changes to RAGFlow are merged to upstream
//
// Provides an interface for interacting with the RAGFlow RAG engine.
// Covers all endpoints of the <a href="https://github.com/ondewo/ragflow">RAGFlow</a> HTTP API. For more information on RAGFlow refer to the <a href="https://ragflow.io/docs/dev/">official documentation</a>
var RagsService = exports.RagsService = {
  // ===========================================
// Dataset Management
// REST: /api/v1/datasets
// ===========================================
//
// RAGFlow endpoint: POST /api/v1/datasets
//
// Create a new dataset (knowledge base).<br>
// Uses tenant's default embedding model if not specified.
ragCreateDataset: {
    path: '/ondewo.nlu.Rags/RagCreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateDatasetRequest,
    responseType: ondewo_nlu_rag_pb.RagDataset,
    requestSerialize: serialize_ondewo_nlu_RagCreateDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_RagDataset,
    responseDeserialize: deserialize_ondewo_nlu_RagDataset,
  },
  // RAGFlow endpoint: PUT /api/v1/datasets/<dataset_id>
//
// Update an existing dataset's configuration.<br>
// Cannot change embedding_model if dataset has chunks.
ragUpdateDataset: {
    path: '/ondewo.nlu.Rags/RagUpdateDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateDatasetRequest,
    responseType: ondewo_nlu_rag_pb.RagDataset,
    requestSerialize: serialize_ondewo_nlu_RagUpdateDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_RagDataset,
    responseDeserialize: deserialize_ondewo_nlu_RagDataset,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets
//
// Delete one or more datasets (batch operation).<br>
// If ids is null or empty, deletes all user's datasets.<br>
// Deletes all associated documents, files, and chunks.
ragDeleteDatasets: {
    path: '/ondewo.nlu.Rags/RagDeleteDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDeleteRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // RAGFlow endpoint: GET /api/v1/datasets
//
// List datasets with pagination and filtering.<br>
// Returns datasets from all tenants the user has access to.
ragListDatasets: {
    path: '/ondewo.nlu.Rags/RagListDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListDatasetsRequest,
    responseType: ondewo_nlu_rag_pb.RagDatasetList,
    requestSerialize: serialize_ondewo_nlu_RagListDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_RagDatasetList,
    responseDeserialize: deserialize_ondewo_nlu_RagDatasetList,
  },
  // ========================================================================
// Document Management
// REST: /api/v1/datasets/<dataset_id>/documents
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/datasets/<dataset_id>/documents
//
// Upload one or more documents to a dataset.<br>
// Documents start in UNSTART state and must be parsed.
ragUploadDocument: {
    path: '/ondewo.nlu.Rags/RagUploadDocument',
    requestStream: true,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUploadDocumentRequest,
    responseType: ondewo_nlu_rag_pb.RagDocument,
    requestSerialize: serialize_ondewo_nlu_RagUploadDocumentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUploadDocumentRequest,
    responseSerialize: serialize_ondewo_nlu_RagDocument,
    responseDeserialize: deserialize_ondewo_nlu_RagDocument,
  },
  // RAGFlow endpoint: PUT /api/v1/datasets/<dataset_id>/documents/<document_id>
//
// Update document metadata and configuration.<br>
// Changing chunk_method resets document to UNSTART and deletes chunks.
ragUpdateDocument: {
    path: '/ondewo.nlu.Rags/RagUpdateDocument',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateDocumentRequest,
    responseType: ondewo_nlu_rag_pb.RagDocument,
    requestSerialize: serialize_ondewo_nlu_RagUpdateDocumentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateDocumentRequest,
    responseSerialize: serialize_ondewo_nlu_RagDocument,
    responseDeserialize: deserialize_ondewo_nlu_RagDocument,
  },
  // RAGFlow endpoint: GET /api/v1/datasets/<dataset_id>/documents/<document_id>
//
// Download the original document file.<br>
// Returns binary file stream from storage.<br>
// First chunk contains metadata, subsequent chunks only contain data.
ragDownloadDocument: {
    path: '/ondewo.nlu.Rags/RagDownloadDocument',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagDownloadDocumentRequest,
    responseType: ondewo_nlu_rag_pb.RagFileChunk,
    requestSerialize: serialize_ondewo_nlu_RagDownloadDocumentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDownloadDocumentRequest,
    responseSerialize: serialize_ondewo_nlu_RagFileChunk,
    responseDeserialize: deserialize_ondewo_nlu_RagFileChunk,
  },
  // RAGFlow endpoint: GET /api/v1/datasets/<dataset_id>/documents
//
// List documents in a dataset with pagination and filtering.<br>
// Supports time range filtering and keyword search.
ragListDocuments: {
    path: '/ondewo.nlu.Rags/RagListDocuments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListDocumentsRequest,
    responseType: ondewo_nlu_rag_pb.RagDocumentList,
    requestSerialize: serialize_ondewo_nlu_RagListDocumentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListDocumentsRequest,
    responseSerialize: serialize_ondewo_nlu_RagDocumentList,
    responseDeserialize: deserialize_ondewo_nlu_RagDocumentList,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets/<dataset_id>/documents
//
// Delete one or more documents from a dataset (batch operation).<br>
// If ids empty, deletes all documents. Removes chunks and storage files.
ragDeleteDocuments: {
    path: '/ondewo.nlu.Rags/RagDeleteDocuments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDeleteDocumentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteDocumentsRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // ========================================================================
// Chunk Management
// REST: /api/v1/datasets/<dataset_id>/chunks, /api/v1/datasets/<dataset_id>/documents/<document_id>/chunks, /api/v1/retrieval
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/retrieval
//
// Retrieve chunks using vector similarity search.<br>
// All datasets must use the same embedding model.<br>
// Supports reranking, metadata filtering, and knowledge graph retrieval.
ragRetrieval: {
    path: '/ondewo.nlu.Rags/RagRetrieval',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagRetrievalRequest,
    responseType: ondewo_nlu_rag_pb.RagRetrievalResponse,
    requestSerialize: serialize_ondewo_nlu_RagRetrievalRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagRetrievalRequest,
    responseSerialize: serialize_ondewo_nlu_RagRetrievalResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagRetrievalResponse,
  },
  // ========================================================================
// Currently unused endpoints
// ========================================================================
//
// -------------------------------------------
// Dataset Management
// REST: /api/v1/datasets
// -------------------------------------------
//
// RAGFlow endpoint: GET /api/v1/datasets/<dataset_id>/knowledge_graph
//
// Get the knowledge graph for a dataset.<br>
// Returns graph structure with nodes (max 256) and edges (max 128).
ragGetKnowledgeGraph: {
    path: '/ondewo.nlu.Rags/RagGetKnowledgeGraph',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    responseType: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse,
    requestSerialize: serialize_ondewo_nlu_RagDatasetIdRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDatasetIdRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetKnowledgeGraphResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetKnowledgeGraphResponse,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets/<dataset_id>/knowledge_graph
//
// Delete the knowledge graph for a dataset.<br>
// Deletes graph-related chunks but not the dataset itself.
ragDeleteKnowledgeGraph: {
    path: '/ondewo.nlu.Rags/RagDeleteKnowledgeGraph',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagDatasetIdRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDatasetIdRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: POST /api/v1/datasets/<dataset_id>/run_graphrag
//
// Construct a knowledge graph for a dataset.<br>
// Uses the dataset's GraphRAG settings.
ragConstructKnowledgeGraph: {
    path: '/ondewo.nlu.Rags/RagConstructKnowledgeGraph',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    responseType: ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse,
    requestSerialize: serialize_ondewo_nlu_RagDatasetIdRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDatasetIdRequest,
    responseSerialize: serialize_ondewo_nlu_RagConstructKnowledgeGraphResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagConstructKnowledgeGraphResponse,
  },
  // RAGFlow endpoint: GET /api/v1/datasets/<dataset_id>/trace_graphrag
//
// Get the knowledge graph construction status of a dataset.
ragKnowledgeGraphStatus: {
    path: '/ondewo.nlu.Rags/RagKnowledgeGraphStatus',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    responseType: ondewo_nlu_rag_pb.RagTaskStatus,
    requestSerialize: serialize_ondewo_nlu_RagDatasetIdRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDatasetIdRequest,
    responseSerialize: serialize_ondewo_nlu_RagTaskStatus,
    responseDeserialize: deserialize_ondewo_nlu_RagTaskStatus,
  },
  // RAGFlow endpoint: POST /api/v1/datasets/<dataset_id>/run_raptor
//
// Construct a RAPTOR for a dataset.<br>
// Uses the dataset's RAPTOR settings.
ragConstructRaptor: {
    path: '/ondewo.nlu.Rags/RagConstructRaptor',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    responseType: ondewo_nlu_rag_pb.RagConstructRaptorResponse,
    requestSerialize: serialize_ondewo_nlu_RagDatasetIdRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDatasetIdRequest,
    responseSerialize: serialize_ondewo_nlu_RagConstructRaptorResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagConstructRaptorResponse,
  },
  // RAGFlow endpoint: GET /api/v1/datasets/<dataset_id>/trace_raptor
//
// Get the RAPTOR construction status of a dataset.
ragRaptorStatus: {
    path: '/ondewo.nlu.Rags/RagRaptorStatus',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    responseType: ondewo_nlu_rag_pb.RagTaskStatus,
    requestSerialize: serialize_ondewo_nlu_RagDatasetIdRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDatasetIdRequest,
    responseSerialize: serialize_ondewo_nlu_RagTaskStatus,
    responseDeserialize: deserialize_ondewo_nlu_RagTaskStatus,
  },
  // ------------------------------------------------------------------------
// Chunk Management
// REST: /api/v1/datasets/<dataset_id>/chunks, /api/v1/datasets/<dataset_id>/documents/<document_id>/chunks, /api/v1/retrieval
// ------------------------------------------------------------------------
//
// RAGFlow endpoint: POST /api/v1/datasets/<dataset_id>/chunks
//
// Start parsing documents into chunks.<br>
// Cannot parse documents currently being processed (0 < progress < 1).<br>
// Queues documents for background processing.
ragParseDocuments: {
    path: '/ondewo.nlu.Rags/RagParseDocuments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagParseDocumentsRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagParseDocumentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagParseDocumentsRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets/<dataset_id>/chunks
//
// Stop parsing documents.<br>
// Can only stop documents with progress between 0 and 1.
ragStopParsing: {
    path: '/ondewo.nlu.Rags/RagStopParsing',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagStopParsingRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagStopParsingRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagStopParsingRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // RAGFlow endpoint: GET /api/v1/datasets/<dataset_id>/documents/<document_id>/chunks
//
// List chunks of a document with pagination.<br>
// Supports keyword search with content highlighting.
ragListChunks: {
    path: '/ondewo.nlu.Rags/RagListChunks',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListChunksRequest,
    responseType: ondewo_nlu_rag_pb.RagListChunksResponse,
    requestSerialize: serialize_ondewo_nlu_RagListChunksRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListChunksRequest,
    responseSerialize: serialize_ondewo_nlu_RagListChunksResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagListChunksResponse,
  },
  // RAGFlow endpoint: POST /api/v1/datasets/<dataset_id>/documents/<document_id>/chunks
//
// Manually add a chunk to a document.<br>
// Automatically tokenizes content and generates embeddings.
ragAddChunk: {
    path: '/ondewo.nlu.Rags/RagAddChunk',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagAddChunkRequest,
    responseType: ondewo_nlu_rag_pb.RagAddChunkResponse,
    requestSerialize: serialize_ondewo_nlu_RagAddChunkRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagAddChunkRequest,
    responseSerialize: serialize_ondewo_nlu_RagAddChunkResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagAddChunkResponse,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets/<dataset_id>/documents/<document_id>/chunks
//
// Remove one or more chunks from a document.<br>
// If chunk_ids empty, removes all chunks from document.
ragRemoveChunks: {
    path: '/ondewo.nlu.Rags/RagRemoveChunks',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagRemoveChunksRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagRemoveChunksRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagRemoveChunksRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // RAGFlow endpoint: PUT /api/v1/datasets/<dataset_id>/documents/<document_id>/chunks/<chunk_id>
//
// Update an existing chunk's content and metadata.<br>
// Re-tokenizes content and re-generates embeddings if content changed.
ragUpdateChunk: {
    path: '/ondewo.nlu.Rags/RagUpdateChunk',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateChunkRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagUpdateChunkRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateChunkRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ------------------------------------------------------------------------
// Chat Assistant Management
// REST: /api/v1/chats
// ------------------------------------------------------------------------
//
// RAGFlow endpoint: POST /api/v1/chats
//
// Create a new chat assistant.<br>
// All datasets must have parsed files (chunk_num > 0).<br>
// All datasets must use the same embedding model.
ragCreateChatAssistant: {
    path: '/ondewo.nlu.Rags/RagCreateChatAssistant',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateChatAssistantRequest,
    responseType: ondewo_nlu_rag_pb.RagChatAssistant,
    requestSerialize: serialize_ondewo_nlu_RagCreateChatAssistantRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateChatAssistantRequest,
    responseSerialize: serialize_ondewo_nlu_RagChatAssistant,
    responseDeserialize: deserialize_ondewo_nlu_RagChatAssistant,
  },
  // RAGFlow endpoint: PUT /api/v1/chats/<chat_id>
//
// Update an existing chat assistant's configuration.<br>
// LLM and prompt configs are merged with existing values.
ragUpdateChatAssistant: {
    path: '/ondewo.nlu.Rags/RagUpdateChatAssistant',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagUpdateChatAssistantRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateChatAssistantRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: DELETE /api/v1/chats
//
// Delete one or more chat assistants (batch operation).<br>
// If ids empty, deletes all user's chats.
ragDeleteChatAssistants: {
    path: '/ondewo.nlu.Rags/RagDeleteChatAssistants',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDeleteRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // RAGFlow endpoint: GET /api/v1/chats
//
// List chat assistants with pagination.<br>
// Returns full dataset objects (not just IDs).
ragListChatAssistants: {
    path: '/ondewo.nlu.Rags/RagListChatAssistants',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListChatAssistantsRequest,
    responseType: ondewo_nlu_rag_pb.RagChatAssistantList,
    requestSerialize: serialize_ondewo_nlu_RagListChatAssistantsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListChatAssistantsRequest,
    responseSerialize: serialize_ondewo_nlu_RagChatAssistantList,
    responseDeserialize: deserialize_ondewo_nlu_RagChatAssistantList,
  },
  // ------------------------------------------------------------------------
// Agent Management
// REST: /api/v1/agents
// ------------------------------------------------------------------------
//
// RAGFlow endpoint: POST /api/v1/agents
//
// Create a new agent with DSL configuration.<br>
// Title must be unique for the user.
ragCreateAgent: {
    path: '/ondewo.nlu.Rags/RagCreateAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateAgentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagCreateAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateAgentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: PUT /api/v1/agents/<agent_id>
//
// Update an existing agent.<br>
// DSL updates create new version snapshot. Only owner can update.
ragUpdateAgent: {
    path: '/ondewo.nlu.Rags/RagUpdateAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateAgentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagUpdateAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateAgentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: DELETE /api/v1/agents/<agent_id>
//
// Delete an agent.<br>
// Only owner can delete.
ragDeleteAgent: {
    path: '/ondewo.nlu.Rags/RagDeleteAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteAgentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagDeleteAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteAgentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: GET /api/v1/agents
//
// List agents with pagination.<br>
// Only returns user's own agents.
ragListAgents: {
    path: '/ondewo.nlu.Rags/RagListAgents',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListAgentsRequest,
    responseType: ondewo_nlu_rag_pb.RagAgentList,
    requestSerialize: serialize_ondewo_nlu_RagListAgentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListAgentsRequest,
    responseSerialize: serialize_ondewo_nlu_RagAgentList,
    responseDeserialize: deserialize_ondewo_nlu_RagAgentList,
  },
  // ------------------------------------------------------------------------
// Session Management
// REST: /api/v1/chats/<chat_id>/sessions, /api/v1/agents/<agent_id>/sessions
// ------------------------------------------------------------------------
//
// RAGFlow endpoint: POST /api/v1/chats/<chat_id>/sessions
//
// Create a new chat session (conversation).<br>
// Session initialized with assistant's prologue message.
ragCreateChatSession: {
    path: '/ondewo.nlu.Rags/RagCreateChatSession',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateChatSessionRequest,
    responseType: ondewo_nlu_rag_pb.RagChatSession,
    requestSerialize: serialize_ondewo_nlu_RagCreateChatSessionRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateChatSessionRequest,
    responseSerialize: serialize_ondewo_nlu_RagChatSession,
    responseDeserialize: deserialize_ondewo_nlu_RagChatSession,
  },
  // RAGFlow endpoint: PUT /api/v1/chats/<chat_id>/sessions/<session_id>
//
// Update a chat session's metadata (name only).<br>
// Cannot update message or reference fields.
ragUpdateChatSession: {
    path: '/ondewo.nlu.Rags/RagUpdateChatSession',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagUpdateChatSessionRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateChatSessionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: GET /api/v1/chats/<chat_id>/sessions
//
// List sessions for a chat assistant.<br>
// Returns message history with embedded chunk references.
ragListChatSessions: {
    path: '/ondewo.nlu.Rags/RagListChatSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListChatSessionsRequest,
    responseType: ondewo_nlu_rag_pb.RagChatSessionList,
    requestSerialize: serialize_ondewo_nlu_RagListChatSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListChatSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_RagChatSessionList,
    responseDeserialize: deserialize_ondewo_nlu_RagChatSessionList,
  },
  // RAGFlow endpoint: DELETE /api/v1/chats/<chat_id>/sessions
//
// Delete one or more chat sessions (batch operation).<br>
// If ids empty, deletes all sessions for the chat.
ragDeleteChatSessions: {
    path: '/ondewo.nlu.Rags/RagDeleteChatSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDeleteChatSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteChatSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // RAGFlow endpoint: GET /api/v1/agents/<agent_id>/sessions
//
// List sessions for an agent.<br>
// Can optionally exclude DSL from response for performance.
ragListAgentSessions: {
    path: '/ondewo.nlu.Rags/RagListAgentSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListAgentSessionsRequest,
    responseType: ondewo_nlu_rag_pb.RagAgentSessionList,
    requestSerialize: serialize_ondewo_nlu_RagListAgentSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListAgentSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_RagAgentSessionList,
    responseDeserialize: deserialize_ondewo_nlu_RagAgentSessionList,
  },
  // RAGFlow endpoint: DELETE /api/v1/agents/<agent_id>/sessions
//
// Delete one or more agent sessions (batch operation).<br>
// If ids empty, deletes all sessions for the agent.
ragDeleteAgentSessions: {
    path: '/ondewo.nlu.Rags/RagDeleteAgentSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDeleteAgentSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteAgentSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // ------------------------------------------------------------------------
// Completion
// REST: /api/v1/chats/<id>/completions, /api/v1/agents/<id>/completions, /api/v1/sessions
// ------------------------------------------------------------------------
//
// RAGFlow endpoint: POST /api/v1/chats/<chat_id>/completions or POST /api/v1/chats_openai/<chat_id>/chat/completions
//
// Generate chat completion with RAG (server streaming).<br>
// This endpoint either
// <ul>
//     <li>creates a new session if no <code>session_id</code> is provided and <code>messages</code> contains only one message</li>
//     <li>uses an existing session if <code>session_id</code> is provided (ignores message history in <code>messages</code>)</li>
//     <li>continues a conversion with the message history from <code>messages</code> without creating a session if no <code>session_id</code> is provided and <code>messages</code> contains multiple messages</li>
// </ul>
// At this point the endpoint is not fully implemented and does not support sessions. This means the full message history must always be passed.
ragChatCompletion: {
    path: '/ondewo.nlu.Rags/RagChatCompletion',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagChatCompletionRequest,
    responseType: ondewo_nlu_rag_pb.RagChatCompletionResponse,
    requestSerialize: serialize_ondewo_nlu_RagChatCompletionRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagChatCompletionRequest,
    responseSerialize: serialize_ondewo_nlu_RagChatCompletionResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagChatCompletionResponse,
  },
  // RAGFlow endpoint: POST /api/v1/agents/<agent_id>/completions
//
// Generate agent completion (server streaming).<br>
// Filters events to only return message-related events.
ragAgentCompletion: {
    path: '/ondewo.nlu.Rags/RagAgentCompletion',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagAgentCompletionRequest,
    responseType: ondewo_nlu_rag_pb.RagAgentCompletionResponse,
    requestSerialize: serialize_ondewo_nlu_RagAgentCompletionRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagAgentCompletionRequest,
    responseSerialize: serialize_ondewo_nlu_RagAgentCompletionResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagAgentCompletionResponse,
  },
  // RAGFlow endpoint: POST /api/v1/sessions/ask
//
// Ask a question across datasets without a chat assistant.<br>
// Streaming only. All datasets must have parsed files.
ragAsk: {
    path: '/ondewo.nlu.Rags/RagAsk',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagAskRequest,
    responseType: ondewo_nlu_rag_pb.RagAskResponse,
    requestSerialize: serialize_ondewo_nlu_RagAskRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagAskRequest,
    responseSerialize: serialize_ondewo_nlu_RagAskResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagAskResponse,
  },
  // RAGFlow endpoint: POST /api/v1/sessions/related_questions
//
// Generate related search terms for a question.<br>
// Returns 5-10 suggestions considering industry context.
ragRelatedQuestions: {
    path: '/ondewo.nlu.Rags/RagRelatedQuestions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest,
    responseType: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse,
    requestSerialize: serialize_ondewo_nlu_RagRelatedQuestionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagRelatedQuestionsRequest,
    responseSerialize: serialize_ondewo_nlu_RagRelatedQuestionsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagRelatedQuestionsResponse,
  },
  // ========================================================================
// Crawler
// ========================================================================
//
// Create a rag crawler for a dataset of an agent.
ragCreateCrawler: {
    path: '/ondewo.nlu.Rags/RagCreateCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagCrawler,
    requestSerialize: serialize_ondewo_nlu_RagCreateCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagCrawler,
    responseDeserialize: deserialize_ondewo_nlu_RagCrawler,
  },
  // Get a rag crawler by resource name.
ragGetCrawler: {
    path: '/ondewo.nlu.Rags/RagGetCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagCrawler,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagCrawler,
    responseDeserialize: deserialize_ondewo_nlu_RagCrawler,
  },
  // List rag crawlers of a dataset for the specified agent.
ragListCrawlers: {
    path: '/ondewo.nlu.Rags/RagListCrawlers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListCrawlersRequest,
    responseType: ondewo_nlu_rag_pb.RagListCrawlersResponse,
    requestSerialize: serialize_ondewo_nlu_RagListCrawlersRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListCrawlersRequest,
    responseSerialize: serialize_ondewo_nlu_RagListCrawlersResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagListCrawlersResponse,
  },
  // Update a rag crawler (partial update of configuration fields).
ragUpdateCrawler: {
    path: '/ondewo.nlu.Rags/RagUpdateCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagCrawler,
    requestSerialize: serialize_ondewo_nlu_RagUpdateCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagCrawler,
    responseDeserialize: deserialize_ondewo_nlu_RagCrawler,
  },
  // Delete a rag crawler of a dataset for the specified agent.
ragDeleteCrawler: {
    path: '/ondewo.nlu.Rags/RagDeleteCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse,
    requestSerialize: serialize_ondewo_nlu_RagDeleteCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagDeleteCrawlerResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlerResponse,
  },
  // Run a crawler.
ragStartCrawler: {
    path: '/ondewo.nlu.Rags/RagStartCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagStartCrawlerRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RagStartCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagStartCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Stop a pending or running crawler run.
ragStopCrawler: {
    path: '/ondewo.nlu.Rags/RagStopCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagStopCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagStopCrawlerResponse,
    requestSerialize: serialize_ondewo_nlu_RagStopCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagStopCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagStopCrawlerResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagStopCrawlerResponse,
  },
  // Get a crawler run by resource name.
ragGetCrawlerRun: {
    path: '/ondewo.nlu.Rags/RagGetCrawlerRun',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerRunRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerRunRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // List crawler runs for a crawler.
ragListCrawlerRuns: {
    path: '/ondewo.nlu.Rags/RagListCrawlerRuns',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest,
    responseType: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse,
    requestSerialize: serialize_ondewo_nlu_RagListCrawlerRunsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListCrawlerRunsRequest,
    responseSerialize: serialize_ondewo_nlu_RagListCrawlerRunsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagListCrawlerRunsResponse,
  },
  // Delete crawler runs by explicit run names and/or crawler names.
ragDeleteCrawlerRuns: {
    path: '/ondewo.nlu.Rags/RagDeleteCrawlerRuns',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest,
    responseType: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse,
    requestSerialize: serialize_ondewo_nlu_RagDeleteCrawlerRunsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlerRunsRequest,
    responseSerialize: serialize_ondewo_nlu_RagDeleteCrawlerRunsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlerRunsResponse,
  },
  // Get a single crawler result by crawler run resource name and URL.
ragGetCrawlerResult: {
    path: '/ondewo.nlu.Rags/RagGetCrawlerResult',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest,
    responseType: ondewo_nlu_rag_pb.RagCrawlerResult,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerResultRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerResultRequest,
    responseSerialize: serialize_ondewo_nlu_RagCrawlerResult,
    responseDeserialize: deserialize_ondewo_nlu_RagCrawlerResult,
  },
  // Get crawler results by crawler run resource name.
ragGetCrawlerResults: {
    path: '/ondewo.nlu.Rags/RagGetCrawlerResults',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest,
    responseType: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerResultsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerResultsRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetCrawlerResultsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetCrawlerResultsResponse,
  },
  // Add rag crawler output to one or more datasets.
ragAddCrawlerResultsToDatasets: {
    path: '/ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RagAddCrawlerResultsToDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagAddCrawlerResultsToDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Remove previously imported crawler output from one or more datasets.
ragRemoveCrawlerResultsFromDatasets: {
    path: '/ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RagRemoveCrawlerResultsFromDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagRemoveCrawlerResultsFromDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Get datasets currently attached to a crawler.
ragGetCrawlerAttachedDatasets: {
    path: '/ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest,
    responseType: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsResponse,
  },
  // Delete multiple crawlers.
ragDeleteCrawlers: {
    path: '/ondewo.nlu.Rags/RagDeleteCrawlers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest,
    responseType: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse,
    requestSerialize: serialize_ondewo_nlu_RagDeleteCrawlersRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlersRequest,
    responseSerialize: serialize_ondewo_nlu_RagDeleteCrawlersResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlersResponse,
  },
};

exports.RagsClient = grpc.makeGenericClientConstructor(RagsService, 'Rags');
