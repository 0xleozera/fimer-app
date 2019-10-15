import api from 'api';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as SignUpActions, Types as SignUpTypes } from 'ducks/sign-up';

export function* store({ payload }) {
  try {
    const response = yield call(api.post, 'users', payload.data);

    Alert.alert('Sucesso', 'Usuário criado com sucesso');

    yield put(SignUpActions.signUpSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifiique seus dados',
    );
    yield put(SignUpActions.signUpFailure());
  }
}

export default all([takeLatest(SignUpTypes.SIGN_UP_REQUEST, store)]);
