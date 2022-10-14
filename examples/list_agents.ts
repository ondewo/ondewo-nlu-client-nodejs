import { NJSClient } from './njs-client';
import * as dotenv from 'dotenv';
import { ClientConfig } from './njs-client';
import { ListAgentsRequest } from '../public-api';
import * as fs from 'fs';

dotenv.config({
	path: `${process.cwd()}/examples/examples.env`
});

// INSECURE CONNECTION

const config_insec: ClientConfig = {
	host: process.env.EXAMPLES_HOST || '',
	port: process.env.EXAMPLES_PORT || '',
	http_token: process.env.EXAMPLES_HTTP_TOKEN || '',
	user_name: process.env.EXAMPLES_USER_NAME || '',
	password: process.env.EXAMPLES_PASSWORD || '',
	grpc_cert: null
};

console.log(`HOST: ${config_insec.host}:${config_insec.port}`);

const client_insec: NJSClient = new NJSClient(config_insec, false);

client_insec.listAllAgents(new ListAgentsRequest());

// SECURE CONNECTION

const config_sec: ClientConfig = {
	host: process.env.EXAMPLES_HOST_SECURE || '',
	port: process.env.EXAMPLES_PORT_SECURE || '',
	http_token: process.env.EXAMPLES_HTTP_TOKEN_SECURE || '',
	user_name: process.env.EXAMPLES_USER_NAME_SECURE || '',
	password: process.env.EXAMPLES_PASSWORD_SECURE || '',
	grpc_cert: fs.readFileSync(`${process.cwd()}/examples/grpc.crt`)
};


// console.log(`HOST: ${config_sec.host}:${config_sec.port}`);

// const client_sec: NJSClient = new NJSClient(config_sec, true);

// client_sec.listAllAgents(new ListAgentsRequest());
