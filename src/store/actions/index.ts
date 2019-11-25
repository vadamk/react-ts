export * from './loginActions';

export interface Action<T = any> {
  type: string;
  payload?: T;
}
