// package: google.longrunning
// file: google/longrunning/operations.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_rpc_status_pb from '../../google/rpc/status_pb';

export class Operation extends jspb.Message {
	getName(): string;
	setName(value: string): Operation;

	hasMetadata(): boolean;
	clearMetadata(): void;
	getMetadata(): google_protobuf_any_pb.Any | undefined;
	setMetadata(value?: google_protobuf_any_pb.Any): Operation;
	getDone(): boolean;
	setDone(value: boolean): Operation;

	hasError(): boolean;
	clearError(): void;
	getError(): google_rpc_status_pb.Status | undefined;
	setError(value?: google_rpc_status_pb.Status): Operation;

	hasResponse(): boolean;
	clearResponse(): void;
	getResponse(): google_protobuf_any_pb.Any | undefined;
	setResponse(value?: google_protobuf_any_pb.Any): Operation;

	getResultCase(): Operation.ResultCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Operation.AsObject;
	static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Operation;
	static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
	export type AsObject = {
		name: string;
		metadata?: google_protobuf_any_pb.Any.AsObject;
		done: boolean;
		error?: google_rpc_status_pb.Status.AsObject;
		response?: google_protobuf_any_pb.Any.AsObject;
	};

	export enum ResultCase {
		RESULT_NOT_SET = 0,
		ERROR = 4,
		RESPONSE = 5
	}
}

export class GetOperationRequest extends jspb.Message {
	getName(): string;
	setName(value: string): GetOperationRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetOperationRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetOperationRequest): GetOperationRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetOperationRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetOperationRequest;
	static deserializeBinaryFromReader(message: GetOperationRequest, reader: jspb.BinaryReader): GetOperationRequest;
}

export namespace GetOperationRequest {
	export type AsObject = {
		name: string;
	};
}

export class ListOperationsRequest extends jspb.Message {
	getName(): string;
	setName(value: string): ListOperationsRequest;
	getFilter(): string;
	setFilter(value: string): ListOperationsRequest;
	getPageSize(): number;
	setPageSize(value: number): ListOperationsRequest;
	getPageToken(): string;
	setPageToken(value: string): ListOperationsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListOperationsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListOperationsRequest): ListOperationsRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListOperationsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListOperationsRequest;
	static deserializeBinaryFromReader(message: ListOperationsRequest, reader: jspb.BinaryReader): ListOperationsRequest;
}

export namespace ListOperationsRequest {
	export type AsObject = {
		name: string;
		filter: string;
		pageSize: number;
		pageToken: string;
	};
}

export class ListOperationsResponse extends jspb.Message {
	clearOperationsList(): void;
	getOperationsList(): Array<Operation>;
	setOperationsList(value: Array<Operation>): ListOperationsResponse;
	addOperations(value?: Operation, index?: number): Operation;
	getNextPageToken(): string;
	setNextPageToken(value: string): ListOperationsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListOperationsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListOperationsResponse): ListOperationsResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListOperationsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListOperationsResponse;
	static deserializeBinaryFromReader(
		message: ListOperationsResponse,
		reader: jspb.BinaryReader
	): ListOperationsResponse;
}

export namespace ListOperationsResponse {
	export type AsObject = {
		operationsList: Array<Operation.AsObject>;
		nextPageToken: string;
	};
}

export class CancelOperationRequest extends jspb.Message {
	getName(): string;
	setName(value: string): CancelOperationRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CancelOperationRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CancelOperationRequest): CancelOperationRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CancelOperationRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CancelOperationRequest;
	static deserializeBinaryFromReader(
		message: CancelOperationRequest,
		reader: jspb.BinaryReader
	): CancelOperationRequest;
}

export namespace CancelOperationRequest {
	export type AsObject = {
		name: string;
	};
}

export class DeleteOperationRequest extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteOperationRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteOperationRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteOperationRequest): DeleteOperationRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteOperationRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteOperationRequest;
	static deserializeBinaryFromReader(
		message: DeleteOperationRequest,
		reader: jspb.BinaryReader
	): DeleteOperationRequest;
}

export namespace DeleteOperationRequest {
	export type AsObject = {
		name: string;
	};
}
