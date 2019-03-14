export class Login{
  public login: string;
  public email?: string;
  public password: string;
  public rememberUser?: boolean;
}

export class LoginResponse{
  public access_token: string;
  public refresh_token: string;
}
