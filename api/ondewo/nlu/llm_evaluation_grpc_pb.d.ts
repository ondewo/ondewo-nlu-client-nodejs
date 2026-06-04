// package: ondewo.nlu
// file: ondewo/nlu/llm_evaluation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_llm_evaluation_pb from "../../ondewo/nlu/llm_evaluation_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";

interface ILlmEvaluationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    llmEvaluationCreateDataset: ILlmEvaluationsService_ILlmEvaluationCreateDataset;
    llmEvaluationGetDataset: ILlmEvaluationsService_ILlmEvaluationGetDataset;
    llmEvaluationListDatasets: ILlmEvaluationsService_ILlmEvaluationListDatasets;
    llmEvaluationUpdateDataset: ILlmEvaluationsService_ILlmEvaluationUpdateDataset;
    llmEvaluationDeleteDataset: ILlmEvaluationsService_ILlmEvaluationDeleteDataset;
    llmEvaluationAddExample: ILlmEvaluationsService_ILlmEvaluationAddExample;
    llmEvaluationAddExamples: ILlmEvaluationsService_ILlmEvaluationAddExamples;
    llmEvaluationGetExample: ILlmEvaluationsService_ILlmEvaluationGetExample;
    llmEvaluationListExamples: ILlmEvaluationsService_ILlmEvaluationListExamples;
    llmEvaluationUpdateExample: ILlmEvaluationsService_ILlmEvaluationUpdateExample;
    llmEvaluationDeleteExample: ILlmEvaluationsService_ILlmEvaluationDeleteExample;
    llmEvaluationRunExperiment: ILlmEvaluationsService_ILlmEvaluationRunExperiment;
    llmEvaluationGetExperiment: ILlmEvaluationsService_ILlmEvaluationGetExperiment;
    llmEvaluationListExperiments: ILlmEvaluationsService_ILlmEvaluationListExperiments;
    llmEvaluationUpdateExperiment: ILlmEvaluationsService_ILlmEvaluationUpdateExperiment;
    llmEvaluationDeleteExperiment: ILlmEvaluationsService_ILlmEvaluationDeleteExperiment;
    llmEvaluationCancelExperiment: ILlmEvaluationsService_ILlmEvaluationCancelExperiment;
    llmEvaluationCompareExperiments: ILlmEvaluationsService_ILlmEvaluationCompareExperiments;
    llmEvaluationSubmitFeedback: ILlmEvaluationsService_ILlmEvaluationSubmitFeedback;
    llmEvaluationListFeedback: ILlmEvaluationsService_ILlmEvaluationListFeedback;
    llmEvaluationDeleteFeedback: ILlmEvaluationsService_ILlmEvaluationDeleteFeedback;
}

interface ILlmEvaluationsService_ILlmEvaluationCreateDataset extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetDataset extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
}
interface ILlmEvaluationsService_ILlmEvaluationListDatasets extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateDataset extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteDataset extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationAddExample extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
}
interface ILlmEvaluationsService_ILlmEvaluationAddExamples extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExamples";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetExample extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
}
interface ILlmEvaluationsService_ILlmEvaluationListExamples extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListExamples";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateExample extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteExample extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationRunExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationRunExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationListExperiments extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListExperiments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationCancelExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCancelExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationCompareExperiments extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCompareExperiments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison>;
}
interface ILlmEvaluationsService_ILlmEvaluationSubmitFeedback extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationSubmitFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
}
interface ILlmEvaluationsService_ILlmEvaluationListFeedback extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteFeedback extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const LlmEvaluationsService: ILlmEvaluationsService;

export interface ILlmEvaluationsServer {
    llmEvaluationCreateDataset: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    llmEvaluationGetDataset: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    llmEvaluationListDatasets: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse>;
    llmEvaluationUpdateDataset: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    llmEvaluationDeleteDataset: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationAddExample: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    llmEvaluationAddExamples: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse>;
    llmEvaluationGetExample: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    llmEvaluationListExamples: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse>;
    llmEvaluationUpdateExample: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    llmEvaluationDeleteExample: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationRunExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, ondewo_nlu_operations_pb.Operation>;
    llmEvaluationGetExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    llmEvaluationListExperiments: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse>;
    llmEvaluationUpdateExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    llmEvaluationDeleteExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationCancelExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    llmEvaluationCompareExperiments: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison>;
    llmEvaluationSubmitFeedback: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
    llmEvaluationListFeedback: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse>;
    llmEvaluationDeleteFeedback: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, google_protobuf_empty_pb.Empty>;
}

export interface ILlmEvaluationsClient {
    llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class LlmEvaluationsClient extends grpc.Client implements ILlmEvaluationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    public llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    public llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    public llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    public llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    public llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    public llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
