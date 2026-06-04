// package: ondewo.nlu
// file: ondewo/nlu/llm_evaluation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";

export class LlmEvaluationDataset extends jspb.Message { 
    getName(): string;
    setName(value: string): LlmEvaluationDataset;
    getDisplayName(): string;
    setDisplayName(value: string): LlmEvaluationDataset;
    getDescription(): string;
    setDescription(value: string): LlmEvaluationDataset;
    clearLlmEvaluationExamplesList(): void;
    getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
    setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): LlmEvaluationDataset;
    addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationDataset;
    getCreatedBy(): string;
    setCreatedBy(value: string): LlmEvaluationDataset;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): LlmEvaluationDataset;
    addTags(value: string, index?: number): string;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationDataset;
    getModifiedBy(): string;
    setModifiedBy(value: string): LlmEvaluationDataset;
    getParent(): string;
    setParent(value: string): LlmEvaluationDataset;
    getLanguageCode(): string;
    setLanguageCode(value: string): LlmEvaluationDataset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationDataset.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationDataset): LlmEvaluationDataset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationDataset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationDataset;
    static deserializeBinaryFromReader(message: LlmEvaluationDataset, reader: jspb.BinaryReader): LlmEvaluationDataset;
}

export namespace LlmEvaluationDataset {
    export type AsObject = {
        name: string,
        displayName: string,
        description: string,
        llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        tagsList: Array<string>,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedBy: string,
        parent: string,
        languageCode: string,
    }
}

export class LlmEvaluationExample extends jspb.Message { 
    getName(): string;
    setName(value: string): LlmEvaluationExample;
    getDisplayName(): string;
    setDisplayName(value: string): LlmEvaluationExample;
    getDescription(): string;
    setDescription(value: string): LlmEvaluationExample;

    hasInputs(): boolean;
    clearInputs(): void;
    getInputs(): google_protobuf_struct_pb.Struct | undefined;
    setInputs(value?: google_protobuf_struct_pb.Struct): LlmEvaluationExample;

    hasExpectedOutputs(): boolean;
    clearExpectedOutputs(): void;
    getExpectedOutputs(): google_protobuf_struct_pb.Struct | undefined;
    setExpectedOutputs(value?: google_protobuf_struct_pb.Struct): LlmEvaluationExample;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): LlmEvaluationExample;
    getLlmEvaluationDatasetName(): string;
    setLlmEvaluationDatasetName(value: string): LlmEvaluationExample;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExample;
    getCreatedBy(): string;
    setCreatedBy(value: string): LlmEvaluationExample;
    getParent(): string;
    setParent(value: string): LlmEvaluationExample;
    getLanguageCode(): string;
    setLanguageCode(value: string): LlmEvaluationExample;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExample;
    getModifiedBy(): string;
    setModifiedBy(value: string): LlmEvaluationExample;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationExample.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationExample): LlmEvaluationExample.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationExample, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationExample;
    static deserializeBinaryFromReader(message: LlmEvaluationExample, reader: jspb.BinaryReader): LlmEvaluationExample;
}

export namespace LlmEvaluationExample {
    export type AsObject = {
        name: string,
        displayName: string,
        description: string,
        inputs?: google_protobuf_struct_pb.Struct.AsObject,
        expectedOutputs?: google_protobuf_struct_pb.Struct.AsObject,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        llmEvaluationDatasetName: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        parent: string,
        languageCode: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedBy: string,
    }
}

export class LlmEvaluationExperiment extends jspb.Message { 
    getName(): string;
    setName(value: string): LlmEvaluationExperiment;
    getLlmEvaluationDatasetName(): string;
    setLlmEvaluationDatasetName(value: string): LlmEvaluationExperiment;
    getDisplayName(): string;
    setDisplayName(value: string): LlmEvaluationExperiment;
    getDescription(): string;
    setDescription(value: string): LlmEvaluationExperiment;
    getGitSha(): string;
    setGitSha(value: string): LlmEvaluationExperiment;
    getPromptVersion(): string;
    setPromptVersion(value: string): LlmEvaluationExperiment;
    getModelName(): string;
    setModelName(value: string): LlmEvaluationExperiment;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): LlmEvaluationExperiment;
    clearLlmEvaluationEvaluatorRunsList(): void;
    getLlmEvaluationEvaluatorRunsList(): Array<LlmEvaluationEvaluatorRun>;
    setLlmEvaluationEvaluatorRunsList(value: Array<LlmEvaluationEvaluatorRun>): LlmEvaluationExperiment;
    addLlmEvaluationEvaluatorRuns(value?: LlmEvaluationEvaluatorRun, index?: number): LlmEvaluationEvaluatorRun;

    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExperiment;

    hasFinishedAt(): boolean;
    clearFinishedAt(): void;
    getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExperiment;
    getDurationInS(): number;
    setDurationInS(value: number): LlmEvaluationExperiment;
    getNExamples(): number;
    setNExamples(value: number): LlmEvaluationExperiment;
    getNPassed(): number;
    setNPassed(value: number): LlmEvaluationExperiment;
    getNFailed(): number;
    setNFailed(value: number): LlmEvaluationExperiment;
    getLlmEvaluationBaselineExperimentName(): string;
    setLlmEvaluationBaselineExperimentName(value: string): LlmEvaluationExperiment;
    getParent(): string;
    setParent(value: string): LlmEvaluationExperiment;
    getLlmEvaluationExperimentStatus(): LlmEvaluationExperimentStatus;
    setLlmEvaluationExperimentStatus(value: LlmEvaluationExperimentStatus): LlmEvaluationExperiment;
    getCreatedBy(): string;
    setCreatedBy(value: string): LlmEvaluationExperiment;
    getLanguageCode(): string;
    setLanguageCode(value: string): LlmEvaluationExperiment;
    clearCcaiServiceNamesList(): void;
    getCcaiServiceNamesList(): Array<string>;
    setCcaiServiceNamesList(value: Array<string>): LlmEvaluationExperiment;
    addCcaiServiceNames(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExperiment;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExperiment;
    getModifiedBy(): string;
    setModifiedBy(value: string): LlmEvaluationExperiment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationExperiment.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationExperiment): LlmEvaluationExperiment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationExperiment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationExperiment;
    static deserializeBinaryFromReader(message: LlmEvaluationExperiment, reader: jspb.BinaryReader): LlmEvaluationExperiment;
}

export namespace LlmEvaluationExperiment {
    export type AsObject = {
        name: string,
        llmEvaluationDatasetName: string,
        displayName: string,
        description: string,
        gitSha: string,
        promptVersion: string,
        modelName: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        llmEvaluationEvaluatorRunsList: Array<LlmEvaluationEvaluatorRun.AsObject>,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationInS: number,
        nExamples: number,
        nPassed: number,
        nFailed: number,
        llmEvaluationBaselineExperimentName: string,
        parent: string,
        llmEvaluationExperimentStatus: LlmEvaluationExperimentStatus,
        createdBy: string,
        languageCode: string,
        ccaiServiceNamesList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedBy: string,
    }
}

export class LlmEvaluationEvaluatorRun extends jspb.Message { 
    getName(): string;
    setName(value: string): LlmEvaluationEvaluatorRun;
    getDisplayName(): string;
    setDisplayName(value: string): LlmEvaluationEvaluatorRun;
    getLlmEvaluationExampleName(): string;
    setLlmEvaluationExampleName(value: string): LlmEvaluationEvaluatorRun;
    getLlmTelemetryRunId(): string;
    setLlmTelemetryRunId(value: string): LlmEvaluationEvaluatorRun;
    getLlmEvaluationEvaluatorType(): LlmEvaluationEvaluatorType;
    setLlmEvaluationEvaluatorType(value: LlmEvaluationEvaluatorType): LlmEvaluationEvaluatorRun;
    getEvaluatorName(): string;
    setEvaluatorName(value: string): LlmEvaluationEvaluatorRun;
    clearLlmEvaluationFeedbacksList(): void;
    getLlmEvaluationFeedbacksList(): Array<LlmEvaluationFeedback>;
    setLlmEvaluationFeedbacksList(value: Array<LlmEvaluationFeedback>): LlmEvaluationEvaluatorRun;
    addLlmEvaluationFeedbacks(value?: LlmEvaluationFeedback, index?: number): LlmEvaluationFeedback;
    getLlmEvaluationExperimentName(): string;
    setLlmEvaluationExperimentName(value: string): LlmEvaluationEvaluatorRun;

    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationEvaluatorRun;

    hasFinishedAt(): boolean;
    clearFinishedAt(): void;
    getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationEvaluatorRun;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationEvaluatorRun;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationEvaluatorRun;
    getCreatedBy(): string;
    setCreatedBy(value: string): LlmEvaluationEvaluatorRun;
    getModifiedBy(): string;
    setModifiedBy(value: string): LlmEvaluationEvaluatorRun;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationEvaluatorRun.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationEvaluatorRun): LlmEvaluationEvaluatorRun.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationEvaluatorRun, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationEvaluatorRun;
    static deserializeBinaryFromReader(message: LlmEvaluationEvaluatorRun, reader: jspb.BinaryReader): LlmEvaluationEvaluatorRun;
}

export namespace LlmEvaluationEvaluatorRun {
    export type AsObject = {
        name: string,
        displayName: string,
        llmEvaluationExampleName: string,
        llmTelemetryRunId: string,
        llmEvaluationEvaluatorType: LlmEvaluationEvaluatorType,
        evaluatorName: string,
        llmEvaluationFeedbacksList: Array<LlmEvaluationFeedback.AsObject>,
        llmEvaluationExperimentName: string,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class LlmEvaluationFeedback extends jspb.Message { 
    getName(): string;
    setName(value: string): LlmEvaluationFeedback;
    getDisplayName(): string;
    setDisplayName(value: string): LlmEvaluationFeedback;
    getCriterion(): string;
    setCriterion(value: string): LlmEvaluationFeedback;
    getScore(): number;
    setScore(value: number): LlmEvaluationFeedback;
    getCategoricalValue(): string;
    setCategoricalValue(value: string): LlmEvaluationFeedback;
    getComment(): string;
    setComment(value: string): LlmEvaluationFeedback;
    getAnnotatorUserId(): string;
    setAnnotatorUserId(value: string): LlmEvaluationFeedback;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationFeedback;

    hasRaw(): boolean;
    clearRaw(): void;
    getRaw(): google_protobuf_struct_pb.Struct | undefined;
    setRaw(value?: google_protobuf_struct_pb.Struct): LlmEvaluationFeedback;
    getLlmEvaluationEvaluatorRunName(): string;
    setLlmEvaluationEvaluatorRunName(value: string): LlmEvaluationFeedback;
    getLlmEvaluationExperimentName(): string;
    setLlmEvaluationExperimentName(value: string): LlmEvaluationFeedback;
    getLlmEvaluationExampleName(): string;
    setLlmEvaluationExampleName(value: string): LlmEvaluationFeedback;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationFeedback;
    getCreatedBy(): string;
    setCreatedBy(value: string): LlmEvaluationFeedback;
    getModifiedBy(): string;
    setModifiedBy(value: string): LlmEvaluationFeedback;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationFeedback.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationFeedback): LlmEvaluationFeedback.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationFeedback, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationFeedback;
    static deserializeBinaryFromReader(message: LlmEvaluationFeedback, reader: jspb.BinaryReader): LlmEvaluationFeedback;
}

export namespace LlmEvaluationFeedback {
    export type AsObject = {
        name: string,
        displayName: string,
        criterion: string,
        score: number,
        categoricalValue: string,
        comment: string,
        annotatorUserId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        raw?: google_protobuf_struct_pb.Struct.AsObject,
        llmEvaluationEvaluatorRunName: string,
        llmEvaluationExperimentName: string,
        llmEvaluationExampleName: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class LlmEvaluationComparison extends jspb.Message { 
    getName(): string;
    setName(value: string): LlmEvaluationComparison;
    getDisplayName(): string;
    setDisplayName(value: string): LlmEvaluationComparison;
    clearLlmEvaluationExperimentNamesList(): void;
    getLlmEvaluationExperimentNamesList(): Array<string>;
    setLlmEvaluationExperimentNamesList(value: Array<string>): LlmEvaluationComparison;
    addLlmEvaluationExperimentNames(value: string, index?: number): string;
    getLlmEvaluationBaselineExperimentName(): string;
    setLlmEvaluationBaselineExperimentName(value: string): LlmEvaluationComparison;
    clearLlmEvaluationPairwiseResultsList(): void;
    getLlmEvaluationPairwiseResultsList(): Array<LlmEvaluationPairwiseResult>;
    setLlmEvaluationPairwiseResultsList(value: Array<LlmEvaluationPairwiseResult>): LlmEvaluationComparison;
    addLlmEvaluationPairwiseResults(value?: LlmEvaluationPairwiseResult, index?: number): LlmEvaluationPairwiseResult;

    hasAggregate(): boolean;
    clearAggregate(): void;
    getAggregate(): google_protobuf_struct_pb.Struct | undefined;
    setAggregate(value?: google_protobuf_struct_pb.Struct): LlmEvaluationComparison;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationComparison;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationComparison;
    getCreatedBy(): string;
    setCreatedBy(value: string): LlmEvaluationComparison;
    getModifiedBy(): string;
    setModifiedBy(value: string): LlmEvaluationComparison;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationComparison.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationComparison): LlmEvaluationComparison.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationComparison, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationComparison;
    static deserializeBinaryFromReader(message: LlmEvaluationComparison, reader: jspb.BinaryReader): LlmEvaluationComparison;
}

export namespace LlmEvaluationComparison {
    export type AsObject = {
        name: string,
        displayName: string,
        llmEvaluationExperimentNamesList: Array<string>,
        llmEvaluationBaselineExperimentName: string,
        llmEvaluationPairwiseResultsList: Array<LlmEvaluationPairwiseResult.AsObject>,
        aggregate?: google_protobuf_struct_pb.Struct.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class LlmEvaluationPairwiseResult extends jspb.Message { 
    getLlmEvaluationExampleName(): string;
    setLlmEvaluationExampleName(value: string): LlmEvaluationPairwiseResult;
    getLlmEvaluationWinnerExperimentName(): string;
    setLlmEvaluationWinnerExperimentName(value: string): LlmEvaluationPairwiseResult;
    getScoreDelta(): number;
    setScoreDelta(value: number): LlmEvaluationPairwiseResult;
    getReason(): string;
    setReason(value: string): LlmEvaluationPairwiseResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationPairwiseResult.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationPairwiseResult): LlmEvaluationPairwiseResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationPairwiseResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationPairwiseResult;
    static deserializeBinaryFromReader(message: LlmEvaluationPairwiseResult, reader: jspb.BinaryReader): LlmEvaluationPairwiseResult;
}

export namespace LlmEvaluationPairwiseResult {
    export type AsObject = {
        llmEvaluationExampleName: string,
        llmEvaluationWinnerExperimentName: string,
        scoreDelta: number,
        reason: string,
    }
}

export class CreateLlmEvaluationDatasetRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateLlmEvaluationDatasetRequest;
    getDisplayName(): string;
    setDisplayName(value: string): CreateLlmEvaluationDatasetRequest;
    getDescription(): string;
    setDescription(value: string): CreateLlmEvaluationDatasetRequest;
    clearLlmEvaluationExamplesList(): void;
    getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
    setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): CreateLlmEvaluationDatasetRequest;
    addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): CreateLlmEvaluationDatasetRequest;
    addTags(value: string, index?: number): string;
    getLanguageCode(): string;
    setLanguageCode(value: string): CreateLlmEvaluationDatasetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLlmEvaluationDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLlmEvaluationDatasetRequest): CreateLlmEvaluationDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLlmEvaluationDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationDatasetRequest;
    static deserializeBinaryFromReader(message: CreateLlmEvaluationDatasetRequest, reader: jspb.BinaryReader): CreateLlmEvaluationDatasetRequest;
}

export namespace CreateLlmEvaluationDatasetRequest {
    export type AsObject = {
        parent: string,
        displayName: string,
        description: string,
        llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
        tagsList: Array<string>,
        languageCode: string,
    }
}

export class GetLlmEvaluationDatasetRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetLlmEvaluationDatasetRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationDatasetRequest;
    getParent(): string;
    setParent(value: string): GetLlmEvaluationDatasetRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetLlmEvaluationDatasetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLlmEvaluationDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLlmEvaluationDatasetRequest): GetLlmEvaluationDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLlmEvaluationDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationDatasetRequest;
    static deserializeBinaryFromReader(message: GetLlmEvaluationDatasetRequest, reader: jspb.BinaryReader): GetLlmEvaluationDatasetRequest;
}

export namespace GetLlmEvaluationDatasetRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        parent: string,
        languageCode: string,
    }
}

export class LlmEvaluationDatasetFilter extends jspb.Message { 
    getDisplayName(): string;
    setDisplayName(value: string): LlmEvaluationDatasetFilter;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): LlmEvaluationDatasetFilter;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationDatasetFilter.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationDatasetFilter): LlmEvaluationDatasetFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationDatasetFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationDatasetFilter;
    static deserializeBinaryFromReader(message: LlmEvaluationDatasetFilter, reader: jspb.BinaryReader): LlmEvaluationDatasetFilter;
}

export namespace LlmEvaluationDatasetFilter {
    export type AsObject = {
        displayName: string,
        tagsList: Array<string>,
    }
}

export class ListLlmEvaluationDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListLlmEvaluationDatasetsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListLlmEvaluationDatasetsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationDatasetsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ListLlmEvaluationDatasetsRequest;

    hasLlmEvaluationDatasetFilter(): boolean;
    clearLlmEvaluationDatasetFilter(): void;
    getLlmEvaluationDatasetFilter(): LlmEvaluationDatasetFilter | undefined;
    setLlmEvaluationDatasetFilter(value?: LlmEvaluationDatasetFilter): ListLlmEvaluationDatasetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmEvaluationDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmEvaluationDatasetsRequest): ListLlmEvaluationDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmEvaluationDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationDatasetsRequest;
    static deserializeBinaryFromReader(message: ListLlmEvaluationDatasetsRequest, reader: jspb.BinaryReader): ListLlmEvaluationDatasetsRequest;
}

export namespace ListLlmEvaluationDatasetsRequest {
    export type AsObject = {
        parent: string,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        languageCode: string,
        llmEvaluationDatasetFilter?: LlmEvaluationDatasetFilter.AsObject,
    }
}

export class ListLlmEvaluationDatasetsResponse extends jspb.Message { 
    clearLlmEvaluationDatasetsList(): void;
    getLlmEvaluationDatasetsList(): Array<LlmEvaluationDataset>;
    setLlmEvaluationDatasetsList(value: Array<LlmEvaluationDataset>): ListLlmEvaluationDatasetsResponse;
    addLlmEvaluationDatasets(value?: LlmEvaluationDataset, index?: number): LlmEvaluationDataset;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLlmEvaluationDatasetsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmEvaluationDatasetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmEvaluationDatasetsResponse): ListLlmEvaluationDatasetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmEvaluationDatasetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationDatasetsResponse;
    static deserializeBinaryFromReader(message: ListLlmEvaluationDatasetsResponse, reader: jspb.BinaryReader): ListLlmEvaluationDatasetsResponse;
}

export namespace ListLlmEvaluationDatasetsResponse {
    export type AsObject = {
        llmEvaluationDatasetsList: Array<LlmEvaluationDataset.AsObject>,
        nextPageToken: string,
    }
}

export class UpdateLlmEvaluationDatasetRequest extends jspb.Message { 

    hasLlmEvaluationDataset(): boolean;
    clearLlmEvaluationDataset(): void;
    getLlmEvaluationDataset(): LlmEvaluationDataset | undefined;
    setLlmEvaluationDataset(value?: LlmEvaluationDataset): UpdateLlmEvaluationDatasetRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationDatasetRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationDatasetRequest;
    getParent(): string;
    setParent(value: string): UpdateLlmEvaluationDatasetRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): UpdateLlmEvaluationDatasetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLlmEvaluationDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationDatasetRequest): UpdateLlmEvaluationDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLlmEvaluationDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationDatasetRequest;
    static deserializeBinaryFromReader(message: UpdateLlmEvaluationDatasetRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationDatasetRequest;
}

export namespace UpdateLlmEvaluationDatasetRequest {
    export type AsObject = {
        llmEvaluationDataset?: LlmEvaluationDataset.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        parent: string,
        languageCode: string,
    }
}

export class DeleteLlmEvaluationDatasetRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteLlmEvaluationDatasetRequest;
    getParent(): string;
    setParent(value: string): DeleteLlmEvaluationDatasetRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): DeleteLlmEvaluationDatasetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLlmEvaluationDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationDatasetRequest): DeleteLlmEvaluationDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLlmEvaluationDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationDatasetRequest;
    static deserializeBinaryFromReader(message: DeleteLlmEvaluationDatasetRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationDatasetRequest;
}

export namespace DeleteLlmEvaluationDatasetRequest {
    export type AsObject = {
        name: string,
        parent: string,
        languageCode: string,
    }
}

export class AddLlmEvaluationExampleRequest extends jspb.Message { 
    getLlmEvaluationDatasetName(): string;
    setLlmEvaluationDatasetName(value: string): AddLlmEvaluationExampleRequest;

    hasLlmEvaluationExample(): boolean;
    clearLlmEvaluationExample(): void;
    getLlmEvaluationExample(): LlmEvaluationExample | undefined;
    setLlmEvaluationExample(value?: LlmEvaluationExample): AddLlmEvaluationExampleRequest;
    getParent(): string;
    setParent(value: string): AddLlmEvaluationExampleRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): AddLlmEvaluationExampleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLlmEvaluationExampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddLlmEvaluationExampleRequest): AddLlmEvaluationExampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLlmEvaluationExampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLlmEvaluationExampleRequest;
    static deserializeBinaryFromReader(message: AddLlmEvaluationExampleRequest, reader: jspb.BinaryReader): AddLlmEvaluationExampleRequest;
}

export namespace AddLlmEvaluationExampleRequest {
    export type AsObject = {
        llmEvaluationDatasetName: string,
        llmEvaluationExample?: LlmEvaluationExample.AsObject,
        parent: string,
        languageCode: string,
    }
}

export class AddLlmEvaluationExamplesRequest extends jspb.Message { 
    getLlmEvaluationDatasetName(): string;
    setLlmEvaluationDatasetName(value: string): AddLlmEvaluationExamplesRequest;
    clearLlmEvaluationExamplesList(): void;
    getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
    setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): AddLlmEvaluationExamplesRequest;
    addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;
    getParent(): string;
    setParent(value: string): AddLlmEvaluationExamplesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): AddLlmEvaluationExamplesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLlmEvaluationExamplesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddLlmEvaluationExamplesRequest): AddLlmEvaluationExamplesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLlmEvaluationExamplesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLlmEvaluationExamplesRequest;
    static deserializeBinaryFromReader(message: AddLlmEvaluationExamplesRequest, reader: jspb.BinaryReader): AddLlmEvaluationExamplesRequest;
}

export namespace AddLlmEvaluationExamplesRequest {
    export type AsObject = {
        llmEvaluationDatasetName: string,
        llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
        parent: string,
        languageCode: string,
    }
}

export class AddLlmEvaluationExamplesResponse extends jspb.Message { 
    clearLlmEvaluationExamplesList(): void;
    getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
    setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): AddLlmEvaluationExamplesResponse;
    addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLlmEvaluationExamplesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddLlmEvaluationExamplesResponse): AddLlmEvaluationExamplesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLlmEvaluationExamplesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLlmEvaluationExamplesResponse;
    static deserializeBinaryFromReader(message: AddLlmEvaluationExamplesResponse, reader: jspb.BinaryReader): AddLlmEvaluationExamplesResponse;
}

export namespace AddLlmEvaluationExamplesResponse {
    export type AsObject = {
        llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
    }
}

export class GetLlmEvaluationExampleRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetLlmEvaluationExampleRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationExampleRequest;
    getParent(): string;
    setParent(value: string): GetLlmEvaluationExampleRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetLlmEvaluationExampleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLlmEvaluationExampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLlmEvaluationExampleRequest): GetLlmEvaluationExampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLlmEvaluationExampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationExampleRequest;
    static deserializeBinaryFromReader(message: GetLlmEvaluationExampleRequest, reader: jspb.BinaryReader): GetLlmEvaluationExampleRequest;
}

export namespace GetLlmEvaluationExampleRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        parent: string,
        languageCode: string,
    }
}

export class LlmEvaluationExampleFilter extends jspb.Message { 
    getDisplayName(): string;
    setDisplayName(value: string): LlmEvaluationExampleFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationExampleFilter.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationExampleFilter): LlmEvaluationExampleFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationExampleFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationExampleFilter;
    static deserializeBinaryFromReader(message: LlmEvaluationExampleFilter, reader: jspb.BinaryReader): LlmEvaluationExampleFilter;
}

export namespace LlmEvaluationExampleFilter {
    export type AsObject = {
        displayName: string,
    }
}

export class ListLlmEvaluationExamplesRequest extends jspb.Message { 
    getLlmEvaluationDatasetName(): string;
    setLlmEvaluationDatasetName(value: string): ListLlmEvaluationExamplesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListLlmEvaluationExamplesRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationExamplesRequest;
    getParent(): string;
    setParent(value: string): ListLlmEvaluationExamplesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ListLlmEvaluationExamplesRequest;

    hasLlmEvaluationExampleFilter(): boolean;
    clearLlmEvaluationExampleFilter(): void;
    getLlmEvaluationExampleFilter(): LlmEvaluationExampleFilter | undefined;
    setLlmEvaluationExampleFilter(value?: LlmEvaluationExampleFilter): ListLlmEvaluationExamplesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmEvaluationExamplesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmEvaluationExamplesRequest): ListLlmEvaluationExamplesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmEvaluationExamplesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationExamplesRequest;
    static deserializeBinaryFromReader(message: ListLlmEvaluationExamplesRequest, reader: jspb.BinaryReader): ListLlmEvaluationExamplesRequest;
}

export namespace ListLlmEvaluationExamplesRequest {
    export type AsObject = {
        llmEvaluationDatasetName: string,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        parent: string,
        languageCode: string,
        llmEvaluationExampleFilter?: LlmEvaluationExampleFilter.AsObject,
    }
}

export class ListLlmEvaluationExamplesResponse extends jspb.Message { 
    clearLlmEvaluationExamplesList(): void;
    getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
    setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): ListLlmEvaluationExamplesResponse;
    addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLlmEvaluationExamplesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmEvaluationExamplesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmEvaluationExamplesResponse): ListLlmEvaluationExamplesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmEvaluationExamplesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationExamplesResponse;
    static deserializeBinaryFromReader(message: ListLlmEvaluationExamplesResponse, reader: jspb.BinaryReader): ListLlmEvaluationExamplesResponse;
}

export namespace ListLlmEvaluationExamplesResponse {
    export type AsObject = {
        llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
        nextPageToken: string,
    }
}

export class UpdateLlmEvaluationExampleRequest extends jspb.Message { 

    hasLlmEvaluationExample(): boolean;
    clearLlmEvaluationExample(): void;
    getLlmEvaluationExample(): LlmEvaluationExample | undefined;
    setLlmEvaluationExample(value?: LlmEvaluationExample): UpdateLlmEvaluationExampleRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationExampleRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationExampleRequest;
    getParent(): string;
    setParent(value: string): UpdateLlmEvaluationExampleRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): UpdateLlmEvaluationExampleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLlmEvaluationExampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationExampleRequest): UpdateLlmEvaluationExampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLlmEvaluationExampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationExampleRequest;
    static deserializeBinaryFromReader(message: UpdateLlmEvaluationExampleRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationExampleRequest;
}

export namespace UpdateLlmEvaluationExampleRequest {
    export type AsObject = {
        llmEvaluationExample?: LlmEvaluationExample.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        parent: string,
        languageCode: string,
    }
}

export class DeleteLlmEvaluationExampleRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteLlmEvaluationExampleRequest;
    getParent(): string;
    setParent(value: string): DeleteLlmEvaluationExampleRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): DeleteLlmEvaluationExampleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLlmEvaluationExampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationExampleRequest): DeleteLlmEvaluationExampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLlmEvaluationExampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationExampleRequest;
    static deserializeBinaryFromReader(message: DeleteLlmEvaluationExampleRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationExampleRequest;
}

export namespace DeleteLlmEvaluationExampleRequest {
    export type AsObject = {
        name: string,
        parent: string,
        languageCode: string,
    }
}

export class RunLlmEvaluationExperimentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RunLlmEvaluationExperimentRequest;
    getLlmEvaluationDatasetName(): string;
    setLlmEvaluationDatasetName(value: string): RunLlmEvaluationExperimentRequest;
    getDisplayName(): string;
    setDisplayName(value: string): RunLlmEvaluationExperimentRequest;
    getGitSha(): string;
    setGitSha(value: string): RunLlmEvaluationExperimentRequest;
    getPromptVersion(): string;
    setPromptVersion(value: string): RunLlmEvaluationExperimentRequest;
    getModelName(): string;
    setModelName(value: string): RunLlmEvaluationExperimentRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): RunLlmEvaluationExperimentRequest;
    clearLlmEvaluationEvaluatorNamesList(): void;
    getLlmEvaluationEvaluatorNamesList(): Array<string>;
    setLlmEvaluationEvaluatorNamesList(value: Array<string>): RunLlmEvaluationExperimentRequest;
    addLlmEvaluationEvaluatorNames(value: string, index?: number): string;
    getLlmEvaluationBaselineExperimentName(): string;
    setLlmEvaluationBaselineExperimentName(value: string): RunLlmEvaluationExperimentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RunLlmEvaluationExperimentRequest;
    clearCcaiServiceNamesList(): void;
    getCcaiServiceNamesList(): Array<string>;
    setCcaiServiceNamesList(value: Array<string>): RunLlmEvaluationExperimentRequest;
    addCcaiServiceNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunLlmEvaluationExperimentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RunLlmEvaluationExperimentRequest): RunLlmEvaluationExperimentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunLlmEvaluationExperimentRequest;
    static deserializeBinaryFromReader(message: RunLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): RunLlmEvaluationExperimentRequest;
}

export namespace RunLlmEvaluationExperimentRequest {
    export type AsObject = {
        parent: string,
        llmEvaluationDatasetName: string,
        displayName: string,
        gitSha: string,
        promptVersion: string,
        modelName: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        llmEvaluationEvaluatorNamesList: Array<string>,
        llmEvaluationBaselineExperimentName: string,
        languageCode: string,
        ccaiServiceNamesList: Array<string>,
    }
}

export class GetLlmEvaluationExperimentRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetLlmEvaluationExperimentRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationExperimentRequest;
    getParent(): string;
    setParent(value: string): GetLlmEvaluationExperimentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetLlmEvaluationExperimentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLlmEvaluationExperimentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLlmEvaluationExperimentRequest): GetLlmEvaluationExperimentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationExperimentRequest;
    static deserializeBinaryFromReader(message: GetLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): GetLlmEvaluationExperimentRequest;
}

export namespace GetLlmEvaluationExperimentRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        parent: string,
        languageCode: string,
    }
}

export class LlmEvaluationExperimentFilter extends jspb.Message { 
    getDisplayName(): string;
    setDisplayName(value: string): LlmEvaluationExperimentFilter;
    getLlmEvaluationExperimentStatus(): LlmEvaluationExperimentStatus;
    setLlmEvaluationExperimentStatus(value: LlmEvaluationExperimentStatus): LlmEvaluationExperimentFilter;
    getLlmEvaluationDatasetName(): string;
    setLlmEvaluationDatasetName(value: string): LlmEvaluationExperimentFilter;
    getModelName(): string;
    setModelName(value: string): LlmEvaluationExperimentFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationExperimentFilter.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationExperimentFilter): LlmEvaluationExperimentFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationExperimentFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationExperimentFilter;
    static deserializeBinaryFromReader(message: LlmEvaluationExperimentFilter, reader: jspb.BinaryReader): LlmEvaluationExperimentFilter;
}

export namespace LlmEvaluationExperimentFilter {
    export type AsObject = {
        displayName: string,
        llmEvaluationExperimentStatus: LlmEvaluationExperimentStatus,
        llmEvaluationDatasetName: string,
        modelName: string,
    }
}

export class ListLlmEvaluationExperimentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListLlmEvaluationExperimentsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListLlmEvaluationExperimentsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationExperimentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ListLlmEvaluationExperimentsRequest;

    hasLlmEvaluationExperimentFilter(): boolean;
    clearLlmEvaluationExperimentFilter(): void;
    getLlmEvaluationExperimentFilter(): LlmEvaluationExperimentFilter | undefined;
    setLlmEvaluationExperimentFilter(value?: LlmEvaluationExperimentFilter): ListLlmEvaluationExperimentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmEvaluationExperimentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmEvaluationExperimentsRequest): ListLlmEvaluationExperimentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmEvaluationExperimentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationExperimentsRequest;
    static deserializeBinaryFromReader(message: ListLlmEvaluationExperimentsRequest, reader: jspb.BinaryReader): ListLlmEvaluationExperimentsRequest;
}

export namespace ListLlmEvaluationExperimentsRequest {
    export type AsObject = {
        parent: string,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        languageCode: string,
        llmEvaluationExperimentFilter?: LlmEvaluationExperimentFilter.AsObject,
    }
}

export class ListLlmEvaluationExperimentsResponse extends jspb.Message { 
    clearLlmEvaluationExperimentsList(): void;
    getLlmEvaluationExperimentsList(): Array<LlmEvaluationExperiment>;
    setLlmEvaluationExperimentsList(value: Array<LlmEvaluationExperiment>): ListLlmEvaluationExperimentsResponse;
    addLlmEvaluationExperiments(value?: LlmEvaluationExperiment, index?: number): LlmEvaluationExperiment;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLlmEvaluationExperimentsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmEvaluationExperimentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmEvaluationExperimentsResponse): ListLlmEvaluationExperimentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmEvaluationExperimentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationExperimentsResponse;
    static deserializeBinaryFromReader(message: ListLlmEvaluationExperimentsResponse, reader: jspb.BinaryReader): ListLlmEvaluationExperimentsResponse;
}

export namespace ListLlmEvaluationExperimentsResponse {
    export type AsObject = {
        llmEvaluationExperimentsList: Array<LlmEvaluationExperiment.AsObject>,
        nextPageToken: string,
    }
}

export class UpdateLlmEvaluationExperimentRequest extends jspb.Message { 

    hasLlmEvaluationExperiment(): boolean;
    clearLlmEvaluationExperiment(): void;
    getLlmEvaluationExperiment(): LlmEvaluationExperiment | undefined;
    setLlmEvaluationExperiment(value?: LlmEvaluationExperiment): UpdateLlmEvaluationExperimentRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationExperimentRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationExperimentRequest;
    getParent(): string;
    setParent(value: string): UpdateLlmEvaluationExperimentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): UpdateLlmEvaluationExperimentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLlmEvaluationExperimentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationExperimentRequest): UpdateLlmEvaluationExperimentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationExperimentRequest;
    static deserializeBinaryFromReader(message: UpdateLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationExperimentRequest;
}

export namespace UpdateLlmEvaluationExperimentRequest {
    export type AsObject = {
        llmEvaluationExperiment?: LlmEvaluationExperiment.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        parent: string,
        languageCode: string,
    }
}

export class DeleteLlmEvaluationExperimentRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteLlmEvaluationExperimentRequest;
    getParent(): string;
    setParent(value: string): DeleteLlmEvaluationExperimentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): DeleteLlmEvaluationExperimentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLlmEvaluationExperimentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationExperimentRequest): DeleteLlmEvaluationExperimentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationExperimentRequest;
    static deserializeBinaryFromReader(message: DeleteLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationExperimentRequest;
}

export namespace DeleteLlmEvaluationExperimentRequest {
    export type AsObject = {
        name: string,
        parent: string,
        languageCode: string,
    }
}

export class CancelLlmEvaluationExperimentRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CancelLlmEvaluationExperimentRequest;
    getParent(): string;
    setParent(value: string): CancelLlmEvaluationExperimentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): CancelLlmEvaluationExperimentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelLlmEvaluationExperimentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelLlmEvaluationExperimentRequest): CancelLlmEvaluationExperimentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelLlmEvaluationExperimentRequest;
    static deserializeBinaryFromReader(message: CancelLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): CancelLlmEvaluationExperimentRequest;
}

export namespace CancelLlmEvaluationExperimentRequest {
    export type AsObject = {
        name: string,
        parent: string,
        languageCode: string,
    }
}

export class CompareLlmEvaluationExperimentsRequest extends jspb.Message { 
    clearLlmEvaluationExperimentNamesList(): void;
    getLlmEvaluationExperimentNamesList(): Array<string>;
    setLlmEvaluationExperimentNamesList(value: Array<string>): CompareLlmEvaluationExperimentsRequest;
    addLlmEvaluationExperimentNames(value: string, index?: number): string;
    getLlmEvaluationBaselineExperimentName(): string;
    setLlmEvaluationBaselineExperimentName(value: string): CompareLlmEvaluationExperimentsRequest;
    getParent(): string;
    setParent(value: string): CompareLlmEvaluationExperimentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): CompareLlmEvaluationExperimentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompareLlmEvaluationExperimentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompareLlmEvaluationExperimentsRequest): CompareLlmEvaluationExperimentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompareLlmEvaluationExperimentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompareLlmEvaluationExperimentsRequest;
    static deserializeBinaryFromReader(message: CompareLlmEvaluationExperimentsRequest, reader: jspb.BinaryReader): CompareLlmEvaluationExperimentsRequest;
}

export namespace CompareLlmEvaluationExperimentsRequest {
    export type AsObject = {
        llmEvaluationExperimentNamesList: Array<string>,
        llmEvaluationBaselineExperimentName: string,
        parent: string,
        languageCode: string,
    }
}

export class SubmitLlmEvaluationFeedbackRequest extends jspb.Message { 
    getLlmEvaluationExperimentName(): string;
    setLlmEvaluationExperimentName(value: string): SubmitLlmEvaluationFeedbackRequest;
    getLlmEvaluationEvaluatorRunName(): string;
    setLlmEvaluationEvaluatorRunName(value: string): SubmitLlmEvaluationFeedbackRequest;

    hasLlmEvaluationFeedback(): boolean;
    clearLlmEvaluationFeedback(): void;
    getLlmEvaluationFeedback(): LlmEvaluationFeedback | undefined;
    setLlmEvaluationFeedback(value?: LlmEvaluationFeedback): SubmitLlmEvaluationFeedbackRequest;
    getParent(): string;
    setParent(value: string): SubmitLlmEvaluationFeedbackRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): SubmitLlmEvaluationFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubmitLlmEvaluationFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubmitLlmEvaluationFeedbackRequest): SubmitLlmEvaluationFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubmitLlmEvaluationFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubmitLlmEvaluationFeedbackRequest;
    static deserializeBinaryFromReader(message: SubmitLlmEvaluationFeedbackRequest, reader: jspb.BinaryReader): SubmitLlmEvaluationFeedbackRequest;
}

export namespace SubmitLlmEvaluationFeedbackRequest {
    export type AsObject = {
        llmEvaluationExperimentName: string,
        llmEvaluationEvaluatorRunName: string,
        llmEvaluationFeedback?: LlmEvaluationFeedback.AsObject,
        parent: string,
        languageCode: string,
    }
}

export class LlmEvaluationFeedbackFilter extends jspb.Message { 
    getLlmEvaluationExperimentName(): string;
    setLlmEvaluationExperimentName(value: string): LlmEvaluationFeedbackFilter;
    getLlmEvaluationExampleName(): string;
    setLlmEvaluationExampleName(value: string): LlmEvaluationFeedbackFilter;
    getLlmEvaluationEvaluatorRunName(): string;
    setLlmEvaluationEvaluatorRunName(value: string): LlmEvaluationFeedbackFilter;
    getCriterion(): string;
    setCriterion(value: string): LlmEvaluationFeedbackFilter;
    getCategoricalValue(): string;
    setCategoricalValue(value: string): LlmEvaluationFeedbackFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEvaluationFeedbackFilter.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEvaluationFeedbackFilter): LlmEvaluationFeedbackFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEvaluationFeedbackFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEvaluationFeedbackFilter;
    static deserializeBinaryFromReader(message: LlmEvaluationFeedbackFilter, reader: jspb.BinaryReader): LlmEvaluationFeedbackFilter;
}

export namespace LlmEvaluationFeedbackFilter {
    export type AsObject = {
        llmEvaluationExperimentName: string,
        llmEvaluationExampleName: string,
        llmEvaluationEvaluatorRunName: string,
        criterion: string,
        categoricalValue: string,
    }
}

export class ListLlmEvaluationFeedbackRequest extends jspb.Message { 
    getPageToken(): string;
    setPageToken(value: string): ListLlmEvaluationFeedbackRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationFeedbackRequest;
    getParent(): string;
    setParent(value: string): ListLlmEvaluationFeedbackRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ListLlmEvaluationFeedbackRequest;

    hasLlmEvaluationFeedbackFilter(): boolean;
    clearLlmEvaluationFeedbackFilter(): void;
    getLlmEvaluationFeedbackFilter(): LlmEvaluationFeedbackFilter | undefined;
    setLlmEvaluationFeedbackFilter(value?: LlmEvaluationFeedbackFilter): ListLlmEvaluationFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmEvaluationFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmEvaluationFeedbackRequest): ListLlmEvaluationFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmEvaluationFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationFeedbackRequest;
    static deserializeBinaryFromReader(message: ListLlmEvaluationFeedbackRequest, reader: jspb.BinaryReader): ListLlmEvaluationFeedbackRequest;
}

export namespace ListLlmEvaluationFeedbackRequest {
    export type AsObject = {
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        parent: string,
        languageCode: string,
        llmEvaluationFeedbackFilter?: LlmEvaluationFeedbackFilter.AsObject,
    }
}

export class ListLlmEvaluationFeedbackResponse extends jspb.Message { 
    clearLlmEvaluationFeedbacksList(): void;
    getLlmEvaluationFeedbacksList(): Array<LlmEvaluationFeedback>;
    setLlmEvaluationFeedbacksList(value: Array<LlmEvaluationFeedback>): ListLlmEvaluationFeedbackResponse;
    addLlmEvaluationFeedbacks(value?: LlmEvaluationFeedback, index?: number): LlmEvaluationFeedback;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLlmEvaluationFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmEvaluationFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmEvaluationFeedbackResponse): ListLlmEvaluationFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmEvaluationFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationFeedbackResponse;
    static deserializeBinaryFromReader(message: ListLlmEvaluationFeedbackResponse, reader: jspb.BinaryReader): ListLlmEvaluationFeedbackResponse;
}

export namespace ListLlmEvaluationFeedbackResponse {
    export type AsObject = {
        llmEvaluationFeedbacksList: Array<LlmEvaluationFeedback.AsObject>,
        nextPageToken: string,
    }
}

export class DeleteLlmEvaluationFeedbackRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteLlmEvaluationFeedbackRequest;
    getParent(): string;
    setParent(value: string): DeleteLlmEvaluationFeedbackRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): DeleteLlmEvaluationFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLlmEvaluationFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationFeedbackRequest): DeleteLlmEvaluationFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLlmEvaluationFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationFeedbackRequest;
    static deserializeBinaryFromReader(message: DeleteLlmEvaluationFeedbackRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationFeedbackRequest;
}

export namespace DeleteLlmEvaluationFeedbackRequest {
    export type AsObject = {
        name: string,
        parent: string,
        languageCode: string,
    }
}

export enum LlmEvaluationExperimentStatus {
    LLM_EVALUATION_EXPERIMENT_STATUS_UNSPECIFIED = 0,
    LLM_EVALUATION_EXPERIMENT_STATUS_PENDING = 1,
    LLM_EVALUATION_EXPERIMENT_STATUS_RUNNING = 2,
    LLM_EVALUATION_EXPERIMENT_STATUS_SUCCEEDED = 3,
    LLM_EVALUATION_EXPERIMENT_STATUS_FAILED = 4,
    LLM_EVALUATION_EXPERIMENT_STATUS_CANCELLED = 5,
}

export enum LlmEvaluationEvaluatorType {
    LLM_EVALUATION_EVALUATOR_TYPE_UNSPECIFIED = 0,
    LLM_EVALUATION_EVALUATOR_TYPE_LLM_AS_JUDGE = 1,
    LLM_EVALUATION_EVALUATOR_TYPE_HUMAN = 2,
    LLM_EVALUATION_EVALUATOR_TYPE_HEURISTIC = 3,
    LLM_EVALUATION_EVALUATOR_TYPE_CUSTOM_CODE = 4,
    LLM_EVALUATION_EVALUATOR_TYPE_PAIRWISE = 5,
}
