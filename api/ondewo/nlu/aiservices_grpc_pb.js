// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021 ONDEWO GmbH
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
var ondewo_nlu_aiservices_pb = require('../../ondewo/nlu/aiservices_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');

function serialize_ondewo_nlu_ExtractEntitiesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.ExtractEntitiesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ExtractEntitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ExtractEntitiesRequest(buffer_arg) {
  return ondewo_nlu_aiservices_pb.ExtractEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ExtractEntitiesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.ExtractEntitiesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ExtractEntitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ExtractEntitiesResponse(buffer_arg) {
  return ondewo_nlu_aiservices_pb.ExtractEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GenerateResponsesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GenerateResponsesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GenerateResponsesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GenerateResponsesRequest(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GenerateResponsesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GenerateResponsesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GenerateResponsesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GenerateResponsesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GenerateResponsesResponse(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GenerateResponsesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GenerateUserSaysRequest(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GenerateUserSaysRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GenerateUserSaysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GenerateUserSaysRequest(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GenerateUserSaysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GenerateUserSaysResponse(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GenerateUserSaysResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GenerateUserSaysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GenerateUserSaysResponse(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GenerateUserSaysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAlternativeSentencesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAlternativeSentencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAlternativeSentencesRequest(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAlternativeSentencesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAlternativeSentencesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAlternativeSentencesResponse(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAlternativeTrainingPhrasesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAlternativeTrainingPhrasesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAlternativeTrainingPhrasesRequest(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAlternativeTrainingPhrasesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAlternativeTrainingPhrasesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAlternativeTrainingPhrasesResponse(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSynonymsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GetSynonymsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetSynonymsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSynonymsRequest(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GetSynonymsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSynonymsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_aiservices_pb.GetSynonymsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetSynonymsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSynonymsResponse(buffer_arg) {
  return ondewo_nlu_aiservices_pb.GetSynonymsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Central class defining the ondewo ai services
var AiServicesService = exports.AiServicesService = {
  // Processes a natural language query and returns detected entities
extractEntities: {
    path: '/ondewo.nlu.AiServices/ExtractEntities',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_aiservices_pb.ExtractEntitiesRequest,
    responseType: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse,
    requestSerialize: serialize_ondewo_nlu_ExtractEntitiesRequest,
    requestDeserialize: deserialize_ondewo_nlu_ExtractEntitiesRequest,
    responseSerialize: serialize_ondewo_nlu_ExtractEntitiesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ExtractEntitiesResponse,
  },
  generateUserSays: {
    path: '/ondewo.nlu.AiServices/GenerateUserSays',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_aiservices_pb.GenerateUserSaysRequest,
    responseType: ondewo_nlu_aiservices_pb.GenerateUserSaysResponse,
    requestSerialize: serialize_ondewo_nlu_GenerateUserSaysRequest,
    requestDeserialize: deserialize_ondewo_nlu_GenerateUserSaysRequest,
    responseSerialize: serialize_ondewo_nlu_GenerateUserSaysResponse,
    responseDeserialize: deserialize_ondewo_nlu_GenerateUserSaysResponse,
  },
  generateResponses: {
    path: '/ondewo.nlu.AiServices/GenerateResponses',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_aiservices_pb.GenerateResponsesRequest,
    responseType: ondewo_nlu_aiservices_pb.GenerateResponsesResponse,
    requestSerialize: serialize_ondewo_nlu_GenerateResponsesRequest,
    requestDeserialize: deserialize_ondewo_nlu_GenerateResponsesRequest,
    responseSerialize: serialize_ondewo_nlu_GenerateResponsesResponse,
    responseDeserialize: deserialize_ondewo_nlu_GenerateResponsesResponse,
  },
  getAlternativeSentences: {
    path: '/ondewo.nlu.AiServices/GetAlternativeSentences',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest,
    responseType: ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse,
    requestSerialize: serialize_ondewo_nlu_GetAlternativeSentencesRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetAlternativeSentencesRequest,
    responseSerialize: serialize_ondewo_nlu_GetAlternativeSentencesResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetAlternativeSentencesResponse,
  },
  getAlternativeTrainingPhrases: {
    path: '/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest,
    responseType: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse,
    requestSerialize: serialize_ondewo_nlu_GetAlternativeTrainingPhrasesRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetAlternativeTrainingPhrasesRequest,
    responseSerialize: serialize_ondewo_nlu_GetAlternativeTrainingPhrasesResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetAlternativeTrainingPhrasesResponse,
  },
  getSynonyms: {
    path: '/ondewo.nlu.AiServices/GetSynonyms',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_aiservices_pb.GetSynonymsRequest,
    responseType: ondewo_nlu_aiservices_pb.GetSynonymsResponse,
    requestSerialize: serialize_ondewo_nlu_GetSynonymsRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetSynonymsRequest,
    responseSerialize: serialize_ondewo_nlu_GetSynonymsResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetSynonymsResponse,
  },
};

exports.AiServicesClient = grpc.makeGenericClientConstructor(AiServicesService);