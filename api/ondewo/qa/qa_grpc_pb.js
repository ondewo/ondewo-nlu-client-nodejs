// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020 ONDEWO GmbH
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
var ondewo_qa_qa_pb = require('../../ondewo/qa/qa_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_GetAnswerRequest(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.GetAnswerRequest)) {
    throw new Error('Expected argument of type ondewo.qa.GetAnswerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_GetAnswerRequest(buffer_arg) {
  return ondewo_qa_qa_pb.GetAnswerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_GetAnswerResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.GetAnswerResponse)) {
    throw new Error('Expected argument of type ondewo.qa.GetAnswerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_GetAnswerResponse(buffer_arg) {
  return ondewo_qa_qa_pb.GetAnswerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_RunScraperResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.RunScraperResponse)) {
    throw new Error('Expected argument of type ondewo.qa.RunScraperResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_RunScraperResponse(buffer_arg) {
  return ondewo_qa_qa_pb.RunScraperResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_RunTrainingResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.RunTrainingResponse)) {
    throw new Error('Expected argument of type ondewo.qa.RunTrainingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_RunTrainingResponse(buffer_arg) {
  return ondewo_qa_qa_pb.RunTrainingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ///// Services ///////
//
var QAService = exports.QAService = {
  getAnswer: {
    path: '/ondewo.qa.QA/GetAnswer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_qa_qa_pb.GetAnswerRequest,
    responseType: ondewo_qa_qa_pb.GetAnswerResponse,
    requestSerialize: serialize_ondewo_qa_GetAnswerRequest,
    requestDeserialize: deserialize_ondewo_qa_GetAnswerRequest,
    responseSerialize: serialize_ondewo_qa_GetAnswerResponse,
    responseDeserialize: deserialize_ondewo_qa_GetAnswerResponse,
  },
  runScraper: {
    path: '/ondewo.qa.QA/RunScraper',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ondewo_qa_qa_pb.RunScraperResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ondewo_qa_RunScraperResponse,
    responseDeserialize: deserialize_ondewo_qa_RunScraperResponse,
  },
  runTraining: {
    path: '/ondewo.qa.QA/RunTraining',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ondewo_qa_qa_pb.RunTrainingResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ondewo_qa_RunTrainingResponse,
    responseDeserialize: deserialize_ondewo_qa_RunTrainingResponse,
  },
};

exports.QAClient = grpc.makeGenericClientConstructor(QAService);
