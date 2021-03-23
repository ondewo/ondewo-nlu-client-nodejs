// package: ondewo.qa
// file: ondewo/qa/qa.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_qa_qa_pb from "../../ondewo/qa/qa_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";

interface IQAService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAnswer: IQAService_IGetAnswer;
    runScraper: IQAService_IRunScraper;
    runTraining: IQAService_IRunTraining;
}

interface IQAService_IGetAnswer extends grpc.MethodDefinition<ondewo_qa_qa_pb.GetAnswerRequest, ondewo_qa_qa_pb.GetAnswerResponse> {
    path: "/ondewo.qa.QA/GetAnswer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_qa_qa_pb.GetAnswerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_qa_qa_pb.GetAnswerRequest>;
    responseSerialize: grpc.serialize<ondewo_qa_qa_pb.GetAnswerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.GetAnswerResponse>;
}
interface IQAService_IRunScraper extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.RunScraperResponse> {
    path: "/ondewo.qa.QA/RunScraper";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<ondewo_qa_qa_pb.RunScraperResponse>;
    responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.RunScraperResponse>;
}
interface IQAService_IRunTraining extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.RunTrainingResponse> {
    path: "/ondewo.qa.QA/RunTraining";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<ondewo_qa_qa_pb.RunTrainingResponse>;
    responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.RunTrainingResponse>;
}

export const QAService: IQAService;

export interface IQAServer {
    getAnswer: grpc.handleUnaryCall<ondewo_qa_qa_pb.GetAnswerRequest, ondewo_qa_qa_pb.GetAnswerResponse>;
    runScraper: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.RunScraperResponse>;
    runTraining: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.RunTrainingResponse>;
}

export interface IQAClient {
    getAnswer(request: ondewo_qa_qa_pb.GetAnswerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void): grpc.ClientUnaryCall;
    getAnswer(request: ondewo_qa_qa_pb.GetAnswerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void): grpc.ClientUnaryCall;
    getAnswer(request: ondewo_qa_qa_pb.GetAnswerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void): grpc.ClientUnaryCall;
    runScraper(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void): grpc.ClientUnaryCall;
    runScraper(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void): grpc.ClientUnaryCall;
    runScraper(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void): grpc.ClientUnaryCall;
    runTraining(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void): grpc.ClientUnaryCall;
    runTraining(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void): grpc.ClientUnaryCall;
    runTraining(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void): grpc.ClientUnaryCall;
}

export class QAClient extends grpc.Client implements IQAClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAnswer(request: ondewo_qa_qa_pb.GetAnswerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void): grpc.ClientUnaryCall;
    public getAnswer(request: ondewo_qa_qa_pb.GetAnswerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void): grpc.ClientUnaryCall;
    public getAnswer(request: ondewo_qa_qa_pb.GetAnswerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void): grpc.ClientUnaryCall;
    public runScraper(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void): grpc.ClientUnaryCall;
    public runScraper(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void): grpc.ClientUnaryCall;
    public runScraper(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void): grpc.ClientUnaryCall;
    public runTraining(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void): grpc.ClientUnaryCall;
    public runTraining(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void): grpc.ClientUnaryCall;
    public runTraining(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void): grpc.ClientUnaryCall;
}
