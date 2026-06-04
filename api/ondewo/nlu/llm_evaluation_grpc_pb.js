// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020-2026 ONDEWO GmbH
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
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_nlu_llm_evaluation_pb = require('../../ondewo/nlu/llm_evaluation_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddLlmEvaluationExampleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.AddLlmEvaluationExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddLlmEvaluationExampleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddLlmEvaluationExamplesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.AddLlmEvaluationExamplesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddLlmEvaluationExamplesRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddLlmEvaluationExamplesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.AddLlmEvaluationExamplesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddLlmEvaluationExamplesResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CancelLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CancelLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CancelLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CompareLlmEvaluationExperimentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CompareLlmEvaluationExperimentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CompareLlmEvaluationExperimentsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationDatasetRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationDatasetRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationExampleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationExampleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationFeedbackRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationFeedbackRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationDatasetRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationExampleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationExampleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationDatasetsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationDatasetsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationDatasetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationDatasetsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationExamplesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationExamplesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationExamplesRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationExamplesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationExamplesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationExamplesResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationExperimentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationExperimentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationExperimentsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationExperimentsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationExperimentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationExperimentsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationFeedbackRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationFeedbackRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationFeedbackResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationFeedbackResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationComparison(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationComparison');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationComparison(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationDataset(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationDataset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationDataset(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationExample(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationExample');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationExample(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationExperiment(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationExperiment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationExperiment(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationFeedback(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationFeedback');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationFeedback(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_RunLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RunLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RunLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SubmitLlmEvaluationFeedbackRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.SubmitLlmEvaluationFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SubmitLlmEvaluationFeedbackRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationDatasetRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationExampleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationExampleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// LangSmith-style evaluation surface: datasets, examples, experiments, evaluator
// runs, feedback (LLM-as-judge / human / heuristic / custom code / pairwise) and
// pairwise comparisons.
var LlmEvaluationsService = exports.LlmEvaluationsService = {
  // region datasets
//
// Create a new evaluation dataset.
llmEvaluationCreateDataset: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset,
    requestSerialize: serialize_ondewo_nlu_CreateLlmEvaluationDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationDataset,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationDataset,
  },
  // Get an evaluation dataset by resource name.
llmEvaluationGetDataset: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationDataset,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationDataset,
  },
  // List evaluation datasets in the project, optionally filtered + paginated.
llmEvaluationListDatasets: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationDatasetsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationDatasetsResponse,
  },
  // Update metadata of an existing evaluation dataset (examples managed via Add/Update/Delete RPCs).
llmEvaluationUpdateDataset: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationDataset,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationDataset,
  },
  // Delete an evaluation dataset and all owned examples.
llmEvaluationDeleteDataset: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationDatasetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // endregion datasets
//
// region examples
//
// Add a single example to an existing dataset.
llmEvaluationAddExample: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExample',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample,
    requestSerialize: serialize_ondewo_nlu_AddLlmEvaluationExampleRequest,
    requestDeserialize: deserialize_ondewo_nlu_AddLlmEvaluationExampleRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExample,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExample,
  },
  // Add multiple examples to an existing dataset in one call.
llmEvaluationAddExamples: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExamples',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse,
    requestSerialize: serialize_ondewo_nlu_AddLlmEvaluationExamplesRequest,
    requestDeserialize: deserialize_ondewo_nlu_AddLlmEvaluationExamplesRequest,
    responseSerialize: serialize_ondewo_nlu_AddLlmEvaluationExamplesResponse,
    responseDeserialize: deserialize_ondewo_nlu_AddLlmEvaluationExamplesResponse,
  },
  // Get a single evaluation example by resource name.
llmEvaluationGetExample: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExample',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationExampleRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationExampleRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExample,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExample,
  },
  // List examples in a dataset, optionally filtered + paginated.
llmEvaluationListExamples: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListExamples',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationExamplesRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationExamplesRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationExamplesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationExamplesResponse,
  },
  // Update fields of an existing evaluation example.
llmEvaluationUpdateExample: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExample',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationExampleRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationExampleRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExample,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExample,
  },
  // Delete an evaluation example.
llmEvaluationDeleteExample: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExample',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationExampleRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationExampleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // endregion examples
//
// region experiments
//
// Run a fresh experiment over a dataset. Long-running operation: the returned
// Operation resolves to the completed LlmEvaluationExperiment once all
// evaluators have produced feedback.
llmEvaluationRunExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationRunExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RunLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RunLlmEvaluationExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Retrieve a previously-run experiment by resource name.
llmEvaluationGetExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExperiment,
  },
  // List experiments in a project, optionally filtered + paginated.
llmEvaluationListExperiments: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListExperiments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationExperimentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationExperimentsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationExperimentsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationExperimentsResponse,
  },
  // Update metadata of an experiment (e.g. baseline pointer, display_name).
// Evaluator runs and feedback are immutable; use LlmEvaluationSubmitFeedback /
// LlmEvaluationDeleteFeedback for downstream annotations.
llmEvaluationUpdateExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExperiment,
  },
  // Delete an experiment and all owned evaluator runs + feedbacks.
llmEvaluationDeleteExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationExperimentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Cancel a still-running experiment. No-op if already finished.
llmEvaluationCancelExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCancelExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment,
    requestSerialize: serialize_ondewo_nlu_CancelLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_CancelLlmEvaluationExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExperiment,
  },
  // Compare two-or-more experiments and emit a pairwise comparison report.
llmEvaluationCompareExperiments: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCompareExperiments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison,
    requestSerialize: serialize_ondewo_nlu_CompareLlmEvaluationExperimentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_CompareLlmEvaluationExperimentsRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationComparison,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationComparison,
  },
  // endregion experiments
//
// region feedback
//
// Submit a single feedback record (used by human reviewers / external evaluators).
llmEvaluationSubmitFeedback: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationSubmitFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback,
    requestSerialize: serialize_ondewo_nlu_SubmitLlmEvaluationFeedbackRequest,
    requestDeserialize: deserialize_ondewo_nlu_SubmitLlmEvaluationFeedbackRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationFeedback,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationFeedback,
  },
  // List feedback records, optionally filtered + paginated.
llmEvaluationListFeedback: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationFeedbackRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationFeedbackRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationFeedbackResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationFeedbackResponse,
  },
  // Delete a single feedback record.
llmEvaluationDeleteFeedback: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationFeedbackRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationFeedbackRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.LlmEvaluationsClient = grpc.makeGenericClientConstructor(LlmEvaluationsService, 'LlmEvaluations');
