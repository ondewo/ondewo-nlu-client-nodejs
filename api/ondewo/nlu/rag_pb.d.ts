// package: ondewo.nlu
// file: ondewo/nlu/rag.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_operation_metadata_pb from "../../ondewo/nlu/operation_metadata_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";

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

export class RagCreateDatasetRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateDatasetRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagCreateDatasetRequest;
    getName(): string;
    setName(value: string): RagCreateDatasetRequest;
    getDescription(): string;
    setDescription(value: string): RagCreateDatasetRequest;
    getAvatar(): string;
    setAvatar(value: string): RagCreateDatasetRequest;

    hasChunkMethod(): boolean;
    clearChunkMethod(): void;
    getChunkMethod(): RagChunkMethod | undefined;
    setChunkMethod(value: RagChunkMethod): RagCreateDatasetRequest;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagCreateDatasetRequest;

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
        languageCode: string,
        name: string,
        description: string,
        avatar: string,
        chunkMethod?: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
    }
}

export class RagParserConfig extends jspb.Message { 

    hasAutoKeywords(): boolean;
    clearAutoKeywords(): void;
    getAutoKeywords(): number | undefined;
    setAutoKeywords(value: number): RagParserConfig;

    hasAutoQuestions(): boolean;
    clearAutoQuestions(): void;
    getAutoQuestions(): number | undefined;
    setAutoQuestions(value: number): RagParserConfig;
    getChunkTokenNum(): number;
    setChunkTokenNum(value: number): RagParserConfig;
    getDelimiter(): string;
    setDelimiter(value: string): RagParserConfig;

    hasHtml4excel(): boolean;
    clearHtml4excel(): void;
    getHtml4excel(): boolean | undefined;
    setHtml4excel(value: boolean): RagParserConfig;
    getLayoutRecognize(): string;
    setLayoutRecognize(value: string): RagParserConfig;
    clearTagKbIdsList(): void;
    getTagKbIdsList(): Array<string>;
    setTagKbIdsList(value: Array<string>): RagParserConfig;
    addTagKbIds(value: string, index?: number): string;
    getTopnTags(): number;
    setTopnTags(value: number): RagParserConfig;

    hasFilenameEmbdWeight(): boolean;
    clearFilenameEmbdWeight(): void;
    getFilenameEmbdWeight(): number | undefined;
    setFilenameEmbdWeight(value: number): RagParserConfig;
    getTaskPageSize(): number;
    setTaskPageSize(value: number): RagParserConfig;

    hasRaptor(): boolean;
    clearRaptor(): void;
    getRaptor(): RagRaptorConfig | undefined;
    setRaptor(value?: RagRaptorConfig): RagParserConfig;

    hasGraphrag(): boolean;
    clearGraphrag(): void;
    getGraphrag(): RagGraphRagConfig | undefined;
    setGraphrag(value?: RagGraphRagConfig): RagParserConfig;

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
        autoKeywords?: number,
        autoQuestions?: number,
        chunkTokenNum: number,
        delimiter: string,
        html4excel?: boolean,
        layoutRecognize: string,
        tagKbIdsList: Array<string>,
        topnTags: number,
        filenameEmbdWeight?: number,
        taskPageSize: number,
        raptor?: RagRaptorConfig.AsObject,
        graphrag?: RagGraphRagConfig.AsObject,
    }
}

export class RagRaptorConfig extends jspb.Message { 

    hasUseRaptor(): boolean;
    clearUseRaptor(): void;
    getUseRaptor(): boolean | undefined;
    setUseRaptor(value: boolean): RagRaptorConfig;
    getPrompt(): string;
    setPrompt(value: string): RagRaptorConfig;
    getMaxToken(): number;
    setMaxToken(value: number): RagRaptorConfig;

    hasThreshold(): boolean;
    clearThreshold(): void;
    getThreshold(): number | undefined;
    setThreshold(value: number): RagRaptorConfig;
    getMaxCluster(): number;
    setMaxCluster(value: number): RagRaptorConfig;

    hasRandomSeed(): boolean;
    clearRandomSeed(): void;
    getRandomSeed(): number | undefined;
    setRandomSeed(value: number): RagRaptorConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRaptorConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagRaptorConfig): RagRaptorConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRaptorConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRaptorConfig;
    static deserializeBinaryFromReader(message: RagRaptorConfig, reader: jspb.BinaryReader): RagRaptorConfig;
}

export namespace RagRaptorConfig {
    export type AsObject = {
        useRaptor?: boolean,
        prompt: string,
        maxToken: number,
        threshold?: number,
        maxCluster: number,
        randomSeed?: number,
    }
}

export class RagGraphRagConfig extends jspb.Message { 

    hasUseGraphrag(): boolean;
    clearUseGraphrag(): void;
    getUseGraphrag(): boolean | undefined;
    setUseGraphrag(value: boolean): RagGraphRagConfig;
    clearEntityTypesList(): void;
    getEntityTypesList(): Array<string>;
    setEntityTypesList(value: Array<string>): RagGraphRagConfig;
    addEntityTypes(value: string, index?: number): string;

    hasMethod(): boolean;
    clearMethod(): void;
    getMethod(): RagGraphRagMethod | undefined;
    setMethod(value: RagGraphRagMethod): RagGraphRagConfig;

    hasCommunity(): boolean;
    clearCommunity(): void;
    getCommunity(): boolean | undefined;
    setCommunity(value: boolean): RagGraphRagConfig;

    hasResolution(): boolean;
    clearResolution(): void;
    getResolution(): boolean | undefined;
    setResolution(value: boolean): RagGraphRagConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGraphRagConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagGraphRagConfig): RagGraphRagConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGraphRagConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGraphRagConfig;
    static deserializeBinaryFromReader(message: RagGraphRagConfig, reader: jspb.BinaryReader): RagGraphRagConfig;
}

export namespace RagGraphRagConfig {
    export type AsObject = {
        useGraphrag?: boolean,
        entityTypesList: Array<string>,
        method?: RagGraphRagMethod,
        community?: boolean,
        resolution?: boolean,
    }
}

export class RagDataset extends jspb.Message { 
    getId(): string;
    setId(value: string): RagDataset;
    getAvatar(): string;
    setAvatar(value: string): RagDataset;
    getName(): string;
    setName(value: string): RagDataset;
    getDescription(): string;
    setDescription(value: string): RagDataset;

    hasDocumentCount(): boolean;
    clearDocumentCount(): void;
    getDocumentCount(): number | undefined;
    setDocumentCount(value: number): RagDataset;

    hasTokenNum(): boolean;
    clearTokenNum(): void;
    getTokenNum(): number | undefined;
    setTokenNum(value: number): RagDataset;

    hasChunkCount(): boolean;
    clearChunkCount(): void;
    getChunkCount(): number | undefined;
    setChunkCount(value: number): RagDataset;

    hasChunkMethod(): boolean;
    clearChunkMethod(): void;
    getChunkMethod(): RagChunkMethod | undefined;
    setChunkMethod(value: RagChunkMethod): RagDataset;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagDataset;

    hasPagerank(): boolean;
    clearPagerank(): void;
    getPagerank(): number | undefined;
    setPagerank(value: number): RagDataset;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDataset;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDataset;

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
        avatar: string,
        name: string,
        description: string,
        documentCount?: number,
        tokenNum?: number,
        chunkCount?: number,
        chunkMethod?: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        pagerank?: number,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RagUpdateDatasetRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateDatasetRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateDatasetRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagUpdateDatasetRequest;
    getName(): string;
    setName(value: string): RagUpdateDatasetRequest;
    getDescription(): string;
    setDescription(value: string): RagUpdateDatasetRequest;
    getAvatar(): string;
    setAvatar(value: string): RagUpdateDatasetRequest;

    hasChunkMethod(): boolean;
    clearChunkMethod(): void;
    getChunkMethod(): RagChunkMethod | undefined;
    setChunkMethod(value: RagChunkMethod): RagUpdateDatasetRequest;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagUpdateDatasetRequest;

    hasPagerank(): boolean;
    clearPagerank(): void;
    getPagerank(): number | undefined;
    setPagerank(value: number): RagUpdateDatasetRequest;

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
        languageCode: string,
        datasetId: string,
        name: string,
        description: string,
        avatar: string,
        chunkMethod?: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        pagerank?: number,
    }
}

export class RagDeleteRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RagDeleteRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteRequest): RagDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteRequest;
    static deserializeBinaryFromReader(message: RagDeleteRequest, reader: jspb.BinaryReader): RagDeleteRequest;
}

export namespace RagDeleteRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        idsList: Array<string>,
    }
}

export class RagListDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListDatasetsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListDatasetsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagListDatasetsRequest;
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
        languageCode: string,
        pageToken: string,
        id: string,
        name: string,
        orderby: string,
        desc?: boolean,
    }
}

export class RagDatasetList extends jspb.Message { 
    clearDatasetsList(): void;
    getDatasetsList(): Array<RagDataset>;
    setDatasetsList(value: Array<RagDataset>): RagDatasetList;
    addDatasets(value?: RagDataset, index?: number): RagDataset;
    getTotal(): number;
    setTotal(value: number): RagDatasetList;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagDatasetList;

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
        total: number,
        nextPageToken: string,
    }
}

export class RagUploadDocumentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUploadDocumentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUploadDocumentRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagUploadDocumentRequest;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): RagFileMetadata | undefined;
    setMetadata(value?: RagFileMetadata): RagUploadDocumentRequest;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): RagUploadDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUploadDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUploadDocumentRequest): RagUploadDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUploadDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUploadDocumentRequest;
    static deserializeBinaryFromReader(message: RagUploadDocumentRequest, reader: jspb.BinaryReader): RagUploadDocumentRequest;
}

export namespace RagUploadDocumentRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        datasetId: string,
        metadata?: RagFileMetadata.AsObject,
        data: Uint8Array | string,
    }
}

export class RagDocument extends jspb.Message { 
    getId(): string;
    setId(value: string): RagDocument;
    getThumbnail(): string;
    setThumbnail(value: string): RagDocument;
    getDatasetId(): string;
    setDatasetId(value: string): RagDocument;

    hasChunkMethod(): boolean;
    clearChunkMethod(): void;
    getChunkMethod(): RagChunkMethod | undefined;
    setChunkMethod(value: RagChunkMethod): RagDocument;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagDocument;
    getType(): RagDocumentType;
    setType(value: RagDocumentType): RagDocument;
    getName(): string;
    setName(value: string): RagDocument;

    hasSize(): boolean;
    clearSize(): void;
    getSize(): number | undefined;
    setSize(value: number): RagDocument;

    hasChunkCount(): boolean;
    clearChunkCount(): void;
    getChunkCount(): number | undefined;
    setChunkCount(value: number): RagDocument;

    hasTokenCount(): boolean;
    clearTokenCount(): void;
    getTokenCount(): number | undefined;
    setTokenCount(value: number): RagDocument;

    hasProgress(): boolean;
    clearProgress(): void;
    getProgress(): number | undefined;
    setProgress(value: number): RagDocument;
    getProgressMsg(): string;
    setProgressMsg(value: string): RagDocument;

    hasProcessBeginAt(): boolean;
    clearProcessBeginAt(): void;
    getProcessBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setProcessBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): RagDocument;

    hasProcessDuration(): boolean;
    clearProcessDuration(): void;
    getProcessDuration(): number | undefined;
    setProcessDuration(value: number): RagDocument;

    hasMetaFields(): boolean;
    clearMetaFields(): void;
    getMetaFields(): google_protobuf_struct_pb.Struct | undefined;
    setMetaFields(value?: google_protobuf_struct_pb.Struct): RagDocument;

    hasRun(): boolean;
    clearRun(): void;
    getRun(): RagDocumentStatus | undefined;
    setRun(value: RagDocumentStatus): RagDocument;
    getStatus(): string;
    setStatus(value: string): RagDocument;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDocument;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDocument;

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
        thumbnail: string,
        datasetId: string,
        chunkMethod?: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        type: RagDocumentType,
        name: string,
        size?: number,
        chunkCount?: number,
        tokenCount?: number,
        progress?: number,
        progressMsg: string,
        processBeginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        processDuration?: number,
        metaFields?: google_protobuf_struct_pb.Struct.AsObject,
        run?: RagDocumentStatus,
        status: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RagUpdateDocumentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateDocumentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateDocumentRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagUpdateDocumentRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagUpdateDocumentRequest;
    getName(): string;
    setName(value: string): RagUpdateDocumentRequest;

    hasChunkMethod(): boolean;
    clearChunkMethod(): void;
    getChunkMethod(): RagChunkMethod | undefined;
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
        languageCode: string,
        datasetId: string,
        documentId: string,
        name: string,
        chunkMethod?: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        enabled?: boolean,
        metaFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDownloadDocumentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDownloadDocumentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDownloadDocumentRequest;
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
        languageCode: string,
        datasetId: string,
        documentId: string,
    }
}

export class RagFileChunk extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): RagFileMetadata | undefined;
    setMetadata(value?: RagFileMetadata): RagFileChunk;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): RagFileChunk;

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
        metadata?: RagFileMetadata.AsObject,
        data: Uint8Array | string,
    }
}

export class RagListDocumentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListDocumentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListDocumentsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagListDocumentsRequest;
    getId(): string;
    setId(value: string): RagListDocumentsRequest;
    getName(): string;
    setName(value: string): RagListDocumentsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagListDocumentsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListDocumentsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListDocumentsRequest;
    getKeywords(): string;
    setKeywords(value: string): RagListDocumentsRequest;
    clearSuffixList(): void;
    getSuffixList(): Array<string>;
    setSuffixList(value: Array<string>): RagListDocumentsRequest;
    addSuffix(value: string, index?: number): string;
    clearRunStatusList(): void;
    getRunStatusList(): Array<RagDocumentStatus>;
    setRunStatusList(value: Array<RagDocumentStatus>): RagListDocumentsRequest;
    addRunStatus(value: RagDocumentStatus, index?: number): RagDocumentStatus;

    hasCreateTimeFrom(): boolean;
    clearCreateTimeFrom(): void;
    getCreateTimeFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTimeFrom(value?: google_protobuf_timestamp_pb.Timestamp): RagListDocumentsRequest;

    hasCreateTimeTo(): boolean;
    clearCreateTimeTo(): void;
    getCreateTimeTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTimeTo(value?: google_protobuf_timestamp_pb.Timestamp): RagListDocumentsRequest;

    hasMetadataCondition(): boolean;
    clearMetadataCondition(): void;
    getMetadataCondition(): RagMetadataConditions | undefined;
    setMetadataCondition(value?: RagMetadataConditions): RagListDocumentsRequest;

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
        languageCode: string,
        datasetId: string,
        id: string,
        name: string,
        pageToken: string,
        orderby: string,
        desc?: boolean,
        keywords: string,
        suffixList: Array<string>,
        runStatusList: Array<RagDocumentStatus>,
        createTimeFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createTimeTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        metadataCondition?: RagMetadataConditions.AsObject,
    }
}

export class RagMetadataConditions extends jspb.Message { 
    getLogic(): RagLogic;
    setLogic(value: RagLogic): RagMetadataConditions;
    clearConditionsList(): void;
    getConditionsList(): Array<RagMetadataCondition>;
    setConditionsList(value: Array<RagMetadataCondition>): RagMetadataConditions;
    addConditions(value?: RagMetadataCondition, index?: number): RagMetadataCondition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagMetadataConditions.AsObject;
    static toObject(includeInstance: boolean, msg: RagMetadataConditions): RagMetadataConditions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagMetadataConditions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagMetadataConditions;
    static deserializeBinaryFromReader(message: RagMetadataConditions, reader: jspb.BinaryReader): RagMetadataConditions;
}

export namespace RagMetadataConditions {
    export type AsObject = {
        logic: RagLogic,
        conditionsList: Array<RagMetadataCondition.AsObject>,
    }
}

export class RagMetadataCondition extends jspb.Message { 
    getName(): string;
    setName(value: string): RagMetadataCondition;
    getComparisonOperator(): RagComparisonOperator;
    setComparisonOperator(value: RagComparisonOperator): RagMetadataCondition;
    getValue(): string;
    setValue(value: string): RagMetadataCondition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagMetadataCondition.AsObject;
    static toObject(includeInstance: boolean, msg: RagMetadataCondition): RagMetadataCondition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagMetadataCondition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagMetadataCondition;
    static deserializeBinaryFromReader(message: RagMetadataCondition, reader: jspb.BinaryReader): RagMetadataCondition;
}

export namespace RagMetadataCondition {
    export type AsObject = {
        name: string,
        comparisonOperator: RagComparisonOperator,
        value: string,
    }
}

export class RagDocumentList extends jspb.Message { 
    clearDocumentsList(): void;
    getDocumentsList(): Array<RagDocument>;
    setDocumentsList(value: Array<RagDocument>): RagDocumentList;
    addDocuments(value?: RagDocument, index?: number): RagDocument;
    getTotal(): number;
    setTotal(value: number): RagDocumentList;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagDocumentList;

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
        total: number,
        nextPageToken: string,
    }
}

export class RagDeleteDocumentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteDocumentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteDocumentsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagDeleteDocumentsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RagDeleteDocumentsRequest;
    addIds(value: string, index?: number): string;

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
        languageCode: string,
        datasetId: string,
        idsList: Array<string>,
    }
}

export class RagRetrievalRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagRetrievalRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagRetrievalRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagRetrievalRequest;
    addDatasetIds(value: string, index?: number): string;
    getPageToken(): string;
    setPageToken(value: string): RagRetrievalRequest;
    getQuestion(): string;
    setQuestion(value: string): RagRetrievalRequest;
    clearDocumentIdsList(): void;
    getDocumentIdsList(): Array<string>;
    setDocumentIdsList(value: Array<string>): RagRetrievalRequest;
    addDocumentIds(value: string, index?: number): string;

    hasUseKg(): boolean;
    clearUseKg(): void;
    getUseKg(): boolean | undefined;
    setUseKg(value: boolean): RagRetrievalRequest;
    clearCrossLanguagesList(): void;
    getCrossLanguagesList(): Array<string>;
    setCrossLanguagesList(value: Array<string>): RagRetrievalRequest;
    addCrossLanguages(value: string, index?: number): string;

    hasMetadataCondition(): boolean;
    clearMetadataCondition(): void;
    getMetadataCondition(): RagMetadataConditions | undefined;
    setMetadataCondition(value?: RagMetadataConditions): RagRetrievalRequest;
    getSimilarityThreshold(): number;
    setSimilarityThreshold(value: number): RagRetrievalRequest;

    hasVectorSimilarityWeight(): boolean;
    clearVectorSimilarityWeight(): void;
    getVectorSimilarityWeight(): number | undefined;
    setVectorSimilarityWeight(value: number): RagRetrievalRequest;
    getTopK(): number;
    setTopK(value: number): RagRetrievalRequest;

    hasHighlight(): boolean;
    clearHighlight(): void;
    getHighlight(): boolean | undefined;
    setHighlight(value: boolean): RagRetrievalRequest;

    hasKeyword(): boolean;
    clearKeyword(): void;
    getKeyword(): boolean | undefined;
    setKeyword(value: boolean): RagRetrievalRequest;

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
        languageCode: string,
        datasetIdsList: Array<string>,
        pageToken: string,
        question: string,
        documentIdsList: Array<string>,
        useKg?: boolean,
        crossLanguagesList: Array<string>,
        metadataCondition?: RagMetadataConditions.AsObject,
        similarityThreshold: number,
        vectorSimilarityWeight?: number,
        topK: number,
        highlight?: boolean,
        keyword?: boolean,
    }
}

export class RagRetrievalResponse extends jspb.Message { 
    clearChunksList(): void;
    getChunksList(): Array<RagChunk>;
    setChunksList(value: Array<RagChunk>): RagRetrievalResponse;
    addChunks(value?: RagChunk, index?: number): RagChunk;
    clearDocAggsList(): void;
    getDocAggsList(): Array<RagDocAgg>;
    setDocAggsList(value: Array<RagDocAgg>): RagRetrievalResponse;
    addDocAggs(value?: RagDocAgg, index?: number): RagDocAgg;
    getTotal(): number;
    setTotal(value: number): RagRetrievalResponse;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagRetrievalResponse;

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
        docAggsList: Array<RagDocAgg.AsObject>,
        total: number,
        nextPageToken: string,
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

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagChunk;
    getDocumentKeyword(): string;
    setDocumentKeyword(value: string): RagChunk;

    hasSimilarity(): boolean;
    clearSimilarity(): void;
    getSimilarity(): number | undefined;
    setSimilarity(value: number): RagChunk;

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
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        documentKeyword: string,
        similarity?: number,
    }
}

export class RagDocAgg extends jspb.Message { 
    getDocName(): string;
    setDocName(value: string): RagDocAgg;
    getDocId(): string;
    setDocId(value: string): RagDocAgg;
    getCount(): number;
    setCount(value: number): RagDocAgg;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDocAgg.AsObject;
    static toObject(includeInstance: boolean, msg: RagDocAgg): RagDocAgg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDocAgg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDocAgg;
    static deserializeBinaryFromReader(message: RagDocAgg, reader: jspb.BinaryReader): RagDocAgg;
}

export namespace RagDocAgg {
    export type AsObject = {
        docName: string,
        docId: string,
        count: number,
    }
}

export class RagDatasetIdRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDatasetIdRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDatasetIdRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagDatasetIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDatasetIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDatasetIdRequest): RagDatasetIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDatasetIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDatasetIdRequest;
    static deserializeBinaryFromReader(message: RagDatasetIdRequest, reader: jspb.BinaryReader): RagDatasetIdRequest;
}

export namespace RagDatasetIdRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
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

export class RagConstructKnowledgeGraphResponse extends jspb.Message { 
    getGraphragTaskId(): string;
    setGraphragTaskId(value: string): RagConstructKnowledgeGraphResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagConstructKnowledgeGraphResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagConstructKnowledgeGraphResponse): RagConstructKnowledgeGraphResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagConstructKnowledgeGraphResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagConstructKnowledgeGraphResponse;
    static deserializeBinaryFromReader(message: RagConstructKnowledgeGraphResponse, reader: jspb.BinaryReader): RagConstructKnowledgeGraphResponse;
}

export namespace RagConstructKnowledgeGraphResponse {
    export type AsObject = {
        graphragTaskId: string,
    }
}

export class RagTaskStatus extends jspb.Message { 
    getId(): string;
    setId(value: string): RagTaskStatus;
    getDocId(): string;
    setDocId(value: string): RagTaskStatus;

    hasFromPage(): boolean;
    clearFromPage(): void;
    getFromPage(): number | undefined;
    setFromPage(value: number): RagTaskStatus;

    hasToPage(): boolean;
    clearToPage(): void;
    getToPage(): number | undefined;
    setToPage(value: number): RagTaskStatus;
    getTaskType(): string;
    setTaskType(value: string): RagTaskStatus;

    hasPriority(): boolean;
    clearPriority(): void;
    getPriority(): number | undefined;
    setPriority(value: number): RagTaskStatus;
    getBeginAt(): string;
    setBeginAt(value: string): RagTaskStatus;

    hasProcessDuration(): boolean;
    clearProcessDuration(): void;
    getProcessDuration(): number | undefined;
    setProcessDuration(value: number): RagTaskStatus;

    hasProgress(): boolean;
    clearProgress(): void;
    getProgress(): number | undefined;
    setProgress(value: number): RagTaskStatus;
    getProgressMsg(): string;
    setProgressMsg(value: string): RagTaskStatus;

    hasRetryCount(): boolean;
    clearRetryCount(): void;
    getRetryCount(): number | undefined;
    setRetryCount(value: number): RagTaskStatus;
    getDigest(): string;
    setDigest(value: string): RagTaskStatus;
    getChunkIds(): string;
    setChunkIds(value: string): RagTaskStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagTaskStatus.AsObject;
    static toObject(includeInstance: boolean, msg: RagTaskStatus): RagTaskStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagTaskStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagTaskStatus;
    static deserializeBinaryFromReader(message: RagTaskStatus, reader: jspb.BinaryReader): RagTaskStatus;
}

export namespace RagTaskStatus {
    export type AsObject = {
        id: string,
        docId: string,
        fromPage?: number,
        toPage?: number,
        taskType: string,
        priority?: number,
        beginAt: string,
        processDuration?: number,
        progress?: number,
        progressMsg: string,
        retryCount?: number,
        digest: string,
        chunkIds: string,
    }
}

export class RagConstructRaptorResponse extends jspb.Message { 
    getRaptorTaskId(): string;
    setRaptorTaskId(value: string): RagConstructRaptorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagConstructRaptorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagConstructRaptorResponse): RagConstructRaptorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagConstructRaptorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagConstructRaptorResponse;
    static deserializeBinaryFromReader(message: RagConstructRaptorResponse, reader: jspb.BinaryReader): RagConstructRaptorResponse;
}

export namespace RagConstructRaptorResponse {
    export type AsObject = {
        raptorTaskId: string,
    }
}

export class RagParseDocumentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagParseDocumentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagParseDocumentsRequest;
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
        languageCode: string,
        datasetId: string,
        documentIdsList: Array<string>,
    }
}

export class RagStopParsingRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagStopParsingRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagStopParsingRequest;
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
        languageCode: string,
        datasetId: string,
        documentIdsList: Array<string>,
    }
}

export class RagListChunksRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListChunksRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListChunksRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagListChunksRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagListChunksRequest;
    getPagination(): string;
    setPagination(value: string): RagListChunksRequest;
    getKeywords(): string;
    setKeywords(value: string): RagListChunksRequest;
    getId(): string;
    setId(value: string): RagListChunksRequest;

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
        languageCode: string,
        datasetId: string,
        documentId: string,
        pagination: string,
        keywords: string,
        id: string,
    }
}

export class RagListChunksResponse extends jspb.Message { 

    hasTotal(): boolean;
    clearTotal(): void;
    getTotal(): number | undefined;
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
        total?: number,
        chunksList: Array<RagChunk.AsObject>,
        doc?: RagDocument.AsObject,
    }
}

export class RagAddChunkRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAddChunkRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagAddChunkRequest;
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
        languageCode: string,
        datasetId: string,
        documentId: string,
        content: string,
        importantKeywordsList: Array<string>,
        questionsList: Array<string>,
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
    getLanguageCode(): string;
    setLanguageCode(value: string): RagRemoveChunksRequest;
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
        languageCode: string,
        datasetId: string,
        documentId: string,
        chunkIdsList: Array<string>,
    }
}

export class RagUpdateChunkRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateChunkRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateChunkRequest;
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
    clearPositionsList(): void;
    getPositionsList(): Array<google_protobuf_struct_pb.ListValue>;
    setPositionsList(value: Array<google_protobuf_struct_pb.ListValue>): RagUpdateChunkRequest;
    addPositions(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;

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
        languageCode: string,
        datasetId: string,
        documentId: string,
        chunkId: string,
        content: string,
        importantKeywordsList: Array<string>,
        questionsList: Array<string>,
        available?: boolean,
        positionsList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
    }
}

export class RagCreateChatAssistantRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateChatAssistantRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagCreateChatAssistantRequest;
    getName(): string;
    setName(value: string): RagCreateChatAssistantRequest;
    getDescription(): string;
    setDescription(value: string): RagCreateChatAssistantRequest;
    getAvatar(): string;
    setAvatar(value: string): RagCreateChatAssistantRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagCreateChatAssistantRequest;
    addDatasetIds(value: string, index?: number): string;

    hasLlm(): boolean;
    clearLlm(): void;
    getLlm(): RagLlmSetting | undefined;
    setLlm(value?: RagLlmSetting): RagCreateChatAssistantRequest;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): RagPromptConfig | undefined;
    setPrompt(value?: RagPromptConfig): RagCreateChatAssistantRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateChatAssistantRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateChatAssistantRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateChatAssistantRequest): RagCreateChatAssistantRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateChatAssistantRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateChatAssistantRequest;
    static deserializeBinaryFromReader(message: RagCreateChatAssistantRequest, reader: jspb.BinaryReader): RagCreateChatAssistantRequest;
}

export namespace RagCreateChatAssistantRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        name: string,
        description: string,
        avatar: string,
        datasetIdsList: Array<string>,
        llm?: RagLlmSetting.AsObject,
        prompt?: RagPromptConfig.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagLlmSetting extends jspb.Message { 
    getModelName(): string;
    setModelName(value: string): RagLlmSetting;

    hasTemperature(): boolean;
    clearTemperature(): void;
    getTemperature(): number | undefined;
    setTemperature(value: number): RagLlmSetting;

    hasTopP(): boolean;
    clearTopP(): void;
    getTopP(): number | undefined;
    setTopP(value: number): RagLlmSetting;

    hasFrequencyPenalty(): boolean;
    clearFrequencyPenalty(): void;
    getFrequencyPenalty(): number | undefined;
    setFrequencyPenalty(value: number): RagLlmSetting;

    hasPresencePenalty(): boolean;
    clearPresencePenalty(): void;
    getPresencePenalty(): number | undefined;
    setPresencePenalty(value: number): RagLlmSetting;
    getMaxTokens(): number;
    setMaxTokens(value: number): RagLlmSetting;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagLlmSetting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagLlmSetting.AsObject;
    static toObject(includeInstance: boolean, msg: RagLlmSetting): RagLlmSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagLlmSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagLlmSetting;
    static deserializeBinaryFromReader(message: RagLlmSetting, reader: jspb.BinaryReader): RagLlmSetting;
}

export namespace RagLlmSetting {
    export type AsObject = {
        modelName: string,
        temperature?: number,
        topP?: number,
        frequencyPenalty?: number,
        presencePenalty?: number,
        maxTokens: number,
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

    hasSimilarityThreshold(): boolean;
    clearSimilarityThreshold(): void;
    getSimilarityThreshold(): number | undefined;
    setSimilarityThreshold(value: number): RagPromptConfig;

    hasKeywordsSimilarityWeight(): boolean;
    clearKeywordsSimilarityWeight(): void;
    getKeywordsSimilarityWeight(): number | undefined;
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
        similarityThreshold?: number,
        keywordsSimilarityWeight?: number,
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

export class RagChatAssistant extends jspb.Message { 
    getId(): string;
    setId(value: string): RagChatAssistant;
    getTenantId(): string;
    setTenantId(value: string): RagChatAssistant;
    getName(): string;
    setName(value: string): RagChatAssistant;
    getDescription(): string;
    setDescription(value: string): RagChatAssistant;
    getAvatar(): string;
    setAvatar(value: string): RagChatAssistant;
    getLanguage(): string;
    setLanguage(value: string): RagChatAssistant;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagChatAssistant;
    addDatasetIds(value: string, index?: number): string;
    clearDatasetsList(): void;
    getDatasetsList(): Array<RagDataset>;
    setDatasetsList(value: Array<RagDataset>): RagChatAssistant;
    addDatasets(value?: RagDataset, index?: number): RagDataset;

    hasLlm(): boolean;
    clearLlm(): void;
    getLlm(): RagLlmSetting | undefined;
    setLlm(value?: RagLlmSetting): RagChatAssistant;

    hasPromptType(): boolean;
    clearPromptType(): void;
    getPromptType(): RagPromptType | undefined;
    setPromptType(value: RagPromptType): RagChatAssistant;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): RagPromptConfig | undefined;
    setPrompt(value?: RagPromptConfig): RagChatAssistant;

    hasMetaDataFilter(): boolean;
    clearMetaDataFilter(): void;
    getMetaDataFilter(): google_protobuf_struct_pb.Struct | undefined;
    setMetaDataFilter(value?: google_protobuf_struct_pb.Struct): RagChatAssistant;
    getDoRefer(): string;
    setDoRefer(value: string): RagChatAssistant;
    getStatus(): string;
    setStatus(value: string): RagChatAssistant;
    getCreateTime(): number;
    setCreateTime(value: number): RagChatAssistant;
    getCreateDate(): string;
    setCreateDate(value: string): RagChatAssistant;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagChatAssistant;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagChatAssistant;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatAssistant.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatAssistant): RagChatAssistant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatAssistant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatAssistant;
    static deserializeBinaryFromReader(message: RagChatAssistant, reader: jspb.BinaryReader): RagChatAssistant;
}

export namespace RagChatAssistant {
    export type AsObject = {
        id: string,
        tenantId: string,
        name: string,
        description: string,
        avatar: string,
        language: string,
        datasetIdsList: Array<string>,
        datasetsList: Array<RagDataset.AsObject>,
        llm?: RagLlmSetting.AsObject,
        promptType?: RagPromptType,
        prompt?: RagPromptConfig.AsObject,
        metaDataFilter?: google_protobuf_struct_pb.Struct.AsObject,
        doRefer: string,
        status: string,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
    }
}

export class RagUpdateChatAssistantRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateChatAssistantRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateChatAssistantRequest;
    getChatId(): string;
    setChatId(value: string): RagUpdateChatAssistantRequest;
    getName(): string;
    setName(value: string): RagUpdateChatAssistantRequest;
    getDescription(): string;
    setDescription(value: string): RagUpdateChatAssistantRequest;
    getAvatar(): string;
    setAvatar(value: string): RagUpdateChatAssistantRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagUpdateChatAssistantRequest;
    addDatasetIds(value: string, index?: number): string;

    hasLlm(): boolean;
    clearLlm(): void;
    getLlm(): RagLlmSetting | undefined;
    setLlm(value?: RagLlmSetting): RagUpdateChatAssistantRequest;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): RagPromptConfig | undefined;
    setPrompt(value?: RagPromptConfig): RagUpdateChatAssistantRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateChatAssistantRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateChatAssistantRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateChatAssistantRequest): RagUpdateChatAssistantRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateChatAssistantRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateChatAssistantRequest;
    static deserializeBinaryFromReader(message: RagUpdateChatAssistantRequest, reader: jspb.BinaryReader): RagUpdateChatAssistantRequest;
}

export namespace RagUpdateChatAssistantRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        chatId: string,
        name: string,
        description: string,
        avatar: string,
        datasetIdsList: Array<string>,
        llm?: RagLlmSetting.AsObject,
        prompt?: RagPromptConfig.AsObject,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagListChatAssistantsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListChatAssistantsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListChatAssistantsRequest;
    getPagination(): string;
    setPagination(value: string): RagListChatAssistantsRequest;
    getId(): string;
    setId(value: string): RagListChatAssistantsRequest;
    getName(): string;
    setName(value: string): RagListChatAssistantsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListChatAssistantsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListChatAssistantsRequest;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListChatAssistantsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListChatAssistantsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListChatAssistantsRequest): RagListChatAssistantsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListChatAssistantsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListChatAssistantsRequest;
    static deserializeBinaryFromReader(message: RagListChatAssistantsRequest, reader: jspb.BinaryReader): RagListChatAssistantsRequest;
}

export namespace RagListChatAssistantsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        pagination: string,
        id: string,
        name: string,
        orderby: string,
        desc?: boolean,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagChatAssistantList extends jspb.Message { 
    clearChatsList(): void;
    getChatsList(): Array<RagChatAssistant>;
    setChatsList(value: Array<RagChatAssistant>): RagChatAssistantList;
    addChats(value?: RagChatAssistant, index?: number): RagChatAssistant;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChatAssistantList.AsObject;
    static toObject(includeInstance: boolean, msg: RagChatAssistantList): RagChatAssistantList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChatAssistantList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChatAssistantList;
    static deserializeBinaryFromReader(message: RagChatAssistantList, reader: jspb.BinaryReader): RagChatAssistantList;
}

export namespace RagChatAssistantList {
    export type AsObject = {
        chatsList: Array<RagChatAssistant.AsObject>,
    }
}

export class RagCreateAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateAgentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagCreateAgentRequest;
    getAvatar(): string;
    setAvatar(value: string): RagCreateAgentRequest;
    getTitle(): string;
    setTitle(value: string): RagCreateAgentRequest;

    hasPermission(): boolean;
    clearPermission(): void;
    getPermission(): RagPermission | undefined;
    setPermission(value: RagPermission): RagCreateAgentRequest;
    getDescription(): string;
    setDescription(value: string): RagCreateAgentRequest;

    hasCanvasType(): boolean;
    clearCanvasType(): void;
    getCanvasType(): string | undefined;
    setCanvasType(value: string): RagCreateAgentRequest;

    hasCanvasCategory(): boolean;
    clearCanvasCategory(): void;
    getCanvasCategory(): RagCanvasCategory | undefined;
    setCanvasCategory(value: RagCanvasCategory): RagCreateAgentRequest;

    hasDsl(): boolean;
    clearDsl(): void;
    getDsl(): google_protobuf_struct_pb.Struct | undefined;
    setDsl(value?: google_protobuf_struct_pb.Struct): RagCreateAgentRequest;

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
        languageCode: string,
        avatar: string,
        title: string,
        permission?: RagPermission,
        description: string,
        canvasType?: string,
        canvasCategory?: RagCanvasCategory,
        dsl?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagUpdateAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateAgentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateAgentRequest;
    getAgentId(): string;
    setAgentId(value: string): RagUpdateAgentRequest;
    getAvatar(): string;
    setAvatar(value: string): RagUpdateAgentRequest;
    getTitle(): string;
    setTitle(value: string): RagUpdateAgentRequest;

    hasPermission(): boolean;
    clearPermission(): void;
    getPermission(): RagPermission | undefined;
    setPermission(value: RagPermission): RagUpdateAgentRequest;
    getDescription(): string;
    setDescription(value: string): RagUpdateAgentRequest;

    hasCanvasType(): boolean;
    clearCanvasType(): void;
    getCanvasType(): string | undefined;
    setCanvasType(value: string): RagUpdateAgentRequest;

    hasCanvasCategory(): boolean;
    clearCanvasCategory(): void;
    getCanvasCategory(): RagCanvasCategory | undefined;
    setCanvasCategory(value: RagCanvasCategory): RagUpdateAgentRequest;

    hasDsl(): boolean;
    clearDsl(): void;
    getDsl(): google_protobuf_struct_pb.Struct | undefined;
    setDsl(value?: google_protobuf_struct_pb.Struct): RagUpdateAgentRequest;

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
        languageCode: string,
        agentId: string,
        avatar: string,
        title: string,
        permission?: RagPermission,
        description: string,
        canvasType?: string,
        canvasCategory?: RagCanvasCategory,
        dsl?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagDeleteAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteAgentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteAgentRequest;
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
        languageCode: string,
        agentId: string,
    }
}

export class RagListAgentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListAgentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListAgentsRequest;
    getPagination(): string;
    setPagination(value: string): RagListAgentsRequest;
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
        languageCode: string,
        pagination: string,
        title: string,
        orderby: string,
        desc?: boolean,
        id: string,
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

export class RagAgent extends jspb.Message { 
    getId(): string;
    setId(value: string): RagAgent;
    getAvatar(): string;
    setAvatar(value: string): RagAgent;
    getUserId(): string;
    setUserId(value: string): RagAgent;
    getTitle(): string;
    setTitle(value: string): RagAgent;

    hasPermission(): boolean;
    clearPermission(): void;
    getPermission(): RagPermission | undefined;
    setPermission(value: RagPermission): RagAgent;
    getDescription(): string;
    setDescription(value: string): RagAgent;

    hasCanvasType(): boolean;
    clearCanvasType(): void;
    getCanvasType(): string | undefined;
    setCanvasType(value: string): RagAgent;

    hasCanvasCategory(): boolean;
    clearCanvasCategory(): void;
    getCanvasCategory(): RagCanvasCategory | undefined;
    setCanvasCategory(value: RagCanvasCategory): RagAgent;

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
        avatar: string,
        userId: string,
        title: string,
        permission?: RagPermission,
        description: string,
        canvasType?: string,
        canvasCategory?: RagCanvasCategory,
        dsl?: google_protobuf_struct_pb.Struct.AsObject,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
    }
}

export class RagCreateChatSessionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateChatSessionRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagCreateChatSessionRequest;
    getChatId(): string;
    setChatId(value: string): RagCreateChatSessionRequest;
    getName(): string;
    setName(value: string): RagCreateChatSessionRequest;
    getUserId(): string;
    setUserId(value: string): RagCreateChatSessionRequest;

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
        languageCode: string,
        chatId: string,
        name: string,
        userId: string,
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
    }
}

export class RagMessage extends jspb.Message { 

    hasRole(): boolean;
    clearRole(): void;
    getRole(): RagMessageRole | undefined;
    setRole(value: RagMessageRole): RagMessage;
    getContent(): string;
    setContent(value: string): RagMessage;

    hasAdditionalFields(): boolean;
    clearAdditionalFields(): void;
    getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagMessage;

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
        role?: RagMessageRole,
        content: string,
        additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class RagUpdateChatSessionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateChatSessionRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateChatSessionRequest;
    getChatId(): string;
    setChatId(value: string): RagUpdateChatSessionRequest;
    getSessionId(): string;
    setSessionId(value: string): RagUpdateChatSessionRequest;
    getName(): string;
    setName(value: string): RagUpdateChatSessionRequest;
    getUserId(): string;
    setUserId(value: string): RagUpdateChatSessionRequest;

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
        languageCode: string,
        chatId: string,
        sessionId: string,
        name: string,
        userId: string,
    }
}

export class RagListChatSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListChatSessionsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListChatSessionsRequest;
    getChatId(): string;
    setChatId(value: string): RagListChatSessionsRequest;
    getPagination(): string;
    setPagination(value: string): RagListChatSessionsRequest;
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
        languageCode: string,
        chatId: string,
        pagination: string,
        orderby: string,
        desc?: boolean,
        name: string,
        id: string,
        userId: string,
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

export class RagDeleteChatSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteChatSessionsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteChatSessionsRequest;
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
        languageCode: string,
        chatId: string,
        idsList: Array<string>,
        deleteAll?: boolean,
    }
}

export class RagListAgentSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListAgentSessionsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListAgentSessionsRequest;
    getAgentId(): string;
    setAgentId(value: string): RagListAgentSessionsRequest;
    getPagination(): string;
    setPagination(value: string): RagListAgentSessionsRequest;
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
        languageCode: string,
        agentId: string,
        pagination: string,
        orderby: string,
        desc?: boolean,
        id: string,
        userId: string,
        dsl?: boolean,
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

export class RagAgentSession extends jspb.Message { 
    getId(): string;
    setId(value: string): RagAgentSession;
    getAgentId(): string;
    setAgentId(value: string): RagAgentSession;
    getUserId(): string;
    setUserId(value: string): RagAgentSession;
    clearMessagesList(): void;
    getMessagesList(): Array<RagMessage>;
    setMessagesList(value: Array<RagMessage>): RagAgentSession;
    addMessages(value?: RagMessage, index?: number): RagMessage;

    hasTokens(): boolean;
    clearTokens(): void;
    getTokens(): number | undefined;
    setTokens(value: number): RagAgentSession;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): RagSessionSource | undefined;
    setSource(value: RagSessionSource): RagAgentSession;

    hasDsl(): boolean;
    clearDsl(): void;
    getDsl(): google_protobuf_struct_pb.Struct | undefined;
    setDsl(value?: google_protobuf_struct_pb.Struct): RagAgentSession;
    getDuration(): number;
    setDuration(value: number): RagAgentSession;

    hasRound(): boolean;
    clearRound(): void;
    getRound(): number | undefined;
    setRound(value: number): RagAgentSession;

    hasThumbUp(): boolean;
    clearThumbUp(): void;
    getThumbUp(): number | undefined;
    setThumbUp(value: number): RagAgentSession;
    getErrors(): string;
    setErrors(value: string): RagAgentSession;
    getCreateTime(): number;
    setCreateTime(value: number): RagAgentSession;
    getCreateDate(): string;
    setCreateDate(value: string): RagAgentSession;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagAgentSession;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagAgentSession;

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
        messagesList: Array<RagMessage.AsObject>,
        tokens?: number,
        source?: RagSessionSource,
        dsl?: google_protobuf_struct_pb.Struct.AsObject,
        duration: number,
        round?: number,
        thumbUp?: number,
        errors: string,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
    }
}

export class RagDeleteAgentSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteAgentSessionsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteAgentSessionsRequest;
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
        languageCode: string,
        agentId: string,
        idsList: Array<string>,
        deleteAll?: boolean,
    }
}

export class RagChatCompletionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagChatCompletionRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagChatCompletionRequest;
    getChatId(): string;
    setChatId(value: string): RagChatCompletionRequest;
    clearMessagesList(): void;
    getMessagesList(): Array<RagMessage>;
    setMessagesList(value: Array<RagMessage>): RagChatCompletionRequest;
    addMessages(value?: RagMessage, index?: number): RagMessage;
    getSessionId(): string;
    setSessionId(value: string): RagChatCompletionRequest;
    getName(): string;
    setName(value: string): RagChatCompletionRequest;
    getUserId(): string;
    setUserId(value: string): RagChatCompletionRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): boolean | undefined;
    setStream(value: boolean): RagChatCompletionRequest;

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
        languageCode: string,
        chatId: string,
        messagesList: Array<RagMessage.AsObject>,
        sessionId: string,
        name: string,
        userId: string,
        stream?: boolean,
    }
}

export class RagChatCompletionResponse extends jspb.Message { 
    getAnswer(): string;
    setAnswer(value: string): RagChatCompletionResponse;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): RagReference | undefined;
    setReference(value?: RagReference): RagChatCompletionResponse;
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
        reference?: RagReference.AsObject,
        audioBinary: string,
        id: string,
        sessionId: string,
        prompt: string,
        createdAt: number,
    }
}

export class RagReference extends jspb.Message { 
    clearChunksList(): void;
    getChunksList(): Array<RagReferenceChunk>;
    setChunksList(value: Array<RagReferenceChunk>): RagReference;
    addChunks(value?: RagReferenceChunk, index?: number): RagReferenceChunk;
    clearDocAggsList(): void;
    getDocAggsList(): Array<RagDocAgg>;
    setDocAggsList(value: Array<RagDocAgg>): RagReference;
    addDocAggs(value?: RagDocAgg, index?: number): RagDocAgg;
    getTotal(): number;
    setTotal(value: number): RagReference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagReference.AsObject;
    static toObject(includeInstance: boolean, msg: RagReference): RagReference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagReference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagReference;
    static deserializeBinaryFromReader(message: RagReference, reader: jspb.BinaryReader): RagReference;
}

export namespace RagReference {
    export type AsObject = {
        chunksList: Array<RagReferenceChunk.AsObject>,
        docAggsList: Array<RagDocAgg.AsObject>,
        total: number,
    }
}

export class RagReferenceChunk extends jspb.Message { 
    getId(): string;
    setId(value: string): RagReferenceChunk;
    getContent(): string;
    setContent(value: string): RagReferenceChunk;
    getDocumentId(): string;
    setDocumentId(value: string): RagReferenceChunk;
    getDocumentName(): string;
    setDocumentName(value: string): RagReferenceChunk;
    getDatasetId(): string;
    setDatasetId(value: string): RagReferenceChunk;
    getImageId(): string;
    setImageId(value: string): RagReferenceChunk;
    clearPositionsList(): void;
    getPositionsList(): Array<RagIntList>;
    setPositionsList(value: Array<RagIntList>): RagReferenceChunk;
    addPositions(value?: RagIntList, index?: number): RagIntList;
    getVectorSimilarity(): number;
    setVectorSimilarity(value: number): RagReferenceChunk;
    getTermSimilarity(): number;
    setTermSimilarity(value: number): RagReferenceChunk;
    getSimilarity(): number;
    setSimilarity(value: number): RagReferenceChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagReferenceChunk.AsObject;
    static toObject(includeInstance: boolean, msg: RagReferenceChunk): RagReferenceChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagReferenceChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagReferenceChunk;
    static deserializeBinaryFromReader(message: RagReferenceChunk, reader: jspb.BinaryReader): RagReferenceChunk;
}

export namespace RagReferenceChunk {
    export type AsObject = {
        id: string,
        content: string,
        documentId: string,
        documentName: string,
        datasetId: string,
        imageId: string,
        positionsList: Array<RagIntList.AsObject>,
        vectorSimilarity: number,
        termSimilarity: number,
        similarity: number,
    }
}

export class RagIntList extends jspb.Message { 
    clearIntListList(): void;
    getIntListList(): Array<number>;
    setIntListList(value: Array<number>): RagIntList;
    addIntList(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagIntList.AsObject;
    static toObject(includeInstance: boolean, msg: RagIntList): RagIntList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagIntList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagIntList;
    static deserializeBinaryFromReader(message: RagIntList, reader: jspb.BinaryReader): RagIntList;
}

export namespace RagIntList {
    export type AsObject = {
        intListList: Array<number>,
    }
}

export class RagAgentCompletionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAgentCompletionRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagAgentCompletionRequest;
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
        languageCode: string,
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

export class RagFile extends jspb.Message { 
    getId(): string;
    setId(value: string): RagFile;
    getParentId(): string;
    setParentId(value: string): RagFile;
    getTenantId(): string;
    setTenantId(value: string): RagFile;
    getCreatedBy(): string;
    setCreatedBy(value: string): RagFile;
    getName(): string;
    setName(value: string): RagFile;
    getLocation(): string;
    setLocation(value: string): RagFile;

    hasSize(): boolean;
    clearSize(): void;
    getSize(): number | undefined;
    setSize(value: number): RagFile;
    getType(): string;
    setType(value: string): RagFile;
    getSourceType(): string;
    setSourceType(value: string): RagFile;
    getCreateTime(): number;
    setCreateTime(value: number): RagFile;
    getCreateDate(): string;
    setCreateDate(value: string): RagFile;
    getUpdateTime(): number;
    setUpdateTime(value: number): RagFile;
    getUpdateDate(): string;
    setUpdateDate(value: string): RagFile;

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
        parentId: string,
        tenantId: string,
        createdBy: string,
        name: string,
        location: string,
        size?: number,
        type: string,
        sourceType: string,
        createTime: number,
        createDate: string,
        updateTime: number,
        updateDate: string,
    }
}

export class RagAgentCompletionResponse extends jspb.Message { 

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): RagAgentEventType | undefined;
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
        event?: RagAgentEventType,
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

export class RagAskRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAskRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagAskRequest;
    getQuestion(): string;
    setQuestion(value: string): RagAskRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagAskRequest;
    addDatasetIds(value: string, index?: number): string;

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
        languageCode: string,
        question: string,
        datasetIdsList: Array<string>,
    }
}

export class RagAskResponse extends jspb.Message { 
    getAnswer(): string;
    setAnswer(value: string): RagAskResponse;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): google_protobuf_struct_pb.Struct | undefined;
    setReference(value?: google_protobuf_struct_pb.Struct): RagAskResponse;

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
    }
}

export class RagRelatedQuestionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagRelatedQuestionsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagRelatedQuestionsRequest;
    getQuestion(): string;
    setQuestion(value: string): RagRelatedQuestionsRequest;
    getIndustry(): string;
    setIndustry(value: string): RagRelatedQuestionsRequest;

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
        languageCode: string,
        question: string,
        industry: string,
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

export class RagCreateCrawlerRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagCreateCrawlerRequest;

    hasCrawler(): boolean;
    clearCrawler(): void;
    getCrawler(): RagCrawler | undefined;
    setCrawler(value?: RagCrawler): RagCreateCrawlerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagCreateCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateCrawlerRequest): RagCreateCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateCrawlerRequest;
    static deserializeBinaryFromReader(message: RagCreateCrawlerRequest, reader: jspb.BinaryReader): RagCreateCrawlerRequest;
}

export namespace RagCreateCrawlerRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawler?: RagCrawler.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagDeleteCrawlerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RagDeleteCrawlerRequest;
    getParent(): string;
    setParent(value: string): RagDeleteCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlerRequest): RagDeleteCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerRequest;
    static deserializeBinaryFromReader(message: RagDeleteCrawlerRequest, reader: jspb.BinaryReader): RagDeleteCrawlerRequest;
}

export namespace RagDeleteCrawlerRequest {
    export type AsObject = {
        name: string,
        parent: string,
        languageCode: string,
    }
}

export class RagDeleteCrawlerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): RagDeleteCrawlerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): RagDeleteCrawlerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlerResponse): RagDeleteCrawlerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerResponse;
    static deserializeBinaryFromReader(message: RagDeleteCrawlerResponse, reader: jspb.BinaryReader): RagDeleteCrawlerResponse;
}

export namespace RagDeleteCrawlerResponse {
    export type AsObject = {
        name: string,
        errorMessage: string,
    }
}

export class RagDeleteCrawlersRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteCrawlersRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteCrawlersRequest;
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): RagDeleteCrawlersRequest;
    addNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlersRequest): RagDeleteCrawlersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlersRequest;
    static deserializeBinaryFromReader(message: RagDeleteCrawlersRequest, reader: jspb.BinaryReader): RagDeleteCrawlersRequest;
}

export namespace RagDeleteCrawlersRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        namesList: Array<string>,
    }
}

export class RagDeleteCrawlersResponse extends jspb.Message { 
    clearDeleteCrawlerResponsesList(): void;
    getDeleteCrawlerResponsesList(): Array<RagDeleteCrawlerResponse>;
    setDeleteCrawlerResponsesList(value: Array<RagDeleteCrawlerResponse>): RagDeleteCrawlersResponse;
    addDeleteCrawlerResponses(value?: RagDeleteCrawlerResponse, index?: number): RagDeleteCrawlerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): RagDeleteCrawlersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlersResponse): RagDeleteCrawlersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlersResponse;
    static deserializeBinaryFromReader(message: RagDeleteCrawlersResponse, reader: jspb.BinaryReader): RagDeleteCrawlersResponse;
}

export namespace RagDeleteCrawlersResponse {
    export type AsObject = {
        deleteCrawlerResponsesList: Array<RagDeleteCrawlerResponse.AsObject>,
        errorMessage: string,
    }
}

export class RagListCrawlersRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListCrawlersRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListCrawlersRequest;
    getPageToken(): string;
    setPageToken(value: string): RagListCrawlersRequest;
    getDatasetName(): string;
    setDatasetName(value: string): RagListCrawlersRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagListCrawlersRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListCrawlersRequest;

    hasSortingMode(): boolean;
    clearSortingMode(): void;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode | undefined;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListCrawlersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListCrawlersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListCrawlersRequest): RagListCrawlersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListCrawlersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListCrawlersRequest;
    static deserializeBinaryFromReader(message: RagListCrawlersRequest, reader: jspb.BinaryReader): RagListCrawlersRequest;
}

export namespace RagListCrawlersRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        pageToken: string,
        datasetName: string,
        crawlerName: string,
        orderby: string,
        sortingMode?: ondewo_nlu_common_pb.SortingMode,
    }
}

export class RagListCrawlersResponse extends jspb.Message { 
    clearCrawlersList(): void;
    getCrawlersList(): Array<RagCrawler>;
    setCrawlersList(value: Array<RagCrawler>): RagListCrawlersResponse;
    addCrawlers(value?: RagCrawler, index?: number): RagCrawler;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagListCrawlersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListCrawlersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagListCrawlersResponse): RagListCrawlersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListCrawlersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListCrawlersResponse;
    static deserializeBinaryFromReader(message: RagListCrawlersResponse, reader: jspb.BinaryReader): RagListCrawlersResponse;
}

export namespace RagListCrawlersResponse {
    export type AsObject = {
        crawlersList: Array<RagCrawler.AsObject>,
        nextPageToken: string,
    }
}

export class RagGetCrawlerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RagGetCrawlerRequest;
    getParent(): string;
    setParent(value: string): RagGetCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerRequest): RagGetCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerRequest, reader: jspb.BinaryReader): RagGetCrawlerRequest;
}

export namespace RagGetCrawlerRequest {
    export type AsObject = {
        name: string,
        parent: string,
        languageCode: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagUpdateCrawlerRequest extends jspb.Message { 

    hasCrawler(): boolean;
    clearCrawler(): void;
    getCrawler(): RagCrawler | undefined;
    setCrawler(value?: RagCrawler): RagUpdateCrawlerRequest;
    getParent(): string;
    setParent(value: string): RagUpdateCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateCrawlerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateCrawlerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateCrawlerRequest): RagUpdateCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateCrawlerRequest;
    static deserializeBinaryFromReader(message: RagUpdateCrawlerRequest, reader: jspb.BinaryReader): RagUpdateCrawlerRequest;
}

export namespace RagUpdateCrawlerRequest {
    export type AsObject = {
        crawler?: RagCrawler.AsObject,
        parent: string,
        languageCode: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagCrawler extends jspb.Message { 
    getName(): string;
    setName(value: string): RagCrawler;
    getDisplayName(): string;
    setDisplayName(value: string): RagCrawler;

    hasCrawlerSources(): boolean;
    clearCrawlerSources(): void;
    getCrawlerSources(): RagCrawlerSources | undefined;
    setCrawlerSources(value?: RagCrawlerSources): RagCrawler;

    hasCrawlerSeedUrlFilters(): boolean;
    clearCrawlerSeedUrlFilters(): void;
    getCrawlerSeedUrlFilters(): RagCrawlerSeedUrlFilters | undefined;
    setCrawlerSeedUrlFilters(value?: RagCrawlerSeedUrlFilters): RagCrawler;

    hasCrawlerAuth(): boolean;
    clearCrawlerAuth(): void;
    getCrawlerAuth(): RagCrawlerAuth | undefined;
    setCrawlerAuth(value?: RagCrawlerAuth): RagCrawler;

    hasCrawlerBrowserConfig(): boolean;
    clearCrawlerBrowserConfig(): void;
    getCrawlerBrowserConfig(): RagCrawlerBrowserConfig | undefined;
    setCrawlerBrowserConfig(value?: RagCrawlerBrowserConfig): RagCrawler;

    hasCrawlerConfig(): boolean;
    clearCrawlerConfig(): void;
    getCrawlerConfig(): RagCrawlerConfig | undefined;
    setCrawlerConfig(value?: RagCrawlerConfig): RagCrawler;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawler;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawler;
    getCreatedBy(): string;
    setCreatedBy(value: string): RagCrawler;
    getModifiedBy(): string;
    setModifiedBy(value: string): RagCrawler;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawler.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawler): RagCrawler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawler;
    static deserializeBinaryFromReader(message: RagCrawler, reader: jspb.BinaryReader): RagCrawler;
}

export namespace RagCrawler {
    export type AsObject = {
        name: string,
        displayName: string,
        crawlerSources?: RagCrawlerSources.AsObject,
        crawlerSeedUrlFilters?: RagCrawlerSeedUrlFilters.AsObject,
        crawlerAuth?: RagCrawlerAuth.AsObject,
        crawlerBrowserConfig?: RagCrawlerBrowserConfig.AsObject,
        crawlerConfig?: RagCrawlerConfig.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class RagCrawlerSources extends jspb.Message { 
    clearUrlsList(): void;
    getUrlsList(): Array<string>;
    setUrlsList(value: Array<string>): RagCrawlerSources;
    addUrls(value: string, index?: number): string;
    clearSitemapsList(): void;
    getSitemapsList(): Array<string>;
    setSitemapsList(value: Array<string>): RagCrawlerSources;
    addSitemaps(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerSources.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerSources): RagCrawlerSources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerSources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerSources;
    static deserializeBinaryFromReader(message: RagCrawlerSources, reader: jspb.BinaryReader): RagCrawlerSources;
}

export namespace RagCrawlerSources {
    export type AsObject = {
        urlsList: Array<string>,
        sitemapsList: Array<string>,
    }
}

export class RagCrawlerFilters extends jspb.Message { 
    clearAllowedDomainsList(): void;
    getAllowedDomainsList(): Array<string>;
    setAllowedDomainsList(value: Array<string>): RagCrawlerFilters;
    addAllowedDomains(value: string, index?: number): string;
    clearDisallowedDomainsList(): void;
    getDisallowedDomainsList(): Array<string>;
    setDisallowedDomainsList(value: Array<string>): RagCrawlerFilters;
    addDisallowedDomains(value: string, index?: number): string;
    getAllowInternalLinks(): boolean;
    setAllowInternalLinks(value: boolean): RagCrawlerFilters;
    getAllowExternalLinks(): boolean;
    setAllowExternalLinks(value: boolean): RagCrawlerFilters;
    getAllowSocialMediaLinks(): boolean;
    setAllowSocialMediaLinks(value: boolean): RagCrawlerFilters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerFilters.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerFilters): RagCrawlerFilters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerFilters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerFilters;
    static deserializeBinaryFromReader(message: RagCrawlerFilters, reader: jspb.BinaryReader): RagCrawlerFilters;
}

export namespace RagCrawlerFilters {
    export type AsObject = {
        allowedDomainsList: Array<string>,
        disallowedDomainsList: Array<string>,
        allowInternalLinks: boolean,
        allowExternalLinks: boolean,
        allowSocialMediaLinks: boolean,
    }
}

export class RagCrawlerSeedUrlFilters extends jspb.Message { 
    clearAllowedRegexList(): void;
    getAllowedRegexList(): Array<string>;
    setAllowedRegexList(value: Array<string>): RagCrawlerSeedUrlFilters;
    addAllowedRegex(value: string, index?: number): string;
    clearDisallowedRegexList(): void;
    getDisallowedRegexList(): Array<string>;
    setDisallowedRegexList(value: Array<string>): RagCrawlerSeedUrlFilters;
    addDisallowedRegex(value: string, index?: number): string;
    clearAllowedDomainsList(): void;
    getAllowedDomainsList(): Array<string>;
    setAllowedDomainsList(value: Array<string>): RagCrawlerSeedUrlFilters;
    addAllowedDomains(value: string, index?: number): string;
    clearDisallowedDomainsList(): void;
    getDisallowedDomainsList(): Array<string>;
    setDisallowedDomainsList(value: Array<string>): RagCrawlerSeedUrlFilters;
    addDisallowedDomains(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerSeedUrlFilters.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerSeedUrlFilters): RagCrawlerSeedUrlFilters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerSeedUrlFilters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerSeedUrlFilters;
    static deserializeBinaryFromReader(message: RagCrawlerSeedUrlFilters, reader: jspb.BinaryReader): RagCrawlerSeedUrlFilters;
}

export namespace RagCrawlerSeedUrlFilters {
    export type AsObject = {
        allowedRegexList: Array<string>,
        disallowedRegexList: Array<string>,
        allowedDomainsList: Array<string>,
        disallowedDomainsList: Array<string>,
    }
}

export class RagCrawlerAuth extends jspb.Message { 

    hasHttpAuth(): boolean;
    clearHttpAuth(): void;
    getHttpAuth(): RagCrawlerHttpAuth | undefined;
    setHttpAuth(value?: RagCrawlerHttpAuth): RagCrawlerAuth;

    hasHtmlAuth(): boolean;
    clearHtmlAuth(): void;
    getHtmlAuth(): RagCrawlerHtmlAuth | undefined;
    setHtmlAuth(value?: RagCrawlerHtmlAuth): RagCrawlerAuth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerAuth.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerAuth): RagCrawlerAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerAuth;
    static deserializeBinaryFromReader(message: RagCrawlerAuth, reader: jspb.BinaryReader): RagCrawlerAuth;
}

export namespace RagCrawlerAuth {
    export type AsObject = {
        httpAuth?: RagCrawlerHttpAuth.AsObject,
        htmlAuth?: RagCrawlerHtmlAuth.AsObject,
    }
}

export class RagCrawlerHtmlAuth extends jspb.Message { 
    getHtmlAuthBaseUrl(): string;
    setHtmlAuthBaseUrl(value: string): RagCrawlerHtmlAuth;
    getHtmlAuthUsernameSelectorType(): RagCrawlerSelectorType;
    setHtmlAuthUsernameSelectorType(value: RagCrawlerSelectorType): RagCrawlerHtmlAuth;
    getHtmlAuthUsernameSelector(): string;
    setHtmlAuthUsernameSelector(value: string): RagCrawlerHtmlAuth;
    getHtmlAuthUsername(): string;
    setHtmlAuthUsername(value: string): RagCrawlerHtmlAuth;
    getHtmlAuthPasswordSelectorType(): RagCrawlerSelectorType;
    setHtmlAuthPasswordSelectorType(value: RagCrawlerSelectorType): RagCrawlerHtmlAuth;
    getHtmlAuthPasswordSelector(): string;
    setHtmlAuthPasswordSelector(value: string): RagCrawlerHtmlAuth;
    getHtmlAuthPassword(): string;
    setHtmlAuthPassword(value: string): RagCrawlerHtmlAuth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerHtmlAuth.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerHtmlAuth): RagCrawlerHtmlAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerHtmlAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerHtmlAuth;
    static deserializeBinaryFromReader(message: RagCrawlerHtmlAuth, reader: jspb.BinaryReader): RagCrawlerHtmlAuth;
}

export namespace RagCrawlerHtmlAuth {
    export type AsObject = {
        htmlAuthBaseUrl: string,
        htmlAuthUsernameSelectorType: RagCrawlerSelectorType,
        htmlAuthUsernameSelector: string,
        htmlAuthUsername: string,
        htmlAuthPasswordSelectorType: RagCrawlerSelectorType,
        htmlAuthPasswordSelector: string,
        htmlAuthPassword: string,
    }
}

export class RagCrawlerHttpAuth extends jspb.Message { 
    getHttpAuthUsername(): string;
    setHttpAuthUsername(value: string): RagCrawlerHttpAuth;
    getHttpAuthPassword(): string;
    setHttpAuthPassword(value: string): RagCrawlerHttpAuth;
    getHttpAuthUserAgent(): string;
    setHttpAuthUserAgent(value: string): RagCrawlerHttpAuth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerHttpAuth.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerHttpAuth): RagCrawlerHttpAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerHttpAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerHttpAuth;
    static deserializeBinaryFromReader(message: RagCrawlerHttpAuth, reader: jspb.BinaryReader): RagCrawlerHttpAuth;
}

export namespace RagCrawlerHttpAuth {
    export type AsObject = {
        httpAuthUsername: string,
        httpAuthPassword: string,
        httpAuthUserAgent: string,
    }
}

export class RagCrawlerBrowserConfig extends jspb.Message { 
    clearCrawlerHeadersList(): void;
    getCrawlerHeadersList(): Array<google_protobuf_struct_pb.Struct>;
    setCrawlerHeadersList(value: Array<google_protobuf_struct_pb.Struct>): RagCrawlerBrowserConfig;
    addCrawlerHeaders(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;
    clearCrawlerCookiesList(): void;
    getCrawlerCookiesList(): Array<RagCrawlerCookie>;
    setCrawlerCookiesList(value: Array<RagCrawlerCookie>): RagCrawlerBrowserConfig;
    addCrawlerCookies(value?: RagCrawlerCookie, index?: number): RagCrawlerCookie;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerBrowserConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerBrowserConfig): RagCrawlerBrowserConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerBrowserConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerBrowserConfig;
    static deserializeBinaryFromReader(message: RagCrawlerBrowserConfig, reader: jspb.BinaryReader): RagCrawlerBrowserConfig;
}

export namespace RagCrawlerBrowserConfig {
    export type AsObject = {
        crawlerHeadersList: Array<google_protobuf_struct_pb.Struct.AsObject>,
        crawlerCookiesList: Array<RagCrawlerCookie.AsObject>,
    }
}

export class RagCrawlerCookie extends jspb.Message { 
    getCookieName(): string;
    setCookieName(value: string): RagCrawlerCookie;
    getCookieValue(): string;
    setCookieValue(value: string): RagCrawlerCookie;
    getCookieDomain(): string;
    setCookieDomain(value: string): RagCrawlerCookie;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerCookie.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerCookie): RagCrawlerCookie.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerCookie, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerCookie;
    static deserializeBinaryFromReader(message: RagCrawlerCookie, reader: jspb.BinaryReader): RagCrawlerCookie;
}

export namespace RagCrawlerCookie {
    export type AsObject = {
        cookieName: string,
        cookieValue: string,
        cookieDomain: string,
    }
}

export class RagCrawlerConcurrencyConfig extends jspb.Message { 
    getMaxConcurrentRequests(): number;
    setMaxConcurrentRequests(value: number): RagCrawlerConcurrencyConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerConcurrencyConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerConcurrencyConfig): RagCrawlerConcurrencyConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerConcurrencyConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerConcurrencyConfig;
    static deserializeBinaryFromReader(message: RagCrawlerConcurrencyConfig, reader: jspb.BinaryReader): RagCrawlerConcurrencyConfig;
}

export namespace RagCrawlerConcurrencyConfig {
    export type AsObject = {
        maxConcurrentRequests: number,
    }
}

export class RagCrawlerConfig extends jspb.Message { 

    hasConcurrencyConfig(): boolean;
    clearConcurrencyConfig(): void;
    getConcurrencyConfig(): RagCrawlerConcurrencyConfig | undefined;
    setConcurrencyConfig(value?: RagCrawlerConcurrencyConfig): RagCrawlerConfig;

    hasDeepCrawlerConfig(): boolean;
    clearDeepCrawlerConfig(): void;
    getDeepCrawlerConfig(): RagCrawlerDeepCrawlerConfig | undefined;
    setDeepCrawlerConfig(value?: RagCrawlerDeepCrawlerConfig): RagCrawlerConfig;

    hasOutputConfig(): boolean;
    clearOutputConfig(): void;
    getOutputConfig(): RagCrawlerResultsConfig | undefined;
    setOutputConfig(value?: RagCrawlerResultsConfig): RagCrawlerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerConfig): RagCrawlerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerConfig;
    static deserializeBinaryFromReader(message: RagCrawlerConfig, reader: jspb.BinaryReader): RagCrawlerConfig;
}

export namespace RagCrawlerConfig {
    export type AsObject = {
        concurrencyConfig?: RagCrawlerConcurrencyConfig.AsObject,
        deepCrawlerConfig?: RagCrawlerDeepCrawlerConfig.AsObject,
        outputConfig?: RagCrawlerResultsConfig.AsObject,
    }
}

export class RagCrawlerDeepCrawlerConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): RagCrawlerDeepCrawlerConfig;
    getCrawlStrategy(): RagCrawlerCrawlStrategy;
    setCrawlStrategy(value: RagCrawlerCrawlStrategy): RagCrawlerDeepCrawlerConfig;
    getMaxDepth(): number;
    setMaxDepth(value: number): RagCrawlerDeepCrawlerConfig;
    getMaxPages(): number;
    setMaxPages(value: number): RagCrawlerDeepCrawlerConfig;

    hasDeepCrawlerFilters(): boolean;
    clearDeepCrawlerFilters(): void;
    getDeepCrawlerFilters(): RagCrawlerFilters | undefined;
    setDeepCrawlerFilters(value?: RagCrawlerFilters): RagCrawlerDeepCrawlerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerDeepCrawlerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerDeepCrawlerConfig): RagCrawlerDeepCrawlerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerDeepCrawlerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerDeepCrawlerConfig;
    static deserializeBinaryFromReader(message: RagCrawlerDeepCrawlerConfig, reader: jspb.BinaryReader): RagCrawlerDeepCrawlerConfig;
}

export namespace RagCrawlerDeepCrawlerConfig {
    export type AsObject = {
        isActive: boolean,
        crawlStrategy: RagCrawlerCrawlStrategy,
        maxDepth: number,
        maxPages: number,
        deepCrawlerFilters?: RagCrawlerFilters.AsObject,
    }
}

export class RagCrawlerDiagnosticsConfig extends jspb.Message { 
    getSslCertificate(): boolean;
    setSslCertificate(value: boolean): RagCrawlerDiagnosticsConfig;
    getNetworkRequests(): boolean;
    setNetworkRequests(value: boolean): RagCrawlerDiagnosticsConfig;
    getConsoleMessages(): boolean;
    setConsoleMessages(value: boolean): RagCrawlerDiagnosticsConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerDiagnosticsConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerDiagnosticsConfig): RagCrawlerDiagnosticsConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerDiagnosticsConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerDiagnosticsConfig;
    static deserializeBinaryFromReader(message: RagCrawlerDiagnosticsConfig, reader: jspb.BinaryReader): RagCrawlerDiagnosticsConfig;
}

export namespace RagCrawlerDiagnosticsConfig {
    export type AsObject = {
        sslCertificate: boolean,
        networkRequests: boolean,
        consoleMessages: boolean,
    }
}

export class RagCrawlerInteractionConfig extends jspb.Message { 
    getWaitFor(): string;
    setWaitFor(value: string): RagCrawlerInteractionConfig;
    getWaitForTimeout(): number;
    setWaitForTimeout(value: number): RagCrawlerInteractionConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerInteractionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerInteractionConfig): RagCrawlerInteractionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerInteractionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerInteractionConfig;
    static deserializeBinaryFromReader(message: RagCrawlerInteractionConfig, reader: jspb.BinaryReader): RagCrawlerInteractionConfig;
}

export namespace RagCrawlerInteractionConfig {
    export type AsObject = {
        waitFor: string,
        waitForTimeout: number,
    }
}

export class RagCrawlerResultsConfig extends jspb.Message { 
    getInjectFrontmatter(): boolean;
    setInjectFrontmatter(value: boolean): RagCrawlerResultsConfig;
    clearMetaDataExtractorsList(): void;
    getMetaDataExtractorsList(): Array<RagCrawlerMetaDataExtractor>;
    setMetaDataExtractorsList(value: Array<RagCrawlerMetaDataExtractor>): RagCrawlerResultsConfig;
    addMetaDataExtractors(value?: RagCrawlerMetaDataExtractor, index?: number): RagCrawlerMetaDataExtractor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerResultsConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerResultsConfig): RagCrawlerResultsConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerResultsConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerResultsConfig;
    static deserializeBinaryFromReader(message: RagCrawlerResultsConfig, reader: jspb.BinaryReader): RagCrawlerResultsConfig;
}

export namespace RagCrawlerResultsConfig {
    export type AsObject = {
        injectFrontmatter: boolean,
        metaDataExtractorsList: Array<RagCrawlerMetaDataExtractor.AsObject>,
    }
}

export class RagCrawlerMetaDataExtractor extends jspb.Message { 
    getType(): RagCrawlerMetaDataExtractorType;
    setType(value: RagCrawlerMetaDataExtractorType): RagCrawlerMetaDataExtractor;
    getValue(): string;
    setValue(value: string): RagCrawlerMetaDataExtractor;
    getKey(): string;
    setKey(value: string): RagCrawlerMetaDataExtractor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerMetaDataExtractor.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerMetaDataExtractor): RagCrawlerMetaDataExtractor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerMetaDataExtractor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerMetaDataExtractor;
    static deserializeBinaryFromReader(message: RagCrawlerMetaDataExtractor, reader: jspb.BinaryReader): RagCrawlerMetaDataExtractor;
}

export namespace RagCrawlerMetaDataExtractor {
    export type AsObject = {
        type: RagCrawlerMetaDataExtractorType,
        value: string,
        key: string,
    }
}

export class RagCrawlerRetryConfig extends jspb.Message { 
    getPageLoadTimeoutSeconds(): number;
    setPageLoadTimeoutSeconds(value: number): RagCrawlerRetryConfig;
    getRetryMaxAttempts(): number;
    setRetryMaxAttempts(value: number): RagCrawlerRetryConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerRetryConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerRetryConfig): RagCrawlerRetryConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerRetryConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerRetryConfig;
    static deserializeBinaryFromReader(message: RagCrawlerRetryConfig, reader: jspb.BinaryReader): RagCrawlerRetryConfig;
}

export namespace RagCrawlerRetryConfig {
    export type AsObject = {
        pageLoadTimeoutSeconds: number,
        retryMaxAttempts: number,
    }
}

export class RagCrawlerContentResult extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): RagCrawlerContentResult;
    getMarkdown(): string;
    setMarkdown(value: string): RagCrawlerContentResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerContentResult.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerContentResult): RagCrawlerContentResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerContentResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerContentResult;
    static deserializeBinaryFromReader(message: RagCrawlerContentResult, reader: jspb.BinaryReader): RagCrawlerContentResult;
}

export namespace RagCrawlerContentResult {
    export type AsObject = {
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        markdown: string,
    }
}

export class RagCrawlerExecutionInfo extends jspb.Message { 

    hasSslCertificate(): boolean;
    clearSslCertificate(): void;
    getSslCertificate(): google_protobuf_struct_pb.Struct | undefined;
    setSslCertificate(value?: google_protobuf_struct_pb.Struct): RagCrawlerExecutionInfo;
    getSuccess(): boolean;
    setSuccess(value: boolean): RagCrawlerExecutionInfo;
    getErrorMessage(): string;
    setErrorMessage(value: string): RagCrawlerExecutionInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerExecutionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerExecutionInfo): RagCrawlerExecutionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerExecutionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerExecutionInfo;
    static deserializeBinaryFromReader(message: RagCrawlerExecutionInfo, reader: jspb.BinaryReader): RagCrawlerExecutionInfo;
}

export namespace RagCrawlerExecutionInfo {
    export type AsObject = {
        sslCertificate?: google_protobuf_struct_pb.Struct.AsObject,
        success: boolean,
        errorMessage: string,
    }
}

export class RagCrawlerResult extends jspb.Message { 
    getName(): string;
    setName(value: string): RagCrawlerResult;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagCrawlerResult;
    getOperationName(): string;
    setOperationName(value: string): RagCrawlerResult;
    getSourceUrl(): string;
    setSourceUrl(value: string): RagCrawlerResult;

    hasFileResource(): boolean;
    clearFileResource(): void;
    getFileResource(): ondewo_nlu_session_pb.FileResource | undefined;
    setFileResource(value?: ondewo_nlu_session_pb.FileResource): RagCrawlerResult;

    hasLastCrawledDate(): boolean;
    clearLastCrawledDate(): void;
    getLastCrawledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastCrawledDate(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawlerResult;

    hasContentResult(): boolean;
    clearContentResult(): void;
    getContentResult(): RagCrawlerContentResult | undefined;
    setContentResult(value?: RagCrawlerContentResult): RagCrawlerResult;

    hasPageLastUpdatedDate(): boolean;
    clearPageLastUpdatedDate(): void;
    getPageLastUpdatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPageLastUpdatedDate(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawlerResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerResult.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerResult): RagCrawlerResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerResult;
    static deserializeBinaryFromReader(message: RagCrawlerResult, reader: jspb.BinaryReader): RagCrawlerResult;
}

export namespace RagCrawlerResult {
    export type AsObject = {
        name: string,
        crawlerName: string,
        operationName: string,
        sourceUrl: string,
        fileResource?: ondewo_nlu_session_pb.FileResource.AsObject,
        lastCrawledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        contentResult?: RagCrawlerContentResult.AsObject,
        pageLastUpdatedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RagStartCrawlerRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagStartCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagStartCrawlerRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagStartCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagStartCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagStartCrawlerRequest): RagStartCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagStartCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagStartCrawlerRequest;
    static deserializeBinaryFromReader(message: RagStartCrawlerRequest, reader: jspb.BinaryReader): RagStartCrawlerRequest;
}

export namespace RagStartCrawlerRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerName: string,
    }
}

export class RagGetCrawlerRunRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetCrawlerRunRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerRunRequest;
    getCrawlerRunName(): string;
    setCrawlerRunName(value: string): RagGetCrawlerRunRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerRunRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerRunRequest): RagGetCrawlerRunRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerRunRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRunRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerRunRequest, reader: jspb.BinaryReader): RagGetCrawlerRunRequest;
}

export namespace RagGetCrawlerRunRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerRunName: string,
    }
}

export class RagListCrawlerRunsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListCrawlerRunsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListCrawlerRunsRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagListCrawlerRunsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagListCrawlerRunsRequest;
    getState(): ondewo_nlu_operation_metadata_pb.OperationMetadata.Status;
    setState(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status): RagListCrawlerRunsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListCrawlerRunsRequest;

    hasSortingMode(): boolean;
    clearSortingMode(): void;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode | undefined;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListCrawlerRunsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListCrawlerRunsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListCrawlerRunsRequest): RagListCrawlerRunsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListCrawlerRunsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListCrawlerRunsRequest;
    static deserializeBinaryFromReader(message: RagListCrawlerRunsRequest, reader: jspb.BinaryReader): RagListCrawlerRunsRequest;
}

export namespace RagListCrawlerRunsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerName: string,
        pageToken: string,
        state: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status,
        orderby: string,
        sortingMode?: ondewo_nlu_common_pb.SortingMode,
    }
}

export class RagListCrawlerRunsResponse extends jspb.Message { 
    clearCrawlerRunsList(): void;
    getCrawlerRunsList(): Array<ondewo_nlu_operations_pb.Operation>;
    setCrawlerRunsList(value: Array<ondewo_nlu_operations_pb.Operation>): RagListCrawlerRunsResponse;
    addCrawlerRuns(value?: ondewo_nlu_operations_pb.Operation, index?: number): ondewo_nlu_operations_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagListCrawlerRunsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListCrawlerRunsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagListCrawlerRunsResponse): RagListCrawlerRunsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListCrawlerRunsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListCrawlerRunsResponse;
    static deserializeBinaryFromReader(message: RagListCrawlerRunsResponse, reader: jspb.BinaryReader): RagListCrawlerRunsResponse;
}

export namespace RagListCrawlerRunsResponse {
    export type AsObject = {
        crawlerRunsList: Array<ondewo_nlu_operations_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class RagDeleteCrawlerRunsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteCrawlerRunsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteCrawlerRunsRequest;
    clearCrawlerRunNamesList(): void;
    getCrawlerRunNamesList(): Array<string>;
    setCrawlerRunNamesList(value: Array<string>): RagDeleteCrawlerRunsRequest;
    addCrawlerRunNames(value: string, index?: number): string;
    clearCrawlerNamesList(): void;
    getCrawlerNamesList(): Array<string>;
    setCrawlerNamesList(value: Array<string>): RagDeleteCrawlerRunsRequest;
    addCrawlerNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlerRunsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlerRunsRequest): RagDeleteCrawlerRunsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlerRunsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerRunsRequest;
    static deserializeBinaryFromReader(message: RagDeleteCrawlerRunsRequest, reader: jspb.BinaryReader): RagDeleteCrawlerRunsRequest;
}

export namespace RagDeleteCrawlerRunsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerRunNamesList: Array<string>,
        crawlerNamesList: Array<string>,
    }
}

export class RagDeleteCrawlerRunsResponse extends jspb.Message { 
    getDeletedCount(): number;
    setDeletedCount(value: number): RagDeleteCrawlerRunsResponse;
    clearDeletedRunNamesList(): void;
    getDeletedRunNamesList(): Array<string>;
    setDeletedRunNamesList(value: Array<string>): RagDeleteCrawlerRunsResponse;
    addDeletedRunNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlerRunsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlerRunsResponse): RagDeleteCrawlerRunsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlerRunsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerRunsResponse;
    static deserializeBinaryFromReader(message: RagDeleteCrawlerRunsResponse, reader: jspb.BinaryReader): RagDeleteCrawlerRunsResponse;
}

export namespace RagDeleteCrawlerRunsResponse {
    export type AsObject = {
        deletedCount: number,
        deletedRunNamesList: Array<string>,
    }
}

export class RagStopCrawlerRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagStopCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagStopCrawlerRequest;
    getName(): string;
    setName(value: string): RagStopCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagStopCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagStopCrawlerRequest): RagStopCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagStopCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagStopCrawlerRequest;
    static deserializeBinaryFromReader(message: RagStopCrawlerRequest, reader: jspb.BinaryReader): RagStopCrawlerRequest;
}

export namespace RagStopCrawlerRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        name: string,
    }
}

export class RagStopCrawlerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): RagStopCrawlerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): RagStopCrawlerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagStopCrawlerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagStopCrawlerResponse): RagStopCrawlerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagStopCrawlerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagStopCrawlerResponse;
    static deserializeBinaryFromReader(message: RagStopCrawlerResponse, reader: jspb.BinaryReader): RagStopCrawlerResponse;
}

export namespace RagStopCrawlerResponse {
    export type AsObject = {
        name: string,
        errorMessage: string,
    }
}

export class RagGetCrawlerResultsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetCrawlerResultsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerResultsRequest;
    getOperationName(): string;
    setOperationName(value: string): RagGetCrawlerResultsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagGetCrawlerResultsRequest;
    getUrlQuery(): string;
    setUrlQuery(value: string): RagGetCrawlerResultsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerResultsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerResultsRequest): RagGetCrawlerResultsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerResultsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerResultsRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerResultsRequest, reader: jspb.BinaryReader): RagGetCrawlerResultsRequest;
}

export namespace RagGetCrawlerResultsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        operationName: string,
        pageToken: string,
        urlQuery: string,
    }
}

export class RagGetCrawlerResultsResponse extends jspb.Message { 
    clearCrawlerResultsList(): void;
    getCrawlerResultsList(): Array<RagCrawlerResult>;
    setCrawlerResultsList(value: Array<RagCrawlerResult>): RagGetCrawlerResultsResponse;
    addCrawlerResults(value?: RagCrawlerResult, index?: number): RagCrawlerResult;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagGetCrawlerResultsResponse;
    getTotalSize(): number;
    setTotalSize(value: number): RagGetCrawlerResultsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerResultsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerResultsResponse): RagGetCrawlerResultsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerResultsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerResultsResponse;
    static deserializeBinaryFromReader(message: RagGetCrawlerResultsResponse, reader: jspb.BinaryReader): RagGetCrawlerResultsResponse;
}

export namespace RagGetCrawlerResultsResponse {
    export type AsObject = {
        crawlerResultsList: Array<RagCrawlerResult.AsObject>,
        nextPageToken: string,
        totalSize: number,
    }
}

export class RagGetCrawlerResultRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetCrawlerResultRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerResultRequest;
    getOperationName(): string;
    setOperationName(value: string): RagGetCrawlerResultRequest;
    getUrl(): string;
    setUrl(value: string): RagGetCrawlerResultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerResultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerResultRequest): RagGetCrawlerResultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerResultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerResultRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerResultRequest, reader: jspb.BinaryReader): RagGetCrawlerResultRequest;
}

export namespace RagGetCrawlerResultRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        operationName: string,
        url: string,
    }
}

export class RagAddCrawlerResultsToDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAddCrawlerResultsToDatasetsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagAddCrawlerResultsToDatasetsRequest;
    clearCrawlerNamesList(): void;
    getCrawlerNamesList(): Array<string>;
    setCrawlerNamesList(value: Array<string>): RagAddCrawlerResultsToDatasetsRequest;
    addCrawlerNames(value: string, index?: number): string;
    clearCrawlerResultNamesList(): void;
    getCrawlerResultNamesList(): Array<string>;
    setCrawlerResultNamesList(value: Array<string>): RagAddCrawlerResultsToDatasetsRequest;
    addCrawlerResultNames(value: string, index?: number): string;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagAddCrawlerResultsToDatasetsRequest;
    addDatasetIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAddCrawlerResultsToDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagAddCrawlerResultsToDatasetsRequest): RagAddCrawlerResultsToDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAddCrawlerResultsToDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAddCrawlerResultsToDatasetsRequest;
    static deserializeBinaryFromReader(message: RagAddCrawlerResultsToDatasetsRequest, reader: jspb.BinaryReader): RagAddCrawlerResultsToDatasetsRequest;
}

export namespace RagAddCrawlerResultsToDatasetsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerNamesList: Array<string>,
        crawlerResultNamesList: Array<string>,
        datasetIdsList: Array<string>,
    }
}

export class RagRemoveCrawlerResultsFromDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagRemoveCrawlerResultsFromDatasetsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagRemoveCrawlerResultsFromDatasetsRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagRemoveCrawlerResultsFromDatasetsRequest;
    clearCrawlerResultNamesList(): void;
    getCrawlerResultNamesList(): Array<string>;
    setCrawlerResultNamesList(value: Array<string>): RagRemoveCrawlerResultsFromDatasetsRequest;
    addCrawlerResultNames(value: string, index?: number): string;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagRemoveCrawlerResultsFromDatasetsRequest;
    addDatasetIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRemoveCrawlerResultsFromDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagRemoveCrawlerResultsFromDatasetsRequest): RagRemoveCrawlerResultsFromDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRemoveCrawlerResultsFromDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRemoveCrawlerResultsFromDatasetsRequest;
    static deserializeBinaryFromReader(message: RagRemoveCrawlerResultsFromDatasetsRequest, reader: jspb.BinaryReader): RagRemoveCrawlerResultsFromDatasetsRequest;
}

export namespace RagRemoveCrawlerResultsFromDatasetsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerName: string,
        crawlerResultNamesList: Array<string>,
        datasetIdsList: Array<string>,
    }
}

export class RagGetCrawlerAttachedDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetCrawlerAttachedDatasetsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerAttachedDatasetsRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagGetCrawlerAttachedDatasetsRequest;
    getPageSize(): number;
    setPageSize(value: number): RagGetCrawlerAttachedDatasetsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagGetCrawlerAttachedDatasetsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerAttachedDatasetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerAttachedDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerAttachedDatasetsRequest): RagGetCrawlerAttachedDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerAttachedDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerAttachedDatasetsRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerAttachedDatasetsRequest, reader: jspb.BinaryReader): RagGetCrawlerAttachedDatasetsRequest;
}

export namespace RagGetCrawlerAttachedDatasetsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerName: string,
        pageSize: number,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagGetCrawlerAttachedDatasetsResponse extends jspb.Message { 
    clearDatasetsList(): void;
    getDatasetsList(): Array<RagDataset>;
    setDatasetsList(value: Array<RagDataset>): RagGetCrawlerAttachedDatasetsResponse;
    addDatasets(value?: RagDataset, index?: number): RagDataset;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagGetCrawlerAttachedDatasetsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerAttachedDatasetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerAttachedDatasetsResponse): RagGetCrawlerAttachedDatasetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerAttachedDatasetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerAttachedDatasetsResponse;
    static deserializeBinaryFromReader(message: RagGetCrawlerAttachedDatasetsResponse, reader: jspb.BinaryReader): RagGetCrawlerAttachedDatasetsResponse;
}

export namespace RagGetCrawlerAttachedDatasetsResponse {
    export type AsObject = {
        datasetsList: Array<RagDataset.AsObject>,
        nextPageToken: string,
    }
}

export enum RagChunkMethod {
    RAG_CHUNK_METHOD_NAIVE = 0,
    RAG_CHUNK_METHOD_BOOK = 1,
    RAG_CHUNK_METHOD_EMAIL = 2,
    RAG_CHUNK_METHOD_LAWS = 3,
    RAG_CHUNK_METHOD_MANUAL = 4,
    RAG_CHUNK_METHOD_ONE = 5,
    RAG_CHUNK_METHOD_PAPER = 6,
    RAG_CHUNK_METHOD_PICTURE = 7,
    RAG_CHUNK_METHOD_PRESENTATION = 8,
    RAG_CHUNK_METHOD_QA = 9,
    RAG_CHUNK_METHOD_TABLE = 10,
    RAG_CHUNK_METHOD_TAG = 11,
}

export enum RagGraphRagMethod {
    RAG_GRAPH_RAG_METHOD_LIGHT = 0,
    RAG_GRAPH_RAG_METHOD_GENERAL = 1,
}

export enum RagDocumentType {
    RAG_DOCUMENT_TYPE_PDF = 0,
    RAG_DOCUMENT_TYPE_DOC = 1,
    RAG_DOCUMENT_TYPE_VISUAL = 2,
    RAG_DOCUMENT_TYPE_AURAL = 3,
    RAG_DOCUMENT_TYPE_VIRTUAL = 4,
    RAG_DOCUMENT_TYPE_FOLDER = 5,
    RAG_DOCUMENT_TYPE_OTHER = 6,
}

export enum RagDocumentStatus {
    RAG_DOCUMENT_STATUS_UNSTART = 0,
    RAG_DOCUMENT_STATUS_RUNNING = 1,
    RAG_DOCUMENT_STATUS_CANCEL = 2,
    RAG_DOCUMENT_STATUS_DONE = 3,
    RAG_DOCUMENT_STATUS_FAIL = 4,
}

export enum RagLogic {
    RAG_LOGIC_AND = 0,
    RAG_LOGIC_OR = 1,
}

export enum RagComparisonOperator {
    RAG_COMPARISON_OPERATOR_CONTAINS = 0,
    RAG_COMPARISON_OPERATOR_NOT_CONTAINS = 1,
    RAG_COMPARISON_OPERATOR_IN = 2,
    RAG_COMPARISON_OPERATOR_NOT_IN = 3,
    RAG_COMPARISON_OPERATOR_START_WITH = 4,
    RAG_COMPARISON_OPERATOR_ENDS_WITH = 5,
    RAG_COMPARISON_OPERATOR_EMPTY = 6,
    RAG_COMPARISON_OPERATOR_NOT_EMPTY = 7,
    RAG_COMPARISON_OPERATOR_EQ = 8,
    RAG_COMPARISON_OPERATOR_NEQ = 9,
    RAG_COMPARISON_OPERATOR_GT = 10,
    RAG_COMPARISON_OPERATOR_LT = 11,
    RAG_COMPARISON_OPERATOR_GEQ = 12,
    RAG_COMPARISON_OPERATOR_LEQ = 13,
}

export enum RagPromptType {
    RAG_PROMPT_TYPE_SIMPLE = 0,
    RAG_PROMPT_TYPE_ADVANCED = 1,
}

export enum RagPermission {
    RAG_PERMISSION_ME = 0,
    RAG_PERMISSION_TEAM = 1,
}

export enum RagCanvasCategory {
    RAG_CANVAS_CATEGORY_AGENT_CANVAS = 0,
    RAG_CANVAS_CATEGORY_DATAFLOW_CANVAS = 1,
}

export enum RagMessageRole {
    RAG_MESSAGE_ROLE_USER = 0,
    RAG_MESSAGE_ROLE_ASSISTANT = 1,
    RAG_MESSAGE_ROLE_SYSTEM = 2,
}

export enum RagSessionSource {
    RAG_SESSION_SOURCE_NONE = 0,
    RAG_SESSION_SOURCE_AGENT = 1,
    RAG_SESSION_SOURCE_DIALOG = 2,
}

export enum RagAgentEventType {
    RAG_AGENT_EVENT_TYPE_MESSAGE = 0,
    RAG_AGENT_EVENT_TYPE_MESSAGE_END = 1,
}

export enum RagCrawlerSelectorType {
    RAG_CRAWLER_SELECTOR_TYPE_ID = 0,
    RAG_CRAWLER_SELECTOR_TYPE_CSS_CLASS = 1,
    RAG_CRAWLER_SELECTOR_TYPE_XPATH = 2,
}

export enum RagCrawlerCacheMode {
    RAG_CRAWLER_CACHE_MODE_ENABLED = 0,
    RAG_CRAWLER_CACHE_MODE_DISABLED = 1,
    RAG_CRAWLER_CACHE_MODE_READ_ONLY = 2,
    RAG_CRAWLER_CACHE_MODE_WRITE_ONLY = 3,
    RAG_CRAWLER_CACHE_MODE_BYPASS = 4,
}

export enum RagCrawlerMetaDataExtractorType {
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_REGEX = 0,
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_FIXED_VALUE = 1,
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_CSS_SELECTOR = 2,
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_XPATH_SELECTOR = 3,
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_ID_SELECTOR = 4,
}

export enum RagCrawlerCrawlStrategy {
    RAG_CRAWLER_CRAWL_STRATEGY_BFS = 0,
    RAG_CRAWLER_CRAWL_STRATEGY_DFS = 1,
    RAG_CRAWLER_CRAWL_STRATEGY_BEST_FIRST = 2,
}

export enum RagCrawlerFilterContentType {
    RAG_CRAWLER_FILTER_CONTENT_TYPE_UNSPECIFIED = 0,
    RAG_CRAWLER_FILTER_CONTENT_TYPE_TEXT_HTML = 1,
    RAG_CRAWLER_FILTER_CONTENT_TYPE_APPLICATION_JSON = 2,
    RAG_CRAWLER_FILTER_CONTENT_TYPE_APPLICATION_XML = 3,
    RAG_CRAWLER_FILTER_CONTENT_TYPE_TEXT_PLAIN = 4,
    RAG_CRAWLER_FILTER_CONTENT_TYPE_APPLICATION_PDF = 5,
    RAG_CRAWLER_FILTER_CONTENT_TYPE_APPLICATION_POWERPOINT = 6,
    RAG_CRAWLER_FILTER_CONTENT_TYPE_APPLICATION_EXCEL = 7,
    RAG_CRAWLER_FILTER_CONTENT_TYPE_APPLICATION_WORD = 8,
}
