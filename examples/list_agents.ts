import { NJSClient } from './njs-client';
import * as dotenv from 'dotenv';
import { ClientConfig } from './njs-client';
import { ListAgentsRequest } from '../public-api';

dotenv.config({
	path: `${process.cwd()}/examples/examples.env`
});

const config: ClientConfig = {
	host: process.env.EXAMPLES_HOST || '',
	port: process.env.EXAMPLES_PORT || '',
	http_token: process.env.EXAMPLES_HTTP_TOKEN || '',
	user_name: process.env.EXAMPLES_USER_NAME || '',
	password: process.env.EXAMPLES_PASSWORD || ''
};

console.log(`HOST: ${config.host}:${config.port}`);

const client: NJSClient = new NJSClient(config);

client.listAllAgents(new ListAgentsRequest());
