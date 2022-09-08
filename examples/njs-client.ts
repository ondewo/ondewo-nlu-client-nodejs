import * as grpc from '@grpc/grpc-js';
import { AgentsClient } from '../npm/api/ondewo/nlu/agent_grpc_pb';
import { ListAgentsRequest, ListAgentsResponse, AgentWithOwner } from '../public-api';
import { UserService } from './users';

export class ClientConfig {
	public host: string = '';
	public port: string = '';
	public http_token: string = '';
	public grpc_cert: Buffer | null = null;
	public user_name: string = '';
	public password: string = '';
}

export class NJSClient {
	private agentsClient: AgentsClient;
	private users: UserService;
	private config: ClientConfig;

	public constructor(config: ClientConfig, use_secure_channel: boolean) {
		if (!use_secure_channel) {
			this.agentsClient = new AgentsClient(`${config.host}:${config.port}`, grpc.credentials.createInsecure());
			this.users = new UserService(config, false);
			this.config = config;
		} else {
			this.agentsClient = new AgentsClient(
				`${config.host}:${config.port}`,
				grpc.credentials.createSsl(config.grpc_cert)
			);
			this.users = new UserService(config, true);
			this.config = config;
		}
	}

	private async login(config: ClientConfig): Promise<void> {
		await this.users.login(config.user_name, config.password);
	}

	public listAllAgents(listAgentsRequest: ListAgentsRequest): void {
		this.login(this.config)
			.then(() => {
				this.agentsClient.listAllAgents(
					listAgentsRequest,
					this.users.metadata,
					(error: grpc.ServiceError, response: ListAgentsResponse) => {
						console.log('LIST ALL AGENTS:');
						if (error) console.log(error);
						console.log(response.getAgentsWithOwnersList().map((AwO: AgentWithOwner) => AwO.toObject()));
					}
				);
			})
			.catch((error: Error) => {
				console.log(error);
			});
	}
}
