// package: ondewo.nlu
// file: ondewo/nlu/rag.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class RagPagination extends jspb.Message { 
    getPage(): number;
    setPage(value: number): RagPagination;
    getPageSize(): number;
    setPageSize(value: number): RagPagination;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagPagination.AsObject;
    static toObject(includeInstance: boolean, msg: RagPagination): RagPagination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagPagination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagPagination;
    static deserializeBinaryFromReader(message: RagPagination, reader: jspb.BinaryReader): RagPagination;
}

export namespace RagPagination {
    export type AsObject = {
        page: number,
        pageSize: number,
    }
}

export class RagFileMetadata extends jspb.Message { 
    getFileName(): string;
    setFileName(value: string): RagFileMetadata;
    getContentType(): string;
    setContentType(value: string): RagFileMetadata;
    getSize(): number;
    setSize(value: number): RagFileMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFileMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RagFileMetadata): RagFileMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFileMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFileMetadata;
    static deserializeBinaryFromReader(message: RagFileMetadata, reader: jspb.BinaryReader): RagFileMetadata;
}

export namespace RagFileMetadata {
    export type AsObject = {
        fileName: string,
        contentType: string,
        size: number,
    }
}

export class RagFileChunk extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): RagFileChunk;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): RagFileMetadata | undefined;
    setMetadata(value?: RagFileMetadata): RagFileChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFileChunk.AsObject;
    static toObject(includeInstance: boolean, msg: RagFileChunk): RagFileChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFileChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFileChunk;
    static deserializeBinaryFromReader(message: RagFileChunk, reader: jspb.BinaryReader): RagFileChunk;
}

export namespace RagFileChunk {
    export type AsObject = {
        data: Uint8Array | string,
        metadata?: RagFileMetadata.AsObject,
    }
}

export class RagUploadChunk extends jspb.Message { 

    hasFileIndex(): boolean;
    clearFileIndex(): void;
    getFileIndex(): number | undefined;
    setFileIndex(value: number): RagUploadChunk;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): RagUploadChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUploadChunk.AsObject;
    static toObject(includeInstance: boolean, msg: RagUploadChunk): RagUploadChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUploadChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUploadChunk;
    static deserializeBinaryFromReader(message: RagUploadChunk, reader: jspb.BinaryReader): RagUploadChunk;
}

export namespace RagUploadChunk {
    export type AsObject = {
        fileIndex?: number,
        data: Uint8Array | string,
    }
}

export class RagPartialSuccess extends jspb.Message { 
    getSuccessCount(): number;
    setSuccessCount(value: number): RagPartialSuccess;
    clearErrorsList(): void;
    getErrorsList(): Array<string>;
    setErrorsList(value: Array<string>): RagPartialSuccess;
    addErrors(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagPartialSuccess.AsObject;
    static toObject(includeInstance: boolean, msg: RagPartialSuccess): RagPartialSuccess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagPartialSuccess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagPartialSuccess;
    static deserializeBinaryFromReader(message: RagPartialSuccess, reader: jspb.BinaryReader): RagPartialSuccess;
}

export namespace RagPartialSuccess {
    export type AsObject = {
        successCount: number,
        errorsList: Array<string>,
    }
}

export class RagDataset extends jspb.Message { 
    getId(): string;
    setId(value: string): RagDataset;
    getName(): string;
    setName(value: string): RagDataset;
    getDescription(): string;
    setDescription(value: string): RagDataset;
    getAvatar(): string;
    setAvatar(value: string): RagDataset;
    getLanguage(): string;
    setLanguage(value: string): RagDataset;
    getPermission(): RagPermission;
    setPermission(value: RagPermission): RagDataset;
    getDocumentCount(): number;
    setDocumentCount(value: number): RagDataset;
    getChunkCount(): number;
    setChunkCount(value: number): RagDataset;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagDataset;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagDataset;
    getEmbeddingModel(): string;
    setEmbeddingModel(value: string): RagDataset;
    getCreateTime(): number;
    setCreateTime(value: number): RagDataset;
    getCreateDate(): string;
    setCreateDate(value: string): RagDataset;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagDataset;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagDataset;
    getTokenCount(): number;
    setTokenCount(value: number): RagDataset;
    getSimilarityThreshold(): number;
    setSimilarityThreshold(value: number): RagDataset;
    getVectorSimilarityWeight(): number;
    setVectorSimilarityWeight(value: number): RagDataset;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDataset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDataset.AsObject;
    static toObject(includeInstance: boolean, msg: RagDataset): RagDataset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDataset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDataset;
    static deserializeBinaryFromReader(message: RagDataset, reader: jspb.BinaryReader): RagDataset;
}

export namespace RagDataset {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        avatar: string,
        language: string,
        permission: RagPermission,
        documentCount: number,
        chunkCount: number,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        embeddingModel: string,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
        tokenCount: number,
        similarityThreshold: number,
        vectorSimilarityWeight: number,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagCreateDatasetRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateDatasetRequest;
    getName(): string;
    setName(value: string): RagCreateDatasetRequest;
    getDescription(): string;
    setDescription(value: string): RagCreateDatasetRequest;
    getAvatar(): string;
    setAvatar(value: string): RagCreateDatasetRequest;
    getPermission(): RagPermission;
    setPermission(value: RagPermission): RagCreateDatasetRequest;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagCreateDatasetRequest;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagCreateDatasetRequest;
    getEmbeddingModel(): string;
    setEmbeddingModel(value: string): RagCreateDatasetRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateDatasetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateDatasetRequest): RagCreateDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateDatasetRequest;
    static deserializeBinaryFromReader(message: RagCreateDatasetRequest, reader: jspb.BinaryReader): RagCreateDatasetRequest;
}

export namespace RagCreateDatasetRequest {
    export type AsObject = {
        parent: string,
        name: string,
        description: string,
        avatar: string,
        permission: RagPermission,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        embeddingModel: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagParserConfig extends jspb.Message { 
    getAutoKeyword(): number;
    setAutoKeyword(value: number): RagParserConfig;
    getAutoQuestions(): number;
    setAutoQuestions(value: number): RagParserConfig;
    getChunkTokenNum(): number;
    setChunkTokenNum(value: number): RagParserConfig;
    getDelimiter(): string;
    setDelimiter(value: string): RagParserConfig;
    getHtml4excel(): boolean;
    setHtml4excel(value: boolean): RagParserConfig;
    getLayoutRecognize(): string;
    setLayoutRecognize(value: string): RagParserConfig;
    clearTagKbIdsList(): void;
    getTagKbIdsList(): Array<string>;
    setTagKbIdsList(value: Array<string>): RagParserConfig;
    addTagKbIds(value: string, index?: number): string;
    getTaskPageSize(): number;
    setTaskPageSize(value: number): RagParserConfig;

    hasRaptor(): boolean;
    clearRaptor(): void;
    getRaptor(): google_protobuf_struct_pb.Struct | undefined;
    setRaptor(value?: google_protobuf_struct_pb.Struct): RagParserConfig;

    hasGraphrag(): boolean;
    clearGraphrag(): void;
    getGraphrag(): google_protobuf_struct_pb.Struct | undefined;
    setGraphrag(value?: google_protobuf_struct_pb.Struct): RagParserConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagParserConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagParserConfig): RagParserConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagParserConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagParserConfig;
    static deserializeBinaryFromReader(message: RagParserConfig, reader: jspb.BinaryReader): RagParserConfig;
}

export namespace RagParserConfig {
    export type AsObject = {
        autoKeyword: number,
        autoQuestions: number,
        chunkTokenNum: number,
        delimiter: string,
        html4excel: boolean,
        layoutRecognize: string,
        tagKbIdsList: Array<string>,
        taskPageSize: number,
        raptor?: google_protobuf_struct_pb.Struct.AsObject,
        graphrag?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagUpdateDatasetRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateDatasetRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagUpdateDatasetRequest;
    getName(): string;
    setName(value: string): RagUpdateDatasetRequest;
    getDescription(): string;
    setDescription(value: string): RagUpdateDatasetRequest;
    getAvatar(): string;
    setAvatar(value: string): RagUpdateDatasetRequest;
    getPermission(): RagPermission;
    setPermission(value: RagPermission): RagUpdateDatasetRequest;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagUpdateDatasetRequest;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagUpdateDatasetRequest;
    getEmbeddingModel(): string;
    setEmbeddingModel(value: string): RagUpdateDatasetRequest;
    getPagerank(): number;
    setPagerank(value: number): RagUpdateDatasetRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateDatasetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateDatasetRequest): RagUpdateDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateDatasetRequest;
    static deserializeBinaryFromReader(message: RagUpdateDatasetRequest, reader: jspb.BinaryReader): RagUpdateDatasetRequest;
}

export namespace RagUpdateDatasetRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        name: string,
        description: string,
        avatar: string,
        permission: RagPermission,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        embeddingModel: string,
        pagerank: number,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDeleteDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteDatasetsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RagDeleteDatasetsRequest;
    addIds(value: string, index?: number): string;

    hasDeleteAll(): boolean;
    clearDeleteAll(): void;
    getDeleteAll(): boolean | undefined;
    setDeleteAll(value: boolean): RagDeleteDatasetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteDatasetsRequest): RagDeleteDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteDatasetsRequest;
    static deserializeBinaryFromReader(message: RagDeleteDatasetsRequest, reader: jspb.BinaryReader): RagDeleteDatasetsRequest;
}

export namespace RagDeleteDatasetsRequest {
    export type AsObject = {
        parent: string,
        idsList: Array<string>,
        deleteAll?: boolean,
    }
}

export class RagListDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListDatasetsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): RagPagination | undefined;
    setPagination(value?: RagPagination): RagListDatasetsRequest;
    getId(): string;
    setId(value: string): RagListDatasetsRequest;
    getName(): string;
    setName(value: string): RagListDatasetsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListDatasetsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListDatasetsRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListDatasetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListDatasetsRequest): RagListDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListDatasetsRequest;
    static deserializeBinaryFromReader(message: RagListDatasetsRequest, reader: jspb.BinaryReader): RagListDatasetsRequest;
}

export namespace RagListDatasetsRequest {
    export type AsObject = {
        parent: string,
        pagination?: RagPagination.AsObject,
        id: string,
        name: string,
        orderby: string,
        desc?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDatasetList extends jspb.Message { 
    clearDatasetsList(): void;
    getDatasetsList(): Array<RagDataset>;
    setDatasetsList(value: Array<RagDataset>): RagDatasetList;
    addDatasets(value?: RagDataset, index?: number): RagDataset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDatasetList.AsObject;
    static toObject(includeInstance: boolean, msg: RagDatasetList): RagDatasetList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDatasetList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDatasetList;
    static deserializeBinaryFromReader(message: RagDatasetList, reader: jspb.BinaryReader): RagDatasetList;
}

export namespace RagDatasetList {
    export type AsObject = {
        datasetsList: Array<RagDataset.AsObject>,
    }
}

export class RagGetKnowledgeGraphRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetKnowledgeGraphRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagGetKnowledgeGraphRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetKnowledgeGraphRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetKnowledgeGraphRequest): RagGetKnowledgeGraphRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetKnowledgeGraphRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetKnowledgeGraphRequest;
    static deserializeBinaryFromReader(message: RagGetKnowledgeGraphRequest, reader: jspb.BinaryReader): RagGetKnowledgeGraphRequest;
}

export namespace RagGetKnowledgeGraphRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
    }
}

export class RagGetKnowledgeGraphResponse extends jspb.Message { 

    hasGraph(): boolean;
    clearGraph(): void;
    getGraph(): google_protobuf_struct_pb.Struct | undefined;
    setGraph(value?: google_protobuf_struct_pb.Struct): RagGetKnowledgeGraphResponse;

    hasMindMap(): boolean;
    clearMindMap(): void;
    getMindMap(): google_protobuf_struct_pb.Struct | undefined;
    setMindMap(value?: google_protobuf_struct_pb.Struct): RagGetKnowledgeGraphResponse;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagGetKnowledgeGraphResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetKnowledgeGraphResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetKnowledgeGraphResponse): RagGetKnowledgeGraphResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetKnowledgeGraphResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetKnowledgeGraphResponse;
    static deserializeBinaryFromReader(message: RagGetKnowledgeGraphResponse, reader: jspb.BinaryReader): RagGetKnowledgeGraphResponse;
}

export namespace RagGetKnowledgeGraphResponse {
    export type AsObject = {
        graph?: google_protobuf_struct_pb.Struct.AsObject,
        mindMap?: google_protobuf_struct_pb.Struct.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDeleteKnowledgeGraphRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteKnowledgeGraphRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagDeleteKnowledgeGraphRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteKnowledgeGraphRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteKnowledgeGraphRequest): RagDeleteKnowledgeGraphRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteKnowledgeGraphRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteKnowledgeGraphRequest;
    static deserializeBinaryFromReader(message: RagDeleteKnowledgeGraphRequest, reader: jspb.BinaryReader): RagDeleteKnowledgeGraphRequest;
}

export namespace RagDeleteKnowledgeGraphRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
    }
}

export class RagDocument extends jspb.Message { 
    getId(): string;
    setId(value: string): RagDocument;
    getDatasetId(): string;
    setDatasetId(value: string): RagDocument;
    getName(): string;
    setName(value: string): RagDocument;
    getType(): string;
    setType(value: string): RagDocument;
    getSize(): number;
    setSize(value: number): RagDocument;
    getChunkCount(): number;
    setChunkCount(value: number): RagDocument;
    getTokenCount(): number;
    setTokenCount(value: number): RagDocument;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagDocument;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagDocument;
    getSourceType(): string;
    setSourceType(value: string): RagDocument;
    getRun(): RagDocumentStatus;
    setRun(value: RagDocumentStatus): RagDocument;
    getProgress(): number;
    setProgress(value: number): RagDocument;
    getProgressMsg(): string;
    setProgressMsg(value: string): RagDocument;
    getProcessDuration(): number;
    setProcessDuration(value: number): RagDocument;
    getCreateTime(): number;
    setCreateTime(value: number): RagDocument;
    getCreateDate(): string;
    setCreateDate(value: string): RagDocument;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagDocument;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagDocument;

    hasMetaFields(): boolean;
    clearMetaFields(): void;
    getMetaFields(): google_protobuf_struct_pb.Struct | undefined;
    setMetaFields(value?: google_protobuf_struct_pb.Struct): RagDocument;
    getThumbnail(): string;
    setThumbnail(value: string): RagDocument;
    getLocation(): string;
    setLocation(value: string): RagDocument;
    getProcessBeginAt(): string;
    setProcessBeginAt(value: string): RagDocument;
    getSuffix(): string;
    setSuffix(value: string): RagDocument;
    getStatus(): string;
    setStatus(value: string): RagDocument;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDocument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDocument.AsObject;
    static toObject(includeInstance: boolean, msg: RagDocument): RagDocument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDocument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDocument;
    static deserializeBinaryFromReader(message: RagDocument, reader: jspb.BinaryReader): RagDocument;
}

export namespace RagDocument {
    export type AsObject = {
        id: string,
        datasetId: string,
        name: string,
        type: string,
        size: number,
        chunkCount: number,
        tokenCount: number,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        sourceType: string,
        run: RagDocumentStatus,
        progress: number,
        progressMsg: string,
        processDuration: number,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
        metaFields?: google_protobuf_struct_pb.Struct.AsObject,
        thumbnail: string,
        location: string,
        processBeginAt: string,
        suffix: string,
        status: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagUploadDocumentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUploadDocumentsRequest;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): RagUploadDocumentsRequest.RagMetadata | undefined;
    setMetadata(value?: RagUploadDocumentsRequest.RagMetadata): RagUploadDocumentsRequest;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): RagUploadChunk | undefined;
    setChunk(value?: RagUploadChunk): RagUploadDocumentsRequest;

    getPayloadCase(): RagUploadDocumentsRequest.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUploadDocumentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUploadDocumentsRequest): RagUploadDocumentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUploadDocumentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUploadDocumentsRequest;
    static deserializeBinaryFromReader(message: RagUploadDocumentsRequest, reader: jspb.BinaryReader): RagUploadDocumentsRequest;
}

export namespace RagUploadDocumentsRequest {
    export type AsObject = {
        parent: string,
        metadata?: RagUploadDocumentsRequest.RagMetadata.AsObject,
        chunk?: RagUploadChunk.AsObject,
    }


    export class RagMetadata extends jspb.Message { 
        getDatasetId(): string;
        setDatasetId(value: string): RagMetadata;
        clearFilesList(): void;
        getFilesList(): Array<RagFileMetadata>;
        setFilesList(value: Array<RagFileMetadata>): RagMetadata;
        addFiles(value?: RagFileMetadata, index?: number): RagFileMetadata;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RagMetadata.AsObject;
        static toObject(includeInstance: boolean, msg: RagMetadata): RagMetadata.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RagMetadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RagMetadata;
        static deserializeBinaryFromReader(message: RagMetadata, reader: jspb.BinaryReader): RagMetadata;
    }

    export namespace RagMetadata {
        export type AsObject = {
            datasetId: string,
            filesList: Array<RagFileMetadata.AsObject>,
        }
    }


    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        METADATA = 2,
        CHUNK = 3,
    }

}

export class RagDocumentList extends jspb.Message { 
    clearDocumentsList(): void;
    getDocumentsList(): Array<RagDocument>;
    setDocumentsList(value: Array<RagDocument>): RagDocumentList;
    addDocuments(value?: RagDocument, index?: number): RagDocument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDocumentList.AsObject;
    static toObject(includeInstance: boolean, msg: RagDocumentList): RagDocumentList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDocumentList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDocumentList;
    static deserializeBinaryFromReader(message: RagDocumentList, reader: jspb.BinaryReader): RagDocumentList;
}

export namespace RagDocumentList {
    export type AsObject = {
        documentsList: Array<RagDocument.AsObject>,
    }
}

export class RagUpdateDocumentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateDocumentRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagUpdateDocumentRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagUpdateDocumentRequest;
    getName(): string;
    setName(value: string): RagUpdateDocumentRequest;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagUpdateDocumentRequest;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagUpdateDocumentRequest;

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): boolean | undefined;
    setEnabled(value: boolean): RagUpdateDocumentRequest;

    hasMetaFields(): boolean;
    clearMetaFields(): void;
    getMetaFields(): google_protobuf_struct_pb.Struct | undefined;
    setMetaFields(value?: google_protobuf_struct_pb.Struct): RagUpdateDocumentRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateDocumentRequest): RagUpdateDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateDocumentRequest;
    static deserializeBinaryFromReader(message: RagUpdateDocumentRequest, reader: jspb.BinaryReader): RagUpdateDocumentRequest;
}

export namespace RagUpdateDocumentRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        documentId: string,
        name: string,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        enabled?: boolean,
        metaFields?: google_protobuf_struct_pb.Struct.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDownloadDocumentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDownloadDocumentRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagDownloadDocumentRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagDownloadDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDownloadDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDownloadDocumentRequest): RagDownloadDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDownloadDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDownloadDocumentRequest;
    static deserializeBinaryFromReader(message: RagDownloadDocumentRequest, reader: jspb.BinaryReader): RagDownloadDocumentRequest;
}

export namespace RagDownloadDocumentRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        documentId: string,
    }
}

export class RagListDocumentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListDocumentsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagListDocumentsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): RagPagination | undefined;
    setPagination(value?: RagPagination): RagListDocumentsRequest;
    getId(): string;
    setId(value: string): RagListDocumentsRequest;
    getName(): string;
    setName(value: string): RagListDocumentsRequest;
    getKeywords(): string;
    setKeywords(value: string): RagListDocumentsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListDocumentsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListDocumentsRequest;
    getCreateTimeFrom(): number;
    setCreateTimeFrom(value: number): RagListDocumentsRequest;
    getCreateTimeTo(): number;
    setCreateTimeTo(value: number): RagListDocumentsRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListDocumentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListDocumentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListDocumentsRequest): RagListDocumentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListDocumentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListDocumentsRequest;
    static deserializeBinaryFromReader(message: RagListDocumentsRequest, reader: jspb.BinaryReader): RagListDocumentsRequest;
}

export namespace RagListDocumentsRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        pagination?: RagPagination.AsObject,
        id: string,
        name: string,
        keywords: string,
        orderby: string,
        desc?: boolean,
        createTimeFrom: number,
        createTimeTo: number,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagListDocumentsResponse extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): RagListDocumentsResponse;
    clearDocsList(): void;
    getDocsList(): Array<RagDocument>;
    setDocsList(value: Array<RagDocument>): RagListDocumentsResponse;
    addDocs(value?: RagDocument, index?: number): RagDocument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListDocumentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagListDocumentsResponse): RagListDocumentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListDocumentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListDocumentsResponse;
    static deserializeBinaryFromReader(message: RagListDocumentsResponse, reader: jspb.BinaryReader): RagListDocumentsResponse;
}

export namespace RagListDocumentsResponse {
    export type AsObject = {
        total: number,
        docsList: Array<RagDocument.AsObject>,
    }
}

export class RagDeleteDocumentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteDocumentsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagDeleteDocumentsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RagDeleteDocumentsRequest;
    addIds(value: string, index?: number): string;

    hasDeleteAll(): boolean;
    clearDeleteAll(): void;
    getDeleteAll(): boolean | undefined;
    setDeleteAll(value: boolean): RagDeleteDocumentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteDocumentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteDocumentsRequest): RagDeleteDocumentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteDocumentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteDocumentsRequest;
    static deserializeBinaryFromReader(message: RagDeleteDocumentsRequest, reader: jspb.BinaryReader): RagDeleteDocumentsRequest;
}

export namespace RagDeleteDocumentsRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        idsList: Array<string>,
        deleteAll?: boolean,
    }
}

export class RagChunk extends jspb.Message { 
    getId(): string;
    setId(value: string): RagChunk;
    getDatasetId(): string;
    setDatasetId(value: string): RagChunk;
    getDocumentId(): string;
    setDocumentId(value: string): RagChunk;
    getContent(): string;
    setContent(value: string): RagChunk;
    getDocnmKwd(): string;
    setDocnmKwd(value: string): RagChunk;
    clearImportantKeywordsList(): void;
    getImportantKeywordsList(): Array<string>;
    setImportantKeywordsList(value: Array<string>): RagChunk;
    addImportantKeywords(value: string, index?: number): string;
    clearQuestionsList(): void;
    getQuestionsList(): Array<string>;
    setQuestionsList(value: Array<string>): RagChunk;
    addQuestions(value: string, index?: number): string;
    getImageId(): string;
    setImageId(value: string): RagChunk;

    hasAvailable(): boolean;
    clearAvailable(): void;
    getAvailable(): boolean | undefined;
    setAvailable(value: boolean): RagChunk;
    clearPositionsList(): void;
    getPositionsList(): Array<google_protobuf_struct_pb.ListValue>;
    setPositionsList(value: Array<google_protobuf_struct_pb.ListValue>): RagChunk;
    addPositions(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;
    getCreateTime(): string;
    setCreateTime(value: string): RagChunk;
    getCreateTimestamp(): number;
    setCreateTimestamp(value: number): RagChunk;
    getDocumentKeyword(): string;
    setDocumentKeyword(value: string): RagChunk;
    getSimilarity(): number;
    setSimilarity(value: number): RagChunk;

    hasVector(): boolean;
    clearVector(): void;
    getVector(): google_protobuf_struct_pb.Struct | undefined;
    setVector(value?: google_protobuf_struct_pb.Struct): RagChunk;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChunk.AsObject;
    static toObject(includeInstance: boolean, msg: RagChunk): RagChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChunk;
    static deserializeBinaryFromReader(message: RagChunk, reader: jspb.BinaryReader): RagChunk;
}

export namespace RagChunk {
    export type AsObject = {
        id: string,
        datasetId: string,
        documentId: string,
        content: string,
        docnmKwd: string,
        importantKeywordsList: Array<string>,
        questionsList: Array<string>,
        imageId: string,
        available?: boolean,
        positionsList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
        createTime: string,
        createTimestamp: number,
        documentKeyword: string,
        similarity: number,
        vector?: google_protobuf_struct_pb.Struct.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagParseDocumentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagParseDocumentsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagParseDocumentsRequest;
    clearDocumentIdsList(): void;
    getDocumentIdsList(): Array<string>;
    setDocumentIdsList(value: Array<string>): RagParseDocumentsRequest;
    addDocumentIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagParseDocumentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagParseDocumentsRequest): RagParseDocumentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagParseDocumentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagParseDocumentsRequest;
    static deserializeBinaryFromReader(message: RagParseDocumentsRequest, reader: jspb.BinaryReader): RagParseDocumentsRequest;
}

export namespace RagParseDocumentsRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        documentIdsList: Array<string>,
    }
}

export class RagStopParsingRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagStopParsingRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagStopParsingRequest;
    clearDocumentIdsList(): void;
    getDocumentIdsList(): Array<string>;
    setDocumentIdsList(value: Array<string>): RagStopParsingRequest;
    addDocumentIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagStopParsingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagStopParsingRequest): RagStopParsingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagStopParsingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagStopParsingRequest;
    static deserializeBinaryFromReader(message: RagStopParsingRequest, reader: jspb.BinaryReader): RagStopParsingRequest;
}

export namespace RagStopParsingRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        documentIdsList: Array<string>,
    }
}

export class RagListChunksRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListChunksRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagListChunksRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagListChunksRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): RagPagination | undefined;
    setPagination(value?: RagPagination): RagListChunksRequest;
    getKeywords(): string;
    setKeywords(value: string): RagListChunksRequest;
    getId(): string;
    setId(value: string): RagListChunksRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListChunksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListChunksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListChunksRequest): RagListChunksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListChunksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListChunksRequest;
    static deserializeBinaryFromReader(message: RagListChunksRequest, reader: jspb.BinaryReader): RagListChunksRequest;
}

export namespace RagListChunksRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        documentId: string,
        pagination?: RagPagination.AsObject,
        keywords: string,
        id: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagListChunksResponse extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): RagListChunksResponse;
    clearChunksList(): void;
    getChunksList(): Array<RagChunk>;
    setChunksList(value: Array<RagChunk>): RagListChunksResponse;
    addChunks(value?: RagChunk, index?: number): RagChunk;

    hasDoc(): boolean;
    clearDoc(): void;
    getDoc(): RagDocument | undefined;
    setDoc(value?: RagDocument): RagListChunksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListChunksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagListChunksResponse): RagListChunksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListChunksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListChunksResponse;
    static deserializeBinaryFromReader(message: RagListChunksResponse, reader: jspb.BinaryReader): RagListChunksResponse;
}

export namespace RagListChunksResponse {
    export type AsObject = {
        total: number,
        chunksList: Array<RagChunk.AsObject>,
        doc?: RagDocument.AsObject,
    }
}

export class RagAddChunkRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAddChunkRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagAddChunkRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagAddChunkRequest;
    getContent(): string;
    setContent(value: string): RagAddChunkRequest;
    clearImportantKeywordsList(): void;
    getImportantKeywordsList(): Array<string>;
    setImportantKeywordsList(value: Array<string>): RagAddChunkRequest;
    addImportantKeywords(value: string, index?: number): string;
    clearQuestionsList(): void;
    getQuestionsList(): Array<string>;
    setQuestionsList(value: Array<string>): RagAddChunkRequest;
    addQuestions(value: string, index?: number): string;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAddChunkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAddChunkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagAddChunkRequest): RagAddChunkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAddChunkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAddChunkRequest;
    static deserializeBinaryFromReader(message: RagAddChunkRequest, reader: jspb.BinaryReader): RagAddChunkRequest;
}

export namespace RagAddChunkRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        documentId: string,
        content: string,
        importantKeywordsList: Array<string>,
        questionsList: Array<string>,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAddChunkResponse extends jspb.Message { 

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): RagChunk | undefined;
    setChunk(value?: RagChunk): RagAddChunkResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAddChunkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagAddChunkResponse): RagAddChunkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAddChunkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAddChunkResponse;
    static deserializeBinaryFromReader(message: RagAddChunkResponse, reader: jspb.BinaryReader): RagAddChunkResponse;
}

export namespace RagAddChunkResponse {
    export type AsObject = {
        chunk?: RagChunk.AsObject,
    }
}

export class RagRemoveChunksRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagRemoveChunksRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagRemoveChunksRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagRemoveChunksRequest;
    clearChunkIdsList(): void;
    getChunkIdsList(): Array<string>;
    setChunkIdsList(value: Array<string>): RagRemoveChunksRequest;
    addChunkIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRemoveChunksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagRemoveChunksRequest): RagRemoveChunksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRemoveChunksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRemoveChunksRequest;
    static deserializeBinaryFromReader(message: RagRemoveChunksRequest, reader: jspb.BinaryReader): RagRemoveChunksRequest;
}

export namespace RagRemoveChunksRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        documentId: string,
        chunkIdsList: Array<string>,
    }
}

export class RagUpdateChunkRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateChunkRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagUpdateChunkRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagUpdateChunkRequest;
    getChunkId(): string;
    setChunkId(value: string): RagUpdateChunkRequest;
    getContent(): string;
    setContent(value: string): RagUpdateChunkRequest;
    clearImportantKeywordsList(): void;
    getImportantKeywordsList(): Array<string>;
    setImportantKeywordsList(value: Array<string>): RagUpdateChunkRequest;
    addImportantKeywords(value: string, index?: number): string;
    clearQuestionsList(): void;
    getQuestionsList(): Array<string>;
    setQuestionsList(value: Array<string>): RagUpdateChunkRequest;
    addQuestions(value: string, index?: number): string;

    hasAvailable(): boolean;
    clearAvailable(): void;
    getAvailable(): boolean | undefined;
    setAvailable(value: boolean): RagUpdateChunkRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateChunkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateChunkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateChunkRequest): RagUpdateChunkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateChunkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateChunkRequest;
    static deserializeBinaryFromReader(message: RagUpdateChunkRequest, reader: jspb.BinaryReader): RagUpdateChunkRequest;
}

export namespace RagUpdateChunkRequest {
    export type AsObject = {
        parent: string,
        datasetId: string,
        documentId: string,
        chunkId: string,
        content: string,
        importantKeywordsList: Array<string>,
        questionsList: Array<string>,
        available?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagRetrievalRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagRetrievalRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): RagPagination | undefined;
    setPagination(value?: RagPagination): RagRetrievalRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagRetrievalRequest;
    addDatasetIds(value: string, index?: number): string;
    getQuestion(): string;
    setQuestion(value: string): RagRetrievalRequest;
    clearDocumentIdsList(): void;
    getDocumentIdsList(): Array<string>;
    setDocumentIdsList(value: Array<string>): RagRetrievalRequest;
    addDocumentIds(value: string, index?: number): string;
    getSimilarityThreshold(): number;
    setSimilarityThreshold(value: number): RagRetrievalRequest;
    getVectorSimilarityWeight(): number;
    setVectorSimilarityWeight(value: number): RagRetrievalRequest;
    getTopK(): number;
    setTopK(value: number): RagRetrievalRequest;

    hasHighlight(): boolean;
    clearHighlight(): void;
    getHighlight(): boolean | undefined;
    setHighlight(value: boolean): RagRetrievalRequest;

    hasMetadataCondition(): boolean;
    clearMetadataCondition(): void;
    getMetadataCondition(): google_protobuf_struct_pb.Struct | undefined;
    setMetadataCondition(value?: google_protobuf_struct_pb.Struct): RagRetrievalRequest;

    hasUseKg(): boolean;
    clearUseKg(): void;
    getUseKg(): boolean | undefined;
    setUseKg(value: boolean): RagRetrievalRequest;
    clearCrossLanguagesList(): void;
    getCrossLanguagesList(): Array<string>;
    setCrossLanguagesList(value: Array<string>): RagRetrievalRequest;
    addCrossLanguages(value: string, index?: number): string;

    hasKeyword(): boolean;
    clearKeyword(): void;
    getKeyword(): boolean | undefined;
    setKeyword(value: boolean): RagRetrievalRequest;
    getRerankId(): string;
    setRerankId(value: string): RagRetrievalRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagRetrievalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRetrievalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagRetrievalRequest): RagRetrievalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRetrievalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRetrievalRequest;
    static deserializeBinaryFromReader(message: RagRetrievalRequest, reader: jspb.BinaryReader): RagRetrievalRequest;
}

export namespace RagRetrievalRequest {
    export type AsObject = {
        parent: string,
        pagination?: RagPagination.AsObject,
        datasetIdsList: Array<string>,
        question: string,
        documentIdsList: Array<string>,
        similarityThreshold: number,
        vectorSimilarityWeight: number,
        topK: number,
        highlight?: boolean,
        metadataCondition?: google_protobuf_struct_pb.Struct.AsObject,
        useKg?: boolean,
        crossLanguagesList: Array<string>,
        keyword?: boolean,
        rerankId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagRetrievalResponse extends jspb.Message { 
    clearChunksList(): void;
    getChunksList(): Array<RagChunk>;
    setChunksList(value: Array<RagChunk>): RagRetrievalResponse;
    addChunks(value?: RagChunk, index?: number): RagChunk;
    clearDocAggsList(): void;
    getDocAggsList(): Array<google_protobuf_struct_pb.Struct>;
    setDocAggsList(value: Array<google_protobuf_struct_pb.Struct>): RagRetrievalResponse;
    addDocAggs(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;
    getTotal(): number;
    setTotal(value: number): RagRetrievalResponse;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagRetrievalResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRetrievalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagRetrievalResponse): RagRetrievalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRetrievalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRetrievalResponse;
    static deserializeBinaryFromReader(message: RagRetrievalResponse, reader: jspb.BinaryReader): RagRetrievalResponse;
}

export namespace RagRetrievalResponse {
    export type AsObject = {
        chunksList: Array<RagChunk.AsObject>,
        docAggsList: Array<google_protobuf_struct_pb.Struct.AsObject>,
        total: number,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagChat extends jspb.Message { 
    getId(): string;
    setId(value: string): RagChat;
    getName(): string;
    setName(value: string): RagChat;
    getDescription(): string;
    setDescription(value: string): RagChat;
    getAvatar(): string;
    setAvatar(value: string): RagChat;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagChat;
    addDatasetIds(value: string, index?: number): string;
    clearDatasetsList(): void;
    getDatasetsList(): Array<RagDataset>;
    setDatasetsList(value: Array<RagDataset>): RagChat;
    addDatasets(value?: RagDataset, index?: number): RagDataset;

    hasLlm(): boolean;
    clearLlm(): void;
    getLlm(): RagLLMSetting | undefined;
    setLlm(value?: RagLLMSetting): RagChat;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): RagPromptConfig | undefined;
    setPrompt(value?: RagPromptConfig): RagChat;
    getCreateTime(): number;
    setCreateTime(value: number): RagChat;
    getCreateDate(): string;
    setCreateDate(value: string): RagChat;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagChat;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagChat;
    getDoRefer(): string;
    setDoRefer(value: string): RagChat;
    getLanguage(): string;
    setLanguage(value: string): RagChat;
    getPromptType(): string;
    setPromptType(value: string): RagChat;
    getStatus(): string;
    setStatus(value: string): RagChat;
    getTenantId(): string;
    setTenantId(value: string): RagChat;
    getTopK(): number;
    setTopK(value: number): RagChat;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChat.AsObject;
    static toObject(includeInstance: boolean, msg: RagChat): RagChat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChat;
    static deserializeBinaryFromReader(message: RagChat, reader: jspb.BinaryReader): RagChat;
}

export namespace RagChat {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        avatar: string,
        datasetIdsList: Array<string>,
        datasetsList: Array<RagDataset.AsObject>,
        llm?: RagLLMSetting.AsObject,
        prompt?: RagPromptConfig.AsObject,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
        doRefer: string,
        language: string,
        promptType: string,
        status: string,
        tenantId: string,
        topK: number,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagLLMSetting extends jspb.Message { 
    getModelName(): string;
    setModelName(value: string): RagLLMSetting;
    getTemperature(): number;
    setTemperature(value: number): RagLLMSetting;
    getTopP(): number;
    setTopP(value: number): RagLLMSetting;
    getFrequencyPenalty(): number;
    setFrequencyPenalty(value: number): RagLLMSetting;
    getPresencePenalty(): number;
    setPresencePenalty(value: number): RagLLMSetting;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagLLMSetting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagLLMSetting.AsObject;
    static toObject(includeInstance: boolean, msg: RagLLMSetting): RagLLMSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagLLMSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagLLMSetting;
    static deserializeBinaryFromReader(message: RagLLMSetting, reader: jspb.BinaryReader): RagLLMSetting;
}

export namespace RagLLMSetting {
    export type AsObject = {
        modelName: string,
        temperature: number,
        topP: number,
        frequencyPenalty: number,
        presencePenalty: number,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagPromptConfig extends jspb.Message { 
    getPrompt(): string;
    setPrompt(value: string): RagPromptConfig;
    clearVariablesList(): void;
    getVariablesList(): Array<RagPromptVariable>;
    setVariablesList(value: Array<RagPromptVariable>): RagPromptConfig;
    addVariables(value?: RagPromptVariable, index?: number): RagPromptVariable;
    getOpener(): string;
    setOpener(value: string): RagPromptConfig;

    hasShowQuote(): boolean;
    clearShowQuote(): void;
    getShowQuote(): boolean | undefined;
    setShowQuote(value: boolean): RagPromptConfig;
    getEmptyResponse(): string;
    setEmptyResponse(value: string): RagPromptConfig;

    hasTts(): boolean;
    clearTts(): void;
    getTts(): boolean | undefined;
    setTts(value: boolean): RagPromptConfig;

    hasRefineMultiturn(): boolean;
    clearRefineMultiturn(): void;
    getRefineMultiturn(): boolean | undefined;
    setRefineMultiturn(value: boolean): RagPromptConfig;
    getSimilarityThreshold(): number;
    setSimilarityThreshold(value: number): RagPromptConfig;
    getKeywordsSimilarityWeight(): number;
    setKeywordsSimilarityWeight(value: number): RagPromptConfig;
    getTopN(): number;
    setTopN(value: number): RagPromptConfig;
    getTopK(): number;
    setTopK(value: number): RagPromptConfig;
    getRerankModel(): string;
    setRerankModel(value: string): RagPromptConfig;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagPromptConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagPromptConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagPromptConfig): RagPromptConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagPromptConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagPromptConfig;
    static deserializeBinaryFromReader(message: RagPromptConfig, reader: jspb.BinaryReader): RagPromptConfig;
}

export namespace RagPromptConfig {
    export type AsObject = {
        prompt: string,
        variablesList: Array<RagPromptVariable.AsObject>,
        opener: string,
        showQuote?: boolean,
        emptyResponse: string,
        tts?: boolean,
        refineMultiturn?: boolean,
        similarityThreshold: number,
        keywordsSimilarityWeight: number,
        topN: number,
        topK: number,
        rerankModel: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagPromptVariable extends jspb.Message { 
    getKey(): string;
    setKey(value: string): RagPromptVariable;

    hasOptional(): boolean;
    clearOptional(): void;
    getOptional(): boolean | undefined;
    setOptional(value: boolean): RagPromptVariable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagPromptVariable.AsObject;
    static toObject(includeInstance: boolean, msg: RagPromptVariable): RagPromptVariable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagPromptVariable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagPromptVariable;
    static deserializeBinaryFromReader(message: RagPromptVariable, reader: jspb.BinaryReader): RagPromptVariable;
}

export namespace RagPromptVariable {
    export type AsObject = {
        key: string,
        optional?: boolean,
    }
}

export class RagCreateChatRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateChatRequest;
    getName(): string;
    setName(value: string): RagCreateChatRequest;
    getDescription(): string;
    setDescription(value: string): RagCreateChatRequest;
    getAvatar(): string;
    setAvatar(value: string): RagCreateChatRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagCreateChatRequest;
    addDatasetIds(value: string, index?: number): string;

    hasLlm(): boolean;
    clearLlm(): void;
    getLlm(): RagLLMSetting | undefined;
    setLlm(value?: RagLLMSetting): RagCreateChatRequest;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): RagPromptConfig | undefined;
    setPrompt(value?: RagPromptConfig): RagCreateChatRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateChatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateChatRequest): RagCreateChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateChatRequest;
    static deserializeBinaryFromReader(message: RagCreateChatRequest, reader: jspb.BinaryReader): RagCreateChatRequest;
}

export namespace RagCreateChatRequest {
    export type AsObject = {
        parent: string,
        name: string,
        description: string,
        avatar: string,
        datasetIdsList: Array<string>,
        llm?: RagLLMSetting.AsObject,
        prompt?: RagPromptConfig.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagUpdateChatRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateChatRequest;
    getChatId(): string;
    setChatId(value: string): RagUpdateChatRequest;
    getName(): string;
    setName(value: string): RagUpdateChatRequest;
    getDescription(): string;
    setDescription(value: string): RagUpdateChatRequest;
    getAvatar(): string;
    setAvatar(value: string): RagUpdateChatRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagUpdateChatRequest;
    addDatasetIds(value: string, index?: number): string;

    hasLlm(): boolean;
    clearLlm(): void;
    getLlm(): RagLLMSetting | undefined;
    setLlm(value?: RagLLMSetting): RagUpdateChatRequest;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): RagPromptConfig | undefined;
    setPrompt(value?: RagPromptConfig): RagUpdateChatRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateChatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateChatRequest): RagUpdateChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateChatRequest;
    static deserializeBinaryFromReader(message: RagUpdateChatRequest, reader: jspb.BinaryReader): RagUpdateChatRequest;
}

export namespace RagUpdateChatRequest {
    export type AsObject = {
        parent: string,
        chatId: string,
        name: string,
        description: string,
        avatar: string,
        datasetIdsList: Array<string>,
        llm?: RagLLMSetting.AsObject,
        prompt?: RagPromptConfig.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDeleteChatsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteChatsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RagDeleteChatsRequest;
    addIds(value: string, index?: number): string;

    hasDeleteAll(): boolean;
    clearDeleteAll(): void;
    getDeleteAll(): boolean | undefined;
    setDeleteAll(value: boolean): RagDeleteChatsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteChatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteChatsRequest): RagDeleteChatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteChatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteChatsRequest;
    static deserializeBinaryFromReader(message: RagDeleteChatsRequest, reader: jspb.BinaryReader): RagDeleteChatsRequest;
}

export namespace RagDeleteChatsRequest {
    export type AsObject = {
        parent: string,
        idsList: Array<string>,
        deleteAll?: boolean,
    }
}

export class RagListChatsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListChatsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): RagPagination | undefined;
    setPagination(value?: RagPagination): RagListChatsRequest;
    getId(): string;
    setId(value: string): RagListChatsRequest;
    getName(): string;
    setName(value: string): RagListChatsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListChatsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListChatsRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListChatsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListChatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListChatsRequest): RagListChatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListChatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListChatsRequest;
    static deserializeBinaryFromReader(message: RagListChatsRequest, reader: jspb.BinaryReader): RagListChatsRequest;
}

export namespace RagListChatsRequest {
    export type AsObject = {
        parent: string,
        pagination?: RagPagination.AsObject,
        id: string,
        name: string,
        orderby: string,
        desc?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagChatList extends jspb.Message { 
    clearChatsList(): void;
    getChatsList(): Array<RagChat>;
    setChatsList(value: Array<RagChat>): RagChatList;
    addChats(value?: RagChat, index?: number): RagChat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatList.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatList): RagChatList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatList;
    static deserializeBinaryFromReader(message: RagChatList, reader: jspb.BinaryReader): RagChatList;
}

export namespace RagChatList {
    export type AsObject = {
        chatsList: Array<RagChat.AsObject>,
    }
}

export class RagChatSession extends jspb.Message { 
    getId(): string;
    setId(value: string): RagChatSession;
    getChatId(): string;
    setChatId(value: string): RagChatSession;
    getName(): string;
    setName(value: string): RagChatSession;
    clearMessagesList(): void;
    getMessagesList(): Array<RagMessage>;
    setMessagesList(value: Array<RagMessage>): RagChatSession;
    addMessages(value?: RagMessage, index?: number): RagMessage;
    getCreateTime(): number;
    setCreateTime(value: number): RagChatSession;
    getCreateDate(): string;
    setCreateDate(value: string): RagChatSession;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagChatSession;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagChatSession;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChatSession;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatSession.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatSession): RagChatSession.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatSession, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatSession;
    static deserializeBinaryFromReader(message: RagChatSession, reader: jspb.BinaryReader): RagChatSession;
}

export namespace RagChatSession {
    export type AsObject = {
        id: string,
        chatId: string,
        name: string,
        messagesList: Array<RagMessage.AsObject>,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagMessage extends jspb.Message { 
    getRole(): RagMessageRole;
    setRole(value: RagMessageRole): RagMessage;
    getContent(): string;
    setContent(value: string): RagMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagMessage.AsObject;
    static toObject(includeInstance: boolean, msg: RagMessage): RagMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagMessage;
    static deserializeBinaryFromReader(message: RagMessage, reader: jspb.BinaryReader): RagMessage;
}

export namespace RagMessage {
    export type AsObject = {
        role: RagMessageRole,
        content: string,
    }
}

export class RagCreateChatSessionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateChatSessionRequest;
    getChatId(): string;
    setChatId(value: string): RagCreateChatSessionRequest;
    getName(): string;
    setName(value: string): RagCreateChatSessionRequest;
    getUserId(): string;
    setUserId(value: string): RagCreateChatSessionRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateChatSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateChatSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateChatSessionRequest): RagCreateChatSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateChatSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateChatSessionRequest;
    static deserializeBinaryFromReader(message: RagCreateChatSessionRequest, reader: jspb.BinaryReader): RagCreateChatSessionRequest;
}

export namespace RagCreateChatSessionRequest {
    export type AsObject = {
        parent: string,
        chatId: string,
        name: string,
        userId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAgentSession extends jspb.Message { 
    getId(): string;
    setId(value: string): RagAgentSession;
    getAgentId(): string;
    setAgentId(value: string): RagAgentSession;
    getUserId(): string;
    setUserId(value: string): RagAgentSession;
    clearMessageList(): void;
    getMessageList(): Array<RagMessage>;
    setMessageList(value: Array<RagMessage>): RagAgentSession;
    addMessage(value?: RagMessage, index?: number): RagMessage;
    getSource(): string;
    setSource(value: string): RagAgentSession;

    hasDsl(): boolean;
    clearDsl(): void;
    getDsl(): google_protobuf_struct_pb.Struct | undefined;
    setDsl(value?: google_protobuf_struct_pb.Struct): RagAgentSession;
    getCreateTime(): number;
    setCreateTime(value: number): RagAgentSession;
    getCreateDate(): string;
    setCreateDate(value: string): RagAgentSession;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagAgentSession;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagAgentSession;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentSession;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgentSession.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgentSession): RagAgentSession.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgentSession, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgentSession;
    static deserializeBinaryFromReader(message: RagAgentSession, reader: jspb.BinaryReader): RagAgentSession;
}

export namespace RagAgentSession {
    export type AsObject = {
        id: string,
        agentId: string,
        userId: string,
        messageList: Array<RagMessage.AsObject>,
        source: string,
        dsl?: google_protobuf_struct_pb.Struct.AsObject,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagCreateAgentSessionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateAgentSessionRequest;
    getAgentId(): string;
    setAgentId(value: string): RagCreateAgentSessionRequest;
    getUserId(): string;
    setUserId(value: string): RagCreateAgentSessionRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateAgentSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateAgentSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateAgentSessionRequest): RagCreateAgentSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateAgentSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateAgentSessionRequest;
    static deserializeBinaryFromReader(message: RagCreateAgentSessionRequest, reader: jspb.BinaryReader): RagCreateAgentSessionRequest;
}

export namespace RagCreateAgentSessionRequest {
    export type AsObject = {
        parent: string,
        agentId: string,
        userId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagUpdateChatSessionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateChatSessionRequest;
    getChatId(): string;
    setChatId(value: string): RagUpdateChatSessionRequest;
    getSessionId(): string;
    setSessionId(value: string): RagUpdateChatSessionRequest;
    getName(): string;
    setName(value: string): RagUpdateChatSessionRequest;
    getUserId(): string;
    setUserId(value: string): RagUpdateChatSessionRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateChatSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateChatSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateChatSessionRequest): RagUpdateChatSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateChatSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateChatSessionRequest;
    static deserializeBinaryFromReader(message: RagUpdateChatSessionRequest, reader: jspb.BinaryReader): RagUpdateChatSessionRequest;
}

export namespace RagUpdateChatSessionRequest {
    export type AsObject = {
        parent: string,
        chatId: string,
        sessionId: string,
        name: string,
        userId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagListChatSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListChatSessionsRequest;
    getChatId(): string;
    setChatId(value: string): RagListChatSessionsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): RagPagination | undefined;
    setPagination(value?: RagPagination): RagListChatSessionsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListChatSessionsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListChatSessionsRequest;
    getName(): string;
    setName(value: string): RagListChatSessionsRequest;
    getId(): string;
    setId(value: string): RagListChatSessionsRequest;
    getUserId(): string;
    setUserId(value: string): RagListChatSessionsRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListChatSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListChatSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListChatSessionsRequest): RagListChatSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListChatSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListChatSessionsRequest;
    static deserializeBinaryFromReader(message: RagListChatSessionsRequest, reader: jspb.BinaryReader): RagListChatSessionsRequest;
}

export namespace RagListChatSessionsRequest {
    export type AsObject = {
        parent: string,
        chatId: string,
        pagination?: RagPagination.AsObject,
        orderby: string,
        desc?: boolean,
        name: string,
        id: string,
        userId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagChatSessionList extends jspb.Message { 
    clearChatSessionsList(): void;
    getChatSessionsList(): Array<RagChatSession>;
    setChatSessionsList(value: Array<RagChatSession>): RagChatSessionList;
    addChatSessions(value?: RagChatSession, index?: number): RagChatSession;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatSessionList.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatSessionList): RagChatSessionList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatSessionList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatSessionList;
    static deserializeBinaryFromReader(message: RagChatSessionList, reader: jspb.BinaryReader): RagChatSessionList;
}

export namespace RagChatSessionList {
    export type AsObject = {
        chatSessionsList: Array<RagChatSession.AsObject>,
    }
}

export class RagListAgentSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListAgentSessionsRequest;
    getAgentId(): string;
    setAgentId(value: string): RagListAgentSessionsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): RagPagination | undefined;
    setPagination(value?: RagPagination): RagListAgentSessionsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListAgentSessionsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListAgentSessionsRequest;
    getId(): string;
    setId(value: string): RagListAgentSessionsRequest;
    getUserId(): string;
    setUserId(value: string): RagListAgentSessionsRequest;

    hasDsl(): boolean;
    clearDsl(): void;
    getDsl(): boolean | undefined;
    setDsl(value: boolean): RagListAgentSessionsRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListAgentSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListAgentSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListAgentSessionsRequest): RagListAgentSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListAgentSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListAgentSessionsRequest;
    static deserializeBinaryFromReader(message: RagListAgentSessionsRequest, reader: jspb.BinaryReader): RagListAgentSessionsRequest;
}

export namespace RagListAgentSessionsRequest {
    export type AsObject = {
        parent: string,
        agentId: string,
        pagination?: RagPagination.AsObject,
        orderby: string,
        desc?: boolean,
        id: string,
        userId: string,
        dsl?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAgentSessionList extends jspb.Message { 
    clearAgentSessionsList(): void;
    getAgentSessionsList(): Array<RagAgentSession>;
    setAgentSessionsList(value: Array<RagAgentSession>): RagAgentSessionList;
    addAgentSessions(value?: RagAgentSession, index?: number): RagAgentSession;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgentSessionList.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgentSessionList): RagAgentSessionList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgentSessionList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgentSessionList;
    static deserializeBinaryFromReader(message: RagAgentSessionList, reader: jspb.BinaryReader): RagAgentSessionList;
}

export namespace RagAgentSessionList {
    export type AsObject = {
        agentSessionsList: Array<RagAgentSession.AsObject>,
    }
}

export class RagDeleteChatSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteChatSessionsRequest;
    getChatId(): string;
    setChatId(value: string): RagDeleteChatSessionsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RagDeleteChatSessionsRequest;
    addIds(value: string, index?: number): string;

    hasDeleteAll(): boolean;
    clearDeleteAll(): void;
    getDeleteAll(): boolean | undefined;
    setDeleteAll(value: boolean): RagDeleteChatSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteChatSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteChatSessionsRequest): RagDeleteChatSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteChatSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteChatSessionsRequest;
    static deserializeBinaryFromReader(message: RagDeleteChatSessionsRequest, reader: jspb.BinaryReader): RagDeleteChatSessionsRequest;
}

export namespace RagDeleteChatSessionsRequest {
    export type AsObject = {
        parent: string,
        chatId: string,
        idsList: Array<string>,
        deleteAll?: boolean,
    }
}

export class RagDeleteAgentSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteAgentSessionsRequest;
    getAgentId(): string;
    setAgentId(value: string): RagDeleteAgentSessionsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RagDeleteAgentSessionsRequest;
    addIds(value: string, index?: number): string;

    hasDeleteAll(): boolean;
    clearDeleteAll(): void;
    getDeleteAll(): boolean | undefined;
    setDeleteAll(value: boolean): RagDeleteAgentSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteAgentSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteAgentSessionsRequest): RagDeleteAgentSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteAgentSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteAgentSessionsRequest;
    static deserializeBinaryFromReader(message: RagDeleteAgentSessionsRequest, reader: jspb.BinaryReader): RagDeleteAgentSessionsRequest;
}

export namespace RagDeleteAgentSessionsRequest {
    export type AsObject = {
        parent: string,
        agentId: string,
        idsList: Array<string>,
        deleteAll?: boolean,
    }
}

export class RagChatCompletionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagChatCompletionRequest;
    getChatId(): string;
    setChatId(value: string): RagChatCompletionRequest;
    getSessionId(): string;
    setSessionId(value: string): RagChatCompletionRequest;
    getQuestion(): string;
    setQuestion(value: string): RagChatCompletionRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): boolean | undefined;
    setStream(value: boolean): RagChatCompletionRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChatCompletionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatCompletionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatCompletionRequest): RagChatCompletionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatCompletionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatCompletionRequest;
    static deserializeBinaryFromReader(message: RagChatCompletionRequest, reader: jspb.BinaryReader): RagChatCompletionRequest;
}

export namespace RagChatCompletionRequest {
    export type AsObject = {
        parent: string,
        chatId: string,
        sessionId: string,
        question: string,
        stream?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagChatCompletionResponse extends jspb.Message { 
    getAnswer(): string;
    setAnswer(value: string): RagChatCompletionResponse;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): google_protobuf_struct_pb.Struct | undefined;
    setReference(value?: google_protobuf_struct_pb.Struct): RagChatCompletionResponse;
    getAudioBinary(): string;
    setAudioBinary(value: string): RagChatCompletionResponse;
    getId(): string;
    setId(value: string): RagChatCompletionResponse;
    getSessionId(): string;
    setSessionId(value: string): RagChatCompletionResponse;
    getPrompt(): string;
    setPrompt(value: string): RagChatCompletionResponse;
    getCreatedAt(): number;
    setCreatedAt(value: number): RagChatCompletionResponse;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChatCompletionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatCompletionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatCompletionResponse): RagChatCompletionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatCompletionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatCompletionResponse;
    static deserializeBinaryFromReader(message: RagChatCompletionResponse, reader: jspb.BinaryReader): RagChatCompletionResponse;
}

export namespace RagChatCompletionResponse {
    export type AsObject = {
        answer: string,
        reference?: google_protobuf_struct_pb.Struct.AsObject,
        audioBinary: string,
        id: string,
        sessionId: string,
        prompt: string,
        createdAt: number,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagOpenAiChatCompletionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagOpenAiChatCompletionRequest;
    getChatId(): string;
    setChatId(value: string): RagOpenAiChatCompletionRequest;
    getModel(): string;
    setModel(value: string): RagOpenAiChatCompletionRequest;
    clearMessagesList(): void;
    getMessagesList(): Array<RagMessage>;
    setMessagesList(value: Array<RagMessage>): RagOpenAiChatCompletionRequest;
    addMessages(value?: RagMessage, index?: number): RagMessage;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): boolean | undefined;
    setStream(value: boolean): RagOpenAiChatCompletionRequest;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): boolean | undefined;
    setReference(value: boolean): RagOpenAiChatCompletionRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatCompletionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagOpenAiChatCompletionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagOpenAiChatCompletionRequest): RagOpenAiChatCompletionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagOpenAiChatCompletionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagOpenAiChatCompletionRequest;
    static deserializeBinaryFromReader(message: RagOpenAiChatCompletionRequest, reader: jspb.BinaryReader): RagOpenAiChatCompletionRequest;
}

export namespace RagOpenAiChatCompletionRequest {
    export type AsObject = {
        parent: string,
        chatId: string,
        model: string,
        messagesList: Array<RagMessage.AsObject>,
        stream?: boolean,
        reference?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagOpenAiChatCompletionResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): RagOpenAiChatCompletionResponse;
    getObject(): string;
    setObject(value: string): RagOpenAiChatCompletionResponse;
    getCreated(): number;
    setCreated(value: number): RagOpenAiChatCompletionResponse;
    getModel(): string;
    setModel(value: string): RagOpenAiChatCompletionResponse;
    getSystemFingerprint(): string;
    setSystemFingerprint(value: string): RagOpenAiChatCompletionResponse;
    clearChoicesList(): void;
    getChoicesList(): Array<RagOpenAiChatChoice>;
    setChoicesList(value: Array<RagOpenAiChatChoice>): RagOpenAiChatCompletionResponse;
    addChoices(value?: RagOpenAiChatChoice, index?: number): RagOpenAiChatChoice;

    hasUsage(): boolean;
    clearUsage(): void;
    getUsage(): RagOpenAiChatUsage | undefined;
    setUsage(value?: RagOpenAiChatUsage): RagOpenAiChatCompletionResponse;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatCompletionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagOpenAiChatCompletionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagOpenAiChatCompletionResponse): RagOpenAiChatCompletionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagOpenAiChatCompletionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagOpenAiChatCompletionResponse;
    static deserializeBinaryFromReader(message: RagOpenAiChatCompletionResponse, reader: jspb.BinaryReader): RagOpenAiChatCompletionResponse;
}

export namespace RagOpenAiChatCompletionResponse {
    export type AsObject = {
        id: string,
        object: string,
        created: number,
        model: string,
        systemFingerprint: string,
        choicesList: Array<RagOpenAiChatChoice.AsObject>,
        usage?: RagOpenAiChatUsage.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagOpenAiChatChoice extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): RagOpenAiChatChoice;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): RagOpenAiChatContent | undefined;
    setMessage(value?: RagOpenAiChatContent): RagOpenAiChatChoice;

    hasDelta(): boolean;
    clearDelta(): void;
    getDelta(): RagOpenAiChatContent | undefined;
    setDelta(value?: RagOpenAiChatContent): RagOpenAiChatChoice;
    getFinishReason(): string;
    setFinishReason(value: string): RagOpenAiChatChoice;

    hasLogprobs(): boolean;
    clearLogprobs(): void;
    getLogprobs(): google_protobuf_struct_pb.Value | undefined;
    setLogprobs(value?: google_protobuf_struct_pb.Value): RagOpenAiChatChoice;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatChoice;

    getContentCase(): RagOpenAiChatChoice.ContentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagOpenAiChatChoice.AsObject;
    static toObject(includeInstance: boolean, msg: RagOpenAiChatChoice): RagOpenAiChatChoice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagOpenAiChatChoice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagOpenAiChatChoice;
    static deserializeBinaryFromReader(message: RagOpenAiChatChoice, reader: jspb.BinaryReader): RagOpenAiChatChoice;
}

export namespace RagOpenAiChatChoice {
    export type AsObject = {
        index: number,
        message?: RagOpenAiChatContent.AsObject,
        delta?: RagOpenAiChatContent.AsObject,
        finishReason: string,
        logprobs?: google_protobuf_struct_pb.Value.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }

    export enum ContentCase {
        CONTENT_NOT_SET = 0,
        MESSAGE = 2,
        DELTA = 3,
    }

}

export class RagOpenAiChatContent extends jspb.Message { 
    getRole(): string;
    setRole(value: string): RagOpenAiChatContent;
    getContent(): string;
    setContent(value: string): RagOpenAiChatContent;
    getReasoningContent(): string;
    setReasoningContent(value: string): RagOpenAiChatContent;

    hasFunctionCall(): boolean;
    clearFunctionCall(): void;
    getFunctionCall(): google_protobuf_struct_pb.Value | undefined;
    setFunctionCall(value?: google_protobuf_struct_pb.Value): RagOpenAiChatContent;

    hasToolCalls(): boolean;
    clearToolCalls(): void;
    getToolCalls(): google_protobuf_struct_pb.Value | undefined;
    setToolCalls(value?: google_protobuf_struct_pb.Value): RagOpenAiChatContent;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): google_protobuf_struct_pb.Value | undefined;
    setReference(value?: google_protobuf_struct_pb.Value): RagOpenAiChatContent;
    getFinalContent(): string;
    setFinalContent(value: string): RagOpenAiChatContent;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagOpenAiChatContent.AsObject;
    static toObject(includeInstance: boolean, msg: RagOpenAiChatContent): RagOpenAiChatContent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagOpenAiChatContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagOpenAiChatContent;
    static deserializeBinaryFromReader(message: RagOpenAiChatContent, reader: jspb.BinaryReader): RagOpenAiChatContent;
}

export namespace RagOpenAiChatContent {
    export type AsObject = {
        role: string,
        content: string,
        reasoningContent: string,
        functionCall?: google_protobuf_struct_pb.Value.AsObject,
        toolCalls?: google_protobuf_struct_pb.Value.AsObject,
        reference?: google_protobuf_struct_pb.Value.AsObject,
        finalContent: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagOpenAiChatUsage extends jspb.Message { 
    getPromptTokens(): number;
    setPromptTokens(value: number): RagOpenAiChatUsage;
    getCompletionTokens(): number;
    setCompletionTokens(value: number): RagOpenAiChatUsage;
    getTotalTokens(): number;
    setTotalTokens(value: number): RagOpenAiChatUsage;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatUsage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagOpenAiChatUsage.AsObject;
    static toObject(includeInstance: boolean, msg: RagOpenAiChatUsage): RagOpenAiChatUsage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagOpenAiChatUsage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagOpenAiChatUsage;
    static deserializeBinaryFromReader(message: RagOpenAiChatUsage, reader: jspb.BinaryReader): RagOpenAiChatUsage;
}

export namespace RagOpenAiChatUsage {
    export type AsObject = {
        promptTokens: number,
        completionTokens: number,
        totalTokens: number,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAgentCompletionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAgentCompletionRequest;
    getAgentId(): string;
    setAgentId(value: string): RagAgentCompletionRequest;
    getSessionId(): string;
    setSessionId(value: string): RagAgentCompletionRequest;
    getQuestion(): string;
    setQuestion(value: string): RagAgentCompletionRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): boolean | undefined;
    setStream(value: boolean): RagAgentCompletionRequest;
    clearFilesList(): void;
    getFilesList(): Array<RagFile>;
    setFilesList(value: Array<RagFile>): RagAgentCompletionRequest;
    addFiles(value?: RagFile, index?: number): RagFile;

    hasInputs(): boolean;
    clearInputs(): void;
    getInputs(): google_protobuf_struct_pb.Struct | undefined;
    setInputs(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionRequest;
    getUserId(): string;
    setUserId(value: string): RagAgentCompletionRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgentCompletionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgentCompletionRequest): RagAgentCompletionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgentCompletionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgentCompletionRequest;
    static deserializeBinaryFromReader(message: RagAgentCompletionRequest, reader: jspb.BinaryReader): RagAgentCompletionRequest;
}

export namespace RagAgentCompletionRequest {
    export type AsObject = {
        parent: string,
        agentId: string,
        sessionId: string,
        question: string,
        stream?: boolean,
        filesList: Array<RagFile.AsObject>,
        inputs?: google_protobuf_struct_pb.Struct.AsObject,
        userId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAgentCompletionResponse extends jspb.Message { 
    getEvent(): RagAgentEventType;
    setEvent(value: RagAgentEventType): RagAgentCompletionResponse;
    getMessageId(): string;
    setMessageId(value: string): RagAgentCompletionResponse;
    getCreatedAt(): number;
    setCreatedAt(value: number): RagAgentCompletionResponse;
    getTaskId(): string;
    setTaskId(value: string): RagAgentCompletionResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): RagAgentCompletionData | undefined;
    setData(value?: RagAgentCompletionData): RagAgentCompletionResponse;
    getSessionId(): string;
    setSessionId(value: string): RagAgentCompletionResponse;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgentCompletionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgentCompletionResponse): RagAgentCompletionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgentCompletionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgentCompletionResponse;
    static deserializeBinaryFromReader(message: RagAgentCompletionResponse, reader: jspb.BinaryReader): RagAgentCompletionResponse;
}

export namespace RagAgentCompletionResponse {
    export type AsObject = {
        event: RagAgentEventType,
        messageId: string,
        createdAt: number,
        taskId: string,
        data?: RagAgentCompletionData.AsObject,
        sessionId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAgentCompletionData extends jspb.Message { 
    getContent(): string;
    setContent(value: string): RagAgentCompletionData;

    hasInputs(): boolean;
    clearInputs(): void;
    getInputs(): google_protobuf_struct_pb.Struct | undefined;
    setInputs(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionData;

    hasOutputs(): boolean;
    clearOutputs(): void;
    getOutputs(): google_protobuf_struct_pb.Struct | undefined;
    setOutputs(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionData;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): google_protobuf_struct_pb.Struct | undefined;
    setReference(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionData;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgentCompletionData.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgentCompletionData): RagAgentCompletionData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgentCompletionData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgentCompletionData;
    static deserializeBinaryFromReader(message: RagAgentCompletionData, reader: jspb.BinaryReader): RagAgentCompletionData;
}

export namespace RagAgentCompletionData {
    export type AsObject = {
        content: string,
        inputs?: google_protobuf_struct_pb.Struct.AsObject,
        outputs?: google_protobuf_struct_pb.Struct.AsObject,
        reference?: google_protobuf_struct_pb.Struct.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagOpenAiAgentCompletionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagOpenAiAgentCompletionRequest;
    getAgentId(): string;
    setAgentId(value: string): RagOpenAiAgentCompletionRequest;
    getModel(): string;
    setModel(value: string): RagOpenAiAgentCompletionRequest;
    clearMessagesList(): void;
    getMessagesList(): Array<RagMessage>;
    setMessagesList(value: Array<RagMessage>): RagOpenAiAgentCompletionRequest;
    addMessages(value?: RagMessage, index?: number): RagMessage;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): boolean | undefined;
    setStream(value: boolean): RagOpenAiAgentCompletionRequest;
    getSessionId(): string;
    setSessionId(value: string): RagOpenAiAgentCompletionRequest;
    getId(): string;
    setId(value: string): RagOpenAiAgentCompletionRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiAgentCompletionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagOpenAiAgentCompletionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagOpenAiAgentCompletionRequest): RagOpenAiAgentCompletionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagOpenAiAgentCompletionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagOpenAiAgentCompletionRequest;
    static deserializeBinaryFromReader(message: RagOpenAiAgentCompletionRequest, reader: jspb.BinaryReader): RagOpenAiAgentCompletionRequest;
}

export namespace RagOpenAiAgentCompletionRequest {
    export type AsObject = {
        parent: string,
        agentId: string,
        model: string,
        messagesList: Array<RagMessage.AsObject>,
        stream?: boolean,
        sessionId: string,
        id: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAgent extends jspb.Message { 
    getId(): string;
    setId(value: string): RagAgent;
    getTitle(): string;
    setTitle(value: string): RagAgent;
    getDescription(): string;
    setDescription(value: string): RagAgent;
    getAvatar(): string;
    setAvatar(value: string): RagAgent;

    hasDsl(): boolean;
    clearDsl(): void;
    getDsl(): google_protobuf_struct_pb.Struct | undefined;
    setDsl(value?: google_protobuf_struct_pb.Struct): RagAgent;
    getCreateTime(): number;
    setCreateTime(value: number): RagAgent;
    getCreateDate(): string;
    setCreateDate(value: string): RagAgent;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagAgent;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagAgent;
    getUserId(): string;
    setUserId(value: string): RagAgent;
    getCanvasType(): string;
    setCanvasType(value: string): RagAgent;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgent.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgent): RagAgent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgent;
    static deserializeBinaryFromReader(message: RagAgent, reader: jspb.BinaryReader): RagAgent;
}

export namespace RagAgent {
    export type AsObject = {
        id: string,
        title: string,
        description: string,
        avatar: string,
        dsl?: google_protobuf_struct_pb.Struct.AsObject,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
        userId: string,
        canvasType: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagCreateAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateAgentRequest;
    getTitle(): string;
    setTitle(value: string): RagCreateAgentRequest;
    getDescription(): string;
    setDescription(value: string): RagCreateAgentRequest;

    hasDsl(): boolean;
    clearDsl(): void;
    getDsl(): google_protobuf_struct_pb.Struct | undefined;
    setDsl(value?: google_protobuf_struct_pb.Struct): RagCreateAgentRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateAgentRequest): RagCreateAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateAgentRequest;
    static deserializeBinaryFromReader(message: RagCreateAgentRequest, reader: jspb.BinaryReader): RagCreateAgentRequest;
}

export namespace RagCreateAgentRequest {
    export type AsObject = {
        parent: string,
        title: string,
        description: string,
        dsl?: google_protobuf_struct_pb.Struct.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagUpdateAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateAgentRequest;
    getAgentId(): string;
    setAgentId(value: string): RagUpdateAgentRequest;
    getTitle(): string;
    setTitle(value: string): RagUpdateAgentRequest;
    getDescription(): string;
    setDescription(value: string): RagUpdateAgentRequest;

    hasDsl(): boolean;
    clearDsl(): void;
    getDsl(): google_protobuf_struct_pb.Struct | undefined;
    setDsl(value?: google_protobuf_struct_pb.Struct): RagUpdateAgentRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateAgentRequest): RagUpdateAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateAgentRequest;
    static deserializeBinaryFromReader(message: RagUpdateAgentRequest, reader: jspb.BinaryReader): RagUpdateAgentRequest;
}

export namespace RagUpdateAgentRequest {
    export type AsObject = {
        parent: string,
        agentId: string,
        title: string,
        description: string,
        dsl?: google_protobuf_struct_pb.Struct.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDeleteAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteAgentRequest;
    getAgentId(): string;
    setAgentId(value: string): RagDeleteAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteAgentRequest): RagDeleteAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteAgentRequest;
    static deserializeBinaryFromReader(message: RagDeleteAgentRequest, reader: jspb.BinaryReader): RagDeleteAgentRequest;
}

export namespace RagDeleteAgentRequest {
    export type AsObject = {
        parent: string,
        agentId: string,
    }
}

export class RagListAgentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListAgentsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): RagPagination | undefined;
    setPagination(value?: RagPagination): RagListAgentsRequest;
    getTitle(): string;
    setTitle(value: string): RagListAgentsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListAgentsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListAgentsRequest;
    getId(): string;
    setId(value: string): RagListAgentsRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListAgentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListAgentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListAgentsRequest): RagListAgentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListAgentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListAgentsRequest;
    static deserializeBinaryFromReader(message: RagListAgentsRequest, reader: jspb.BinaryReader): RagListAgentsRequest;
}

export namespace RagListAgentsRequest {
    export type AsObject = {
        parent: string,
        pagination?: RagPagination.AsObject,
        title: string,
        orderby: string,
        desc?: boolean,
        id: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAgentList extends jspb.Message { 
    clearAgentsList(): void;
    getAgentsList(): Array<RagAgent>;
    setAgentsList(value: Array<RagAgent>): RagAgentList;
    addAgents(value?: RagAgent, index?: number): RagAgent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgentList.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgentList): RagAgentList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgentList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgentList;
    static deserializeBinaryFromReader(message: RagAgentList, reader: jspb.BinaryReader): RagAgentList;
}

export namespace RagAgentList {
    export type AsObject = {
        agentsList: Array<RagAgent.AsObject>,
    }
}

export class RagFile extends jspb.Message { 
    getId(): string;
    setId(value: string): RagFile;
    getName(): string;
    setName(value: string): RagFile;
    getType(): string;
    setType(value: string): RagFile;
    getSize(): number;
    setSize(value: number): RagFile;
    getParentId(): string;
    setParentId(value: string): RagFile;
    getCreateTime(): number;
    setCreateTime(value: number): RagFile;
    getCreateDate(): string;
    setCreateDate(value: string): RagFile;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagFile;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagFile;
    getLocation(): string;
    setLocation(value: string): RagFile;
    getSourceType(): string;
    setSourceType(value: string): RagFile;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagFile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFile.AsObject;
    static toObject(includeInstance: boolean, msg: RagFile): RagFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFile;
    static deserializeBinaryFromReader(message: RagFile, reader: jspb.BinaryReader): RagFile;
}

export namespace RagFile {
    export type AsObject = {
        id: string,
        name: string,
        type: string,
        size: number,
        parentId: string,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
        location: string,
        sourceType: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagUploadFilesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUploadFilesRequest;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): RagUploadFilesRequest.RagMetadata | undefined;
    setMetadata(value?: RagUploadFilesRequest.RagMetadata): RagUploadFilesRequest;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): RagUploadChunk | undefined;
    setChunk(value?: RagUploadChunk): RagUploadFilesRequest;

    getPayloadCase(): RagUploadFilesRequest.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUploadFilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUploadFilesRequest): RagUploadFilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUploadFilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUploadFilesRequest;
    static deserializeBinaryFromReader(message: RagUploadFilesRequest, reader: jspb.BinaryReader): RagUploadFilesRequest;
}

export namespace RagUploadFilesRequest {
    export type AsObject = {
        parent: string,
        metadata?: RagUploadFilesRequest.RagMetadata.AsObject,
        chunk?: RagUploadChunk.AsObject,
    }


    export class RagMetadata extends jspb.Message { 
        getParentId(): string;
        setParentId(value: string): RagMetadata;
        clearFilesList(): void;
        getFilesList(): Array<RagFileMetadata>;
        setFilesList(value: Array<RagFileMetadata>): RagMetadata;
        addFiles(value?: RagFileMetadata, index?: number): RagFileMetadata;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RagMetadata.AsObject;
        static toObject(includeInstance: boolean, msg: RagMetadata): RagMetadata.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RagMetadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RagMetadata;
        static deserializeBinaryFromReader(message: RagMetadata, reader: jspb.BinaryReader): RagMetadata;
    }

    export namespace RagMetadata {
        export type AsObject = {
            parentId: string,
            filesList: Array<RagFileMetadata.AsObject>,
        }
    }


    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        METADATA = 2,
        CHUNK = 3,
    }

}

export class RagFileList extends jspb.Message { 
    clearFilesList(): void;
    getFilesList(): Array<RagFile>;
    setFilesList(value: Array<RagFile>): RagFileList;
    addFiles(value?: RagFile, index?: number): RagFile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFileList.AsObject;
    static toObject(includeInstance: boolean, msg: RagFileList): RagFileList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFileList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFileList;
    static deserializeBinaryFromReader(message: RagFileList, reader: jspb.BinaryReader): RagFileList;
}

export namespace RagFileList {
    export type AsObject = {
        filesList: Array<RagFile.AsObject>,
    }
}

export class RagCreateFileRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateFileRequest;
    getName(): string;
    setName(value: string): RagCreateFileRequest;
    getParentId(): string;
    setParentId(value: string): RagCreateFileRequest;
    getType(): string;
    setType(value: string): RagCreateFileRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateFileRequest): RagCreateFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateFileRequest;
    static deserializeBinaryFromReader(message: RagCreateFileRequest, reader: jspb.BinaryReader): RagCreateFileRequest;
}

export namespace RagCreateFileRequest {
    export type AsObject = {
        parent: string,
        name: string,
        parentId: string,
        type: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagListFilesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListFilesRequest;
    getParentId(): string;
    setParentId(value: string): RagListFilesRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): RagPagination | undefined;
    setPagination(value?: RagPagination): RagListFilesRequest;
    getKeywords(): string;
    setKeywords(value: string): RagListFilesRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListFilesRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListFilesRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListFilesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListFilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListFilesRequest): RagListFilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListFilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListFilesRequest;
    static deserializeBinaryFromReader(message: RagListFilesRequest, reader: jspb.BinaryReader): RagListFilesRequest;
}

export namespace RagListFilesRequest {
    export type AsObject = {
        parent: string,
        parentId: string,
        pagination?: RagPagination.AsObject,
        keywords: string,
        orderby: string,
        desc?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagListFilesResponse extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): RagListFilesResponse;
    clearFilesList(): void;
    getFilesList(): Array<RagFile>;
    setFilesList(value: Array<RagFile>): RagListFilesResponse;
    addFiles(value?: RagFile, index?: number): RagFile;

    hasParentFolder(): boolean;
    clearParentFolder(): void;
    getParentFolder(): RagFile | undefined;
    setParentFolder(value?: RagFile): RagListFilesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListFilesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagListFilesResponse): RagListFilesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListFilesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListFilesResponse;
    static deserializeBinaryFromReader(message: RagListFilesResponse, reader: jspb.BinaryReader): RagListFilesResponse;
}

export namespace RagListFilesResponse {
    export type AsObject = {
        total: number,
        filesList: Array<RagFile.AsObject>,
        parentFolder?: RagFile.AsObject,
    }
}

export class RagGetRootFolderResponse extends jspb.Message { 

    hasRootFolder(): boolean;
    clearRootFolder(): void;
    getRootFolder(): RagFile | undefined;
    setRootFolder(value?: RagFile): RagGetRootFolderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetRootFolderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetRootFolderResponse): RagGetRootFolderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetRootFolderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetRootFolderResponse;
    static deserializeBinaryFromReader(message: RagGetRootFolderResponse, reader: jspb.BinaryReader): RagGetRootFolderResponse;
}

export namespace RagGetRootFolderResponse {
    export type AsObject = {
        rootFolder?: RagFile.AsObject,
    }
}

export class RagGetParentFolderResponse extends jspb.Message { 

    hasParentFolder(): boolean;
    clearParentFolder(): void;
    getParentFolder(): RagFile | undefined;
    setParentFolder(value?: RagFile): RagGetParentFolderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetParentFolderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetParentFolderResponse): RagGetParentFolderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetParentFolderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetParentFolderResponse;
    static deserializeBinaryFromReader(message: RagGetParentFolderResponse, reader: jspb.BinaryReader): RagGetParentFolderResponse;
}

export namespace RagGetParentFolderResponse {
    export type AsObject = {
        parentFolder?: RagFile.AsObject,
    }
}

export class RagGetAllParentFoldersResponse extends jspb.Message { 
    clearParentFoldersList(): void;
    getParentFoldersList(): Array<RagFile>;
    setParentFoldersList(value: Array<RagFile>): RagGetAllParentFoldersResponse;
    addParentFolders(value?: RagFile, index?: number): RagFile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetAllParentFoldersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetAllParentFoldersResponse): RagGetAllParentFoldersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetAllParentFoldersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetAllParentFoldersResponse;
    static deserializeBinaryFromReader(message: RagGetAllParentFoldersResponse, reader: jspb.BinaryReader): RagGetAllParentFoldersResponse;
}

export namespace RagGetAllParentFoldersResponse {
    export type AsObject = {
        parentFoldersList: Array<RagFile.AsObject>,
    }
}

export class RagGetRootFolderRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetRootFolderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetRootFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetRootFolderRequest): RagGetRootFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetRootFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetRootFolderRequest;
    static deserializeBinaryFromReader(message: RagGetRootFolderRequest, reader: jspb.BinaryReader): RagGetRootFolderRequest;
}

export namespace RagGetRootFolderRequest {
    export type AsObject = {
        parent: string,
    }
}

export class RagGetParentFolderRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetParentFolderRequest;
    getFileId(): string;
    setFileId(value: string): RagGetParentFolderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetParentFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetParentFolderRequest): RagGetParentFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetParentFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetParentFolderRequest;
    static deserializeBinaryFromReader(message: RagGetParentFolderRequest, reader: jspb.BinaryReader): RagGetParentFolderRequest;
}

export namespace RagGetParentFolderRequest {
    export type AsObject = {
        parent: string,
        fileId: string,
    }
}

export class RagGetAllParentFoldersRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetAllParentFoldersRequest;
    getFileId(): string;
    setFileId(value: string): RagGetAllParentFoldersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetAllParentFoldersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetAllParentFoldersRequest): RagGetAllParentFoldersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetAllParentFoldersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetAllParentFoldersRequest;
    static deserializeBinaryFromReader(message: RagGetAllParentFoldersRequest, reader: jspb.BinaryReader): RagGetAllParentFoldersRequest;
}

export namespace RagGetAllParentFoldersRequest {
    export type AsObject = {
        parent: string,
        fileId: string,
    }
}

export class RagGetFileRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetFileRequest;
    getFileId(): string;
    setFileId(value: string): RagGetFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetFileRequest): RagGetFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetFileRequest;
    static deserializeBinaryFromReader(message: RagGetFileRequest, reader: jspb.BinaryReader): RagGetFileRequest;
}

export namespace RagGetFileRequest {
    export type AsObject = {
        parent: string,
        fileId: string,
    }
}

export class RagFileID extends jspb.Message { 
    getFileId(): string;
    setFileId(value: string): RagFileID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFileID.AsObject;
    static toObject(includeInstance: boolean, msg: RagFileID): RagFileID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFileID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFileID;
    static deserializeBinaryFromReader(message: RagFileID, reader: jspb.BinaryReader): RagFileID;
}

export namespace RagFileID {
    export type AsObject = {
        fileId: string,
    }
}

export class RagDeleteFilesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteFilesRequest;
    clearFileIdsList(): void;
    getFileIdsList(): Array<string>;
    setFileIdsList(value: Array<string>): RagDeleteFilesRequest;
    addFileIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteFilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteFilesRequest): RagDeleteFilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteFilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteFilesRequest;
    static deserializeBinaryFromReader(message: RagDeleteFilesRequest, reader: jspb.BinaryReader): RagDeleteFilesRequest;
}

export namespace RagDeleteFilesRequest {
    export type AsObject = {
        parent: string,
        fileIdsList: Array<string>,
    }
}

export class RagRenameFileRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagRenameFileRequest;
    getFileId(): string;
    setFileId(value: string): RagRenameFileRequest;
    getName(): string;
    setName(value: string): RagRenameFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRenameFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagRenameFileRequest): RagRenameFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRenameFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRenameFileRequest;
    static deserializeBinaryFromReader(message: RagRenameFileRequest, reader: jspb.BinaryReader): RagRenameFileRequest;
}

export namespace RagRenameFileRequest {
    export type AsObject = {
        parent: string,
        fileId: string,
        name: string,
    }
}

export class RagMoveFileRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagMoveFileRequest;
    clearSrcFileIdsList(): void;
    getSrcFileIdsList(): Array<string>;
    setSrcFileIdsList(value: Array<string>): RagMoveFileRequest;
    addSrcFileIds(value: string, index?: number): string;
    getDestFileId(): string;
    setDestFileId(value: string): RagMoveFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagMoveFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagMoveFileRequest): RagMoveFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagMoveFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagMoveFileRequest;
    static deserializeBinaryFromReader(message: RagMoveFileRequest, reader: jspb.BinaryReader): RagMoveFileRequest;
}

export namespace RagMoveFileRequest {
    export type AsObject = {
        parent: string,
        srcFileIdsList: Array<string>,
        destFileId: string,
    }
}

export class RagFileToDocumentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagFileToDocumentRequest;
    clearFileIdsList(): void;
    getFileIdsList(): Array<string>;
    setFileIdsList(value: Array<string>): RagFileToDocumentRequest;
    addFileIds(value: string, index?: number): string;
    clearKbIdsList(): void;
    getKbIdsList(): Array<string>;
    setKbIdsList(value: Array<string>): RagFileToDocumentRequest;
    addKbIds(value: string, index?: number): string;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagFileToDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFileToDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagFileToDocumentRequest): RagFileToDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFileToDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFileToDocumentRequest;
    static deserializeBinaryFromReader(message: RagFileToDocumentRequest, reader: jspb.BinaryReader): RagFileToDocumentRequest;
}

export namespace RagFileToDocumentRequest {
    export type AsObject = {
        parent: string,
        fileIdsList: Array<string>,
        kbIdsList: Array<string>,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagFileToDocument extends jspb.Message { 
    getId(): string;
    setId(value: string): RagFileToDocument;
    getFileId(): string;
    setFileId(value: string): RagFileToDocument;
    getDocumentId(): string;
    setDocumentId(value: string): RagFileToDocument;
    getCreateTime(): number;
    setCreateTime(value: number): RagFileToDocument;
    getCreateDate(): string;
    setCreateDate(value: string): RagFileToDocument;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagFileToDocument;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagFileToDocument;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagFileToDocument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFileToDocument.AsObject;
    static toObject(includeInstance: boolean, msg: RagFileToDocument): RagFileToDocument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFileToDocument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFileToDocument;
    static deserializeBinaryFromReader(message: RagFileToDocument, reader: jspb.BinaryReader): RagFileToDocument;
}

export namespace RagFileToDocument {
    export type AsObject = {
        id: string,
        fileId: string,
        documentId: string,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagFileToDocumentList extends jspb.Message { 
    clearFilestodocumentsList(): void;
    getFilestodocumentsList(): Array<RagFileToDocument>;
    setFilestodocumentsList(value: Array<RagFileToDocument>): RagFileToDocumentList;
    addFilestodocuments(value?: RagFileToDocument, index?: number): RagFileToDocument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFileToDocumentList.AsObject;
    static toObject(includeInstance: boolean, msg: RagFileToDocumentList): RagFileToDocumentList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFileToDocumentList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFileToDocumentList;
    static deserializeBinaryFromReader(message: RagFileToDocumentList, reader: jspb.BinaryReader): RagFileToDocumentList;
}

export namespace RagFileToDocumentList {
    export type AsObject = {
        filestodocumentsList: Array<RagFileToDocument.AsObject>,
    }
}

export class RagDifyRetrievalRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDifyRetrievalRequest;
    getKnowledgeId(): string;
    setKnowledgeId(value: string): RagDifyRetrievalRequest;
    getQuery(): string;
    setQuery(value: string): RagDifyRetrievalRequest;

    hasRetrievalSetting(): boolean;
    clearRetrievalSetting(): void;
    getRetrievalSetting(): RagDifyRetrievalSetting | undefined;
    setRetrievalSetting(value?: RagDifyRetrievalSetting): RagDifyRetrievalRequest;

    hasMetadataCondition(): boolean;
    clearMetadataCondition(): void;
    getMetadataCondition(): google_protobuf_struct_pb.Struct | undefined;
    setMetadataCondition(value?: google_protobuf_struct_pb.Struct): RagDifyRetrievalRequest;

    hasUseKg(): boolean;
    clearUseKg(): void;
    getUseKg(): boolean | undefined;
    setUseKg(value: boolean): RagDifyRetrievalRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDifyRetrievalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDifyRetrievalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDifyRetrievalRequest): RagDifyRetrievalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDifyRetrievalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDifyRetrievalRequest;
    static deserializeBinaryFromReader(message: RagDifyRetrievalRequest, reader: jspb.BinaryReader): RagDifyRetrievalRequest;
}

export namespace RagDifyRetrievalRequest {
    export type AsObject = {
        parent: string,
        knowledgeId: string,
        query: string,
        retrievalSetting?: RagDifyRetrievalSetting.AsObject,
        metadataCondition?: google_protobuf_struct_pb.Struct.AsObject,
        useKg?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDifyRetrievalSetting extends jspb.Message { 
    getScoreThreshold(): number;
    setScoreThreshold(value: number): RagDifyRetrievalSetting;
    getTopK(): number;
    setTopK(value: number): RagDifyRetrievalSetting;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDifyRetrievalSetting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDifyRetrievalSetting.AsObject;
    static toObject(includeInstance: boolean, msg: RagDifyRetrievalSetting): RagDifyRetrievalSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDifyRetrievalSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDifyRetrievalSetting;
    static deserializeBinaryFromReader(message: RagDifyRetrievalSetting, reader: jspb.BinaryReader): RagDifyRetrievalSetting;
}

export namespace RagDifyRetrievalSetting {
    export type AsObject = {
        scoreThreshold: number,
        topK: number,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDifyRecordList extends jspb.Message { 
    clearRecordsList(): void;
    getRecordsList(): Array<RagDifyRecord>;
    setRecordsList(value: Array<RagDifyRecord>): RagDifyRecordList;
    addRecords(value?: RagDifyRecord, index?: number): RagDifyRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDifyRecordList.AsObject;
    static toObject(includeInstance: boolean, msg: RagDifyRecordList): RagDifyRecordList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDifyRecordList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDifyRecordList;
    static deserializeBinaryFromReader(message: RagDifyRecordList, reader: jspb.BinaryReader): RagDifyRecordList;
}

export namespace RagDifyRecordList {
    export type AsObject = {
        recordsList: Array<RagDifyRecord.AsObject>,
    }
}

export class RagDifyRecord extends jspb.Message { 
    getContent(): string;
    setContent(value: string): RagDifyRecord;
    getScore(): number;
    setScore(value: number): RagDifyRecord;
    getTitle(): string;
    setTitle(value: string): RagDifyRecord;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): RagDifyRecord;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDifyRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDifyRecord.AsObject;
    static toObject(includeInstance: boolean, msg: RagDifyRecord): RagDifyRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDifyRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDifyRecord;
    static deserializeBinaryFromReader(message: RagDifyRecord, reader: jspb.BinaryReader): RagDifyRecord;
}

export namespace RagDifyRecord {
    export type AsObject = {
        content: string,
        score: number,
        title: string,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAskRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAskRequest;
    getQuestion(): string;
    setQuestion(value: string): RagAskRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagAskRequest;
    addDatasetIds(value: string, index?: number): string;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagAskRequest): RagAskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAskRequest;
    static deserializeBinaryFromReader(message: RagAskRequest, reader: jspb.BinaryReader): RagAskRequest;
}

export namespace RagAskRequest {
    export type AsObject = {
        parent: string,
        question: string,
        datasetIdsList: Array<string>,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAskResponse extends jspb.Message { 
    getAnswer(): string;
    setAnswer(value: string): RagAskResponse;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): google_protobuf_struct_pb.Struct | undefined;
    setReference(value?: google_protobuf_struct_pb.Struct): RagAskResponse;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagAskResponse): RagAskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAskResponse;
    static deserializeBinaryFromReader(message: RagAskResponse, reader: jspb.BinaryReader): RagAskResponse;
}

export namespace RagAskResponse {
    export type AsObject = {
        answer: string,
        reference?: google_protobuf_struct_pb.Struct.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagRelatedQuestionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagRelatedQuestionsRequest;
    getQuestion(): string;
    setQuestion(value: string): RagRelatedQuestionsRequest;
    getIndustry(): string;
    setIndustry(value: string): RagRelatedQuestionsRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagRelatedQuestionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRelatedQuestionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagRelatedQuestionsRequest): RagRelatedQuestionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRelatedQuestionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRelatedQuestionsRequest;
    static deserializeBinaryFromReader(message: RagRelatedQuestionsRequest, reader: jspb.BinaryReader): RagRelatedQuestionsRequest;
}

export namespace RagRelatedQuestionsRequest {
    export type AsObject = {
        parent: string,
        question: string,
        industry: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagRelatedQuestionsResponse extends jspb.Message { 
    clearQuestionsList(): void;
    getQuestionsList(): Array<string>;
    setQuestionsList(value: Array<string>): RagRelatedQuestionsResponse;
    addQuestions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRelatedQuestionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagRelatedQuestionsResponse): RagRelatedQuestionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRelatedQuestionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRelatedQuestionsResponse;
    static deserializeBinaryFromReader(message: RagRelatedQuestionsResponse, reader: jspb.BinaryReader): RagRelatedQuestionsResponse;
}

export namespace RagRelatedQuestionsResponse {
    export type AsObject = {
        questionsList: Array<string>,
    }
}

export class RagChatbotCompletionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagChatbotCompletionRequest;
    getDialogId(): string;
    setDialogId(value: string): RagChatbotCompletionRequest;
    getQuestion(): string;
    setQuestion(value: string): RagChatbotCompletionRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): boolean | undefined;
    setStream(value: boolean): RagChatbotCompletionRequest;
    getSessionId(): string;
    setSessionId(value: string): RagChatbotCompletionRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChatbotCompletionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatbotCompletionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatbotCompletionRequest): RagChatbotCompletionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatbotCompletionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatbotCompletionRequest;
    static deserializeBinaryFromReader(message: RagChatbotCompletionRequest, reader: jspb.BinaryReader): RagChatbotCompletionRequest;
}

export namespace RagChatbotCompletionRequest {
    export type AsObject = {
        parent: string,
        dialogId: string,
        question: string,
        stream?: boolean,
        sessionId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagChatbotInfoRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagChatbotInfoRequest;
    getDialogId(): string;
    setDialogId(value: string): RagChatbotInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatbotInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatbotInfoRequest): RagChatbotInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatbotInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatbotInfoRequest;
    static deserializeBinaryFromReader(message: RagChatbotInfoRequest, reader: jspb.BinaryReader): RagChatbotInfoRequest;
}

export namespace RagChatbotInfoRequest {
    export type AsObject = {
        parent: string,
        dialogId: string,
    }
}

export class RagChatbotInfoResponse extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): RagChatbotInfoResponse;
    getAvatar(): string;
    setAvatar(value: string): RagChatbotInfoResponse;
    getPrologue(): string;
    setPrologue(value: string): RagChatbotInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatbotInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatbotInfoResponse): RagChatbotInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatbotInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatbotInfoResponse;
    static deserializeBinaryFromReader(message: RagChatbotInfoResponse, reader: jspb.BinaryReader): RagChatbotInfoResponse;
}

export namespace RagChatbotInfoResponse {
    export type AsObject = {
        title: string,
        avatar: string,
        prologue: string,
    }
}

export class RagAgentbotCompletionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAgentbotCompletionRequest;
    getAgentId(): string;
    setAgentId(value: string): RagAgentbotCompletionRequest;
    getQuestion(): string;
    setQuestion(value: string): RagAgentbotCompletionRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): boolean | undefined;
    setStream(value: boolean): RagAgentbotCompletionRequest;
    getSessionId(): string;
    setSessionId(value: string): RagAgentbotCompletionRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentbotCompletionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgentbotCompletionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgentbotCompletionRequest): RagAgentbotCompletionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgentbotCompletionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgentbotCompletionRequest;
    static deserializeBinaryFromReader(message: RagAgentbotCompletionRequest, reader: jspb.BinaryReader): RagAgentbotCompletionRequest;
}

export namespace RagAgentbotCompletionRequest {
    export type AsObject = {
        parent: string,
        agentId: string,
        question: string,
        stream?: boolean,
        sessionId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagAgentbotInputsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAgentbotInputsRequest;
    getAgentId(): string;
    setAgentId(value: string): RagAgentbotInputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgentbotInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgentbotInputsRequest): RagAgentbotInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgentbotInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgentbotInputsRequest;
    static deserializeBinaryFromReader(message: RagAgentbotInputsRequest, reader: jspb.BinaryReader): RagAgentbotInputsRequest;
}

export namespace RagAgentbotInputsRequest {
    export type AsObject = {
        parent: string,
        agentId: string,
    }
}

export class RagAgentbotInputsResponse extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): RagAgentbotInputsResponse;
    getAvatar(): string;
    setAvatar(value: string): RagAgentbotInputsResponse;
    clearInputsList(): void;
    getInputsList(): Array<google_protobuf_struct_pb.Struct>;
    setInputsList(value: Array<google_protobuf_struct_pb.Struct>): RagAgentbotInputsResponse;
    addInputs(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;
    getPrologue(): string;
    setPrologue(value: string): RagAgentbotInputsResponse;
    getMode(): string;
    setMode(value: string): RagAgentbotInputsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAgentbotInputsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagAgentbotInputsResponse): RagAgentbotInputsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAgentbotInputsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAgentbotInputsResponse;
    static deserializeBinaryFromReader(message: RagAgentbotInputsResponse, reader: jspb.BinaryReader): RagAgentbotInputsResponse;
}

export namespace RagAgentbotInputsResponse {
    export type AsObject = {
        title: string,
        avatar: string,
        inputsList: Array<google_protobuf_struct_pb.Struct.AsObject>,
        prologue: string,
        mode: string,
    }
}

export class RagSearchbotAskRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagSearchbotAskRequest;
    getQuestion(): string;
    setQuestion(value: string): RagSearchbotAskRequest;
    clearKbIdsList(): void;
    getKbIdsList(): Array<string>;
    setKbIdsList(value: Array<string>): RagSearchbotAskRequest;
    addKbIds(value: string, index?: number): string;
    getSearchId(): string;
    setSearchId(value: string): RagSearchbotAskRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotAskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagSearchbotAskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagSearchbotAskRequest): RagSearchbotAskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagSearchbotAskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagSearchbotAskRequest;
    static deserializeBinaryFromReader(message: RagSearchbotAskRequest, reader: jspb.BinaryReader): RagSearchbotAskRequest;
}

export namespace RagSearchbotAskRequest {
    export type AsObject = {
        parent: string,
        question: string,
        kbIdsList: Array<string>,
        searchId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagSearchbotRetrievalRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagSearchbotRetrievalRequest;
    clearKbIdList(): void;
    getKbIdList(): Array<string>;
    setKbIdList(value: Array<string>): RagSearchbotRetrievalRequest;
    addKbId(value: string, index?: number): string;
    getQuestion(): string;
    setQuestion(value: string): RagSearchbotRetrievalRequest;
    getPage(): number;
    setPage(value: number): RagSearchbotRetrievalRequest;
    getSize(): number;
    setSize(value: number): RagSearchbotRetrievalRequest;
    clearDocIdsList(): void;
    getDocIdsList(): Array<string>;
    setDocIdsList(value: Array<string>): RagSearchbotRetrievalRequest;
    addDocIds(value: string, index?: number): string;
    getSimilarityThreshold(): number;
    setSimilarityThreshold(value: number): RagSearchbotRetrievalRequest;
    getVectorSimilarityWeight(): number;
    setVectorSimilarityWeight(value: number): RagSearchbotRetrievalRequest;

    hasUseKg(): boolean;
    clearUseKg(): void;
    getUseKg(): boolean | undefined;
    setUseKg(value: boolean): RagSearchbotRetrievalRequest;
    getTopK(): number;
    setTopK(value: number): RagSearchbotRetrievalRequest;
    clearCrossLanguagesList(): void;
    getCrossLanguagesList(): Array<string>;
    setCrossLanguagesList(value: Array<string>): RagSearchbotRetrievalRequest;
    addCrossLanguages(value: string, index?: number): string;

    hasKeyword(): boolean;
    clearKeyword(): void;
    getKeyword(): boolean | undefined;
    setKeyword(value: boolean): RagSearchbotRetrievalRequest;
    getRerankId(): string;
    setRerankId(value: string): RagSearchbotRetrievalRequest;
    getSearchId(): string;
    setSearchId(value: string): RagSearchbotRetrievalRequest;

    hasHighlight(): boolean;
    clearHighlight(): void;
    getHighlight(): boolean | undefined;
    setHighlight(value: boolean): RagSearchbotRetrievalRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotRetrievalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagSearchbotRetrievalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagSearchbotRetrievalRequest): RagSearchbotRetrievalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagSearchbotRetrievalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagSearchbotRetrievalRequest;
    static deserializeBinaryFromReader(message: RagSearchbotRetrievalRequest, reader: jspb.BinaryReader): RagSearchbotRetrievalRequest;
}

export namespace RagSearchbotRetrievalRequest {
    export type AsObject = {
        parent: string,
        kbIdList: Array<string>,
        question: string,
        page: number,
        size: number,
        docIdsList: Array<string>,
        similarityThreshold: number,
        vectorSimilarityWeight: number,
        useKg?: boolean,
        topK: number,
        crossLanguagesList: Array<string>,
        keyword?: boolean,
        rerankId: string,
        searchId: string,
        highlight?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagSearchbotRetrievalResponse extends jspb.Message { 
    clearChunksList(): void;
    getChunksList(): Array<RagChunk>;
    setChunksList(value: Array<RagChunk>): RagSearchbotRetrievalResponse;
    addChunks(value?: RagChunk, index?: number): RagChunk;
    clearDocAggsList(): void;
    getDocAggsList(): Array<google_protobuf_struct_pb.Struct>;
    setDocAggsList(value: Array<google_protobuf_struct_pb.Struct>): RagSearchbotRetrievalResponse;
    addDocAggs(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;
    getTotal(): number;
    setTotal(value: number): RagSearchbotRetrievalResponse;
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): RagSearchbotRetrievalResponse;
    addLabels(value: string, index?: number): string;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotRetrievalResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagSearchbotRetrievalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagSearchbotRetrievalResponse): RagSearchbotRetrievalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagSearchbotRetrievalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagSearchbotRetrievalResponse;
    static deserializeBinaryFromReader(message: RagSearchbotRetrievalResponse, reader: jspb.BinaryReader): RagSearchbotRetrievalResponse;
}

export namespace RagSearchbotRetrievalResponse {
    export type AsObject = {
        chunksList: Array<RagChunk.AsObject>,
        docAggsList: Array<google_protobuf_struct_pb.Struct.AsObject>,
        total: number,
        labelsList: Array<string>,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagSearchbotRelatedQuestionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagSearchbotRelatedQuestionsRequest;
    getQuestion(): string;
    setQuestion(value: string): RagSearchbotRelatedQuestionsRequest;
    getSearchId(): string;
    setSearchId(value: string): RagSearchbotRelatedQuestionsRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotRelatedQuestionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagSearchbotRelatedQuestionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagSearchbotRelatedQuestionsRequest): RagSearchbotRelatedQuestionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagSearchbotRelatedQuestionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagSearchbotRelatedQuestionsRequest;
    static deserializeBinaryFromReader(message: RagSearchbotRelatedQuestionsRequest, reader: jspb.BinaryReader): RagSearchbotRelatedQuestionsRequest;
}

export namespace RagSearchbotRelatedQuestionsRequest {
    export type AsObject = {
        parent: string,
        question: string,
        searchId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagSearchbotDetailRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagSearchbotDetailRequest;
    getSearchId(): string;
    setSearchId(value: string): RagSearchbotDetailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagSearchbotDetailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagSearchbotDetailRequest): RagSearchbotDetailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagSearchbotDetailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagSearchbotDetailRequest;
    static deserializeBinaryFromReader(message: RagSearchbotDetailRequest, reader: jspb.BinaryReader): RagSearchbotDetailRequest;
}

export namespace RagSearchbotDetailRequest {
    export type AsObject = {
        parent: string,
        searchId: string,
    }
}

export class RagSearchbotDetailResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): RagSearchbotDetailResponse;
    getAvatar(): string;
    setAvatar(value: string): RagSearchbotDetailResponse;
    getTenantId(): string;
    setTenantId(value: string): RagSearchbotDetailResponse;
    getName(): string;
    setName(value: string): RagSearchbotDetailResponse;
    getDescription(): string;
    setDescription(value: string): RagSearchbotDetailResponse;
    getCreateBy(): string;
    setCreateBy(value: string): RagSearchbotDetailResponse;

    hasSearchConfig(): boolean;
    clearSearchConfig(): void;
    getSearchConfig(): google_protobuf_struct_pb.Struct | undefined;
    setSearchConfig(value?: google_protobuf_struct_pb.Struct): RagSearchbotDetailResponse;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagSearchbotDetailResponse;
    getNickname(): string;
    setNickname(value: string): RagSearchbotDetailResponse;
    getTenantAvatar(): string;
    setTenantAvatar(value: string): RagSearchbotDetailResponse;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotDetailResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagSearchbotDetailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagSearchbotDetailResponse): RagSearchbotDetailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagSearchbotDetailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagSearchbotDetailResponse;
    static deserializeBinaryFromReader(message: RagSearchbotDetailResponse, reader: jspb.BinaryReader): RagSearchbotDetailResponse;
}

export namespace RagSearchbotDetailResponse {
    export type AsObject = {
        id: string,
        avatar: string,
        tenantId: string,
        name: string,
        description: string,
        createBy: string,
        searchConfig?: google_protobuf_struct_pb.Struct.AsObject,
        updateTime: number,
        nickname: string,
        tenantAvatar: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagSearchbotMindmapRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagSearchbotMindmapRequest;
    getQuestion(): string;
    setQuestion(value: string): RagSearchbotMindmapRequest;
    clearKbIdsList(): void;
    getKbIdsList(): Array<string>;
    setKbIdsList(value: Array<string>): RagSearchbotMindmapRequest;
    addKbIds(value: string, index?: number): string;
    getSearchId(): string;
    setSearchId(value: string): RagSearchbotMindmapRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotMindmapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagSearchbotMindmapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagSearchbotMindmapRequest): RagSearchbotMindmapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagSearchbotMindmapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagSearchbotMindmapRequest;
    static deserializeBinaryFromReader(message: RagSearchbotMindmapRequest, reader: jspb.BinaryReader): RagSearchbotMindmapRequest;
}

export namespace RagSearchbotMindmapRequest {
    export type AsObject = {
        parent: string,
        question: string,
        kbIdsList: Array<string>,
        searchId: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagSearchbotMindmapResponse extends jspb.Message { 

    hasMindmap(): boolean;
    clearMindmap(): void;
    getMindmap(): google_protobuf_struct_pb.Struct | undefined;
    setMindmap(value?: google_protobuf_struct_pb.Struct): RagSearchbotMindmapResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagSearchbotMindmapResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagSearchbotMindmapResponse): RagSearchbotMindmapResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagSearchbotMindmapResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagSearchbotMindmapResponse;
    static deserializeBinaryFromReader(message: RagSearchbotMindmapResponse, reader: jspb.BinaryReader): RagSearchbotMindmapResponse;
}

export namespace RagSearchbotMindmapResponse {
    export type AsObject = {
        mindmap?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export enum RagPermission {
    ME = 0,
    TEAM = 1,
}

export enum RagChunkMethod {
    NAIVE = 0,
    BOOK = 1,
    EMAIL = 2,
    LAWS = 3,
    MANUAL = 4,
    ONE = 5,
    PAPER = 6,
    PICTURE = 7,
    PRESENTATION = 8,
    QA = 9,
    TABLE = 10,
    TAG = 11,
}

export enum RagDocumentStatus {
    UNSTART = 0,
    RUNNING = 1,
    CANCEL = 2,
    DONE = 3,
    FAIL = 4,
}

export enum RagMessageRole {
    USER = 0,
    ASSISTANT = 1,
    SYSTEM = 2,
}

export enum RagAgentEventType {
    MESSAGE = 0,
    MESSAGE_END = 1,
}
