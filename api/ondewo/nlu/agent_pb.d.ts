// package: ondewo.nlu
// file: ondewo/nlu/agent.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_user_pb from "../../ondewo/nlu/user_pb";
import * as ondewo_nlu_project_role_pb from "../../ondewo/nlu/project_role_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";

export class Agent extends jspb.Message { 
    getParent(): string;
    setParent(value: string): Agent;
    getDisplayName(): string;
    setDisplayName(value: string): Agent;
    getDefaultLanguageCode(): string;
    setDefaultLanguageCode(value: string): Agent;
    clearSupportedLanguageCodesList(): void;
    getSupportedLanguageCodesList(): Array<string>;
    setSupportedLanguageCodesList(value: Array<string>): Agent;
    addSupportedLanguageCodes(value: string, index?: number): string;
    getTimeZone(): string;
    setTimeZone(value: string): Agent;
    getNluPlatform(): string;
    setNluPlatform(value: string): Agent;

    hasConfigs(): boolean;
    clearConfigs(): void;
    getConfigs(): google_protobuf_struct_pb.Struct | undefined;
    setConfigs(value?: google_protobuf_struct_pb.Struct): Agent;
    getOwnerId(): string;
    setOwnerId(value: string): Agent;
    getStatus(): AgentStatus;
    setStatus(value: AgentStatus): Agent;
    getDescription(): string;
    setDescription(value: string): Agent;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Agent;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Agent;
    getCreatedBy(): string;
    setCreatedBy(value: string): Agent;
    getModifiedBy(): string;
    setModifiedBy(value: string): Agent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Agent.AsObject;
    static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Agent;
    static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
}

export namespace Agent {
    export type AsObject = {
        parent: string,
        displayName: string,
        defaultLanguageCode: string,
        supportedLanguageCodesList: Array<string>,
        timeZone: string,
        nluPlatform: string,
        configs?: google_protobuf_struct_pb.Struct.AsObject,
        ownerId: string,
        status: AgentStatus,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class AgentWithOwner extends jspb.Message { 

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): Agent | undefined;
    setAgent(value?: Agent): AgentWithOwner;

    hasOwner(): boolean;
    clearOwner(): void;
    getOwner(): ondewo_nlu_user_pb.User | undefined;
    setOwner(value?: ondewo_nlu_user_pb.User): AgentWithOwner;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentWithOwner.AsObject;
    static toObject(includeInstance: boolean, msg: AgentWithOwner): AgentWithOwner.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentWithOwner, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentWithOwner;
    static deserializeBinaryFromReader(message: AgentWithOwner, reader: jspb.BinaryReader): AgentWithOwner;
}

export namespace AgentWithOwner {
    export type AsObject = {
        agent?: Agent.AsObject,
        owner?: ondewo_nlu_user_pb.User.AsObject,
    }
}

export class AgentOfUserWithOwner extends jspb.Message { 

    hasAgentWithOwner(): boolean;
    clearAgentWithOwner(): void;
    getAgentWithOwner(): AgentWithOwner | undefined;
    setAgentWithOwner(value?: AgentWithOwner): AgentOfUserWithOwner;

    hasProjectRole(): boolean;
    clearProjectRole(): void;
    getProjectRole(): ondewo_nlu_project_role_pb.ProjectRole | undefined;
    setProjectRole(value?: ondewo_nlu_project_role_pb.ProjectRole): AgentOfUserWithOwner;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentOfUserWithOwner.AsObject;
    static toObject(includeInstance: boolean, msg: AgentOfUserWithOwner): AgentOfUserWithOwner.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentOfUserWithOwner, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentOfUserWithOwner;
    static deserializeBinaryFromReader(message: AgentOfUserWithOwner, reader: jspb.BinaryReader): AgentOfUserWithOwner;
}

export namespace AgentOfUserWithOwner {
    export type AsObject = {
        agentWithOwner?: AgentWithOwner.AsObject,
        projectRole?: ondewo_nlu_project_role_pb.ProjectRole.AsObject,
    }
}

export class CreateAgentRequest extends jspb.Message { 

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): Agent | undefined;
    setAgent(value?: Agent): CreateAgentRequest;
    getAgentView(): AgentView;
    setAgentView(value: AgentView): CreateAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAgentRequest): CreateAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAgentRequest;
    static deserializeBinaryFromReader(message: CreateAgentRequest, reader: jspb.BinaryReader): CreateAgentRequest;
}

export namespace CreateAgentRequest {
    export type AsObject = {
        agent?: Agent.AsObject,
        agentView: AgentView,
    }
}

export class UpdateAgentRequest extends jspb.Message { 

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): Agent | undefined;
    setAgent(value?: Agent): UpdateAgentRequest;
    getAgentView(): AgentView;
    setAgentView(value: AgentView): UpdateAgentRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAgentRequest): UpdateAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAgentRequest;
    static deserializeBinaryFromReader(message: UpdateAgentRequest, reader: jspb.BinaryReader): UpdateAgentRequest;
}

export namespace UpdateAgentRequest {
    export type AsObject = {
        agent?: Agent.AsObject,
        agentView: AgentView,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): DeleteAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAgentRequest): DeleteAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAgentRequest;
    static deserializeBinaryFromReader(message: DeleteAgentRequest, reader: jspb.BinaryReader): DeleteAgentRequest;
}

export namespace DeleteAgentRequest {
    export type AsObject = {
        parent: string,
    }
}

export class GetAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GetAgentRequest;
    getAgentView(): AgentView;
    setAgentView(value: AgentView): GetAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAgentRequest): GetAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAgentRequest;
    static deserializeBinaryFromReader(message: GetAgentRequest, reader: jspb.BinaryReader): GetAgentRequest;
}

export namespace GetAgentRequest {
    export type AsObject = {
        parent: string,
        agentView: AgentView,
    }
}

export class ListAgentsRequest extends jspb.Message { 
    getAgentView(): AgentView;
    setAgentView(value: AgentView): ListAgentsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAgentsRequest;

    hasSortByField(): boolean;
    clearSortByField(): void;
    getSortByField(): AgentSorting | undefined;
    setSortByField(value?: AgentSorting): ListAgentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAgentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAgentsRequest): ListAgentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAgentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAgentsRequest;
    static deserializeBinaryFromReader(message: ListAgentsRequest, reader: jspb.BinaryReader): ListAgentsRequest;
}

export namespace ListAgentsRequest {
    export type AsObject = {
        agentView: AgentView,
        pageToken: string,
        sortByField?: AgentSorting.AsObject,
    }
}

export class ListAgentsResponse extends jspb.Message { 
    clearAgentsWithOwnersList(): void;
    getAgentsWithOwnersList(): Array<AgentWithOwner>;
    setAgentsWithOwnersList(value: Array<AgentWithOwner>): ListAgentsResponse;
    addAgentsWithOwners(value?: AgentWithOwner, index?: number): AgentWithOwner;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAgentsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAgentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAgentsResponse): ListAgentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAgentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAgentsResponse;
    static deserializeBinaryFromReader(message: ListAgentsResponse, reader: jspb.BinaryReader): ListAgentsResponse;
}

export namespace ListAgentsResponse {
    export type AsObject = {
        agentsWithOwnersList: Array<AgentWithOwner.AsObject>,
        nextPageToken: string,
    }
}

export class ListAgentsOfUserResponse extends jspb.Message { 
    clearAgentsOfUserWithOwnersList(): void;
    getAgentsOfUserWithOwnersList(): Array<AgentOfUserWithOwner>;
    setAgentsOfUserWithOwnersList(value: Array<AgentOfUserWithOwner>): ListAgentsOfUserResponse;
    addAgentsOfUserWithOwners(value?: AgentOfUserWithOwner, index?: number): AgentOfUserWithOwner;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAgentsOfUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAgentsOfUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAgentsOfUserResponse): ListAgentsOfUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAgentsOfUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAgentsOfUserResponse;
    static deserializeBinaryFromReader(message: ListAgentsOfUserResponse, reader: jspb.BinaryReader): ListAgentsOfUserResponse;
}

export namespace ListAgentsOfUserResponse {
    export type AsObject = {
        agentsOfUserWithOwnersList: Array<AgentOfUserWithOwner.AsObject>,
        nextPageToken: string,
    }
}

export class TrainAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): TrainAgentRequest;
    getBranch(): string;
    setBranch(value: string): TrainAgentRequest;
    getInitiationProtocol(): InitiationProtocol;
    setInitiationProtocol(value: InitiationProtocol): TrainAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TrainAgentRequest): TrainAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainAgentRequest;
    static deserializeBinaryFromReader(message: TrainAgentRequest, reader: jspb.BinaryReader): TrainAgentRequest;
}

export namespace TrainAgentRequest {
    export type AsObject = {
        parent: string,
        branch: string,
        initiationProtocol: InitiationProtocol,
    }
}

export class BuildCacheRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): BuildCacheRequest;
    getBranch(): string;
    setBranch(value: string): BuildCacheRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildCacheRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BuildCacheRequest): BuildCacheRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildCacheRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildCacheRequest;
    static deserializeBinaryFromReader(message: BuildCacheRequest, reader: jspb.BinaryReader): BuildCacheRequest;
}

export namespace BuildCacheRequest {
    export type AsObject = {
        parent: string,
        branch: string,
    }
}

export class ExportAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ExportAgentRequest;
    getAgentUri(): string;
    setAgentUri(value: string): ExportAgentRequest;
    getCompressionLevel(): number;
    setCompressionLevel(value: number): ExportAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExportAgentRequest): ExportAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportAgentRequest;
    static deserializeBinaryFromReader(message: ExportAgentRequest, reader: jspb.BinaryReader): ExportAgentRequest;
}

export namespace ExportAgentRequest {
    export type AsObject = {
        parent: string,
        agentUri: string,
        compressionLevel: number,
    }
}

export class ExportAgentResponse extends jspb.Message { 

    hasAgentUri(): boolean;
    clearAgentUri(): void;
    getAgentUri(): string;
    setAgentUri(value: string): ExportAgentResponse;

    hasAgentContent(): boolean;
    clearAgentContent(): void;
    getAgentContent(): Uint8Array | string;
    getAgentContent_asU8(): Uint8Array;
    getAgentContent_asB64(): string;
    setAgentContent(value: Uint8Array | string): ExportAgentResponse;

    getAgentCase(): ExportAgentResponse.AgentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportAgentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExportAgentResponse): ExportAgentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportAgentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportAgentResponse;
    static deserializeBinaryFromReader(message: ExportAgentResponse, reader: jspb.BinaryReader): ExportAgentResponse;
}

export namespace ExportAgentResponse {
    export type AsObject = {
        agentUri: string,
        agentContent: Uint8Array | string,
    }

    export enum AgentCase {
        AGENT_NOT_SET = 0,
        AGENT_URI = 1,
        AGENT_CONTENT = 2,
    }

}

export class ExportBenchmarkAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ExportBenchmarkAgentRequest;
    getCompressionLevel(): number;
    setCompressionLevel(value: number): ExportBenchmarkAgentRequest;
    getTestSize(): number;
    setTestSize(value: number): ExportBenchmarkAgentRequest;
    getTrainSize(): number;
    setTrainSize(value: number): ExportBenchmarkAgentRequest;
    getRandomState(): number;
    setRandomState(value: number): ExportBenchmarkAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportBenchmarkAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExportBenchmarkAgentRequest): ExportBenchmarkAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportBenchmarkAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportBenchmarkAgentRequest;
    static deserializeBinaryFromReader(message: ExportBenchmarkAgentRequest, reader: jspb.BinaryReader): ExportBenchmarkAgentRequest;
}

export namespace ExportBenchmarkAgentRequest {
    export type AsObject = {
        parent: string,
        compressionLevel: number,
        testSize: number,
        trainSize: number,
        randomState: number,
    }
}

export class ExportBenchmarkAgentResponse extends jspb.Message { 
    getAgentContent(): Uint8Array | string;
    getAgentContent_asU8(): Uint8Array;
    getAgentContent_asB64(): string;
    setAgentContent(value: Uint8Array | string): ExportBenchmarkAgentResponse;

    getTrainingPhrasesMap(): jspb.Map<string, ondewo_nlu_intent_pb.ListTrainingPhrasesResponse>;
    clearTrainingPhrasesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportBenchmarkAgentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExportBenchmarkAgentResponse): ExportBenchmarkAgentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportBenchmarkAgentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportBenchmarkAgentResponse;
    static deserializeBinaryFromReader(message: ExportBenchmarkAgentResponse, reader: jspb.BinaryReader): ExportBenchmarkAgentResponse;
}

export namespace ExportBenchmarkAgentResponse {
    export type AsObject = {
        agentContent: Uint8Array | string,

        trainingPhrasesMap: Array<[string, ondewo_nlu_intent_pb.ListTrainingPhrasesResponse.AsObject]>,
    }
}

export class OptimizeRankingMatchRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): OptimizeRankingMatchRequest;
    clearLanguageCodesList(): void;
    getLanguageCodesList(): Array<string>;
    setLanguageCodesList(value: Array<string>): OptimizeRankingMatchRequest;
    addLanguageCodes(value: string, index?: number): string;
    clearOptimizationConfigsList(): void;
    getOptimizationConfigsList(): Array<RankingMatchOptimizationConfig>;
    setOptimizationConfigsList(value: Array<RankingMatchOptimizationConfig>): OptimizeRankingMatchRequest;
    addOptimizationConfigs(value?: RankingMatchOptimizationConfig, index?: number): RankingMatchOptimizationConfig;
    getInPlace(): boolean;
    setInPlace(value: boolean): OptimizeRankingMatchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptimizeRankingMatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OptimizeRankingMatchRequest): OptimizeRankingMatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OptimizeRankingMatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptimizeRankingMatchRequest;
    static deserializeBinaryFromReader(message: OptimizeRankingMatchRequest, reader: jspb.BinaryReader): OptimizeRankingMatchRequest;
}

export namespace OptimizeRankingMatchRequest {
    export type AsObject = {
        parent: string,
        languageCodesList: Array<string>,
        optimizationConfigsList: Array<RankingMatchOptimizationConfig.AsObject>,
        inPlace: boolean,
    }
}

export class RankingMatchOptimizationConfig extends jspb.Message { 
    getLanguageCode(): string;
    setLanguageCode(value: string): RankingMatchOptimizationConfig;
    getNSplits(): number;
    setNSplits(value: number): RankingMatchOptimizationConfig;
    getRandomSeed(): number;
    setRandomSeed(value: number): RankingMatchOptimizationConfig;

    hasInitialThresholds(): boolean;
    clearInitialThresholds(): void;
    getInitialThresholds(): google_protobuf_struct_pb.Struct | undefined;
    setInitialThresholds(value?: google_protobuf_struct_pb.Struct): RankingMatchOptimizationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RankingMatchOptimizationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RankingMatchOptimizationConfig): RankingMatchOptimizationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RankingMatchOptimizationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RankingMatchOptimizationConfig;
    static deserializeBinaryFromReader(message: RankingMatchOptimizationConfig, reader: jspb.BinaryReader): RankingMatchOptimizationConfig;
}

export namespace RankingMatchOptimizationConfig {
    export type AsObject = {
        languageCode: string,
        nSplits: number,
        randomSeed: number,
        initialThresholds?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class OptimizeRankingMatchResponse extends jspb.Message { 

    hasOptimizationInfo(): boolean;
    clearOptimizationInfo(): void;
    getOptimizationInfo(): google_protobuf_struct_pb.Struct | undefined;
    setOptimizationInfo(value?: google_protobuf_struct_pb.Struct): OptimizeRankingMatchResponse;

    hasOptimizedOndewoConfig(): boolean;
    clearOptimizedOndewoConfig(): void;
    getOptimizedOndewoConfig(): google_protobuf_struct_pb.Struct | undefined;
    setOptimizedOndewoConfig(value?: google_protobuf_struct_pb.Struct): OptimizeRankingMatchResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptimizeRankingMatchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OptimizeRankingMatchResponse): OptimizeRankingMatchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OptimizeRankingMatchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptimizeRankingMatchResponse;
    static deserializeBinaryFromReader(message: OptimizeRankingMatchResponse, reader: jspb.BinaryReader): OptimizeRankingMatchResponse;
}

export namespace OptimizeRankingMatchResponse {
    export type AsObject = {
        optimizationInfo?: google_protobuf_struct_pb.Struct.AsObject,
        optimizedOndewoConfig?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class ImportAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ImportAgentRequest;

    hasAgentUri(): boolean;
    clearAgentUri(): void;
    getAgentUri(): string;
    setAgentUri(value: string): ImportAgentRequest;

    hasAgentContent(): boolean;
    clearAgentContent(): void;
    getAgentContent(): Uint8Array | string;
    getAgentContent_asU8(): Uint8Array;
    getAgentContent_asB64(): string;
    setAgentContent(value: Uint8Array | string): ImportAgentRequest;

    getAgentCase(): ImportAgentRequest.AgentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImportAgentRequest): ImportAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportAgentRequest;
    static deserializeBinaryFromReader(message: ImportAgentRequest, reader: jspb.BinaryReader): ImportAgentRequest;
}

export namespace ImportAgentRequest {
    export type AsObject = {
        parent: string,
        agentUri: string,
        agentContent: Uint8Array | string,
    }

    export enum AgentCase {
        AGENT_NOT_SET = 0,
        AGENT_URI = 2,
        AGENT_CONTENT = 3,
    }

}

export class RestoreAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RestoreAgentRequest;

    hasAgentUri(): boolean;
    clearAgentUri(): void;
    getAgentUri(): string;
    setAgentUri(value: string): RestoreAgentRequest;

    hasAgentContent(): boolean;
    clearAgentContent(): void;
    getAgentContent(): Uint8Array | string;
    getAgentContent_asU8(): Uint8Array;
    getAgentContent_asB64(): string;
    setAgentContent(value: Uint8Array | string): RestoreAgentRequest;

    getAgentCase(): RestoreAgentRequest.AgentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreAgentRequest): RestoreAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreAgentRequest;
    static deserializeBinaryFromReader(message: RestoreAgentRequest, reader: jspb.BinaryReader): RestoreAgentRequest;
}

export namespace RestoreAgentRequest {
    export type AsObject = {
        parent: string,
        agentUri: string,
        agentContent: Uint8Array | string,
    }

    export enum AgentCase {
        AGENT_NOT_SET = 0,
        AGENT_URI = 2,
        AGENT_CONTENT = 3,
    }

}

export class MigrateAgentRequest extends jspb.Message { 
    getAgentContent(): Uint8Array | string;
    getAgentContent_asU8(): Uint8Array;
    getAgentContent_asB64(): string;
    setAgentContent(value: Uint8Array | string): MigrateAgentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MigrateAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MigrateAgentRequest): MigrateAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MigrateAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MigrateAgentRequest;
    static deserializeBinaryFromReader(message: MigrateAgentRequest, reader: jspb.BinaryReader): MigrateAgentRequest;
}

export namespace MigrateAgentRequest {
    export type AsObject = {
        agentContent: Uint8Array | string,
    }
}

export class GetAgentStatisticsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GetAgentStatisticsRequest;
    getFormat(): ReportFormat;
    setFormat(value: ReportFormat): GetAgentStatisticsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetAgentStatisticsRequest;
    getType(): ReportType;
    setType(value: ReportType): GetAgentStatisticsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAgentStatisticsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAgentStatisticsRequest): GetAgentStatisticsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAgentStatisticsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAgentStatisticsRequest;
    static deserializeBinaryFromReader(message: GetAgentStatisticsRequest, reader: jspb.BinaryReader): GetAgentStatisticsRequest;
}

export namespace GetAgentStatisticsRequest {
    export type AsObject = {
        parent: string,
        format: ReportFormat,
        languageCode: string,
        type: ReportType,
    }
}

export class GetAgentStatisticsResponse extends jspb.Message { 
    getReports(): Uint8Array | string;
    getReports_asU8(): Uint8Array;
    getReports_asB64(): string;
    setReports(value: Uint8Array | string): GetAgentStatisticsResponse;
    getFormat(): ReportFormat;
    setFormat(value: ReportFormat): GetAgentStatisticsResponse;
    getType(): ReportType;
    setType(value: ReportType): GetAgentStatisticsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAgentStatisticsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAgentStatisticsResponse): GetAgentStatisticsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAgentStatisticsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAgentStatisticsResponse;
    static deserializeBinaryFromReader(message: GetAgentStatisticsResponse, reader: jspb.BinaryReader): GetAgentStatisticsResponse;
}

export namespace GetAgentStatisticsResponse {
    export type AsObject = {
        reports: Uint8Array | string,
        format: ReportFormat,
        type: ReportType,
    }
}

export class GetSessionsStatisticsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GetSessionsStatisticsRequest;
    getFormat(): ReportFormat;
    setFormat(value: ReportFormat): GetSessionsStatisticsRequest;
    getType(): SessionsReportType;
    setType(value: SessionsReportType): GetSessionsStatisticsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): ondewo_nlu_session_pb.SessionFilter | undefined;
    setSessionFilter(value?: ondewo_nlu_session_pb.SessionFilter): GetSessionsStatisticsRequest;
    clearContextFiltersList(): void;
    getContextFiltersList(): Array<ondewo_nlu_session_pb.ContextFilter>;
    setContextFiltersList(value: Array<ondewo_nlu_session_pb.ContextFilter>): GetSessionsStatisticsRequest;
    addContextFilters(value?: ondewo_nlu_session_pb.ContextFilter, index?: number): ondewo_nlu_session_pb.ContextFilter;
    getLimit(): number;
    setLimit(value: number): GetSessionsStatisticsRequest;
    clearGroupBysList(): void;
    getGroupBysList(): Array<string>;
    setGroupBysList(value: Array<string>): GetSessionsStatisticsRequest;
    addGroupBys(value: string, index?: number): string;
    clearOrderBysList(): void;
    getOrderBysList(): Array<string>;
    setOrderBysList(value: Array<string>): GetSessionsStatisticsRequest;
    addOrderBys(value: string, index?: number): string;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetSessionsStatisticsRequest;
    getSqlQuery(): string;
    setSqlQuery(value: string): GetSessionsStatisticsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionsStatisticsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionsStatisticsRequest): GetSessionsStatisticsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionsStatisticsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionsStatisticsRequest;
    static deserializeBinaryFromReader(message: GetSessionsStatisticsRequest, reader: jspb.BinaryReader): GetSessionsStatisticsRequest;
}

export namespace GetSessionsStatisticsRequest {
    export type AsObject = {
        parent: string,
        format: ReportFormat,
        type: SessionsReportType,
        sessionFilter?: ondewo_nlu_session_pb.SessionFilter.AsObject,
        contextFiltersList: Array<ondewo_nlu_session_pb.ContextFilter.AsObject>,
        limit: number,
        groupBysList: Array<string>,
        orderBysList: Array<string>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        sqlQuery: string,
    }
}

export class GetSessionsStatisticsResponse extends jspb.Message { 
    getReports(): Uint8Array | string;
    getReports_asU8(): Uint8Array;
    getReports_asB64(): string;
    setReports(value: Uint8Array | string): GetSessionsStatisticsResponse;
    getFormat(): ReportFormat;
    setFormat(value: ReportFormat): GetSessionsStatisticsResponse;
    getType(): SessionsReportType;
    setType(value: SessionsReportType): GetSessionsStatisticsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionsStatisticsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionsStatisticsResponse): GetSessionsStatisticsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionsStatisticsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionsStatisticsResponse;
    static deserializeBinaryFromReader(message: GetSessionsStatisticsResponse, reader: jspb.BinaryReader): GetSessionsStatisticsResponse;
}

export namespace GetSessionsStatisticsResponse {
    export type AsObject = {
        reports: Uint8Array | string,
        format: ReportFormat,
        type: SessionsReportType,
    }
}

export class AddUserToProjectRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): AddUserToProjectRequest;
    getUserId(): string;
    setUserId(value: string): AddUserToProjectRequest;
    getProjectRoleId(): number;
    setProjectRoleId(value: number): AddUserToProjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddUserToProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddUserToProjectRequest): AddUserToProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddUserToProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddUserToProjectRequest;
    static deserializeBinaryFromReader(message: AddUserToProjectRequest, reader: jspb.BinaryReader): AddUserToProjectRequest;
}

export namespace AddUserToProjectRequest {
    export type AsObject = {
        parent: string,
        userId: string,
        projectRoleId: number,
    }
}

export class RemoveUserFromProjectRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RemoveUserFromProjectRequest;
    getUserId(): string;
    setUserId(value: string): RemoveUserFromProjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveUserFromProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveUserFromProjectRequest): RemoveUserFromProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveUserFromProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveUserFromProjectRequest;
    static deserializeBinaryFromReader(message: RemoveUserFromProjectRequest, reader: jspb.BinaryReader): RemoveUserFromProjectRequest;
}

export namespace RemoveUserFromProjectRequest {
    export type AsObject = {
        parent: string,
        userId: string,
    }
}

export class ListUsersInProjectRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListUsersInProjectRequest;
    getPageToken(): string;
    setPageToken(value: string): ListUsersInProjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsersInProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsersInProjectRequest): ListUsersInProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsersInProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsersInProjectRequest;
    static deserializeBinaryFromReader(message: ListUsersInProjectRequest, reader: jspb.BinaryReader): ListUsersInProjectRequest;
}

export namespace ListUsersInProjectRequest {
    export type AsObject = {
        parent: string,
        pageToken: string,
    }
}

export class UserInProject extends jspb.Message { 
    getParent(): string;
    setParent(value: string): UserInProject;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): ondewo_nlu_user_pb.User | undefined;
    setUser(value?: ondewo_nlu_user_pb.User): UserInProject;
    getRoleId(): number;
    setRoleId(value: number): UserInProject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInProject.AsObject;
    static toObject(includeInstance: boolean, msg: UserInProject): UserInProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserInProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInProject;
    static deserializeBinaryFromReader(message: UserInProject, reader: jspb.BinaryReader): UserInProject;
}

export namespace UserInProject {
    export type AsObject = {
        parent: string,
        user?: ondewo_nlu_user_pb.User.AsObject,
        roleId: number,
    }
}

export class ListUsersInProjectResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<UserInProject>;
    setUsersList(value: Array<UserInProject>): ListUsersInProjectResponse;
    addUsers(value?: UserInProject, index?: number): UserInProject;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListUsersInProjectResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsersInProjectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsersInProjectResponse): ListUsersInProjectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsersInProjectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsersInProjectResponse;
    static deserializeBinaryFromReader(message: ListUsersInProjectResponse, reader: jspb.BinaryReader): ListUsersInProjectResponse;
}

export namespace ListUsersInProjectResponse {
    export type AsObject = {
        usersList: Array<UserInProject.AsObject>,
        nextPageToken: string,
    }
}

export class GetPlatformInfoResponse extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): GetPlatformInfoResponse;
    getCommitHash(): string;
    setCommitHash(value: string): GetPlatformInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlatformInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlatformInfoResponse): GetPlatformInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlatformInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlatformInfoResponse;
    static deserializeBinaryFromReader(message: GetPlatformInfoResponse, reader: jspb.BinaryReader): GetPlatformInfoResponse;
}

export namespace GetPlatformInfoResponse {
    export type AsObject = {
        version: string,
        commitHash: string,
    }
}

export class ListProjectPermissionsRequest extends jspb.Message { 
    getPageToken(): string;
    setPageToken(value: string): ListProjectPermissionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProjectPermissionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListProjectPermissionsRequest): ListProjectPermissionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProjectPermissionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProjectPermissionsRequest;
    static deserializeBinaryFromReader(message: ListProjectPermissionsRequest, reader: jspb.BinaryReader): ListProjectPermissionsRequest;
}

export namespace ListProjectPermissionsRequest {
    export type AsObject = {
        pageToken: string,
    }
}

export class ListProjectPermissionsResponse extends jspb.Message { 
    clearPermissionsList(): void;
    getPermissionsList(): Array<string>;
    setPermissionsList(value: Array<string>): ListProjectPermissionsResponse;
    addPermissions(value: string, index?: number): string;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListProjectPermissionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProjectPermissionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListProjectPermissionsResponse): ListProjectPermissionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProjectPermissionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProjectPermissionsResponse;
    static deserializeBinaryFromReader(message: ListProjectPermissionsResponse, reader: jspb.BinaryReader): ListProjectPermissionsResponse;
}

export namespace ListProjectPermissionsResponse {
    export type AsObject = {
        permissionsList: Array<string>,
        nextPageToken: string,
    }
}

export class SetAgentStatusRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): SetAgentStatusRequest;
    getStatus(): AgentStatus;
    setStatus(value: AgentStatus): SetAgentStatusRequest;
    getAgentView(): AgentView;
    setAgentView(value: AgentView): SetAgentStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAgentStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetAgentStatusRequest): SetAgentStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAgentStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAgentStatusRequest;
    static deserializeBinaryFromReader(message: SetAgentStatusRequest, reader: jspb.BinaryReader): SetAgentStatusRequest;
}

export namespace SetAgentStatusRequest {
    export type AsObject = {
        parent: string,
        status: AgentStatus,
        agentView: AgentView,
    }
}

export class AgentSorting extends jspb.Message { 
    getSortingField(): AgentSorting.AgentSortingField;
    setSortingField(value: AgentSorting.AgentSortingField): AgentSorting;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): AgentSorting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentSorting.AsObject;
    static toObject(includeInstance: boolean, msg: AgentSorting): AgentSorting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentSorting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentSorting;
    static deserializeBinaryFromReader(message: AgentSorting, reader: jspb.BinaryReader): AgentSorting;
}

export namespace AgentSorting {
    export type AsObject = {
        sortingField: AgentSorting.AgentSortingField,
        sortingMode: ondewo_nlu_common_pb.SortingMode,
    }

    export enum AgentSortingField {
    NO_AGENT_SORTING = 0,
    SORT_AGENT_BY_NAME = 1,
    SORT_AGENT_BY_CREATION_DATE = 2,
    SORT_AGENT_BY_LAST_UPDATED = 3,
    SORT_AGENT_BY_OWNER_NAME = 4,
    }

}

export class SetResourcesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): SetResourcesRequest;
    getName(): string;
    setName(value: string): SetResourcesRequest;
    getType(): string;
    setType(value: string): SetResourcesRequest;
    getResourceFile(): Uint8Array | string;
    getResourceFile_asU8(): Uint8Array;
    getResourceFile_asB64(): string;
    setResourceFile(value: Uint8Array | string): SetResourcesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): SetResourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetResourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetResourcesRequest): SetResourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetResourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetResourcesRequest;
    static deserializeBinaryFromReader(message: SetResourcesRequest, reader: jspb.BinaryReader): SetResourcesRequest;
}

export namespace SetResourcesRequest {
    export type AsObject = {
        parent: string,
        name: string,
        type: string,
        resourceFile: Uint8Array | string,
        languageCode: string,
    }
}

export class DeleteResourcesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): DeleteResourcesRequest;
    getName(): string;
    setName(value: string): DeleteResourcesRequest;
    getType(): string;
    setType(value: string): DeleteResourcesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): DeleteResourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResourcesRequest): DeleteResourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResourcesRequest;
    static deserializeBinaryFromReader(message: DeleteResourcesRequest, reader: jspb.BinaryReader): DeleteResourcesRequest;
}

export namespace DeleteResourcesRequest {
    export type AsObject = {
        parent: string,
        name: string,
        type: string,
        languageCode: string,
    }
}

export class ExportResourcesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ExportResourcesRequest;
    getName(): string;
    setName(value: string): ExportResourcesRequest;
    getType(): string;
    setType(value: string): ExportResourcesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ExportResourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportResourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExportResourcesRequest): ExportResourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportResourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportResourcesRequest;
    static deserializeBinaryFromReader(message: ExportResourcesRequest, reader: jspb.BinaryReader): ExportResourcesRequest;
}

export namespace ExportResourcesRequest {
    export type AsObject = {
        parent: string,
        name: string,
        type: string,
        languageCode: string,
    }
}

export class ExportResourcesResponse extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ExportResourcesResponse;
    getName(): string;
    setName(value: string): ExportResourcesResponse;
    getType(): string;
    setType(value: string): ExportResourcesResponse;
    getLanguageCode(): string;
    setLanguageCode(value: string): ExportResourcesResponse;
    getResourceFile(): Uint8Array | string;
    getResourceFile_asU8(): Uint8Array;
    getResourceFile_asB64(): string;
    setResourceFile(value: Uint8Array | string): ExportResourcesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportResourcesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExportResourcesResponse): ExportResourcesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportResourcesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportResourcesResponse;
    static deserializeBinaryFromReader(message: ExportResourcesResponse, reader: jspb.BinaryReader): ExportResourcesResponse;
}

export namespace ExportResourcesResponse {
    export type AsObject = {
        parent: string,
        name: string,
        type: string,
        languageCode: string,
        resourceFile: Uint8Array | string,
    }
}

export class GetModelStatusesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GetModelStatusesRequest;
    getCacheVersion(): number;
    setCacheVersion(value: number): GetModelStatusesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetModelStatusesRequest;
    getModelName(): string;
    setModelName(value: string): GetModelStatusesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelStatusesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelStatusesRequest): GetModelStatusesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelStatusesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelStatusesRequest;
    static deserializeBinaryFromReader(message: GetModelStatusesRequest, reader: jspb.BinaryReader): GetModelStatusesRequest;
}

export namespace GetModelStatusesRequest {
    export type AsObject = {
        parent: string,
        cacheVersion: number,
        languageCode: string,
        modelName: string,
    }
}

export class ModelStatus extends jspb.Message { 
    getCacheVersion(): number;
    setCacheVersion(value: number): ModelStatus;
    getLanguageCode(): string;
    setLanguageCode(value: string): ModelStatus;
    getModelName(): string;
    setModelName(value: string): ModelStatus;

    hasStatusSetTime(): boolean;
    clearStatusSetTime(): void;
    getStatusSetTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStatusSetTime(value?: google_protobuf_timestamp_pb.Timestamp): ModelStatus;
    getConfig(): string;
    setConfig(value: string): ModelStatus;
    getStatus(): ModelStatus.StatusName;
    setStatus(value: ModelStatus.StatusName): ModelStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelStatus.AsObject;
    static toObject(includeInstance: boolean, msg: ModelStatus): ModelStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelStatus;
    static deserializeBinaryFromReader(message: ModelStatus, reader: jspb.BinaryReader): ModelStatus;
}

export namespace ModelStatus {
    export type AsObject = {
        cacheVersion: number,
        languageCode: string,
        modelName: string,
        statusSetTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        config: string,
        status: ModelStatus.StatusName,
    }

    export enum StatusName {
    UNKNOWN = 0,
    INITIALIZING = 1,
    INITIALIZED = 2,
    LOADING_DATA = 3,
    TRAINING = 4,
    TESTING = 5,
    TRAINED = 6,
    }

}

export class GetModelStatusesResponse extends jspb.Message { 
    clearModelStatusesList(): void;
    getModelStatusesList(): Array<ModelStatus>;
    setModelStatusesList(value: Array<ModelStatus>): GetModelStatusesResponse;
    addModelStatuses(value?: ModelStatus, index?: number): ModelStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelStatusesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelStatusesResponse): GetModelStatusesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelStatusesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelStatusesResponse;
    static deserializeBinaryFromReader(message: GetModelStatusesResponse, reader: jspb.BinaryReader): GetModelStatusesResponse;
}

export namespace GetModelStatusesResponse {
    export type AsObject = {
        modelStatusesList: Array<ModelStatus.AsObject>,
    }
}

export class CustomPlatformInfo extends jspb.Message { 
    getPlatform(): ondewo_nlu_intent_pb.Intent.Message.Platform;
    setPlatform(value: ondewo_nlu_intent_pb.Intent.Message.Platform): CustomPlatformInfo;
    getDisplayName(): string;
    setDisplayName(value: string): CustomPlatformInfo;
    getPosition(): number;
    setPosition(value: number): CustomPlatformInfo;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CustomPlatformInfo;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): CustomPlatformInfo;
    getCreatedBy(): string;
    setCreatedBy(value: string): CustomPlatformInfo;
    getModifiedBy(): string;
    setModifiedBy(value: string): CustomPlatformInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomPlatformInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CustomPlatformInfo): CustomPlatformInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomPlatformInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomPlatformInfo;
    static deserializeBinaryFromReader(message: CustomPlatformInfo, reader: jspb.BinaryReader): CustomPlatformInfo;
}

export namespace CustomPlatformInfo {
    export type AsObject = {
        platform: ondewo_nlu_intent_pb.Intent.Message.Platform,
        displayName: string,
        position: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class GetPlatformMappingRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GetPlatformMappingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlatformMappingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlatformMappingRequest): GetPlatformMappingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlatformMappingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlatformMappingRequest;
    static deserializeBinaryFromReader(message: GetPlatformMappingRequest, reader: jspb.BinaryReader): GetPlatformMappingRequest;
}

export namespace GetPlatformMappingRequest {
    export type AsObject = {
        parent: string,
    }
}

export class PlatformMapping extends jspb.Message { 
    getParent(): string;
    setParent(value: string): PlatformMapping;
    clearPlatformInfoList(): void;
    getPlatformInfoList(): Array<CustomPlatformInfo>;
    setPlatformInfoList(value: Array<CustomPlatformInfo>): PlatformMapping;
    addPlatformInfo(value?: CustomPlatformInfo, index?: number): CustomPlatformInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlatformMapping.AsObject;
    static toObject(includeInstance: boolean, msg: PlatformMapping): PlatformMapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlatformMapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlatformMapping;
    static deserializeBinaryFromReader(message: PlatformMapping, reader: jspb.BinaryReader): PlatformMapping;
}

export namespace PlatformMapping {
    export type AsObject = {
        parent: string,
        platformInfoList: Array<CustomPlatformInfo.AsObject>,
    }
}

export class FullTextSearchRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchRequest;
    getTerm(): string;
    setTerm(value: string): FullTextSearchRequest;
    getPageToken(): string;
    setPageToken(value: string): FullTextSearchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchRequest): FullTextSearchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchRequest;
    static deserializeBinaryFromReader(message: FullTextSearchRequest, reader: jspb.BinaryReader): FullTextSearchRequest;
}

export namespace FullTextSearchRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        term: string,
        pageToken: string,
    }

    export enum QueryType {
    ALL = 0,
    ONDEWOENTITYQUERY = 1,
    ONDEWOENTITYTYPEQUERY = 2,
    ONDEWOENTITYSYNONYMQUERY = 3,
    ONDEWOINTENTQUERY = 4,
    ONDEWOINTENTCONTEXTINQUERY = 5,
    ONDEWOINTENTCONTEXTOUTQUERY = 6,
    ONDEWOINTENTUSERSAYSQUERY = 7,
    ONDEWOINTENTTAGSQUERY = 8,
    ONDEWOINTENTPARAMETERSQUERY = 9,
    ONDEWOINTENTRESPONSEQUERY = 10,
    }

}

export class FullTextSearchResponseEntityType extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseEntityType;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseEntityType;
    clearEntityTypeResultsList(): void;
    getEntityTypeResultsList(): Array<FullTextSearchResponseEntityType.EntityTypeSearchResult>;
    setEntityTypeResultsList(value: Array<FullTextSearchResponseEntityType.EntityTypeSearchResult>): FullTextSearchResponseEntityType;
    addEntityTypeResults(value?: FullTextSearchResponseEntityType.EntityTypeSearchResult, index?: number): FullTextSearchResponseEntityType.EntityTypeSearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseEntityType;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseEntityType;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseEntityType;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseEntityType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseEntityType.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseEntityType): FullTextSearchResponseEntityType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseEntityType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseEntityType;
    static deserializeBinaryFromReader(message: FullTextSearchResponseEntityType, reader: jspb.BinaryReader): FullTextSearchResponseEntityType;
}

export namespace FullTextSearchResponseEntityType {
    export type AsObject = {
        parent: string,
        languageCode: string,
        entityTypeResultsList: Array<FullTextSearchResponseEntityType.EntityTypeSearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class EntityTypeSearchResult extends jspb.Message { 
        getName(): string;
        setName(value: string): EntityTypeSearchResult;
        getDisplayName(): string;
        setDisplayName(value: string): EntityTypeSearchResult;
        getLanguage(): string;
        setLanguage(value: string): EntityTypeSearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): EntityTypeSearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): EntityTypeSearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): EntityTypeSearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): EntityTypeSearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EntityTypeSearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: EntityTypeSearchResult): EntityTypeSearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EntityTypeSearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EntityTypeSearchResult;
        static deserializeBinaryFromReader(message: EntityTypeSearchResult, reader: jspb.BinaryReader): EntityTypeSearchResult;
    }

    export namespace EntityTypeSearchResult {
        export type AsObject = {
            name: string,
            displayName: string,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class FullTextSearchResponseEntity extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseEntity;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseEntity;
    clearEntityResultsList(): void;
    getEntityResultsList(): Array<FullTextSearchResponseEntity.EntitySearchResult>;
    setEntityResultsList(value: Array<FullTextSearchResponseEntity.EntitySearchResult>): FullTextSearchResponseEntity;
    addEntityResults(value?: FullTextSearchResponseEntity.EntitySearchResult, index?: number): FullTextSearchResponseEntity.EntitySearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseEntity;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseEntity;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseEntity;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseEntity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseEntity.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseEntity): FullTextSearchResponseEntity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseEntity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseEntity;
    static deserializeBinaryFromReader(message: FullTextSearchResponseEntity, reader: jspb.BinaryReader): FullTextSearchResponseEntity;
}

export namespace FullTextSearchResponseEntity {
    export type AsObject = {
        parent: string,
        languageCode: string,
        entityResultsList: Array<FullTextSearchResponseEntity.EntitySearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class EntitySearchResult extends jspb.Message { 
        getName(): string;
        setName(value: string): EntitySearchResult;
        getDisplayName(): string;
        setDisplayName(value: string): EntitySearchResult;
        getEntityTypeName(): string;
        setEntityTypeName(value: string): EntitySearchResult;
        getEntityTypeDisplayName(): string;
        setEntityTypeDisplayName(value: string): EntitySearchResult;
        getLanguage(): string;
        setLanguage(value: string): EntitySearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): EntitySearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): EntitySearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): EntitySearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): EntitySearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EntitySearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: EntitySearchResult): EntitySearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EntitySearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EntitySearchResult;
        static deserializeBinaryFromReader(message: EntitySearchResult, reader: jspb.BinaryReader): EntitySearchResult;
    }

    export namespace EntitySearchResult {
        export type AsObject = {
            name: string,
            displayName: string,
            entityTypeName: string,
            entityTypeDisplayName: string,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class FullTextSearchResponseEntitySynonym extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseEntitySynonym;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseEntitySynonym;
    clearEntitySynonymResultsList(): void;
    getEntitySynonymResultsList(): Array<FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult>;
    setEntitySynonymResultsList(value: Array<FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult>): FullTextSearchResponseEntitySynonym;
    addEntitySynonymResults(value?: FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult, index?: number): FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseEntitySynonym;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseEntitySynonym;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseEntitySynonym;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseEntitySynonym;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseEntitySynonym.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseEntitySynonym): FullTextSearchResponseEntitySynonym.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseEntitySynonym, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseEntitySynonym;
    static deserializeBinaryFromReader(message: FullTextSearchResponseEntitySynonym, reader: jspb.BinaryReader): FullTextSearchResponseEntitySynonym;
}

export namespace FullTextSearchResponseEntitySynonym {
    export type AsObject = {
        parent: string,
        languageCode: string,
        entitySynonymResultsList: Array<FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class EntitySynonymSearchResult extends jspb.Message { 
        getName(): string;
        setName(value: string): EntitySynonymSearchResult;
        getDisplayName(): string;
        setDisplayName(value: string): EntitySynonymSearchResult;
        getEntityTypeName(): string;
        setEntityTypeName(value: string): EntitySynonymSearchResult;
        getEntityTypeDisplayName(): string;
        setEntityTypeDisplayName(value: string): EntitySynonymSearchResult;
        getEntityName(): string;
        setEntityName(value: string): EntitySynonymSearchResult;
        getEntityDisplayName(): string;
        setEntityDisplayName(value: string): EntitySynonymSearchResult;
        getLanguage(): string;
        setLanguage(value: string): EntitySynonymSearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): EntitySynonymSearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): EntitySynonymSearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): EntitySynonymSearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): EntitySynonymSearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EntitySynonymSearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: EntitySynonymSearchResult): EntitySynonymSearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EntitySynonymSearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EntitySynonymSearchResult;
        static deserializeBinaryFromReader(message: EntitySynonymSearchResult, reader: jspb.BinaryReader): EntitySynonymSearchResult;
    }

    export namespace EntitySynonymSearchResult {
        export type AsObject = {
            name: string,
            displayName: string,
            entityTypeName: string,
            entityTypeDisplayName: string,
            entityName: string,
            entityDisplayName: string,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class FullTextSearchResponseIntent extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseIntent;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseIntent;
    clearIntentResultsList(): void;
    getIntentResultsList(): Array<FullTextSearchResponseIntent.IntentSearchResult>;
    setIntentResultsList(value: Array<FullTextSearchResponseIntent.IntentSearchResult>): FullTextSearchResponseIntent;
    addIntentResults(value?: FullTextSearchResponseIntent.IntentSearchResult, index?: number): FullTextSearchResponseIntent.IntentSearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseIntent;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseIntent;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseIntent;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseIntent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseIntent.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseIntent): FullTextSearchResponseIntent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseIntent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseIntent;
    static deserializeBinaryFromReader(message: FullTextSearchResponseIntent, reader: jspb.BinaryReader): FullTextSearchResponseIntent;
}

export namespace FullTextSearchResponseIntent {
    export type AsObject = {
        parent: string,
        languageCode: string,
        intentResultsList: Array<FullTextSearchResponseIntent.IntentSearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class IntentSearchResult extends jspb.Message { 
        getName(): string;
        setName(value: string): IntentSearchResult;
        getDisplayName(): string;
        setDisplayName(value: string): IntentSearchResult;
        getDomainName(): string;
        setDomainName(value: string): IntentSearchResult;
        clearTagsList(): void;
        getTagsList(): Array<string>;
        setTagsList(value: Array<string>): IntentSearchResult;
        addTags(value: string, index?: number): string;
        getLanguage(): string;
        setLanguage(value: string): IntentSearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentSearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentSearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): IntentSearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): IntentSearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IntentSearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: IntentSearchResult): IntentSearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IntentSearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IntentSearchResult;
        static deserializeBinaryFromReader(message: IntentSearchResult, reader: jspb.BinaryReader): IntentSearchResult;
    }

    export namespace IntentSearchResult {
        export type AsObject = {
            name: string,
            displayName: string,
            domainName: string,
            tagsList: Array<string>,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class FullTextSearchResponseIntentContextIn extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseIntentContextIn;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseIntentContextIn;
    clearIntentContextInResultsList(): void;
    getIntentContextInResultsList(): Array<FullTextSearchResponseIntentContextIn.IntentContextInSearchResult>;
    setIntentContextInResultsList(value: Array<FullTextSearchResponseIntentContextIn.IntentContextInSearchResult>): FullTextSearchResponseIntentContextIn;
    addIntentContextInResults(value?: FullTextSearchResponseIntentContextIn.IntentContextInSearchResult, index?: number): FullTextSearchResponseIntentContextIn.IntentContextInSearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseIntentContextIn;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseIntentContextIn;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseIntentContextIn;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseIntentContextIn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseIntentContextIn.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseIntentContextIn): FullTextSearchResponseIntentContextIn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseIntentContextIn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseIntentContextIn;
    static deserializeBinaryFromReader(message: FullTextSearchResponseIntentContextIn, reader: jspb.BinaryReader): FullTextSearchResponseIntentContextIn;
}

export namespace FullTextSearchResponseIntentContextIn {
    export type AsObject = {
        parent: string,
        languageCode: string,
        intentContextInResultsList: Array<FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class IntentContextInSearchResult extends jspb.Message { 
        getName(): string;
        setName(value: string): IntentContextInSearchResult;
        getIntentName(): string;
        setIntentName(value: string): IntentContextInSearchResult;
        getIntentDisplayName(): string;
        setIntentDisplayName(value: string): IntentContextInSearchResult;
        clearTagsList(): void;
        getTagsList(): Array<string>;
        setTagsList(value: Array<string>): IntentContextInSearchResult;
        addTags(value: string, index?: number): string;
        getLanguage(): string;
        setLanguage(value: string): IntentContextInSearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentContextInSearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentContextInSearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): IntentContextInSearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): IntentContextInSearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IntentContextInSearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: IntentContextInSearchResult): IntentContextInSearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IntentContextInSearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IntentContextInSearchResult;
        static deserializeBinaryFromReader(message: IntentContextInSearchResult, reader: jspb.BinaryReader): IntentContextInSearchResult;
    }

    export namespace IntentContextInSearchResult {
        export type AsObject = {
            name: string,
            intentName: string,
            intentDisplayName: string,
            tagsList: Array<string>,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class FullTextSearchResponseIntentContextOut extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseIntentContextOut;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseIntentContextOut;
    clearIntentContextOutResultsList(): void;
    getIntentContextOutResultsList(): Array<FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult>;
    setIntentContextOutResultsList(value: Array<FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult>): FullTextSearchResponseIntentContextOut;
    addIntentContextOutResults(value?: FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult, index?: number): FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseIntentContextOut;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseIntentContextOut;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseIntentContextOut;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseIntentContextOut;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseIntentContextOut.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseIntentContextOut): FullTextSearchResponseIntentContextOut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseIntentContextOut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseIntentContextOut;
    static deserializeBinaryFromReader(message: FullTextSearchResponseIntentContextOut, reader: jspb.BinaryReader): FullTextSearchResponseIntentContextOut;
}

export namespace FullTextSearchResponseIntentContextOut {
    export type AsObject = {
        parent: string,
        languageCode: string,
        intentContextOutResultsList: Array<FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class IntentContextOutSearchResult extends jspb.Message { 
        getName(): string;
        setName(value: string): IntentContextOutSearchResult;
        getIntentName(): string;
        setIntentName(value: string): IntentContextOutSearchResult;
        getIntentDisplayName(): string;
        setIntentDisplayName(value: string): IntentContextOutSearchResult;
        clearTagsList(): void;
        getTagsList(): Array<string>;
        setTagsList(value: Array<string>): IntentContextOutSearchResult;
        addTags(value: string, index?: number): string;
        getLanguage(): string;
        setLanguage(value: string): IntentContextOutSearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentContextOutSearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentContextOutSearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): IntentContextOutSearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): IntentContextOutSearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IntentContextOutSearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: IntentContextOutSearchResult): IntentContextOutSearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IntentContextOutSearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IntentContextOutSearchResult;
        static deserializeBinaryFromReader(message: IntentContextOutSearchResult, reader: jspb.BinaryReader): IntentContextOutSearchResult;
    }

    export namespace IntentContextOutSearchResult {
        export type AsObject = {
            name: string,
            intentName: string,
            intentDisplayName: string,
            tagsList: Array<string>,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class FullTextSearchResponseIntentUsersays extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseIntentUsersays;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseIntentUsersays;
    clearIntentUsersaysResultsList(): void;
    getIntentUsersaysResultsList(): Array<FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult>;
    setIntentUsersaysResultsList(value: Array<FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult>): FullTextSearchResponseIntentUsersays;
    addIntentUsersaysResults(value?: FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult, index?: number): FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseIntentUsersays;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseIntentUsersays;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseIntentUsersays;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseIntentUsersays;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseIntentUsersays.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseIntentUsersays): FullTextSearchResponseIntentUsersays.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseIntentUsersays, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseIntentUsersays;
    static deserializeBinaryFromReader(message: FullTextSearchResponseIntentUsersays, reader: jspb.BinaryReader): FullTextSearchResponseIntentUsersays;
}

export namespace FullTextSearchResponseIntentUsersays {
    export type AsObject = {
        parent: string,
        languageCode: string,
        intentUsersaysResultsList: Array<FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class IntentUsersaysSearchResult extends jspb.Message { 
        getName(): string;
        setName(value: string): IntentUsersaysSearchResult;
        getText(): string;
        setText(value: string): IntentUsersaysSearchResult;
        getTextAsEntityTypes(): string;
        setTextAsEntityTypes(value: string): IntentUsersaysSearchResult;
        getTextAsEntityValues(): string;
        setTextAsEntityValues(value: string): IntentUsersaysSearchResult;
        getType(): string;
        setType(value: string): IntentUsersaysSearchResult;
        getIntentName(): string;
        setIntentName(value: string): IntentUsersaysSearchResult;
        getIntentDisplayName(): string;
        setIntentDisplayName(value: string): IntentUsersaysSearchResult;
        clearTagsList(): void;
        getTagsList(): Array<string>;
        setTagsList(value: Array<string>): IntentUsersaysSearchResult;
        addTags(value: string, index?: number): string;
        getLanguage(): string;
        setLanguage(value: string): IntentUsersaysSearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentUsersaysSearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentUsersaysSearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): IntentUsersaysSearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): IntentUsersaysSearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IntentUsersaysSearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: IntentUsersaysSearchResult): IntentUsersaysSearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IntentUsersaysSearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IntentUsersaysSearchResult;
        static deserializeBinaryFromReader(message: IntentUsersaysSearchResult, reader: jspb.BinaryReader): IntentUsersaysSearchResult;
    }

    export namespace IntentUsersaysSearchResult {
        export type AsObject = {
            name: string,
            text: string,
            textAsEntityTypes: string,
            textAsEntityValues: string,
            type: string,
            intentName: string,
            intentDisplayName: string,
            tagsList: Array<string>,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class FullTextSearchResponseIntentTags extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseIntentTags;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseIntentTags;
    clearIntentTagsResultsList(): void;
    getIntentTagsResultsList(): Array<FullTextSearchResponseIntentTags.IntentTagsSearchResult>;
    setIntentTagsResultsList(value: Array<FullTextSearchResponseIntentTags.IntentTagsSearchResult>): FullTextSearchResponseIntentTags;
    addIntentTagsResults(value?: FullTextSearchResponseIntentTags.IntentTagsSearchResult, index?: number): FullTextSearchResponseIntentTags.IntentTagsSearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseIntentTags;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseIntentTags;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseIntentTags;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseIntentTags;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseIntentTags.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseIntentTags): FullTextSearchResponseIntentTags.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseIntentTags, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseIntentTags;
    static deserializeBinaryFromReader(message: FullTextSearchResponseIntentTags, reader: jspb.BinaryReader): FullTextSearchResponseIntentTags;
}

export namespace FullTextSearchResponseIntentTags {
    export type AsObject = {
        parent: string,
        languageCode: string,
        intentTagsResultsList: Array<FullTextSearchResponseIntentTags.IntentTagsSearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class IntentTagsSearchResult extends jspb.Message { 
        getName(): string;
        setName(value: string): IntentTagsSearchResult;
        getText(): string;
        setText(value: string): IntentTagsSearchResult;
        getIntentName(): string;
        setIntentName(value: string): IntentTagsSearchResult;
        getIntentDisplayName(): string;
        setIntentDisplayName(value: string): IntentTagsSearchResult;
        clearTagsList(): void;
        getTagsList(): Array<string>;
        setTagsList(value: Array<string>): IntentTagsSearchResult;
        addTags(value: string, index?: number): string;
        getLanguage(): string;
        setLanguage(value: string): IntentTagsSearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentTagsSearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentTagsSearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): IntentTagsSearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): IntentTagsSearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IntentTagsSearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: IntentTagsSearchResult): IntentTagsSearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IntentTagsSearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IntentTagsSearchResult;
        static deserializeBinaryFromReader(message: IntentTagsSearchResult, reader: jspb.BinaryReader): IntentTagsSearchResult;
    }

    export namespace IntentTagsSearchResult {
        export type AsObject = {
            name: string,
            text: string,
            intentName: string,
            intentDisplayName: string,
            tagsList: Array<string>,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class FullTextSearchResponseIntentResponse extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseIntentResponse;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseIntentResponse;
    clearIntentResponseResultsList(): void;
    getIntentResponseResultsList(): Array<FullTextSearchResponseIntentResponse.IntentResponseSearchResult>;
    setIntentResponseResultsList(value: Array<FullTextSearchResponseIntentResponse.IntentResponseSearchResult>): FullTextSearchResponseIntentResponse;
    addIntentResponseResults(value?: FullTextSearchResponseIntentResponse.IntentResponseSearchResult, index?: number): FullTextSearchResponseIntentResponse.IntentResponseSearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseIntentResponse;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseIntentResponse;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseIntentResponse;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseIntentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseIntentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseIntentResponse): FullTextSearchResponseIntentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseIntentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseIntentResponse;
    static deserializeBinaryFromReader(message: FullTextSearchResponseIntentResponse, reader: jspb.BinaryReader): FullTextSearchResponseIntentResponse;
}

export namespace FullTextSearchResponseIntentResponse {
    export type AsObject = {
        parent: string,
        languageCode: string,
        intentResponseResultsList: Array<FullTextSearchResponseIntentResponse.IntentResponseSearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class IntentResponseSearchResult extends jspb.Message { 
        getText(): string;
        setText(value: string): IntentResponseSearchResult;
        getPlatform(): string;
        setPlatform(value: string): IntentResponseSearchResult;
        getResponseType(): string;
        setResponseType(value: string): IntentResponseSearchResult;
        getIntentName(): string;
        setIntentName(value: string): IntentResponseSearchResult;
        getIntentDisplayName(): string;
        setIntentDisplayName(value: string): IntentResponseSearchResult;
        clearTagsList(): void;
        getTagsList(): Array<string>;
        setTagsList(value: Array<string>): IntentResponseSearchResult;
        addTags(value: string, index?: number): string;
        getLanguage(): string;
        setLanguage(value: string): IntentResponseSearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentResponseSearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentResponseSearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): IntentResponseSearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): IntentResponseSearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IntentResponseSearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: IntentResponseSearchResult): IntentResponseSearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IntentResponseSearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IntentResponseSearchResult;
        static deserializeBinaryFromReader(message: IntentResponseSearchResult, reader: jspb.BinaryReader): IntentResponseSearchResult;
    }

    export namespace IntentResponseSearchResult {
        export type AsObject = {
            text: string,
            platform: string,
            responseType: string,
            intentName: string,
            intentDisplayName: string,
            tagsList: Array<string>,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class FullTextSearchResponseIntentParameters extends jspb.Message { 
    getParent(): string;
    setParent(value: string): FullTextSearchResponseIntentParameters;
    getLanguageCode(): string;
    setLanguageCode(value: string): FullTextSearchResponseIntentParameters;
    clearIntentParametersResultsList(): void;
    getIntentParametersResultsList(): Array<FullTextSearchResponseIntentParameters.IntentParametersSearchResult>;
    setIntentParametersResultsList(value: Array<FullTextSearchResponseIntentParameters.IntentParametersSearchResult>): FullTextSearchResponseIntentParameters;
    addIntentParametersResults(value?: FullTextSearchResponseIntentParameters.IntentParametersSearchResult, index?: number): FullTextSearchResponseIntentParameters.IntentParametersSearchResult;
    getTerm(): string;
    setTerm(value: string): FullTextSearchResponseIntentParameters;
    getElasticQuery(): string;
    setElasticQuery(value: string): FullTextSearchResponseIntentParameters;
    getTime(): number;
    setTime(value: number): FullTextSearchResponseIntentParameters;
    getNextPageToken(): string;
    setNextPageToken(value: string): FullTextSearchResponseIntentParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullTextSearchResponseIntentParameters.AsObject;
    static toObject(includeInstance: boolean, msg: FullTextSearchResponseIntentParameters): FullTextSearchResponseIntentParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullTextSearchResponseIntentParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullTextSearchResponseIntentParameters;
    static deserializeBinaryFromReader(message: FullTextSearchResponseIntentParameters, reader: jspb.BinaryReader): FullTextSearchResponseIntentParameters;
}

export namespace FullTextSearchResponseIntentParameters {
    export type AsObject = {
        parent: string,
        languageCode: string,
        intentParametersResultsList: Array<FullTextSearchResponseIntentParameters.IntentParametersSearchResult.AsObject>,
        term: string,
        elasticQuery: string,
        time: number,
        nextPageToken: string,
    }


    export class IntentParametersSearchResult extends jspb.Message { 
        getParameterName(): string;
        setParameterName(value: string): IntentParametersSearchResult;
        getParameterDisplayName(): string;
        setParameterDisplayName(value: string): IntentParametersSearchResult;
        getIntentName(): string;
        setIntentName(value: string): IntentParametersSearchResult;
        getIntentDisplayName(): string;
        setIntentDisplayName(value: string): IntentParametersSearchResult;
        clearTagsList(): void;
        getTagsList(): Array<string>;
        setTagsList(value: Array<string>): IntentParametersSearchResult;
        addTags(value: string, index?: number): string;
        getLanguage(): string;
        setLanguage(value: string): IntentParametersSearchResult;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentParametersSearchResult;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): IntentParametersSearchResult;
        getCreatedBy(): string;
        setCreatedBy(value: string): IntentParametersSearchResult;
        getModifiedBy(): string;
        setModifiedBy(value: string): IntentParametersSearchResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IntentParametersSearchResult.AsObject;
        static toObject(includeInstance: boolean, msg: IntentParametersSearchResult): IntentParametersSearchResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IntentParametersSearchResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IntentParametersSearchResult;
        static deserializeBinaryFromReader(message: IntentParametersSearchResult, reader: jspb.BinaryReader): IntentParametersSearchResult;
    }

    export namespace IntentParametersSearchResult {
        export type AsObject = {
            parameterName: string,
            parameterDisplayName: string,
            intentName: string,
            intentDisplayName: string,
            tagsList: Array<string>,
            language: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }

}

export class ReindexAgentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ReindexAgentRequest;
    getBranchName(): string;
    setBranchName(value: string): ReindexAgentRequest;
    clearIndexTypesList(): void;
    getIndexTypesList(): Array<FullTextSearchRequest.QueryType>;
    setIndexTypesList(value: Array<FullTextSearchRequest.QueryType>): ReindexAgentRequest;
    addIndexTypes(value: FullTextSearchRequest.QueryType, index?: number): FullTextSearchRequest.QueryType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReindexAgentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReindexAgentRequest): ReindexAgentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReindexAgentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReindexAgentRequest;
    static deserializeBinaryFromReader(message: ReindexAgentRequest, reader: jspb.BinaryReader): ReindexAgentRequest;
}

export namespace ReindexAgentRequest {
    export type AsObject = {
        parent: string,
        branchName: string,
        indexTypesList: Array<FullTextSearchRequest.QueryType>,
    }
}

export enum AgentView {
    AGENT_VIEW_UNSPECIFIED = 0,
    AGENT_VIEW_FULL = 1,
    AGENT_VIEW_SHALLOW = 2,
    AGENT_VIEW_MINIMUM = 3,
}

export enum InitiationProtocol {
    AS_SOON_AS_POSSIBLE = 0,
    WHEN_TRAINED = 1,
    NEVER = 2,
}

export enum ReportType {
    ALL = 0,
    INTENT_PER_LANGUAGE = 1,
    ENTITY_PER_LANGUAGE = 2,
    ENTITY_COLLISION = 3,
    INTENT_GENERAL = 4,
}

export enum SessionsReportType {
    SESSIONS = 0,
    SESSION_STEPS = 1,
    SESSION_TOP_X_INTENTS = 2,
    SESSION_TOP_X_ENTITY_TYPES = 3,
    SESSION_TOP_X_ENTITY_VALUES = 4,
    SESSION_TOP_X_USERS = 5,
    SESSION_TOP_X_LABELS = 6,
    SESSION_TOP_X_TAGS = 7,
    SESSION_TOP_X_PHONE_NUMBERS = 8,
    SESSION_HUMAN_HANDOVERS = 9,
    SESSION_SQL_QUERY = 10,
    SESSION_LEAST_X_INTENTS = 11,
    SESSION_LEAST_X_ENTITY_TYPES = 12,
    SESSION_LEAST_X_ENTITY_VALUES = 13,
    SESSION_LEAST_X_USERS = 14,
    SESSION_LEAST_X_LABELS = 15,
    SESSION_LEAST_X_TAGS = 16,
    TOTAL_STATISTICS = 17,
}

export enum ReportFormat {
    CSV = 0,
    HTML = 1,
    JSON = 2,
}

export enum AgentStatus {
    ACTIVE = 0,
    INACTIVE = 1,
}
