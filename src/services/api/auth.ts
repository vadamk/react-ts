import apiService from 'services/apiService';
import { AxiosResponse } from 'axios';

import {
  SignInRequest,
  SignUpRequest,
  SignInResponse,
} from 'models/api/auth';

export const signIn = (payload: SignInRequest): Promise<AxiosResponse<SignInResponse>> => {
  return apiService.post('auth/login', payload);
};

export const signUp = (payload: SignUpRequest): Promise<AxiosResponse<any>> => {
  return apiService.post('auth/registration', payload);
};
