import * as grpc from '@grpc/grpc-js';
import { NJSClient } from './njs-client';
import * as dotenv from 'dotenv';
import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_pb';
import { UsersClient } from '../api/ondewo/nlu/user_grpc_pb';
import { ClientConfig } from './client_config';
import { ListAgentsRequest } from '../public-api';
import * as fs from 'fs';
import { UserService } from './users';

dotenv.config();

const config: ClientConfig = {
	host: process.env.EXAMPLES_HOST || '',
	port: process.env.EXAMPLES_PORT || '',
	grpc_cert: fs.readFileSync(`${process.cwd()}/grpc_cert.txt`),
	http_token: process.env.EXAMPLES_HTTP_TOKEN || '',
	user_name: process.env.EXAMPLES_USER_NAME || '',
	password: process.env.EXAMPLES_PASSWORD || ''
};

const agentsClient: AgentsClient = new AgentsClient(
	`${config.host}:${config.port}`,
	grpc.credentials.createSsl(config.grpc_cert),
	undefined
);

const usersClient: UsersClient = new UsersClient(
	`${config.host}:${config.port}`,
	grpc.credentials.createSsl(config.grpc_cert)
);

const users: UserService = new UserService(usersClient);

const client: NJSClient = new NJSClient(agentsClient);

console.log(`HOST: ${config.host}:${config.port}`);

console.log('START LOGIN');
users.login(config.user_name, config.password, config.http_token);
console.log('END LOGIN');

console.log('START LISTING ALL AGENTS');
client.listAllAgents(new ListAgentsRequest());
console.log('END LISTING ALL AGENTS');
