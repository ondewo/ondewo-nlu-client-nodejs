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
// File-level comment for <code>ondewo/nlu/rags.proto</code>.
// This file contains a single service <a href="index.html#ondewo.nlu.Rags">Rags</a>. The Rags service provides integration with RAGFlow for Retrieval-Augmented Generation (RAG), including dataset management, document processing, chunk retrieval, conversational AI with chat and agent assistants, and file management. Key message types include <a href="index.html#ondewo.nlu.RagDataset">RagDataset</a>, <a href="index.html#ondewo.nlu.RagChat">RagChat</a>, and <a href="index.html#ondewo.nlu.RagAgent">RagAgent</a>.
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_nlu_rag_pb = require('../../ondewo/nlu/rag_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Struct(arg) {
  if (!(arg instanceof google_protobuf_struct_pb.Struct)) {
    throw new Error('Expected argument of type google.protobuf.Struct');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Struct(buffer_arg) {
  return google_protobuf_struct_pb.Struct.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagAgentSession(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAgentSession)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAgentSession');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAgentSession(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAgentSession.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagAgentbotCompletionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAgentbotCompletionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAgentbotCompletionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAgentbotCompletionRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAgentbotCompletionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAgentbotInputsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAgentbotInputsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAgentbotInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAgentbotInputsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAgentbotInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAgentbotInputsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAgentbotInputsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAgentbotInputsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAgentbotInputsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAgentbotInputsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagChat(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChat)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChat(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChat.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagChatList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatList.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagChatbotCompletionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatbotCompletionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatbotCompletionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatbotCompletionRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatbotCompletionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagChatbotInfoRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatbotInfoRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatbotInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatbotInfoRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatbotInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagChatbotInfoResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagChatbotInfoResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagChatbotInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagChatbotInfoResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagChatbotInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagCreateAgentSessionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateAgentSessionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateAgentSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateAgentSessionRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateAgentSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCreateChatRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateChatRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateChatRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagCreateDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateDatasetRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCreateFileRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateFileRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateFileRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagDeleteChatsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteChatsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteChatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteChatsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteChatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteDatasetsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagDeleteFilesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteFilesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteFilesRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteKnowledgeGraphRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteKnowledgeGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteKnowledgeGraphRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDifyRecordList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDifyRecordList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDifyRecordList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDifyRecordList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDifyRecordList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDifyRetrievalRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDifyRetrievalRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDifyRetrievalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDifyRetrievalRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDifyRetrievalRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagFile(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagFile)) {
    throw new Error('Expected argument of type ondewo.nlu.RagFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagFile(buffer_arg) {
  return ondewo_nlu_rag_pb.RagFile.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagFileList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagFileList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagFileList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagFileList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagFileList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagFileToDocumentList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagFileToDocumentList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagFileToDocumentList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagFileToDocumentList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagFileToDocumentList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagFileToDocumentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagFileToDocumentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagFileToDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagFileToDocumentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagFileToDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetAllParentFoldersRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetAllParentFoldersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetAllParentFoldersRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetAllParentFoldersResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetAllParentFoldersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetAllParentFoldersResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetFileRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetFileRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetFileRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetKnowledgeGraphRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetKnowledgeGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetKnowledgeGraphRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagGetParentFolderRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetParentFolderRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetParentFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetParentFolderRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetParentFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetParentFolderResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetParentFolderResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetParentFolderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetParentFolderResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetParentFolderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetRootFolderRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetRootFolderRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetRootFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetRootFolderRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetRootFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetRootFolderResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetRootFolderResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetRootFolderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetRootFolderResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetRootFolderResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagListChatSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListChatSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListChatSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListChatSessionsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListChatSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListChatsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListChatsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListChatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListChatsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListChatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagListDocumentsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListDocumentsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListDocumentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListDocumentsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListDocumentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListFilesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListFilesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListFilesRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListFilesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListFilesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListFilesResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagMoveFileRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagMoveFileRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagMoveFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagMoveFileRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagMoveFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagOpenAiAgentCompletionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagOpenAiAgentCompletionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagOpenAiAgentCompletionRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagOpenAiChatCompletionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagOpenAiChatCompletionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagOpenAiChatCompletionRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagOpenAiChatCompletionResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagOpenAiChatCompletionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagOpenAiChatCompletionResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagRenameFileRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRenameFileRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRenameFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRenameFileRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRenameFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagSearchbotAskRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagSearchbotAskRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagSearchbotAskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagSearchbotAskRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagSearchbotAskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagSearchbotDetailRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagSearchbotDetailRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagSearchbotDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagSearchbotDetailRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagSearchbotDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagSearchbotDetailResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagSearchbotDetailResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagSearchbotDetailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagSearchbotDetailResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagSearchbotDetailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagSearchbotMindmapRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagSearchbotMindmapRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagSearchbotMindmapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagSearchbotMindmapRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagSearchbotMindmapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagSearchbotRelatedQuestionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagSearchbotRelatedQuestionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagSearchbotRelatedQuestionsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagSearchbotRetrievalRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagSearchbotRetrievalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagSearchbotRetrievalRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagSearchbotRetrievalResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagSearchbotRetrievalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagSearchbotRetrievalResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagUpdateAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateAgentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateChatRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateChatRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateChatRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RagUploadDocumentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUploadDocumentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUploadDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUploadDocumentsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUploadDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUploadFilesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUploadFilesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUploadFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUploadFilesRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUploadFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// TODO change Github link if changes to RAGFlow are merged to upstream
//
// Provides an interface for interacting with the RAGFlow RAG engine.
// Covers all entpoints of the <a href="https://github.com/ondewo/ragflow">RAGFlow</a> HTTP API. For more information on RAGFlow refer to the <a href="https://ragflow.io/docs/dev/">official documentation</a>
var RagsService = exports.RagsService = {
  // ===========================================
// Dataset Management (6 methods)
// REST: /api/v1/datasets
// ===========================================
//
// RAGFlow endpoint: POST /api/v1/datasets
//
// Create a new dataset (knowledge base).<br>
// Uses tenant&apos;s default embedding model if not specified.
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
  // RAGFlow endpoint: PUT /api/v1/datasets/&lt;dataset_id&gt;
//
// Update an existing dataset&apos;s configuration.<br>
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
// If ids is null or empty, deletes all user&apos;s datasets.<br>
// Deletes all associated documents, files, and chunks.
ragDeleteDatasets: {
    path: '/ondewo.nlu.Rags/RagDeleteDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteDatasetsRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDeleteDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteDatasetsRequest,
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
  // RAGFlow endpoint: GET /api/v1/datasets/&lt;dataset_id&gt;/knowledge_graph
//
// Get the knowledge graph for a dataset.<br>
// Returns graph structure with nodes (max 256) and edges (max 128).
ragGetKnowledgeGraph: {
    path: '/ondewo.nlu.Rags/RagGetKnowledgeGraph',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest,
    responseType: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse,
    requestSerialize: serialize_ondewo_nlu_RagGetKnowledgeGraphRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetKnowledgeGraphRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetKnowledgeGraphResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetKnowledgeGraphResponse,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets/&lt;dataset_id&gt;/knowledge_graph
//
// Delete the knowledge graph for a dataset.<br>
// Deletes graph-related chunks but not the dataset itself.
ragDeleteKnowledgeGraph: {
    path: '/ondewo.nlu.Rags/RagDeleteKnowledgeGraph',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagDeleteKnowledgeGraphRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteKnowledgeGraphRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ========================================================================
// Document Management (5 methods)
// REST: /api/v1/datasets/<dataset_id>/documents
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/datasets/&lt;dataset_id&gt;/documents
//
// Upload one or more documents to a dataset.<br>
// Documents start in UNSTART state and must be parsed.
ragUploadDocuments: {
    path: '/ondewo.nlu.Rags/RagUploadDocuments',
    requestStream: true,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUploadDocumentsRequest,
    responseType: ondewo_nlu_rag_pb.RagDocumentList,
    requestSerialize: serialize_ondewo_nlu_RagUploadDocumentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUploadDocumentsRequest,
    responseSerialize: serialize_ondewo_nlu_RagDocumentList,
    responseDeserialize: deserialize_ondewo_nlu_RagDocumentList,
  },
  // RAGFlow endpoint: PUT /api/v1/datasets/&lt;dataset_id&gt;/documents/&lt;document_id&gt;
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
  // RAGFlow endpoint: GET /api/v1/datasets/&lt;dataset_id&gt;/documents/&lt;document_id&gt;
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
  // RAGFlow endpoint: GET /api/v1/datasets/&lt;dataset_id&gt;/documents
//
// List documents in a dataset with pagination and filtering.<br>
// Supports time range filtering and keyword search.
ragListDocuments: {
    path: '/ondewo.nlu.Rags/RagListDocuments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListDocumentsRequest,
    responseType: ondewo_nlu_rag_pb.RagListDocumentsResponse,
    requestSerialize: serialize_ondewo_nlu_RagListDocumentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListDocumentsRequest,
    responseSerialize: serialize_ondewo_nlu_RagListDocumentsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagListDocumentsResponse,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets/&lt;dataset_id&gt;/documents
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
// Chunk Management (7 methods)
// Chunks are text segments extracted from documents for retrieval.
// REST: /api/v1/datasets/&lt;dataset_id&gt;/chunks
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/datasets/&lt;dataset_id&gt;/chunks
//
// Start parsing documents into chunks.<br>
// Cannot parse documents currently being processed (0 &lt; progress &lt; 1).<br>
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
  // RAGFlow endpoint: DELETE /api/v1/datasets/&lt;dataset_id&gt;/chunks
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
  // RAGFlow endpoint: GET /api/v1/datasets/&lt;dataset_id&gt;/documents/&lt;document_id&gt;/chunks
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
  // RAGFlow endpoint: POST /api/v1/datasets/&lt;dataset_id&gt;/documents/&lt;document_id&gt;/chunks
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
  // RAGFlow endpoint: DELETE /api/v1/datasets/&lt;dataset_id&gt;/documents/&lt;document_id&gt;/chunks
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
  // RAGFlow endpoint: PUT /api/v1/datasets/&lt;dataset_id&gt;/documents/&lt;document_id&gt;/chunks/&lt;chunk_id&gt;
//
// Update an existing chunk&apos;s content and metadata.<br>
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
// Chat Management (4 methods)
// Chat assistants are RAG-powered conversational agents.
// REST: /api/v1/chats
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/chats
//
// Create a new chat assistant.<br>
// All datasets must have parsed files (chunk_num &gt; 0).<br>
// All datasets must use the same embedding model.
ragCreateChat: {
    path: '/ondewo.nlu.Rags/RagCreateChat',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateChatRequest,
    responseType: ondewo_nlu_rag_pb.RagChat,
    requestSerialize: serialize_ondewo_nlu_RagCreateChatRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateChatRequest,
    responseSerialize: serialize_ondewo_nlu_RagChat,
    responseDeserialize: deserialize_ondewo_nlu_RagChat,
  },
  // RAGFlow endpoint: PUT /api/v1/chats/&lt;chat_id&gt;
//
// Update an existing chat assistant&apos;s configuration.<br>
// LLM and prompt configs are merged with existing values.
ragUpdateChat: {
    path: '/ondewo.nlu.Rags/RagUpdateChat',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateChatRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagUpdateChatRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateChatRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: DELETE /api/v1/chats
//
// Delete one or more chat assistants (batch operation).<br>
// If ids empty, deletes all user&apos;s chats (soft delete).
ragDeleteChats: {
    path: '/ondewo.nlu.Rags/RagDeleteChats',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteChatsRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDeleteChatsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteChatsRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // RAGFlow endpoint: GET /api/v1/chats
//
// List chat assistants with pagination.<br>
// Returns full dataset objects (not just IDs).
ragListChats: {
    path: '/ondewo.nlu.Rags/RagListChats',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListChatsRequest,
    responseType: ondewo_nlu_rag_pb.RagChatList,
    requestSerialize: serialize_ondewo_nlu_RagListChatsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListChatsRequest,
    responseSerialize: serialize_ondewo_nlu_RagChatList,
    responseDeserialize: deserialize_ondewo_nlu_RagChatList,
  },
  // ========================================================================
// Session Management (7 methods)
// Sessions are conversation instances for chats and agents.
// REST: /api/v1/chats/&lt;chat_id&gt;/sessions,
// /api/v1/agents/&lt;agent_id&gt;/sessions
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/chats/&lt;chat_id&gt;/sessions
//
// Create a new chat session (conversation).<br>
// Session initialized with assistant&apos;s prologue message.
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
  // RAGFlow endpoint: POST /api/v1/agents/&lt;agent_id&gt;/sessions
//
// Create a new agent session.<br>
// Initializes Canvas with agent&apos;s DSL configuration.
ragCreateAgentSession: {
    path: '/ondewo.nlu.Rags/RagCreateAgentSession',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateAgentSessionRequest,
    responseType: ondewo_nlu_rag_pb.RagAgentSession,
    requestSerialize: serialize_ondewo_nlu_RagCreateAgentSessionRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateAgentSessionRequest,
    responseSerialize: serialize_ondewo_nlu_RagAgentSession,
    responseDeserialize: deserialize_ondewo_nlu_RagAgentSession,
  },
  // RAGFlow endpoint: PUT /api/v1/chats/&lt;chat_id&gt;/sessions/&lt;session_id&gt;
//
// Update a chat session&apos;s metadata (name only).<br>
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
  // RAGFlow endpoint: GET /api/v1/chats/&lt;chat_id&gt;/sessions
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
  // RAGFlow endpoint: GET /api/v1/agents/&lt;agent_id&gt;/sessions
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
  // RAGFlow endpoint: DELETE /api/v1/chats/&lt;chat_id&gt;/sessions
//
// Delete one or more chat sessions (batch operation).<br>
// If ids empty, deletes all sessions for the chat (hard delete).
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
  // RAGFlow endpoint: DELETE /api/v1/agents/&lt;agent_id&gt;/sessions
//
// Delete one or more agent sessions (batch operation).<br>
// If ids empty, deletes all sessions for the agent (hard delete).
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
  // ========================================================================
// Completion (4 streaming methods)
// Generate responses using RAG and LLMs.
// All methods support server-side streaming.
// REST: /api/v1/chats/&lt;id&gt;/completions,
// /api/v1/agents/&lt;id&gt;/completions
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/chats/&lt;chat_id&gt;/completions
//
// Generate chat completion with RAG (server streaming).<br>
// Creates new session if session_id not provided.
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
  // RAGFlow endpoint: POST /api/v1/chats_openai/&lt;chat_id&gt;/chat/completions
//
// OpenAI-compatible chat completion endpoint (server streaming).<br>
// Compatible with OpenAI Python client.<br>
// Supports reasoning content in &lt;redacted_reasoning&gt; tags.
ragOpenAiChatCompletion: {
    path: '/ondewo.nlu.Rags/RagOpenAiChatCompletion',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest,
    responseType: ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse,
    requestSerialize: serialize_ondewo_nlu_RagOpenAiChatCompletionRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagOpenAiChatCompletionRequest,
    responseSerialize: serialize_ondewo_nlu_RagOpenAiChatCompletionResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagOpenAiChatCompletionResponse,
  },
  // RAGFlow endpoint: POST /api/v1/agents/&lt;agent_id&gt;/completions
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
  // RAGFlow endpoint: POST /api/v1/agents_openai/&lt;agent_id&gt;/chat/completions
//
// OpenAI-compatible agent completion endpoint (server streaming).<br>
// Uses tiktoken for token counting.
ragOpenAiAgentCompletion: {
    path: '/ondewo.nlu.Rags/RagOpenAiAgentCompletion',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest,
    responseType: ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse,
    requestSerialize: serialize_ondewo_nlu_RagOpenAiAgentCompletionRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagOpenAiAgentCompletionRequest,
    responseSerialize: serialize_ondewo_nlu_RagOpenAiChatCompletionResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagOpenAiChatCompletionResponse,
  },
  // ========================================================================
// Agent Management (4 methods)
// Agents are workflow-based AI assistants with DSL configuration.
// REST: /api/v1/agents
// ========================================================================
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
  // RAGFlow endpoint: PUT /api/v1/agents/&lt;agent_id&gt;
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
  // RAGFlow endpoint: DELETE /api/v1/agents/&lt;agent_id&gt;
//
// Delete an agent (hard delete).<br>
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
// Only returns user&apos;s own agents.
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
  // ========================================================================
// File Management (11 methods)
// Manage files and folders in RAGFlow&apos;s file system.
// Files can be converted to dataset documents.
// REST: /api/v1/file/*
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/file/upload
//
// Upload one or more files via multipart form data.<br>
// Supports nested folder paths in filename.<br>
// Auto-creates intermediate folders.
ragUploadFiles: {
    path: '/ondewo.nlu.Rags/RagUploadFiles',
    requestStream: true,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUploadFilesRequest,
    responseType: ondewo_nlu_rag_pb.RagFileList,
    requestSerialize: serialize_ondewo_nlu_RagUploadFilesRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUploadFilesRequest,
    responseSerialize: serialize_ondewo_nlu_RagFileList,
    responseDeserialize: deserialize_ondewo_nlu_RagFileList,
  },
  // RAGFlow endpoint: POST /api/v1/file/create
//
// Create a new folder.<br>
// Duplicate names in same folder not allowed.
ragCreateFile: {
    path: '/ondewo.nlu.Rags/RagCreateFile',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateFileRequest,
    responseType: ondewo_nlu_rag_pb.RagFile,
    requestSerialize: serialize_ondewo_nlu_RagCreateFileRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateFileRequest,
    responseSerialize: serialize_ondewo_nlu_RagFile,
    responseDeserialize: deserialize_ondewo_nlu_RagFile,
  },
  // RAGFlow endpoint: GET /api/v1/file/list
//
// List files in a folder with pagination.<br>
// Supports keyword search. Auto-initializes knowledgebase docs folder.
ragListFiles: {
    path: '/ondewo.nlu.Rags/RagListFiles',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListFilesRequest,
    responseType: ondewo_nlu_rag_pb.RagListFilesResponse,
    requestSerialize: serialize_ondewo_nlu_RagListFilesRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListFilesRequest,
    responseSerialize: serialize_ondewo_nlu_RagListFilesResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagListFilesResponse,
  },
  // RAGFlow endpoint: GET /api/v1/file/root_folder
//
// Get user&apos;s root folder information.<br>
// Each tenant has a unique root folder.
ragGetRootFolder: {
    path: '/ondewo.nlu.Rags/RagGetRootFolder',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetRootFolderRequest,
    responseType: ondewo_nlu_rag_pb.RagGetRootFolderResponse,
    requestSerialize: serialize_ondewo_nlu_RagGetRootFolderRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetRootFolderRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetRootFolderResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetRootFolderResponse,
  },
  // RAGFlow endpoint: GET /api/v1/file/parent_folder
//
// Get the parent folder of a file.<br>
// Returns 404 if file or parent not found.
ragGetParentFolder: {
    path: '/ondewo.nlu.Rags/RagGetParentFolder',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetParentFolderRequest,
    responseType: ondewo_nlu_rag_pb.RagGetParentFolderResponse,
    requestSerialize: serialize_ondewo_nlu_RagGetParentFolderRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetParentFolderRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetParentFolderResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetParentFolderResponse,
  },
  // RAGFlow endpoint: GET /api/v1/file/all_parent_folder
//
// Get all parent folders (breadcrumb path) of a file.<br>
// Returns array from file itself to root (includes the file, ordered deepest to root).
ragGetAllParentFolders: {
    path: '/ondewo.nlu.Rags/RagGetAllParentFolders',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest,
    responseType: ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse,
    requestSerialize: serialize_ondewo_nlu_RagGetAllParentFoldersRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetAllParentFoldersRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetAllParentFoldersResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetAllParentFoldersResponse,
  },
  // RAGFlow endpoint: POST /api/v1/file/rm
//
// Delete one or more files/folders (hard delete).<br>
// Recursively deletes folder contents. Removes from storage.
ragDeleteFiles: {
    path: '/ondewo.nlu.Rags/RagDeleteFiles',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteFilesRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagDeleteFilesRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteFilesRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: POST /api/v1/file/rename
//
// Rename a file or folder.<br>
// Cannot change file extension. Duplicate names not allowed.
ragRenameFile: {
    path: '/ondewo.nlu.Rags/RagRenameFile',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagRenameFileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagRenameFileRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagRenameFileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: GET /api/v1/file/get/&lt;file_id&gt;
//
// Download a file.<br>
// Retrieves from MinIO/S3 storage.<br>
// First chunk contains metadata, subsequent chunks only contain data.
ragGetFile: {
    path: '/ondewo.nlu.Rags/RagGetFile',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagGetFileRequest,
    responseType: ondewo_nlu_rag_pb.RagFileChunk,
    requestSerialize: serialize_ondewo_nlu_RagGetFileRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetFileRequest,
    responseSerialize: serialize_ondewo_nlu_RagFileChunk,
    responseDeserialize: deserialize_ondewo_nlu_RagFileChunk,
  },
  // RAGFlow endpoint: POST /api/v1/file/mv
//
// Move one or more files to another folder.<br>
// Validates all files and destination exist.
ragMoveFile: {
    path: '/ondewo.nlu.Rags/RagMoveFile',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagMoveFileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RagMoveFileRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagMoveFileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RAGFlow endpoint: POST /api/v1/file/convert
//
// Convert files to documents and add to datasets.<br>
// Handles folders recursively (converts all inner files).<br>
// Links files to multiple datasets if multiple dataset_ids provided.
ragFileToDocument: {
    path: '/ondewo.nlu.Rags/RagFileToDocument',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagFileToDocumentRequest,
    responseType: ondewo_nlu_rag_pb.RagFileToDocumentList,
    requestSerialize: serialize_ondewo_nlu_RagFileToDocumentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagFileToDocumentRequest,
    responseSerialize: serialize_ondewo_nlu_RagFileToDocumentList,
    responseDeserialize: deserialize_ondewo_nlu_RagFileToDocumentList,
  },
  // ========================================================================
// Dify Integration (1 method)
// Integration with Dify platform.
// REST: /api/v1/dify/retrieval
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/dify/retrieval
//
// Retrieve chunks in Dify-compatible format.<br>
// Uses API key authentication (not Bearer token).
ragDifyRetrieval: {
    path: '/ondewo.nlu.Rags/RagDifyRetrieval',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDifyRetrievalRequest,
    responseType: ondewo_nlu_rag_pb.RagDifyRecordList,
    requestSerialize: serialize_ondewo_nlu_RagDifyRetrievalRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDifyRetrievalRequest,
    responseSerialize: serialize_ondewo_nlu_RagDifyRecordList,
    responseDeserialize: deserialize_ondewo_nlu_RagDifyRecordList,
  },
  // ========================================================================
// Bot API (11 methods)
// Use API key authentication (not Bearer token).
// REST: /api/v1/chatbots/*, /api/v1/agentbots/*, /api/v1/searchbots/*
// ========================================================================
//
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
  // RAGFlow endpoint: POST /api/v1/chatbots/&lt;dialog_id&gt;/completions
//
// Chat completion for iframe/embedded chatbot (server streaming).<br>
// Uses API key from APIToken table.
ragChatbotCompletion: {
    path: '/ondewo.nlu.Rags/RagChatbotCompletion',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagChatbotCompletionRequest,
    responseType: ondewo_nlu_rag_pb.RagChatCompletionResponse,
    requestSerialize: serialize_ondewo_nlu_RagChatbotCompletionRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagChatbotCompletionRequest,
    responseSerialize: serialize_ondewo_nlu_RagChatCompletionResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagChatCompletionResponse,
  },
  // RAGFlow endpoint: GET /api/v1/chatbots/&lt;dialog_id&gt;/info
//
// Get chatbot information for embedded UI initialization.<br>
// Returns title, avatar, and prologue.
ragChatbotInfo: {
    path: '/ondewo.nlu.Rags/RagChatbotInfo',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagChatbotInfoRequest,
    responseType: ondewo_nlu_rag_pb.RagChatbotInfoResponse,
    requestSerialize: serialize_ondewo_nlu_RagChatbotInfoRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagChatbotInfoRequest,
    responseSerialize: serialize_ondewo_nlu_RagChatbotInfoResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagChatbotInfoResponse,
  },
  // RAGFlow endpoint: POST /api/v1/agentbots/&lt;agent_id&gt;/completions
//
// Agent completion for iframe/embedded agentbot (server streaming).<br>
// Uses API key authentication.
ragAgentbotCompletion: {
    path: '/ondewo.nlu.Rags/RagAgentbotCompletion',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagAgentbotCompletionRequest,
    responseType: ondewo_nlu_rag_pb.RagAgentCompletionResponse,
    requestSerialize: serialize_ondewo_nlu_RagAgentbotCompletionRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagAgentbotCompletionRequest,
    responseSerialize: serialize_ondewo_nlu_RagAgentCompletionResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagAgentCompletionResponse,
  },
  // RAGFlow endpoint: GET /api/v1/agentbots/&lt;agent_id&gt;/inputs
//
// Get agent input form configuration for embedded UI.<br>
// Returns input schema from &quot;begin&quot; component in DSL.
ragAgentbotInputs: {
    path: '/ondewo.nlu.Rags/RagAgentbotInputs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagAgentbotInputsRequest,
    responseType: ondewo_nlu_rag_pb.RagAgentbotInputsResponse,
    requestSerialize: serialize_ondewo_nlu_RagAgentbotInputsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagAgentbotInputsRequest,
    responseSerialize: serialize_ondewo_nlu_RagAgentbotInputsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagAgentbotInputsResponse,
  },
  // RAGFlow endpoint: POST /api/v1/searchbots/ask
//
// Ask question in searchbot with search app configuration.<br>
// Uses search app config if provided.
ragSearchbotAsk: {
    path: '/ondewo.nlu.Rags/RagSearchbotAsk',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagSearchbotAskRequest,
    responseType: ondewo_nlu_rag_pb.RagAskResponse,
    requestSerialize: serialize_ondewo_nlu_RagSearchbotAskRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagSearchbotAskRequest,
    responseSerialize: serialize_ondewo_nlu_RagAskResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagAskResponse,
  },
  // RAGFlow endpoint: POST /api/v1/searchbots/retrieval_test
//
// Test retrieval with searchbot configuration.<br>
// Supports search app configuration with auto metadata filtering.
ragSearchbotRetrieval: {
    path: '/ondewo.nlu.Rags/RagSearchbotRetrieval',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest,
    responseType: ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse,
    requestSerialize: serialize_ondewo_nlu_RagSearchbotRetrievalRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagSearchbotRetrievalRequest,
    responseSerialize: serialize_ondewo_nlu_RagSearchbotRetrievalResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagSearchbotRetrievalResponse,
  },
  // RAGFlow endpoint: POST /api/v1/searchbots/related_questions
//
// Generate related questions for searchbot.<br>
// Uses search app LLM config if available.
ragSearchbotRelatedQuestions: {
    path: '/ondewo.nlu.Rags/RagSearchbotRelatedQuestions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest,
    responseType: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse,
    requestSerialize: serialize_ondewo_nlu_RagSearchbotRelatedQuestionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagSearchbotRelatedQuestionsRequest,
    responseSerialize: serialize_ondewo_nlu_RagRelatedQuestionsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagRelatedQuestionsResponse,
  },
  // RAGFlow endpoint: GET /api/v1/searchbots/detail
//
// Get search app configuration details.<br>
// Requires user to have access to search app.
ragSearchbotDetail: {
    path: '/ondewo.nlu.Rags/RagSearchbotDetail',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagSearchbotDetailRequest,
    responseType: ondewo_nlu_rag_pb.RagSearchbotDetailResponse,
    requestSerialize: serialize_ondewo_nlu_RagSearchbotDetailRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagSearchbotDetailRequest,
    responseSerialize: serialize_ondewo_nlu_RagSearchbotDetailResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagSearchbotDetailResponse,
  },
  // RAGFlow endpoint: POST /api/v1/searchbots/mindmap
//
// Generate mindmap for a question.<br>
// Uses search app config if provided.
ragSearchbotMindmap: {
    path: '/ondewo.nlu.Rags/RagSearchbotMindmap',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagSearchbotMindmapRequest,
    responseType: google_protobuf_struct_pb.Struct,
    requestSerialize: serialize_ondewo_nlu_RagSearchbotMindmapRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagSearchbotMindmapRequest,
    responseSerialize: serialize_google_protobuf_Struct,
    responseDeserialize: deserialize_google_protobuf_Struct,
  },
};

exports.RagsClient = grpc.makeGenericClientConstructor(RagsService, 'Rags');
