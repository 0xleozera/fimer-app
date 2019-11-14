import api from 'api';

import { showMessage } from 'react-native-flash-message';
import notification from 'configs/notification';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as SignUpActions, Types as SignUpTypes } from 'ducks/sign-up';
import { Creators as AuthActions } from 'ducks/auth';

export function* store({ payload }) {
  try {
    const response = yield call(api.post, 'users', payload);

    yield put(SignUpActions.signUpSuccess(response.data));
    yield put(
      AuthActions.signInRequest({
        email: payload.email,
        password: payload.password,
      }),
    );
  } catch (err) {
    showMessage(notification);
    yield put(SignUpActions.signUpFailure());
  }
}

export default all([takeLatest(SignUpTypes.SIGN_UP_REQUEST, store)]);
