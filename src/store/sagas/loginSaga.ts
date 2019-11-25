import { call, put, takeEvery } from 'redux-saga/effects';

import { Action } from 'store/actions';
import * as actions from 'store/actions/loginActions';
import * as Api from 'services/api/auth';
import { setToken } from 'services/authService';

function* loginRequest(action: Action) {

  const { status, data } = yield call(Api.signIn, action.payload);

  if (status === 200) {
    setToken(data.token);
    yield put(actions.loginSucceeded(data));
  } else {
    yield put(actions.loginFailed(data));
  }

}

function* watchFetchData() {
  yield takeEvery(actions.LOGIN, loginRequest);
}

export default watchFetchData;
