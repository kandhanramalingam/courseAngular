export enum AuthForm{
    LOGIN, REGISTER, FORGOT
}
export interface SignInCredentials {
  emailId: string;
  password: string;
}

export interface RegisterCredentials {
  emailId: string;
  password: string;
  preferredName: string;
}

export interface ForgotPasswordCredentials {
  code: string;
  newPassword: string;
}
export interface ClientResponse<T> {
  response: T;
  infoMsg: string;
  errMsg: any;
  supportMessages: any[];
}
export interface SignupSigninResposeData{
  accessToken: string;
  preferredName: string;
  emailId: string;
}
export interface TokenData{
  jti: string;
  UserId: string;
  AuthId: string;
  iat: string;
  Role: string;
  nbf: string;
  exp: string;
}
