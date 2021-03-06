// package: ondewo.nlu
// file: ondewo/nlu/agent.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_nlu_user_pb from "../../ondewo/nlu/user_pb";
import * as ondewo_nlu_project_role_pb from "../../ondewo/nlu/project_role_pb";

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

export enum AgentView {
    AGENT_VIEW_UNSPECIFIED = 0,
    AGENT_VIEW_FULL = 1,
    AGENT_VIEW_SHALLOW = 2,
}

export enum ReportType {
    ALL = 0,
    INTENT_PER_LANGUAGE = 1,
    ENTITY_PER_LANGUAGE = 2,
    ENTITY_COLLISION = 3,
    INTENT_GENERAL = 4,
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
