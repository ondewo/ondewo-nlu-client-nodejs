export class ClientConfig {
	public host: string = '';
	public port: string = '';
	public http_token: string = '';
	public grpc_cert: Buffer = Buffer.from([0]);
	public user_name: string = '';
	public password: string = '';
}
