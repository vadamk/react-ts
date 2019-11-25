import { combineReducers } from 'redux';

import loginReducer, { LoginState } from 'store/reducers/loginReducer';

export interface RootState {
  login: LoginState;
}

export default combineReducers<RootState>({
  login: loginReducer
});
