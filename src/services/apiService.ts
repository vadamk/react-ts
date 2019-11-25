import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

instance.interceptors.response.use(
  value => value,
  error => error.response,
);

export default instance;
