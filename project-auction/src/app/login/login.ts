export class Login {
    public login: string;
    public email?: string;
    public password: string;
    public rememberUser?: string;
}

export class loginResponse {
    public access_token: string;
    public refresh_token: string;
}
