import api from 'api';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as AuthActions, Types as AuthTypes } from 'ducks/auth';

import Navigator from 'routes/navigator';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'auth', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'O usuário não pode ser prestador de serviços',
      );
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(AuthActions.signInSuccess(token, user));
    Navigator.navigate('Home');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifiique seus dados',
    );
    yield put(AuthActions.signInFailure());
  }
}

export function signOut() {
  Navigator.navigate('Sign');
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_OUT, signOut),
]);
