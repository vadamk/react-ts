import { all } from 'redux-saga/effects';

import loginSagas from './loginSaga';

export default function* rootSaga() {
  yield all([
    loginSagas(),
  ])
};
