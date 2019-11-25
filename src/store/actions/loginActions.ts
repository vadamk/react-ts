import { Action } from 'store/actions';
import { SignInRequest, SignInResponse } from 'models/api/auth';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export const login = (payload: SignInRequest): Action<SignInRequest> => ({
  type: LOGIN,
  payload,
});

export const loginSucceeded = (payload: SignInResponse): Action<SignInResponse> => ({
  type: LOGIN_SUCCEEDED,
  payload,
});

export const loginFailed = (payload: any): Action => ({
  type: LOGIN_FAILED,
  payload,
});

export const logout = (): Action => ({
  type: LOGOUT,
});
