// package: ondewo.nlu
// file: ondewo/nlu/rag.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_rag_pb from "../../ondewo/nlu/rag_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_operation_metadata_pb from "../../ondewo/nlu/operation_metadata_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";

interface IRagsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ragCreateDataset: IRagsService_IRagCreateDataset;
    ragUpdateDataset: IRagsService_IRagUpdateDataset;
    ragDeleteDatasets: IRagsService_IRagDeleteDatasets;
    ragListDatasets: IRagsService_IRagListDatasets;
    ragUploadDocument: IRagsService_IRagUploadDocument;
    ragUpdateDocument: IRagsService_IRagUpdateDocument;
    ragDownloadDocument: IRagsService_IRagDownloadDocument;
    ragListDocuments: IRagsService_IRagListDocuments;
    ragDeleteDocuments: IRagsService_IRagDeleteDocuments;
    ragRetrieval: IRagsService_IRagRetrieval;
    ragGetKnowledgeGraph: IRagsService_IRagGetKnowledgeGraph;
    ragDeleteKnowledgeGraph: IRagsService_IRagDeleteKnowledgeGraph;
    ragConstructKnowledgeGraph: IRagsService_IRagConstructKnowledgeGraph;
    ragKnowledgeGraphStatus: IRagsService_IRagKnowledgeGraphStatus;
    ragConstructRaptor: IRagsService_IRagConstructRaptor;
    ragRaptorStatus: IRagsService_IRagRaptorStatus;
    ragParseDocuments: IRagsService_IRagParseDocuments;
    ragStopParsing: IRagsService_IRagStopParsing;
    ragListChunks: IRagsService_IRagListChunks;
    ragAddChunk: IRagsService_IRagAddChunk;
    ragRemoveChunks: IRagsService_IRagRemoveChunks;
    ragUpdateChunk: IRagsService_IRagUpdateChunk;
    ragCreateChatAssistant: IRagsService_IRagCreateChatAssistant;
    ragUpdateChatAssistant: IRagsService_IRagUpdateChatAssistant;
    ragDeleteChatAssistants: IRagsService_IRagDeleteChatAssistants;
    ragListChatAssistants: IRagsService_IRagListChatAssistants;
    ragCreateAgent: IRagsService_IRagCreateAgent;
    ragUpdateAgent: IRagsService_IRagUpdateAgent;
    ragDeleteAgent: IRagsService_IRagDeleteAgent;
    ragListAgents: IRagsService_IRagListAgents;
    ragCreateChatSession: IRagsService_IRagCreateChatSession;
    ragUpdateChatSession: IRagsService_IRagUpdateChatSession;
    ragListChatSessions: IRagsService_IRagListChatSessions;
    ragDeleteChatSessions: IRagsService_IRagDeleteChatSessions;
    ragListAgentSessions: IRagsService_IRagListAgentSessions;
    ragDeleteAgentSessions: IRagsService_IRagDeleteAgentSessions;
    ragChatCompletion: IRagsService_IRagChatCompletion;
    ragAgentCompletion: IRagsService_IRagAgentCompletion;
    ragAsk: IRagsService_IRagAsk;
    ragRelatedQuestions: IRagsService_IRagRelatedQuestions;
    ragCreateCrawler: IRagsService_IRagCreateCrawler;
    ragGetCrawler: IRagsService_IRagGetCrawler;
    ragListCrawlers: IRagsService_IRagListCrawlers;
    ragUpdateCrawler: IRagsService_IRagUpdateCrawler;
    ragDeleteCrawler: IRagsService_IRagDeleteCrawler;
    ragStartCrawler: IRagsService_IRagStartCrawler;
    ragStopCrawler: IRagsService_IRagStopCrawler;
    ragGetCrawlerRun: IRagsService_IRagGetCrawlerRun;
    ragListCrawlerRuns: IRagsService_IRagListCrawlerRuns;
    ragDeleteCrawlerRuns: IRagsService_IRagDeleteCrawlerRuns;
    ragGetCrawlerResult: IRagsService_IRagGetCrawlerResult;
    ragGetCrawlerResults: IRagsService_IRagGetCrawlerResults;
    ragAddCrawlerResultsToDatasets: IRagsService_IRagAddCrawlerResultsToDatasets;
    ragRemoveCrawlerResultsFromDatasets: IRagsService_IRagRemoveCrawlerResultsFromDatasets;
    ragGetCrawlerAttachedDatasets: IRagsService_IRagGetCrawlerAttachedDatasets;
    ragDeleteCrawlers: IRagsService_IRagDeleteCrawlers;
}

interface IRagsService_IRagCreateDataset extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateDatasetRequest, ondewo_nlu_rag_pb.RagDataset> {
    path: "/ondewo.nlu.Rags/RagCreateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDataset>;
}
interface IRagsService_IRagUpdateDataset extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateDatasetRequest, ondewo_nlu_rag_pb.RagDataset> {
    path: "/ondewo.nlu.Rags/RagUpdateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDataset>;
}
interface IRagsService_IRagDeleteDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagDeleteDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagListDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListDatasetsRequest, ondewo_nlu_rag_pb.RagDatasetList> {
    path: "/ondewo.nlu.Rags/RagListDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDatasetList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDatasetList>;
}
interface IRagsService_IRagUploadDocument extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUploadDocumentRequest, ondewo_nlu_rag_pb.RagDocument> {
    path: "/ondewo.nlu.Rags/RagUploadDocument";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDocument>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDocument>;
}
interface IRagsService_IRagUpdateDocument extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateDocumentRequest, ondewo_nlu_rag_pb.RagDocument> {
    path: "/ondewo.nlu.Rags/RagUpdateDocument";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateDocumentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateDocumentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDocument>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDocument>;
}
interface IRagsService_IRagDownloadDocument extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDownloadDocumentRequest, ondewo_nlu_rag_pb.RagFileChunk> {
    path: "/ondewo.nlu.Rags/RagDownloadDocument";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDownloadDocumentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDownloadDocumentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagFileChunk>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagFileChunk>;
}
interface IRagsService_IRagListDocuments extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListDocumentsRequest, ondewo_nlu_rag_pb.RagDocumentList> {
    path: "/ondewo.nlu.Rags/RagListDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListDocumentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListDocumentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDocumentList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDocumentList>;
}
interface IRagsService_IRagDeleteDocuments extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagDeleteDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteDocumentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteDocumentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagRetrieval extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagRetrievalRequest, ondewo_nlu_rag_pb.RagRetrievalResponse> {
    path: "/ondewo.nlu.Rags/RagRetrieval";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRetrievalRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRetrievalRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRetrievalResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRetrievalResponse>;
}
interface IRagsService_IRagGetKnowledgeGraph extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse> {
    path: "/ondewo.nlu.Rags/RagGetKnowledgeGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;
}
interface IRagsService_IRagDeleteKnowledgeGraph extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDatasetIdRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagDeleteKnowledgeGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagConstructKnowledgeGraph extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse> {
    path: "/ondewo.nlu.Rags/RagConstructKnowledgeGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse>;
}
interface IRagsService_IRagKnowledgeGraphStatus extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagTaskStatus> {
    path: "/ondewo.nlu.Rags/RagKnowledgeGraphStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagTaskStatus>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagTaskStatus>;
}
interface IRagsService_IRagConstructRaptor extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagConstructRaptorResponse> {
    path: "/ondewo.nlu.Rags/RagConstructRaptor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagConstructRaptorResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagConstructRaptorResponse>;
}
interface IRagsService_IRagRaptorStatus extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagTaskStatus> {
    path: "/ondewo.nlu.Rags/RagRaptorStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDatasetIdRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagTaskStatus>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagTaskStatus>;
}
interface IRagsService_IRagParseDocuments extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagParseDocumentsRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagParseDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagParseDocumentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagParseDocumentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagStopParsing extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagStopParsingRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagStopParsing";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagStopParsingRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagStopParsingRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagListChunks extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListChunksRequest, ondewo_nlu_rag_pb.RagListChunksResponse> {
    path: "/ondewo.nlu.Rags/RagListChunks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListChunksRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListChunksRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListChunksResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListChunksResponse>;
}
interface IRagsService_IRagAddChunk extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagAddChunkRequest, ondewo_nlu_rag_pb.RagAddChunkResponse> {
    path: "/ondewo.nlu.Rags/RagAddChunk";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAddChunkRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAddChunkRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAddChunkResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAddChunkResponse>;
}
interface IRagsService_IRagRemoveChunks extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagRemoveChunksRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagRemoveChunks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRemoveChunksRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRemoveChunksRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagUpdateChunk extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateChunkRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagUpdateChunk";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateChunkRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateChunkRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagCreateChatAssistant extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateChatAssistantRequest, ondewo_nlu_rag_pb.RagChatAssistant> {
    path: "/ondewo.nlu.Rags/RagCreateChatAssistant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateChatAssistantRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateChatAssistantRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatAssistant>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatAssistant>;
}
interface IRagsService_IRagUpdateChatAssistant extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagUpdateChatAssistant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagDeleteChatAssistants extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagDeleteChatAssistants";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagListChatAssistants extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListChatAssistantsRequest, ondewo_nlu_rag_pb.RagChatAssistantList> {
    path: "/ondewo.nlu.Rags/RagListChatAssistants";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListChatAssistantsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListChatAssistantsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatAssistantList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatAssistantList>;
}
interface IRagsService_IRagCreateAgent extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateAgentRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagCreateAgent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateAgentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateAgentRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagUpdateAgent extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateAgentRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagUpdateAgent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateAgentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateAgentRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagDeleteAgent extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteAgentRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagDeleteAgent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteAgentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteAgentRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagListAgents extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListAgentsRequest, ondewo_nlu_rag_pb.RagAgentList> {
    path: "/ondewo.nlu.Rags/RagListAgents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListAgentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListAgentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentList>;
}
interface IRagsService_IRagCreateChatSession extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateChatSessionRequest, ondewo_nlu_rag_pb.RagChatSession> {
    path: "/ondewo.nlu.Rags/RagCreateChatSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateChatSessionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateChatSessionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatSession>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatSession>;
}
interface IRagsService_IRagUpdateChatSession extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagUpdateChatSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateChatSessionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateChatSessionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagListChatSessions extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListChatSessionsRequest, ondewo_nlu_rag_pb.RagChatSessionList> {
    path: "/ondewo.nlu.Rags/RagListChatSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListChatSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListChatSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatSessionList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatSessionList>;
}
interface IRagsService_IRagDeleteChatSessions extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagDeleteChatSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagListAgentSessions extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListAgentSessionsRequest, ondewo_nlu_rag_pb.RagAgentSessionList> {
    path: "/ondewo.nlu.Rags/RagListAgentSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListAgentSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListAgentSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentSessionList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentSessionList>;
}
interface IRagsService_IRagDeleteAgentSessions extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagDeleteAgentSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagChatCompletion extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagChatCompletionRequest, ondewo_nlu_rag_pb.RagChatCompletionResponse> {
    path: "/ondewo.nlu.Rags/RagChatCompletion";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatCompletionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatCompletionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
}
interface IRagsService_IRagAgentCompletion extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagAgentCompletionRequest, ondewo_nlu_rag_pb.RagAgentCompletionResponse> {
    path: "/ondewo.nlu.Rags/RagAgentCompletion";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentCompletionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentCompletionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
}
interface IRagsService_IRagAsk extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagAskRequest, ondewo_nlu_rag_pb.RagAskResponse> {
    path: "/ondewo.nlu.Rags/RagAsk";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAskRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAskRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAskResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAskResponse>;
}
interface IRagsService_IRagRelatedQuestions extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, ondewo_nlu_rag_pb.RagRelatedQuestionsResponse> {
    path: "/ondewo.nlu.Rags/RagRelatedQuestions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRelatedQuestionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRelatedQuestionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;
}
interface IRagsService_IRagCreateCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler> {
    path: "/ondewo.nlu.Rags/RagCreateCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCrawler>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCrawler>;
}
interface IRagsService_IRagGetCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler> {
    path: "/ondewo.nlu.Rags/RagGetCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCrawler>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCrawler>;
}
interface IRagsService_IRagListCrawlers extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListCrawlersRequest, ondewo_nlu_rag_pb.RagListCrawlersResponse> {
    path: "/ondewo.nlu.Rags/RagListCrawlers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListCrawlersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListCrawlersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListCrawlersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListCrawlersResponse>;
}
interface IRagsService_IRagUpdateCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler> {
    path: "/ondewo.nlu.Rags/RagUpdateCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCrawler>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCrawler>;
}
interface IRagsService_IRagDeleteCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, ondewo_nlu_rag_pb.RagDeleteCrawlerResponse> {
    path: "/ondewo.nlu.Rags/RagDeleteCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;
}
interface IRagsService_IRagStartCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagStartCrawlerRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.Rags/RagStartCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagStartCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagStartCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IRagsService_IRagStopCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagStopCrawlerRequest, ondewo_nlu_rag_pb.RagStopCrawlerResponse> {
    path: "/ondewo.nlu.Rags/RagStopCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagStopCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagStopCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagStopCrawlerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagStopCrawlerResponse>;
}
interface IRagsService_IRagGetCrawlerRun extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.Rags/RagGetCrawlerRun";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerRunRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerRunRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IRagsService_IRagListCrawlerRuns extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, ondewo_nlu_rag_pb.RagListCrawlerRunsResponse> {
    path: "/ondewo.nlu.Rags/RagListCrawlerRuns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListCrawlerRunsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListCrawlerRunsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;
}
interface IRagsService_IRagDeleteCrawlerRuns extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse> {
    path: "/ondewo.nlu.Rags/RagDeleteCrawlerRuns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;
}
interface IRagsService_IRagGetCrawlerResult extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, ondewo_nlu_rag_pb.RagCrawlerResult> {
    path: "/ondewo.nlu.Rags/RagGetCrawlerResult";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerResultRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerResultRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCrawlerResult>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCrawlerResult>;
}
interface IRagsService_IRagGetCrawlerResults extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse> {
    path: "/ondewo.nlu.Rags/RagGetCrawlerResults";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;
}
interface IRagsService_IRagAddCrawlerResultsToDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IRagsService_IRagRemoveCrawlerResultsFromDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IRagsService_IRagGetCrawlerAttachedDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse> {
    path: "/ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;
}
interface IRagsService_IRagDeleteCrawlers extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, ondewo_nlu_rag_pb.RagDeleteCrawlersResponse> {
    path: "/ondewo.nlu.Rags/RagDeleteCrawlers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;
}

export const RagsService: IRagsService;

export interface IRagsServer {
    ragCreateDataset: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateDatasetRequest, ondewo_nlu_rag_pb.RagDataset>;
    ragUpdateDataset: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateDatasetRequest, ondewo_nlu_rag_pb.RagDataset>;
    ragDeleteDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragListDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListDatasetsRequest, ondewo_nlu_rag_pb.RagDatasetList>;
    ragUploadDocument: grpc.handleClientStreamingCall<ondewo_nlu_rag_pb.RagUploadDocumentRequest, ondewo_nlu_rag_pb.RagDocument>;
    ragUpdateDocument: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateDocumentRequest, ondewo_nlu_rag_pb.RagDocument>;
    ragDownloadDocument: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagDownloadDocumentRequest, ondewo_nlu_rag_pb.RagFileChunk>;
    ragListDocuments: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListDocumentsRequest, ondewo_nlu_rag_pb.RagDocumentList>;
    ragDeleteDocuments: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragRetrieval: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRetrievalRequest, ondewo_nlu_rag_pb.RagRetrievalResponse>;
    ragGetKnowledgeGraph: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;
    ragDeleteKnowledgeGraph: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDatasetIdRequest, google_protobuf_empty_pb.Empty>;
    ragConstructKnowledgeGraph: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse>;
    ragKnowledgeGraphStatus: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagTaskStatus>;
    ragConstructRaptor: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagConstructRaptorResponse>;
    ragRaptorStatus: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDatasetIdRequest, ondewo_nlu_rag_pb.RagTaskStatus>;
    ragParseDocuments: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagParseDocumentsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragStopParsing: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagStopParsingRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragListChunks: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListChunksRequest, ondewo_nlu_rag_pb.RagListChunksResponse>;
    ragAddChunk: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagAddChunkRequest, ondewo_nlu_rag_pb.RagAddChunkResponse>;
    ragRemoveChunks: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRemoveChunksRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragUpdateChunk: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateChunkRequest, google_protobuf_empty_pb.Empty>;
    ragCreateChatAssistant: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateChatAssistantRequest, ondewo_nlu_rag_pb.RagChatAssistant>;
    ragUpdateChatAssistant: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest, google_protobuf_empty_pb.Empty>;
    ragDeleteChatAssistants: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragListChatAssistants: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListChatAssistantsRequest, ondewo_nlu_rag_pb.RagChatAssistantList>;
    ragCreateAgent: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateAgentRequest, google_protobuf_empty_pb.Empty>;
    ragUpdateAgent: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateAgentRequest, google_protobuf_empty_pb.Empty>;
    ragDeleteAgent: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteAgentRequest, google_protobuf_empty_pb.Empty>;
    ragListAgents: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListAgentsRequest, ondewo_nlu_rag_pb.RagAgentList>;
    ragCreateChatSession: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateChatSessionRequest, ondewo_nlu_rag_pb.RagChatSession>;
    ragUpdateChatSession: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, google_protobuf_empty_pb.Empty>;
    ragListChatSessions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListChatSessionsRequest, ondewo_nlu_rag_pb.RagChatSessionList>;
    ragDeleteChatSessions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragListAgentSessions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListAgentSessionsRequest, ondewo_nlu_rag_pb.RagAgentSessionList>;
    ragDeleteAgentSessions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragChatCompletion: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagChatCompletionRequest, ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    ragAgentCompletion: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagAgentCompletionRequest, ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    ragAsk: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagAskRequest, ondewo_nlu_rag_pb.RagAskResponse>;
    ragRelatedQuestions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;
    ragCreateCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler>;
    ragGetCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler>;
    ragListCrawlers: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListCrawlersRequest, ondewo_nlu_rag_pb.RagListCrawlersResponse>;
    ragUpdateCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler>;
    ragDeleteCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;
    ragStartCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagStartCrawlerRequest, ondewo_nlu_operations_pb.Operation>;
    ragStopCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagStopCrawlerRequest, ondewo_nlu_rag_pb.RagStopCrawlerResponse>;
    ragGetCrawlerRun: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, ondewo_nlu_operations_pb.Operation>;
    ragListCrawlerRuns: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;
    ragDeleteCrawlerRuns: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;
    ragGetCrawlerResult: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, ondewo_nlu_rag_pb.RagCrawlerResult>;
    ragGetCrawlerResults: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;
    ragAddCrawlerResultsToDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, ondewo_nlu_operations_pb.Operation>;
    ragRemoveCrawlerResultsFromDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, ondewo_nlu_operations_pb.Operation>;
    ragGetCrawlerAttachedDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;
    ragDeleteCrawlers: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;
}

export interface IRagsClient {
    ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    ragUploadDocument(callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    ragUploadDocument(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    ragUploadDocument(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    ragUploadDocument(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragConstructKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    ragConstructKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    ragConstructKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    ragKnowledgeGraphStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    ragKnowledgeGraphStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    ragKnowledgeGraphStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    ragConstructRaptor(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructRaptorResponse) => void): grpc.ClientUnaryCall;
    ragConstructRaptor(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructRaptorResponse) => void): grpc.ClientUnaryCall;
    ragConstructRaptor(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructRaptorResponse) => void): grpc.ClientUnaryCall;
    ragRaptorStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    ragRaptorStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    ragRaptorStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    ragParseDocuments(request: ondewo_nlu_rag_pb.RagParseDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragParseDocuments(request: ondewo_nlu_rag_pb.RagParseDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragParseDocuments(request: ondewo_nlu_rag_pb.RagParseDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragStopParsing(request: ondewo_nlu_rag_pb.RagStopParsingRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragStopParsing(request: ondewo_nlu_rag_pb.RagStopParsingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragStopParsing(request: ondewo_nlu_rag_pb.RagStopParsingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragListChunks(request: ondewo_nlu_rag_pb.RagListChunksRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListChunksResponse) => void): grpc.ClientUnaryCall;
    ragListChunks(request: ondewo_nlu_rag_pb.RagListChunksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListChunksResponse) => void): grpc.ClientUnaryCall;
    ragListChunks(request: ondewo_nlu_rag_pb.RagListChunksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListChunksResponse) => void): grpc.ClientUnaryCall;
    ragAddChunk(request: ondewo_nlu_rag_pb.RagAddChunkRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAddChunkResponse) => void): grpc.ClientUnaryCall;
    ragAddChunk(request: ondewo_nlu_rag_pb.RagAddChunkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAddChunkResponse) => void): grpc.ClientUnaryCall;
    ragAddChunk(request: ondewo_nlu_rag_pb.RagAddChunkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAddChunkResponse) => void): grpc.ClientUnaryCall;
    ragRemoveChunks(request: ondewo_nlu_rag_pb.RagRemoveChunksRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragRemoveChunks(request: ondewo_nlu_rag_pb.RagRemoveChunksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragRemoveChunks(request: ondewo_nlu_rag_pb.RagRemoveChunksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragUpdateChunk(request: ondewo_nlu_rag_pb.RagUpdateChunkRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChunk(request: ondewo_nlu_rag_pb.RagUpdateChunkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChunk(request: ondewo_nlu_rag_pb.RagUpdateChunkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragCreateChatAssistant(request: ondewo_nlu_rag_pb.RagCreateChatAssistantRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistant) => void): grpc.ClientUnaryCall;
    ragCreateChatAssistant(request: ondewo_nlu_rag_pb.RagCreateChatAssistantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistant) => void): grpc.ClientUnaryCall;
    ragCreateChatAssistant(request: ondewo_nlu_rag_pb.RagCreateChatAssistantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistant) => void): grpc.ClientUnaryCall;
    ragUpdateChatAssistant(request: ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChatAssistant(request: ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChatAssistant(request: ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteChatAssistants(request: ondewo_nlu_rag_pb.RagDeleteRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteChatAssistants(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteChatAssistants(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragListChatAssistants(request: ondewo_nlu_rag_pb.RagListChatAssistantsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistantList) => void): grpc.ClientUnaryCall;
    ragListChatAssistants(request: ondewo_nlu_rag_pb.RagListChatAssistantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistantList) => void): grpc.ClientUnaryCall;
    ragListChatAssistants(request: ondewo_nlu_rag_pb.RagListChatAssistantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistantList) => void): grpc.ClientUnaryCall;
    ragCreateAgent(request: ondewo_nlu_rag_pb.RagCreateAgentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragCreateAgent(request: ondewo_nlu_rag_pb.RagCreateAgentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragCreateAgent(request: ondewo_nlu_rag_pb.RagCreateAgentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateAgent(request: ondewo_nlu_rag_pb.RagUpdateAgentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateAgent(request: ondewo_nlu_rag_pb.RagUpdateAgentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateAgent(request: ondewo_nlu_rag_pb.RagUpdateAgentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteAgent(request: ondewo_nlu_rag_pb.RagDeleteAgentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteAgent(request: ondewo_nlu_rag_pb.RagDeleteAgentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteAgent(request: ondewo_nlu_rag_pb.RagDeleteAgentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragListAgents(request: ondewo_nlu_rag_pb.RagListAgentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentList) => void): grpc.ClientUnaryCall;
    ragListAgents(request: ondewo_nlu_rag_pb.RagListAgentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentList) => void): grpc.ClientUnaryCall;
    ragListAgents(request: ondewo_nlu_rag_pb.RagListAgentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentList) => void): grpc.ClientUnaryCall;
    ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragChatCompletion(request: ondewo_nlu_rag_pb.RagChatCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    ragChatCompletion(request: ondewo_nlu_rag_pb.RagChatCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    ragAgentCompletion(request: ondewo_nlu_rag_pb.RagAgentCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    ragAgentCompletion(request: ondewo_nlu_rag_pb.RagAgentCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    ragAsk(request: ondewo_nlu_rag_pb.RagAskRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    ragAsk(request: ondewo_nlu_rag_pb.RagAskRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
}

export class RagsClient extends grpc.Client implements IRagsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    public ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    public ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    public ragUploadDocument(callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    public ragUploadDocument(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    public ragUploadDocument(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    public ragUploadDocument(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    public ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    public ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    public ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    public ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    public ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    public ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    public ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    public ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    public ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragConstructKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public ragConstructKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public ragConstructKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public ragKnowledgeGraphStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    public ragKnowledgeGraphStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    public ragKnowledgeGraphStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    public ragConstructRaptor(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructRaptorResponse) => void): grpc.ClientUnaryCall;
    public ragConstructRaptor(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructRaptorResponse) => void): grpc.ClientUnaryCall;
    public ragConstructRaptor(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagConstructRaptorResponse) => void): grpc.ClientUnaryCall;
    public ragRaptorStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    public ragRaptorStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    public ragRaptorStatus(request: ondewo_nlu_rag_pb.RagDatasetIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagTaskStatus) => void): grpc.ClientUnaryCall;
    public ragParseDocuments(request: ondewo_nlu_rag_pb.RagParseDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragParseDocuments(request: ondewo_nlu_rag_pb.RagParseDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragParseDocuments(request: ondewo_nlu_rag_pb.RagParseDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragStopParsing(request: ondewo_nlu_rag_pb.RagStopParsingRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragStopParsing(request: ondewo_nlu_rag_pb.RagStopParsingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragStopParsing(request: ondewo_nlu_rag_pb.RagStopParsingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragListChunks(request: ondewo_nlu_rag_pb.RagListChunksRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListChunksResponse) => void): grpc.ClientUnaryCall;
    public ragListChunks(request: ondewo_nlu_rag_pb.RagListChunksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListChunksResponse) => void): grpc.ClientUnaryCall;
    public ragListChunks(request: ondewo_nlu_rag_pb.RagListChunksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListChunksResponse) => void): grpc.ClientUnaryCall;
    public ragAddChunk(request: ondewo_nlu_rag_pb.RagAddChunkRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAddChunkResponse) => void): grpc.ClientUnaryCall;
    public ragAddChunk(request: ondewo_nlu_rag_pb.RagAddChunkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAddChunkResponse) => void): grpc.ClientUnaryCall;
    public ragAddChunk(request: ondewo_nlu_rag_pb.RagAddChunkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAddChunkResponse) => void): grpc.ClientUnaryCall;
    public ragRemoveChunks(request: ondewo_nlu_rag_pb.RagRemoveChunksRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragRemoveChunks(request: ondewo_nlu_rag_pb.RagRemoveChunksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragRemoveChunks(request: ondewo_nlu_rag_pb.RagRemoveChunksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragUpdateChunk(request: ondewo_nlu_rag_pb.RagUpdateChunkRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChunk(request: ondewo_nlu_rag_pb.RagUpdateChunkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChunk(request: ondewo_nlu_rag_pb.RagUpdateChunkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragCreateChatAssistant(request: ondewo_nlu_rag_pb.RagCreateChatAssistantRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistant) => void): grpc.ClientUnaryCall;
    public ragCreateChatAssistant(request: ondewo_nlu_rag_pb.RagCreateChatAssistantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistant) => void): grpc.ClientUnaryCall;
    public ragCreateChatAssistant(request: ondewo_nlu_rag_pb.RagCreateChatAssistantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistant) => void): grpc.ClientUnaryCall;
    public ragUpdateChatAssistant(request: ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChatAssistant(request: ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChatAssistant(request: ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteChatAssistants(request: ondewo_nlu_rag_pb.RagDeleteRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteChatAssistants(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteChatAssistants(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragListChatAssistants(request: ondewo_nlu_rag_pb.RagListChatAssistantsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistantList) => void): grpc.ClientUnaryCall;
    public ragListChatAssistants(request: ondewo_nlu_rag_pb.RagListChatAssistantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistantList) => void): grpc.ClientUnaryCall;
    public ragListChatAssistants(request: ondewo_nlu_rag_pb.RagListChatAssistantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatAssistantList) => void): grpc.ClientUnaryCall;
    public ragCreateAgent(request: ondewo_nlu_rag_pb.RagCreateAgentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragCreateAgent(request: ondewo_nlu_rag_pb.RagCreateAgentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragCreateAgent(request: ondewo_nlu_rag_pb.RagCreateAgentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateAgent(request: ondewo_nlu_rag_pb.RagUpdateAgentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateAgent(request: ondewo_nlu_rag_pb.RagUpdateAgentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateAgent(request: ondewo_nlu_rag_pb.RagUpdateAgentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteAgent(request: ondewo_nlu_rag_pb.RagDeleteAgentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteAgent(request: ondewo_nlu_rag_pb.RagDeleteAgentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteAgent(request: ondewo_nlu_rag_pb.RagDeleteAgentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragListAgents(request: ondewo_nlu_rag_pb.RagListAgentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentList) => void): grpc.ClientUnaryCall;
    public ragListAgents(request: ondewo_nlu_rag_pb.RagListAgentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentList) => void): grpc.ClientUnaryCall;
    public ragListAgents(request: ondewo_nlu_rag_pb.RagListAgentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentList) => void): grpc.ClientUnaryCall;
    public ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    public ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    public ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    public ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    public ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    public ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    public ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    public ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    public ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    public ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragChatCompletion(request: ondewo_nlu_rag_pb.RagChatCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    public ragChatCompletion(request: ondewo_nlu_rag_pb.RagChatCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    public ragAgentCompletion(request: ondewo_nlu_rag_pb.RagAgentCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    public ragAgentCompletion(request: ondewo_nlu_rag_pb.RagAgentCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    public ragAsk(request: ondewo_nlu_rag_pb.RagAskRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    public ragAsk(request: ondewo_nlu_rag_pb.RagAskRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    public ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    public ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    public ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    public ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    public ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
}
