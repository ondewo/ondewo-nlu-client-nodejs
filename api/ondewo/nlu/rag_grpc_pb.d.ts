// package: ondewo.nlu
// file: ondewo/nlu/rag.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_rag_pb from "../../ondewo/nlu/rag_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IRagsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ragCreateDataset: IRagsService_IRagCreateDataset;
    ragUpdateDataset: IRagsService_IRagUpdateDataset;
    ragDeleteDatasets: IRagsService_IRagDeleteDatasets;
    ragListDatasets: IRagsService_IRagListDatasets;
    ragGetKnowledgeGraph: IRagsService_IRagGetKnowledgeGraph;
    ragDeleteKnowledgeGraph: IRagsService_IRagDeleteKnowledgeGraph;
    ragUploadDocuments: IRagsService_IRagUploadDocuments;
    ragUpdateDocument: IRagsService_IRagUpdateDocument;
    ragDownloadDocument: IRagsService_IRagDownloadDocument;
    ragListDocuments: IRagsService_IRagListDocuments;
    ragDeleteDocuments: IRagsService_IRagDeleteDocuments;
    ragParseDocuments: IRagsService_IRagParseDocuments;
    ragStopParsing: IRagsService_IRagStopParsing;
    ragListChunks: IRagsService_IRagListChunks;
    ragAddChunk: IRagsService_IRagAddChunk;
    ragRemoveChunks: IRagsService_IRagRemoveChunks;
    ragUpdateChunk: IRagsService_IRagUpdateChunk;
    ragRetrieval: IRagsService_IRagRetrieval;
    ragCreateChat: IRagsService_IRagCreateChat;
    ragUpdateChat: IRagsService_IRagUpdateChat;
    ragDeleteChats: IRagsService_IRagDeleteChats;
    ragListChats: IRagsService_IRagListChats;
    ragCreateChatSession: IRagsService_IRagCreateChatSession;
    ragCreateAgentSession: IRagsService_IRagCreateAgentSession;
    ragUpdateChatSession: IRagsService_IRagUpdateChatSession;
    ragListChatSessions: IRagsService_IRagListChatSessions;
    ragListAgentSessions: IRagsService_IRagListAgentSessions;
    ragDeleteChatSessions: IRagsService_IRagDeleteChatSessions;
    ragDeleteAgentSessions: IRagsService_IRagDeleteAgentSessions;
    ragChatCompletion: IRagsService_IRagChatCompletion;
    ragOpenAiChatCompletion: IRagsService_IRagOpenAiChatCompletion;
    ragAgentCompletion: IRagsService_IRagAgentCompletion;
    ragOpenAiAgentCompletion: IRagsService_IRagOpenAiAgentCompletion;
    ragCreateAgent: IRagsService_IRagCreateAgent;
    ragUpdateAgent: IRagsService_IRagUpdateAgent;
    ragDeleteAgent: IRagsService_IRagDeleteAgent;
    ragListAgents: IRagsService_IRagListAgents;
    ragUploadFiles: IRagsService_IRagUploadFiles;
    ragCreateFile: IRagsService_IRagCreateFile;
    ragListFiles: IRagsService_IRagListFiles;
    ragGetRootFolder: IRagsService_IRagGetRootFolder;
    ragGetParentFolder: IRagsService_IRagGetParentFolder;
    ragGetAllParentFolders: IRagsService_IRagGetAllParentFolders;
    ragDeleteFiles: IRagsService_IRagDeleteFiles;
    ragRenameFile: IRagsService_IRagRenameFile;
    ragGetFile: IRagsService_IRagGetFile;
    ragMoveFile: IRagsService_IRagMoveFile;
    ragFileToDocument: IRagsService_IRagFileToDocument;
    ragDifyRetrieval: IRagsService_IRagDifyRetrieval;
    ragAsk: IRagsService_IRagAsk;
    ragRelatedQuestions: IRagsService_IRagRelatedQuestions;
    ragChatbotCompletion: IRagsService_IRagChatbotCompletion;
    ragChatbotInfo: IRagsService_IRagChatbotInfo;
    ragAgentbotCompletion: IRagsService_IRagAgentbotCompletion;
    ragAgentbotInputs: IRagsService_IRagAgentbotInputs;
    ragSearchbotAsk: IRagsService_IRagSearchbotAsk;
    ragSearchbotRetrieval: IRagsService_IRagSearchbotRetrieval;
    ragSearchbotRelatedQuestions: IRagsService_IRagSearchbotRelatedQuestions;
    ragSearchbotDetail: IRagsService_IRagSearchbotDetail;
    ragSearchbotMindmap: IRagsService_IRagSearchbotMindmap;
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
interface IRagsService_IRagDeleteDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteDatasetsRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagDeleteDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteDatasetsRequest>;
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
interface IRagsService_IRagGetKnowledgeGraph extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest, ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse> {
    path: "/ondewo.nlu.Rags/RagGetKnowledgeGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;
}
interface IRagsService_IRagDeleteKnowledgeGraph extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagDeleteKnowledgeGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagUploadDocuments extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUploadDocumentsRequest, ondewo_nlu_rag_pb.RagDocumentList> {
    path: "/ondewo.nlu.Rags/RagUploadDocuments";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDocumentList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDocumentList>;
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
interface IRagsService_IRagListDocuments extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListDocumentsRequest, ondewo_nlu_rag_pb.RagListDocumentsResponse> {
    path: "/ondewo.nlu.Rags/RagListDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListDocumentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListDocumentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListDocumentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListDocumentsResponse>;
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
interface IRagsService_IRagRetrieval extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagRetrievalRequest, ondewo_nlu_rag_pb.RagRetrievalResponse> {
    path: "/ondewo.nlu.Rags/RagRetrieval";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRetrievalRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRetrievalRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRetrievalResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRetrievalResponse>;
}
interface IRagsService_IRagCreateChat extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateChatRequest, ondewo_nlu_rag_pb.RagChat> {
    path: "/ondewo.nlu.Rags/RagCreateChat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateChatRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateChatRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChat>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChat>;
}
interface IRagsService_IRagUpdateChat extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateChatRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagUpdateChat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateChatRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateChatRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagDeleteChats extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteChatsRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagDeleteChats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteChatsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteChatsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagListChats extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListChatsRequest, ondewo_nlu_rag_pb.RagChatList> {
    path: "/ondewo.nlu.Rags/RagListChats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListChatsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListChatsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatList>;
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
interface IRagsService_IRagCreateAgentSession extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateAgentSessionRequest, ondewo_nlu_rag_pb.RagAgentSession> {
    path: "/ondewo.nlu.Rags/RagCreateAgentSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateAgentSessionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateAgentSessionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentSession>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentSession>;
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
interface IRagsService_IRagListAgentSessions extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListAgentSessionsRequest, ondewo_nlu_rag_pb.RagAgentSessionList> {
    path: "/ondewo.nlu.Rags/RagListAgentSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListAgentSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListAgentSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentSessionList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentSessionList>;
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
interface IRagsService_IRagOpenAiChatCompletion extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest, ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse> {
    path: "/ondewo.nlu.Rags/RagOpenAiChatCompletion";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
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
interface IRagsService_IRagOpenAiAgentCompletion extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest, ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse> {
    path: "/ondewo.nlu.Rags/RagOpenAiAgentCompletion";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
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
interface IRagsService_IRagUploadFiles extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUploadFilesRequest, ondewo_nlu_rag_pb.RagFileList> {
    path: "/ondewo.nlu.Rags/RagUploadFiles";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagFileList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagFileList>;
}
interface IRagsService_IRagCreateFile extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateFileRequest, ondewo_nlu_rag_pb.RagFile> {
    path: "/ondewo.nlu.Rags/RagCreateFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateFileRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateFileRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagFile>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagFile>;
}
interface IRagsService_IRagListFiles extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListFilesRequest, ondewo_nlu_rag_pb.RagListFilesResponse> {
    path: "/ondewo.nlu.Rags/RagListFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListFilesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListFilesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListFilesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListFilesResponse>;
}
interface IRagsService_IRagGetRootFolder extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetRootFolderRequest, ondewo_nlu_rag_pb.RagGetRootFolderResponse> {
    path: "/ondewo.nlu.Rags/RagGetRootFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetRootFolderRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetRootFolderRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetRootFolderResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetRootFolderResponse>;
}
interface IRagsService_IRagGetParentFolder extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetParentFolderRequest, ondewo_nlu_rag_pb.RagGetParentFolderResponse> {
    path: "/ondewo.nlu.Rags/RagGetParentFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetParentFolderRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetParentFolderRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetParentFolderResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetParentFolderResponse>;
}
interface IRagsService_IRagGetAllParentFolders extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest, ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse> {
    path: "/ondewo.nlu.Rags/RagGetAllParentFolders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse>;
}
interface IRagsService_IRagDeleteFiles extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteFilesRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagDeleteFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteFilesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteFilesRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagRenameFile extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagRenameFileRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagRenameFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRenameFileRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRenameFileRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagGetFile extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetFileRequest, ondewo_nlu_rag_pb.RagFileChunk> {
    path: "/ondewo.nlu.Rags/RagGetFile";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetFileRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetFileRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagFileChunk>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagFileChunk>;
}
interface IRagsService_IRagMoveFile extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagMoveFileRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Rags/RagMoveFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagMoveFileRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagMoveFileRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRagsService_IRagFileToDocument extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagFileToDocumentRequest, ondewo_nlu_rag_pb.RagFileToDocumentList> {
    path: "/ondewo.nlu.Rags/RagFileToDocument";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagFileToDocumentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagFileToDocumentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagFileToDocumentList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagFileToDocumentList>;
}
interface IRagsService_IRagDifyRetrieval extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDifyRetrievalRequest, ondewo_nlu_rag_pb.RagDifyRecordList> {
    path: "/ondewo.nlu.Rags/RagDifyRetrieval";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDifyRetrievalRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDifyRetrievalRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDifyRecordList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDifyRecordList>;
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
interface IRagsService_IRagChatbotCompletion extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagChatbotCompletionRequest, ondewo_nlu_rag_pb.RagChatCompletionResponse> {
    path: "/ondewo.nlu.Rags/RagChatbotCompletion";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatbotCompletionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatbotCompletionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
}
interface IRagsService_IRagChatbotInfo extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagChatbotInfoRequest, ondewo_nlu_rag_pb.RagChatbotInfoResponse> {
    path: "/ondewo.nlu.Rags/RagChatbotInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatbotInfoRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatbotInfoRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagChatbotInfoResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagChatbotInfoResponse>;
}
interface IRagsService_IRagAgentbotCompletion extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagAgentbotCompletionRequest, ondewo_nlu_rag_pb.RagAgentCompletionResponse> {
    path: "/ondewo.nlu.Rags/RagAgentbotCompletion";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentbotCompletionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentbotCompletionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
}
interface IRagsService_IRagAgentbotInputs extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagAgentbotInputsRequest, ondewo_nlu_rag_pb.RagAgentbotInputsResponse> {
    path: "/ondewo.nlu.Rags/RagAgentbotInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentbotInputsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentbotInputsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAgentbotInputsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAgentbotInputsResponse>;
}
interface IRagsService_IRagSearchbotAsk extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagSearchbotAskRequest, ondewo_nlu_rag_pb.RagAskResponse> {
    path: "/ondewo.nlu.Rags/RagSearchbotAsk";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagSearchbotAskRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagSearchbotAskRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAskResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAskResponse>;
}
interface IRagsService_IRagSearchbotRetrieval extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest, ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse> {
    path: "/ondewo.nlu.Rags/RagSearchbotRetrieval";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse>;
}
interface IRagsService_IRagSearchbotRelatedQuestions extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest, ondewo_nlu_rag_pb.RagRelatedQuestionsResponse> {
    path: "/ondewo.nlu.Rags/RagSearchbotRelatedQuestions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;
}
interface IRagsService_IRagSearchbotDetail extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagSearchbotDetailRequest, ondewo_nlu_rag_pb.RagSearchbotDetailResponse> {
    path: "/ondewo.nlu.Rags/RagSearchbotDetail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagSearchbotDetailRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagSearchbotDetailRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagSearchbotDetailResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagSearchbotDetailResponse>;
}
interface IRagsService_IRagSearchbotMindmap extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagSearchbotMindmapRequest, google_protobuf_struct_pb.Struct> {
    path: "/ondewo.nlu.Rags/RagSearchbotMindmap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagSearchbotMindmapRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagSearchbotMindmapRequest>;
    responseSerialize: grpc.serialize<google_protobuf_struct_pb.Struct>;
    responseDeserialize: grpc.deserialize<google_protobuf_struct_pb.Struct>;
}

export const RagsService: IRagsService;

export interface IRagsServer {
    ragCreateDataset: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateDatasetRequest, ondewo_nlu_rag_pb.RagDataset>;
    ragUpdateDataset: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateDatasetRequest, ondewo_nlu_rag_pb.RagDataset>;
    ragDeleteDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteDatasetsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragListDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListDatasetsRequest, ondewo_nlu_rag_pb.RagDatasetList>;
    ragGetKnowledgeGraph: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest, ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;
    ragDeleteKnowledgeGraph: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest, google_protobuf_empty_pb.Empty>;
    ragUploadDocuments: grpc.handleClientStreamingCall<ondewo_nlu_rag_pb.RagUploadDocumentsRequest, ondewo_nlu_rag_pb.RagDocumentList>;
    ragUpdateDocument: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateDocumentRequest, ondewo_nlu_rag_pb.RagDocument>;
    ragDownloadDocument: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagDownloadDocumentRequest, ondewo_nlu_rag_pb.RagFileChunk>;
    ragListDocuments: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListDocumentsRequest, ondewo_nlu_rag_pb.RagListDocumentsResponse>;
    ragDeleteDocuments: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragParseDocuments: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagParseDocumentsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragStopParsing: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagStopParsingRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragListChunks: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListChunksRequest, ondewo_nlu_rag_pb.RagListChunksResponse>;
    ragAddChunk: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagAddChunkRequest, ondewo_nlu_rag_pb.RagAddChunkResponse>;
    ragRemoveChunks: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRemoveChunksRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragUpdateChunk: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateChunkRequest, google_protobuf_empty_pb.Empty>;
    ragRetrieval: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRetrievalRequest, ondewo_nlu_rag_pb.RagRetrievalResponse>;
    ragCreateChat: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateChatRequest, ondewo_nlu_rag_pb.RagChat>;
    ragUpdateChat: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateChatRequest, google_protobuf_empty_pb.Empty>;
    ragDeleteChats: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteChatsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragListChats: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListChatsRequest, ondewo_nlu_rag_pb.RagChatList>;
    ragCreateChatSession: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateChatSessionRequest, ondewo_nlu_rag_pb.RagChatSession>;
    ragCreateAgentSession: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateAgentSessionRequest, ondewo_nlu_rag_pb.RagAgentSession>;
    ragUpdateChatSession: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, google_protobuf_empty_pb.Empty>;
    ragListChatSessions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListChatSessionsRequest, ondewo_nlu_rag_pb.RagChatSessionList>;
    ragListAgentSessions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListAgentSessionsRequest, ondewo_nlu_rag_pb.RagAgentSessionList>;
    ragDeleteChatSessions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragDeleteAgentSessions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragChatCompletion: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagChatCompletionRequest, ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    ragOpenAiChatCompletion: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest, ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    ragAgentCompletion: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagAgentCompletionRequest, ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    ragOpenAiAgentCompletion: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest, ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    ragCreateAgent: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateAgentRequest, google_protobuf_empty_pb.Empty>;
    ragUpdateAgent: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateAgentRequest, google_protobuf_empty_pb.Empty>;
    ragDeleteAgent: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteAgentRequest, google_protobuf_empty_pb.Empty>;
    ragListAgents: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListAgentsRequest, ondewo_nlu_rag_pb.RagAgentList>;
    ragUploadFiles: grpc.handleClientStreamingCall<ondewo_nlu_rag_pb.RagUploadFilesRequest, ondewo_nlu_rag_pb.RagFileList>;
    ragCreateFile: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateFileRequest, ondewo_nlu_rag_pb.RagFile>;
    ragListFiles: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListFilesRequest, ondewo_nlu_rag_pb.RagListFilesResponse>;
    ragGetRootFolder: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetRootFolderRequest, ondewo_nlu_rag_pb.RagGetRootFolderResponse>;
    ragGetParentFolder: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetParentFolderRequest, ondewo_nlu_rag_pb.RagGetParentFolderResponse>;
    ragGetAllParentFolders: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest, ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse>;
    ragDeleteFiles: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteFilesRequest, google_protobuf_empty_pb.Empty>;
    ragRenameFile: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRenameFileRequest, google_protobuf_empty_pb.Empty>;
    ragGetFile: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagGetFileRequest, ondewo_nlu_rag_pb.RagFileChunk>;
    ragMoveFile: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagMoveFileRequest, google_protobuf_empty_pb.Empty>;
    ragFileToDocument: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagFileToDocumentRequest, ondewo_nlu_rag_pb.RagFileToDocumentList>;
    ragDifyRetrieval: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDifyRetrievalRequest, ondewo_nlu_rag_pb.RagDifyRecordList>;
    ragAsk: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagAskRequest, ondewo_nlu_rag_pb.RagAskResponse>;
    ragRelatedQuestions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;
    ragChatbotCompletion: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagChatbotCompletionRequest, ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    ragChatbotInfo: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagChatbotInfoRequest, ondewo_nlu_rag_pb.RagChatbotInfoResponse>;
    ragAgentbotCompletion: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagAgentbotCompletionRequest, ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    ragAgentbotInputs: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagAgentbotInputsRequest, ondewo_nlu_rag_pb.RagAgentbotInputsResponse>;
    ragSearchbotAsk: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagSearchbotAskRequest, ondewo_nlu_rag_pb.RagAskResponse>;
    ragSearchbotRetrieval: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest, ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse>;
    ragSearchbotRelatedQuestions: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest, ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;
    ragSearchbotDetail: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagSearchbotDetailRequest, ondewo_nlu_rag_pb.RagSearchbotDetailResponse>;
    ragSearchbotMindmap: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagSearchbotMindmapRequest, google_protobuf_struct_pb.Struct>;
}

export interface IRagsClient {
    ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUploadDocuments(callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    ragUploadDocuments(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    ragUploadDocuments(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    ragUploadDocuments(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListDocumentsResponse) => void): grpc.ClientUnaryCall;
    ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListDocumentsResponse) => void): grpc.ClientUnaryCall;
    ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListDocumentsResponse) => void): grpc.ClientUnaryCall;
    ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
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
    ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragCreateChat(request: ondewo_nlu_rag_pb.RagCreateChatRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChat) => void): grpc.ClientUnaryCall;
    ragCreateChat(request: ondewo_nlu_rag_pb.RagCreateChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChat) => void): grpc.ClientUnaryCall;
    ragCreateChat(request: ondewo_nlu_rag_pb.RagCreateChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChat) => void): grpc.ClientUnaryCall;
    ragUpdateChat(request: ondewo_nlu_rag_pb.RagUpdateChatRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChat(request: ondewo_nlu_rag_pb.RagUpdateChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChat(request: ondewo_nlu_rag_pb.RagUpdateChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteChats(request: ondewo_nlu_rag_pb.RagDeleteChatsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteChats(request: ondewo_nlu_rag_pb.RagDeleteChatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteChats(request: ondewo_nlu_rag_pb.RagDeleteChatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragListChats(request: ondewo_nlu_rag_pb.RagListChatsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatList) => void): grpc.ClientUnaryCall;
    ragListChats(request: ondewo_nlu_rag_pb.RagListChatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatList) => void): grpc.ClientUnaryCall;
    ragListChats(request: ondewo_nlu_rag_pb.RagListChatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatList) => void): grpc.ClientUnaryCall;
    ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    ragCreateAgentSession(request: ondewo_nlu_rag_pb.RagCreateAgentSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSession) => void): grpc.ClientUnaryCall;
    ragCreateAgentSession(request: ondewo_nlu_rag_pb.RagCreateAgentSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSession) => void): grpc.ClientUnaryCall;
    ragCreateAgentSession(request: ondewo_nlu_rag_pb.RagCreateAgentSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSession) => void): grpc.ClientUnaryCall;
    ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragChatCompletion(request: ondewo_nlu_rag_pb.RagChatCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    ragChatCompletion(request: ondewo_nlu_rag_pb.RagChatCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    ragOpenAiChatCompletion(request: ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    ragOpenAiChatCompletion(request: ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    ragAgentCompletion(request: ondewo_nlu_rag_pb.RagAgentCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    ragAgentCompletion(request: ondewo_nlu_rag_pb.RagAgentCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    ragOpenAiAgentCompletion(request: ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    ragOpenAiAgentCompletion(request: ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
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
    ragUploadFiles(callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    ragUploadFiles(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    ragUploadFiles(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    ragUploadFiles(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    ragCreateFile(request: ondewo_nlu_rag_pb.RagCreateFileRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFile) => void): grpc.ClientUnaryCall;
    ragCreateFile(request: ondewo_nlu_rag_pb.RagCreateFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFile) => void): grpc.ClientUnaryCall;
    ragCreateFile(request: ondewo_nlu_rag_pb.RagCreateFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFile) => void): grpc.ClientUnaryCall;
    ragListFiles(request: ondewo_nlu_rag_pb.RagListFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListFilesResponse) => void): grpc.ClientUnaryCall;
    ragListFiles(request: ondewo_nlu_rag_pb.RagListFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListFilesResponse) => void): grpc.ClientUnaryCall;
    ragListFiles(request: ondewo_nlu_rag_pb.RagListFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListFilesResponse) => void): grpc.ClientUnaryCall;
    ragGetRootFolder(request: ondewo_nlu_rag_pb.RagGetRootFolderRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetRootFolderResponse) => void): grpc.ClientUnaryCall;
    ragGetRootFolder(request: ondewo_nlu_rag_pb.RagGetRootFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetRootFolderResponse) => void): grpc.ClientUnaryCall;
    ragGetRootFolder(request: ondewo_nlu_rag_pb.RagGetRootFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetRootFolderResponse) => void): grpc.ClientUnaryCall;
    ragGetParentFolder(request: ondewo_nlu_rag_pb.RagGetParentFolderRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetParentFolderResponse) => void): grpc.ClientUnaryCall;
    ragGetParentFolder(request: ondewo_nlu_rag_pb.RagGetParentFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetParentFolderResponse) => void): grpc.ClientUnaryCall;
    ragGetParentFolder(request: ondewo_nlu_rag_pb.RagGetParentFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetParentFolderResponse) => void): grpc.ClientUnaryCall;
    ragGetAllParentFolders(request: ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse) => void): grpc.ClientUnaryCall;
    ragGetAllParentFolders(request: ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse) => void): grpc.ClientUnaryCall;
    ragGetAllParentFolders(request: ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse) => void): grpc.ClientUnaryCall;
    ragDeleteFiles(request: ondewo_nlu_rag_pb.RagDeleteFilesRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteFiles(request: ondewo_nlu_rag_pb.RagDeleteFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragDeleteFiles(request: ondewo_nlu_rag_pb.RagDeleteFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragRenameFile(request: ondewo_nlu_rag_pb.RagRenameFileRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragRenameFile(request: ondewo_nlu_rag_pb.RagRenameFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragRenameFile(request: ondewo_nlu_rag_pb.RagRenameFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragGetFile(request: ondewo_nlu_rag_pb.RagGetFileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    ragGetFile(request: ondewo_nlu_rag_pb.RagGetFileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    ragMoveFile(request: ondewo_nlu_rag_pb.RagMoveFileRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragMoveFile(request: ondewo_nlu_rag_pb.RagMoveFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragMoveFile(request: ondewo_nlu_rag_pb.RagMoveFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    ragFileToDocument(request: ondewo_nlu_rag_pb.RagFileToDocumentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileToDocumentList) => void): grpc.ClientUnaryCall;
    ragFileToDocument(request: ondewo_nlu_rag_pb.RagFileToDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileToDocumentList) => void): grpc.ClientUnaryCall;
    ragFileToDocument(request: ondewo_nlu_rag_pb.RagFileToDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileToDocumentList) => void): grpc.ClientUnaryCall;
    ragDifyRetrieval(request: ondewo_nlu_rag_pb.RagDifyRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDifyRecordList) => void): grpc.ClientUnaryCall;
    ragDifyRetrieval(request: ondewo_nlu_rag_pb.RagDifyRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDifyRecordList) => void): grpc.ClientUnaryCall;
    ragDifyRetrieval(request: ondewo_nlu_rag_pb.RagDifyRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDifyRecordList) => void): grpc.ClientUnaryCall;
    ragAsk(request: ondewo_nlu_rag_pb.RagAskRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    ragAsk(request: ondewo_nlu_rag_pb.RagAskRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    ragChatbotCompletion(request: ondewo_nlu_rag_pb.RagChatbotCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    ragChatbotCompletion(request: ondewo_nlu_rag_pb.RagChatbotCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    ragChatbotInfo(request: ondewo_nlu_rag_pb.RagChatbotInfoRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatbotInfoResponse) => void): grpc.ClientUnaryCall;
    ragChatbotInfo(request: ondewo_nlu_rag_pb.RagChatbotInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatbotInfoResponse) => void): grpc.ClientUnaryCall;
    ragChatbotInfo(request: ondewo_nlu_rag_pb.RagChatbotInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatbotInfoResponse) => void): grpc.ClientUnaryCall;
    ragAgentbotCompletion(request: ondewo_nlu_rag_pb.RagAgentbotCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    ragAgentbotCompletion(request: ondewo_nlu_rag_pb.RagAgentbotCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    ragAgentbotInputs(request: ondewo_nlu_rag_pb.RagAgentbotInputsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentbotInputsResponse) => void): grpc.ClientUnaryCall;
    ragAgentbotInputs(request: ondewo_nlu_rag_pb.RagAgentbotInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentbotInputsResponse) => void): grpc.ClientUnaryCall;
    ragAgentbotInputs(request: ondewo_nlu_rag_pb.RagAgentbotInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentbotInputsResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotAsk(request: ondewo_nlu_rag_pb.RagSearchbotAskRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    ragSearchbotAsk(request: ondewo_nlu_rag_pb.RagSearchbotAskRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    ragSearchbotRetrieval(request: ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotRetrieval(request: ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotRetrieval(request: ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotRelatedQuestions(request: ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotRelatedQuestions(request: ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotRelatedQuestions(request: ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotDetail(request: ondewo_nlu_rag_pb.RagSearchbotDetailRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotDetailResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotDetail(request: ondewo_nlu_rag_pb.RagSearchbotDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotDetailResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotDetail(request: ondewo_nlu_rag_pb.RagSearchbotDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotDetailResponse) => void): grpc.ClientUnaryCall;
    ragSearchbotMindmap(request: ondewo_nlu_rag_pb.RagSearchbotMindmapRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    ragSearchbotMindmap(request: ondewo_nlu_rag_pb.RagSearchbotMindmapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    ragSearchbotMindmap(request: ondewo_nlu_rag_pb.RagSearchbotMindmapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
}

export class RagsClient extends grpc.Client implements IRagsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    public ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    public ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    public ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public ragGetKnowledgeGraph(request: ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteKnowledgeGraph(request: ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUploadDocuments(callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    public ragUploadDocuments(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    public ragUploadDocuments(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    public ragUploadDocuments(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentsRequest>;
    public ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    public ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    public ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    public ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    public ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    public ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListDocumentsResponse) => void): grpc.ClientUnaryCall;
    public ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListDocumentsResponse) => void): grpc.ClientUnaryCall;
    public ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListDocumentsResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
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
    public ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragCreateChat(request: ondewo_nlu_rag_pb.RagCreateChatRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChat) => void): grpc.ClientUnaryCall;
    public ragCreateChat(request: ondewo_nlu_rag_pb.RagCreateChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChat) => void): grpc.ClientUnaryCall;
    public ragCreateChat(request: ondewo_nlu_rag_pb.RagCreateChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChat) => void): grpc.ClientUnaryCall;
    public ragUpdateChat(request: ondewo_nlu_rag_pb.RagUpdateChatRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChat(request: ondewo_nlu_rag_pb.RagUpdateChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChat(request: ondewo_nlu_rag_pb.RagUpdateChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteChats(request: ondewo_nlu_rag_pb.RagDeleteChatsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteChats(request: ondewo_nlu_rag_pb.RagDeleteChatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteChats(request: ondewo_nlu_rag_pb.RagDeleteChatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragListChats(request: ondewo_nlu_rag_pb.RagListChatsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatList) => void): grpc.ClientUnaryCall;
    public ragListChats(request: ondewo_nlu_rag_pb.RagListChatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatList) => void): grpc.ClientUnaryCall;
    public ragListChats(request: ondewo_nlu_rag_pb.RagListChatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatList) => void): grpc.ClientUnaryCall;
    public ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    public ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    public ragCreateChatSession(request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSession) => void): grpc.ClientUnaryCall;
    public ragCreateAgentSession(request: ondewo_nlu_rag_pb.RagCreateAgentSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSession) => void): grpc.ClientUnaryCall;
    public ragCreateAgentSession(request: ondewo_nlu_rag_pb.RagCreateAgentSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSession) => void): grpc.ClientUnaryCall;
    public ragCreateAgentSession(request: ondewo_nlu_rag_pb.RagCreateAgentSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSession) => void): grpc.ClientUnaryCall;
    public ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragUpdateChatSession(request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    public ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    public ragListChatSessions(request: ondewo_nlu_rag_pb.RagListChatSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatSessionList) => void): grpc.ClientUnaryCall;
    public ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    public ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    public ragListAgentSessions(request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentSessionList) => void): grpc.ClientUnaryCall;
    public ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteChatSessions(request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteAgentSessions(request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragChatCompletion(request: ondewo_nlu_rag_pb.RagChatCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    public ragChatCompletion(request: ondewo_nlu_rag_pb.RagChatCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    public ragOpenAiChatCompletion(request: ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    public ragOpenAiChatCompletion(request: ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    public ragAgentCompletion(request: ondewo_nlu_rag_pb.RagAgentCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    public ragAgentCompletion(request: ondewo_nlu_rag_pb.RagAgentCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    public ragOpenAiAgentCompletion(request: ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
    public ragOpenAiAgentCompletion(request: ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;
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
    public ragUploadFiles(callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    public ragUploadFiles(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    public ragUploadFiles(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    public ragUploadFiles(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileList) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadFilesRequest>;
    public ragCreateFile(request: ondewo_nlu_rag_pb.RagCreateFileRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFile) => void): grpc.ClientUnaryCall;
    public ragCreateFile(request: ondewo_nlu_rag_pb.RagCreateFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFile) => void): grpc.ClientUnaryCall;
    public ragCreateFile(request: ondewo_nlu_rag_pb.RagCreateFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFile) => void): grpc.ClientUnaryCall;
    public ragListFiles(request: ondewo_nlu_rag_pb.RagListFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListFilesResponse) => void): grpc.ClientUnaryCall;
    public ragListFiles(request: ondewo_nlu_rag_pb.RagListFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListFilesResponse) => void): grpc.ClientUnaryCall;
    public ragListFiles(request: ondewo_nlu_rag_pb.RagListFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListFilesResponse) => void): grpc.ClientUnaryCall;
    public ragGetRootFolder(request: ondewo_nlu_rag_pb.RagGetRootFolderRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetRootFolderResponse) => void): grpc.ClientUnaryCall;
    public ragGetRootFolder(request: ondewo_nlu_rag_pb.RagGetRootFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetRootFolderResponse) => void): grpc.ClientUnaryCall;
    public ragGetRootFolder(request: ondewo_nlu_rag_pb.RagGetRootFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetRootFolderResponse) => void): grpc.ClientUnaryCall;
    public ragGetParentFolder(request: ondewo_nlu_rag_pb.RagGetParentFolderRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetParentFolderResponse) => void): grpc.ClientUnaryCall;
    public ragGetParentFolder(request: ondewo_nlu_rag_pb.RagGetParentFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetParentFolderResponse) => void): grpc.ClientUnaryCall;
    public ragGetParentFolder(request: ondewo_nlu_rag_pb.RagGetParentFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetParentFolderResponse) => void): grpc.ClientUnaryCall;
    public ragGetAllParentFolders(request: ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse) => void): grpc.ClientUnaryCall;
    public ragGetAllParentFolders(request: ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse) => void): grpc.ClientUnaryCall;
    public ragGetAllParentFolders(request: ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteFiles(request: ondewo_nlu_rag_pb.RagDeleteFilesRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteFiles(request: ondewo_nlu_rag_pb.RagDeleteFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragDeleteFiles(request: ondewo_nlu_rag_pb.RagDeleteFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragRenameFile(request: ondewo_nlu_rag_pb.RagRenameFileRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragRenameFile(request: ondewo_nlu_rag_pb.RagRenameFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragRenameFile(request: ondewo_nlu_rag_pb.RagRenameFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragGetFile(request: ondewo_nlu_rag_pb.RagGetFileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    public ragGetFile(request: ondewo_nlu_rag_pb.RagGetFileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    public ragMoveFile(request: ondewo_nlu_rag_pb.RagMoveFileRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragMoveFile(request: ondewo_nlu_rag_pb.RagMoveFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragMoveFile(request: ondewo_nlu_rag_pb.RagMoveFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public ragFileToDocument(request: ondewo_nlu_rag_pb.RagFileToDocumentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileToDocumentList) => void): grpc.ClientUnaryCall;
    public ragFileToDocument(request: ondewo_nlu_rag_pb.RagFileToDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileToDocumentList) => void): grpc.ClientUnaryCall;
    public ragFileToDocument(request: ondewo_nlu_rag_pb.RagFileToDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagFileToDocumentList) => void): grpc.ClientUnaryCall;
    public ragDifyRetrieval(request: ondewo_nlu_rag_pb.RagDifyRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDifyRecordList) => void): grpc.ClientUnaryCall;
    public ragDifyRetrieval(request: ondewo_nlu_rag_pb.RagDifyRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDifyRecordList) => void): grpc.ClientUnaryCall;
    public ragDifyRetrieval(request: ondewo_nlu_rag_pb.RagDifyRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDifyRecordList) => void): grpc.ClientUnaryCall;
    public ragAsk(request: ondewo_nlu_rag_pb.RagAskRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    public ragAsk(request: ondewo_nlu_rag_pb.RagAskRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    public ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    public ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    public ragRelatedQuestions(request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    public ragChatbotCompletion(request: ondewo_nlu_rag_pb.RagChatbotCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    public ragChatbotCompletion(request: ondewo_nlu_rag_pb.RagChatbotCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;
    public ragChatbotInfo(request: ondewo_nlu_rag_pb.RagChatbotInfoRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatbotInfoResponse) => void): grpc.ClientUnaryCall;
    public ragChatbotInfo(request: ondewo_nlu_rag_pb.RagChatbotInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatbotInfoResponse) => void): grpc.ClientUnaryCall;
    public ragChatbotInfo(request: ondewo_nlu_rag_pb.RagChatbotInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagChatbotInfoResponse) => void): grpc.ClientUnaryCall;
    public ragAgentbotCompletion(request: ondewo_nlu_rag_pb.RagAgentbotCompletionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    public ragAgentbotCompletion(request: ondewo_nlu_rag_pb.RagAgentbotCompletionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;
    public ragAgentbotInputs(request: ondewo_nlu_rag_pb.RagAgentbotInputsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentbotInputsResponse) => void): grpc.ClientUnaryCall;
    public ragAgentbotInputs(request: ondewo_nlu_rag_pb.RagAgentbotInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentbotInputsResponse) => void): grpc.ClientUnaryCall;
    public ragAgentbotInputs(request: ondewo_nlu_rag_pb.RagAgentbotInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagAgentbotInputsResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotAsk(request: ondewo_nlu_rag_pb.RagSearchbotAskRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    public ragSearchbotAsk(request: ondewo_nlu_rag_pb.RagSearchbotAskRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;
    public ragSearchbotRetrieval(request: ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotRetrieval(request: ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotRetrieval(request: ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotRelatedQuestions(request: ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotRelatedQuestions(request: ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotRelatedQuestions(request: ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotDetail(request: ondewo_nlu_rag_pb.RagSearchbotDetailRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotDetailResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotDetail(request: ondewo_nlu_rag_pb.RagSearchbotDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotDetailResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotDetail(request: ondewo_nlu_rag_pb.RagSearchbotDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagSearchbotDetailResponse) => void): grpc.ClientUnaryCall;
    public ragSearchbotMindmap(request: ondewo_nlu_rag_pb.RagSearchbotMindmapRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    public ragSearchbotMindmap(request: ondewo_nlu_rag_pb.RagSearchbotMindmapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    public ragSearchbotMindmap(request: ondewo_nlu_rag_pb.RagSearchbotMindmapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
}
