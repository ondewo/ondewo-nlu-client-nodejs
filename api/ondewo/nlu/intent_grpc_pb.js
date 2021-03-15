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
// Modifications Copyright 2021 ONDEWO GmbH
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
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var google_longrunning_operations_pb = require('../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteIntentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_intent_pb.BatchDeleteIntentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.BatchDeleteIntentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteIntentsRequest(buffer_arg) {
  return ondewo_nlu_intent_pb.BatchDeleteIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchUpdateIntentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_intent_pb.BatchUpdateIntentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.BatchUpdateIntentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchUpdateIntentsRequest(buffer_arg) {
  return ondewo_nlu_intent_pb.BatchUpdateIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateIntentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_intent_pb.CreateIntentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateIntentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateIntentRequest(buffer_arg) {
  return ondewo_nlu_intent_pb.CreateIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteIntentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_intent_pb.DeleteIntentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteIntentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteIntentRequest(buffer_arg) {
  return ondewo_nlu_intent_pb.DeleteIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetIntentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_intent_pb.GetIntentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetIntentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetIntentRequest(buffer_arg) {
  return ondewo_nlu_intent_pb.GetIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Intent(arg) {
  if (!(arg instanceof ondewo_nlu_intent_pb.Intent)) {
    throw new Error('Expected argument of type ondewo.nlu.Intent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Intent(buffer_arg) {
  return ondewo_nlu_intent_pb.Intent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListIntentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_intent_pb.ListIntentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListIntentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListIntentsRequest(buffer_arg) {
  return ondewo_nlu_intent_pb.ListIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListIntentsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_intent_pb.ListIntentsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListIntentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListIntentsResponse(buffer_arg) {
  return ondewo_nlu_intent_pb.ListIntentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateIntentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_intent_pb.UpdateIntentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateIntentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateIntentRequest(buffer_arg) {
  return ondewo_nlu_intent_pb.UpdateIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// An intent represents a mapping between input from a user and an action to
// be taken by your application. When you pass user input to the
// [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
// [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) method, the
// Dialogflow API analyzes the input and searches
// for a matching intent. If no match is found, the Dialogflow API returns a
// fallback intent (`is_fallback` = true).
//
// You can provide additional information for the Dialogflow API to use to
// match user input to an intent by adding the following to your intent.
//
// *   **Contexts** - provide additional context for intent analysis. For
//     example, if an intent is related to an object in your application that
//     plays music, you can provide a context to determine when to match the
//     intent if the user input is “turn it off”.  You can include a context
//     that matches the intent when there is previous user input of
//     "play music", and not when there is previous user input of
//     "turn on the light".
//
// *   **Events** - allow for matching an intent by using an event name
//     instead of user input. Your application can provide an event name and
//     related parameters to the Dialogflow API to match an intent. For
//     example, when your application starts, you can send a welcome event
//     with a user name parameter to the Dialogflow API to match an intent with
//     a personalized welcome message for the user.
//
// *   **Training phrases** - provide examples of user input to train the
//     Dialogflow API agent to better match intents.
//
// For more information about intents, see the
// [Dialogflow documentation](https://dialogflow.com/docs/intents).
var IntentsService = exports.IntentsService = {
  // Returns the list of all intents in the specified agent.
listIntents: {
    path: '/ondewo.nlu.Intents/ListIntents',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_intent_pb.ListIntentsRequest,
    responseType: ondewo_nlu_intent_pb.ListIntentsResponse,
    requestSerialize: serialize_ondewo_nlu_ListIntentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListIntentsRequest,
    responseSerialize: serialize_ondewo_nlu_ListIntentsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListIntentsResponse,
  },
  // Retrieves the specified intent.
getIntent: {
    path: '/ondewo.nlu.Intents/GetIntent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_intent_pb.GetIntentRequest,
    responseType: ondewo_nlu_intent_pb.Intent,
    requestSerialize: serialize_ondewo_nlu_GetIntentRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetIntentRequest,
    responseSerialize: serialize_ondewo_nlu_Intent,
    responseDeserialize: deserialize_ondewo_nlu_Intent,
  },
  // Creates an intent in the specified agent.
createIntent: {
    path: '/ondewo.nlu.Intents/CreateIntent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_intent_pb.CreateIntentRequest,
    responseType: ondewo_nlu_intent_pb.Intent,
    requestSerialize: serialize_ondewo_nlu_CreateIntentRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateIntentRequest,
    responseSerialize: serialize_ondewo_nlu_Intent,
    responseDeserialize: deserialize_ondewo_nlu_Intent,
  },
  // Updates the specified intent.
updateIntent: {
    path: '/ondewo.nlu.Intents/UpdateIntent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_intent_pb.UpdateIntentRequest,
    responseType: ondewo_nlu_intent_pb.Intent,
    requestSerialize: serialize_ondewo_nlu_UpdateIntentRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateIntentRequest,
    responseSerialize: serialize_ondewo_nlu_Intent,
    responseDeserialize: deserialize_ondewo_nlu_Intent,
  },
  // Deletes the specified intent.
deleteIntent: {
    path: '/ondewo.nlu.Intents/DeleteIntent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_intent_pb.DeleteIntentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteIntentRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteIntentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Updates/Creates multiple intents in the specified agent.
//
// Operation <response: [BatchUpdateIntentsResponse][google.cloud.dialogflow.v2.BatchUpdateIntentsResponse]>
batchUpdateIntents: {
    path: '/ondewo.nlu.Intents/BatchUpdateIntents',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_BatchUpdateIntentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_BatchUpdateIntentsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes intents in the specified agent.
//
// Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
batchDeleteIntents: {
    path: '/ondewo.nlu.Intents/BatchDeleteIntents',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_BatchDeleteIntentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_BatchDeleteIntentsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.IntentsClient = grpc.makeGenericClientConstructor(IntentsService);
