import api from 'api';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  Creators as ProfileActions,
  Types as ProfileTypes,
} from 'ducks/profile';

export function* show({ payload }) {
  try {
    const response = yield call(api.get, `users/${payload.id}`);

    yield put(ProfileActions.getProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha no carregamento',
      'Houve um erro ao carregar o perfil, verifique seus dados',
    );
    yield put(ProfileActions.getProfileFailure());
  }
}

export function* showToEdit({ payload }) {
  try {
    const { data } = yield call(api.get, `users/${payload.id}`);

    const games = data.user.games.map(game => ({
      game: {
        id: game.id,
        description: game.name,
      },
      ranking: {
        id: data.user.rankings.filter(ranking => ranking.gameId === game.id)[0]
          .id,
        description: data.user.rankings.filter(
          ranking => ranking.gameId === game.id,
        )[0].description,
      },
      positions: data.user.positions
        .filter(position => position.gameId === game.id)
        .map(position => ({
          id: position.id,
          description: position.description,
        })),
    }));

    yield put(ProfileActions.getProfileEditSuccess({ ...data.user, games }));
  } catch (err) {
    Alert.alert(
      'Falha no carregamento',
      'Houve um erro ao carregar os dados do perfil, verifique seus dados',
    );
    yield put(ProfileActions.getProfileEditFailure());
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
  takeLatest(ProfileTypes.GET_PROFILE_EDIT_REQUEST, showToEdit),
  takeLatest(ProfileTypes.UPDATE_PROFILE_REQUEST, update),
]);
