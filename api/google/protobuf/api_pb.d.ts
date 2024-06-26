// package: google.protobuf
// file: google/protobuf/api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_protobuf_source_context_pb from 'google-protobuf/google/protobuf/source_context_pb';
import * as google_protobuf_type_pb from 'google-protobuf/google/protobuf/type_pb';

export class Api extends jspb.Message {
	getName(): string;
	setName(value: string): Api;
	clearMethodsList(): void;
	getMethodsList(): Array<Method>;
	setMethodsList(value: Array<Method>): Api;
	addMethods(value?: Method, index?: number): Method;
	clearOptionsList(): void;
	getOptionsList(): Array<google_protobuf_type_pb.Option>;
	setOptionsList(value: Array<google_protobuf_type_pb.Option>): Api;
	addOptions(value?: google_protobuf_type_pb.Option, index?: number): google_protobuf_type_pb.Option;
	getVersion(): string;
	setVersion(value: string): Api;

	hasSourceContext(): boolean;
	clearSourceContext(): void;
	getSourceContext(): google_protobuf_source_context_pb.SourceContext | undefined;
	setSourceContext(value?: google_protobuf_source_context_pb.SourceContext): Api;
	clearMixinsList(): void;
	getMixinsList(): Array<Mixin>;
	setMixinsList(value: Array<Mixin>): Api;
	addMixins(value?: Mixin, index?: number): Mixin;
	getSyntax(): google_protobuf_type_pb.Syntax;
	setSyntax(value: google_protobuf_type_pb.Syntax): Api;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Api.AsObject;
	static toObject(includeInstance: boolean, msg: Api): Api.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Api, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Api;
	static deserializeBinaryFromReader(message: Api, reader: jspb.BinaryReader): Api;
}

export namespace Api {
	export type AsObject = {
		name: string;
		methodsList: Array<Method.AsObject>;
		optionsList: Array<google_protobuf_type_pb.Option.AsObject>;
		version: string;
		sourceContext?: google_protobuf_source_context_pb.SourceContext.AsObject;
		mixinsList: Array<Mixin.AsObject>;
		syntax: google_protobuf_type_pb.Syntax;
	};
}

export class Method extends jspb.Message {
	getName(): string;
	setName(value: string): Method;
	getRequestTypeUrl(): string;
	setRequestTypeUrl(value: string): Method;
	getRequestStreaming(): boolean;
	setRequestStreaming(value: boolean): Method;
	getResponseTypeUrl(): string;
	setResponseTypeUrl(value: string): Method;
	getResponseStreaming(): boolean;
	setResponseStreaming(value: boolean): Method;
	clearOptionsList(): void;
	getOptionsList(): Array<google_protobuf_type_pb.Option>;
	setOptionsList(value: Array<google_protobuf_type_pb.Option>): Method;
	addOptions(value?: google_protobuf_type_pb.Option, index?: number): google_protobuf_type_pb.Option;
	getSyntax(): google_protobuf_type_pb.Syntax;
	setSyntax(value: google_protobuf_type_pb.Syntax): Method;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Method.AsObject;
	static toObject(includeInstance: boolean, msg: Method): Method.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Method, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Method;
	static deserializeBinaryFromReader(message: Method, reader: jspb.BinaryReader): Method;
}

export namespace Method {
	export type AsObject = {
		name: string;
		requestTypeUrl: string;
		requestStreaming: boolean;
		responseTypeUrl: string;
		responseStreaming: boolean;
		optionsList: Array<google_protobuf_type_pb.Option.AsObject>;
		syntax: google_protobuf_type_pb.Syntax;
	};
}

export class Mixin extends jspb.Message {
	getName(): string;
	setName(value: string): Mixin;
	getRoot(): string;
	setRoot(value: string): Mixin;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Mixin.AsObject;
	static toObject(includeInstance: boolean, msg: Mixin): Mixin.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Mixin, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Mixin;
	static deserializeBinaryFromReader(message: Mixin, reader: jspb.BinaryReader): Mixin;
}

export namespace Mixin {
	export type AsObject = {
		name: string;
		root: string;
	};
}
