// package: ondewo.nlu
// file: ondewo/nlu/intent.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IIntentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listIntents: IIntentsService_IListIntents;
    getIntent: IIntentsService_IGetIntent;
    createIntent: IIntentsService_ICreateIntent;
    updateIntent: IIntentsService_IUpdateIntent;
    deleteIntent: IIntentsService_IDeleteIntent;
    batchUpdateIntents: IIntentsService_IBatchUpdateIntents;
    batchDeleteIntents: IIntentsService_IBatchDeleteIntents;
    createTrainingPhrase: IIntentsService_ICreateTrainingPhrase;
    getTrainingPhrase: IIntentsService_IGetTrainingPhrase;
    updateTrainingPhrase: IIntentsService_IUpdateTrainingPhrase;
    deleteTrainingPhrase: IIntentsService_IDeleteTrainingPhrase;
}

interface IIntentsService_IListIntents extends grpc.MethodDefinition<ondewo_nlu_intent_pb.ListIntentsRequest, ondewo_nlu_intent_pb.ListIntentsResponse> {
    path: "/ondewo.nlu.Intents/ListIntents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListIntentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListIntentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListIntentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListIntentsResponse>;
}
interface IIntentsService_IGetIntent extends grpc.MethodDefinition<ondewo_nlu_intent_pb.GetIntentRequest, ondewo_nlu_intent_pb.Intent> {
    path: "/ondewo.nlu.Intents/GetIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.GetIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.GetIntentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.Intent>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.Intent>;
}
interface IIntentsService_ICreateIntent extends grpc.MethodDefinition<ondewo_nlu_intent_pb.CreateIntentRequest, ondewo_nlu_intent_pb.Intent> {
    path: "/ondewo.nlu.Intents/CreateIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.CreateIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.CreateIntentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.Intent>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.Intent>;
}
interface IIntentsService_IUpdateIntent extends grpc.MethodDefinition<ondewo_nlu_intent_pb.UpdateIntentRequest, ondewo_nlu_intent_pb.Intent> {
    path: "/ondewo.nlu.Intents/UpdateIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.UpdateIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.UpdateIntentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.Intent>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.Intent>;
}
interface IIntentsService_IDeleteIntent extends grpc.MethodDefinition<ondewo_nlu_intent_pb.DeleteIntentRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Intents/DeleteIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.DeleteIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.DeleteIntentRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IIntentsService_IBatchUpdateIntents extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, google_longrunning_operations_pb.Operation> {
    path: "/ondewo.nlu.Intents/BatchUpdateIntents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchUpdateIntentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchUpdateIntentsRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IIntentsService_IBatchDeleteIntents extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, google_longrunning_operations_pb.Operation> {
    path: "/ondewo.nlu.Intents/BatchDeleteIntents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchDeleteIntentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchDeleteIntentsRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IIntentsService_ICreateTrainingPhrase extends grpc.MethodDefinition<ondewo_nlu_intent_pb.CreateTrainingPhraseRequest, ondewo_nlu_intent_pb.Intent.TrainingPhrase> {
    path: "/ondewo.nlu.Intents/CreateTrainingPhrase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.CreateTrainingPhraseRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.CreateTrainingPhraseRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.Intent.TrainingPhrase>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.Intent.TrainingPhrase>;
}
interface IIntentsService_IGetTrainingPhrase extends grpc.MethodDefinition<ondewo_nlu_intent_pb.GetTrainingPhraseRequest, ondewo_nlu_intent_pb.Intent.TrainingPhrase> {
    path: "/ondewo.nlu.Intents/GetTrainingPhrase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.GetTrainingPhraseRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.GetTrainingPhraseRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.Intent.TrainingPhrase>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.Intent.TrainingPhrase>;
}
interface IIntentsService_IUpdateTrainingPhrase extends grpc.MethodDefinition<ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest, ondewo_nlu_intent_pb.Intent.TrainingPhrase> {
    path: "/ondewo.nlu.Intents/UpdateTrainingPhrase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.Intent.TrainingPhrase>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.Intent.TrainingPhrase>;
}
interface IIntentsService_IDeleteTrainingPhrase extends grpc.MethodDefinition<ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Intents/DeleteTrainingPhrase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const IntentsService: IIntentsService;

export interface IIntentsServer {
    listIntents: grpc.handleUnaryCall<ondewo_nlu_intent_pb.ListIntentsRequest, ondewo_nlu_intent_pb.ListIntentsResponse>;
    getIntent: grpc.handleUnaryCall<ondewo_nlu_intent_pb.GetIntentRequest, ondewo_nlu_intent_pb.Intent>;
    createIntent: grpc.handleUnaryCall<ondewo_nlu_intent_pb.CreateIntentRequest, ondewo_nlu_intent_pb.Intent>;
    updateIntent: grpc.handleUnaryCall<ondewo_nlu_intent_pb.UpdateIntentRequest, ondewo_nlu_intent_pb.Intent>;
    deleteIntent: grpc.handleUnaryCall<ondewo_nlu_intent_pb.DeleteIntentRequest, google_protobuf_empty_pb.Empty>;
    batchUpdateIntents: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, google_longrunning_operations_pb.Operation>;
    batchDeleteIntents: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, google_longrunning_operations_pb.Operation>;
    createTrainingPhrase: grpc.handleUnaryCall<ondewo_nlu_intent_pb.CreateTrainingPhraseRequest, ondewo_nlu_intent_pb.Intent.TrainingPhrase>;
    getTrainingPhrase: grpc.handleUnaryCall<ondewo_nlu_intent_pb.GetTrainingPhraseRequest, ondewo_nlu_intent_pb.Intent.TrainingPhrase>;
    updateTrainingPhrase: grpc.handleUnaryCall<ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest, ondewo_nlu_intent_pb.Intent.TrainingPhrase>;
    deleteTrainingPhrase: grpc.handleUnaryCall<ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest, google_protobuf_empty_pb.Empty>;
}

export interface IIntentsClient {
    listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createTrainingPhrase(request: ondewo_nlu_intent_pb.CreateTrainingPhraseRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    createTrainingPhrase(request: ondewo_nlu_intent_pb.CreateTrainingPhraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    createTrainingPhrase(request: ondewo_nlu_intent_pb.CreateTrainingPhraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    getTrainingPhrase(request: ondewo_nlu_intent_pb.GetTrainingPhraseRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    getTrainingPhrase(request: ondewo_nlu_intent_pb.GetTrainingPhraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    getTrainingPhrase(request: ondewo_nlu_intent_pb.GetTrainingPhraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    updateTrainingPhrase(request: ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    updateTrainingPhrase(request: ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    updateTrainingPhrase(request: ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    deleteTrainingPhrase(request: ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTrainingPhrase(request: ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTrainingPhrase(request: ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class IntentsClient extends grpc.Client implements IIntentsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    public listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    public listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    public getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createTrainingPhrase(request: ondewo_nlu_intent_pb.CreateTrainingPhraseRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    public createTrainingPhrase(request: ondewo_nlu_intent_pb.CreateTrainingPhraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    public createTrainingPhrase(request: ondewo_nlu_intent_pb.CreateTrainingPhraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    public getTrainingPhrase(request: ondewo_nlu_intent_pb.GetTrainingPhraseRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    public getTrainingPhrase(request: ondewo_nlu_intent_pb.GetTrainingPhraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    public getTrainingPhrase(request: ondewo_nlu_intent_pb.GetTrainingPhraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    public updateTrainingPhrase(request: ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    public updateTrainingPhrase(request: ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    public updateTrainingPhrase(request: ondewo_nlu_intent_pb.UpdateTrainingPhraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent.TrainingPhrase) => void): grpc.ClientUnaryCall;
    public deleteTrainingPhrase(request: ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTrainingPhrase(request: ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTrainingPhrase(request: ondewo_nlu_intent_pb.DeleteTrainingPhraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
