export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}

export interface SignUpRequest {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}
