import * as actions from 'store/actions/loginActions';
import { Action } from 'store/actions';

export interface LoginState {
  token: string;
  loading: boolean;
  error: { message: string } | null;
}

const initialState = {
  token: '',
  loading: false,
  error: null,
};

const reducer = (state: LoginState = initialState, action: Action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        token: '',
        loading: true,
        error: null,
      };
    case actions.LOGIN_SUCCEEDED:
      return {
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case actions.LOGIN_FAILED:
      return {
        token: '',
        loading: false,
        error: action.payload,
      };
    case actions.LOGOUT:
      return {
        token: '',
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
