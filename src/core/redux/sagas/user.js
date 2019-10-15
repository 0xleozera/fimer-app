import api from 'api';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as UserActions } from 'ducks/user';

export function* store({ payload }) {
  try {
    const response = yield call(api.post, 'users', payload.data);

    Alert.alert('Sucesso', 'Usuário criado com sucesso');

    yield put(UserActions.updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifiique seus dados',
    );
    yield put(UserActions.updateProfileFailure());
  }
}

export function* update({ payload }) {
  try {
    const response = yield call(api.put, 'users', payload.data);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso');

    yield put(UserActions.updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifiique seus dados',
    );
    yield put(UserActions.updateProfileFailure());
  }
}

export function* show({ payload }) {
  try {
    const response = yield call(api.get, `users/${payload.id}`);

    yield put(UserActions.updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro ao carregar o perfil, verifiique seus dados',
    );
    yield put(UserActions.updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', store),
  takeLatest('@user/UPDATE_PROFILE_REQUEST', update),
  takeLatest('@user/UPDATE_PROFILE_REQUEST', show),
]);
