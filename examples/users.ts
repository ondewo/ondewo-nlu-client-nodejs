import { LoginRequest, LoginResponse } from '../api/ondewo/nlu/user_pb';
import { UsersClient } from '../api/ondewo/nlu/user_grpc_pb';

export class UserService {
	private usersClient: UsersClient;

	public constructor(usersClient: UsersClient) {
		this.usersClient = usersClient;
	}

	public login(user_name: string, password: string, http_token: string): void {
		const request: LoginRequest = new LoginRequest();
		request.setPassword(password);
		request.setUserEmail(user_name);

		this.usersClient.login(request, (error: any, response: LoginResponse) => {
			console.log('LOGIN:');
			console.log(error);
			console.log(response);
		});
	}
}
