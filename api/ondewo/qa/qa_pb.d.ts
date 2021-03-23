// package: ondewo.qa
// file: ondewo/qa/qa.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";

export class GetAnswerRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): GetAnswerRequest;

    hasText(): boolean;
    clearText(): void;
    getText(): ondewo_nlu_session_pb.TextInput | undefined;
    setText(value?: ondewo_nlu_session_pb.TextInput): GetAnswerRequest;
    getMaxNumAnswers(): number;
    setMaxNumAnswers(value: number): GetAnswerRequest;
    getThresholdReader(): number;
    setThresholdReader(value: number): GetAnswerRequest;
    getThresholdRetriever(): number;
    setThresholdRetriever(value: number): GetAnswerRequest;
    getThresholdOverall(): number;
    setThresholdOverall(value: number): GetAnswerRequest;
    getReaderModelName(): string;
    setReaderModelName(value: string): GetAnswerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAnswerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAnswerRequest): GetAnswerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAnswerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAnswerRequest;
    static deserializeBinaryFromReader(message: GetAnswerRequest, reader: jspb.BinaryReader): GetAnswerRequest;
}

export namespace GetAnswerRequest {
    export type AsObject = {
        sessionId: string,
        text?: ondewo_nlu_session_pb.TextInput.AsObject,
        maxNumAnswers: number,
        thresholdReader: number,
        thresholdRetriever: number,
        thresholdOverall: number,
        readerModelName: string,
    }
}

export class GetAnswerResponse extends jspb.Message { 

    hasQueryResult(): boolean;
    clearQueryResult(): void;
    getQueryResult(): ondewo_nlu_session_pb.DetectIntentResponse | undefined;
    setQueryResult(value?: ondewo_nlu_session_pb.DetectIntentResponse): GetAnswerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAnswerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAnswerResponse): GetAnswerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAnswerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAnswerResponse;
    static deserializeBinaryFromReader(message: GetAnswerResponse, reader: jspb.BinaryReader): GetAnswerResponse;
}

export namespace GetAnswerResponse {
    export type AsObject = {
        queryResult?: ondewo_nlu_session_pb.DetectIntentResponse.AsObject,
    }
}

export class RunScraperResponse extends jspb.Message { 
    getContainerName(): string;
    setContainerName(value: string): RunScraperResponse;
    getContainerId(): string;
    setContainerId(value: string): RunScraperResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunScraperResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunScraperResponse): RunScraperResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunScraperResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunScraperResponse;
    static deserializeBinaryFromReader(message: RunScraperResponse, reader: jspb.BinaryReader): RunScraperResponse;
}

export namespace RunScraperResponse {
    export type AsObject = {
        containerName: string,
        containerId: string,
    }
}

export class RunTrainingResponse extends jspb.Message { 
    getF1(): number;
    setF1(value: number): RunTrainingResponse;
    getAccuracy(): number;
    setAccuracy(value: number): RunTrainingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunTrainingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunTrainingResponse): RunTrainingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunTrainingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunTrainingResponse;
    static deserializeBinaryFromReader(message: RunTrainingResponse, reader: jspb.BinaryReader): RunTrainingResponse;
}

export namespace RunTrainingResponse {
    export type AsObject = {
        f1: number,
        accuracy: number,
    }
}
