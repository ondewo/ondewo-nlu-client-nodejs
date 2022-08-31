//const { AgentsClient } = require('../api/ondewo/nlu/agent_pb');
import { AgentsClient } from '../npm/api/ondewo/nlu/agent_grpc_pb';
import { ListAgentsRequest, ListAgentsResponse } from '../public-api';

export class NJSClient {
	private agentsClient: AgentsClient;

	public constructor(agentsClient: AgentsClient) {
		this.agentsClient = agentsClient;
	}

	public listAllAgents(listAgentsRequest: ListAgentsRequest): void {
		this.agentsClient.listAllAgents(listAgentsRequest, (error: any, response: ListAgentsResponse) => {
			console.log('LIST ALL AGENTS:');
			console.log(error);
			console.log(response);
		});
	}
}
