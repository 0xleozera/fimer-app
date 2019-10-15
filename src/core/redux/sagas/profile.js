import api from 'api';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as ProfileActions, Types as ProfileTypes } from 'ducks/user';

export function* show({ payload }) {
  try {
    const response = yield call(api.get, `users/${payload.id}`);

    yield put(ProfileActions.getProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro ao carregar o perfil, verifiique seus dados',
    );
    yield put(ProfileActions.getProfileFailure());
  }
}

export function* update({ payload }) {
  try {
    const response = yield call(api.put, 'users', payload.data);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso');

    yield put(ProfileActions.updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifiique seus dados',
    );
    yield put(ProfileActions.updateProfileFailure());
  }
}

export default all([
  takeLatest(ProfileTypes.GET_PROFILE_REQUEST, show),
  takeLatest(ProfileTypes.UPDATE_PROFILE_REQUEST, update),
]);
