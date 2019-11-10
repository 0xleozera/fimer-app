import api from 'api';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as FilterActions, Types as FilterType } from 'ducks/filters';

export function* getAllGames() {
  try {
    const { data } = yield call(api.get, 'games');
    yield put(FilterActions.getAllGamesSuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha ao carregar os jogos',
      'Houve um erro ao carregar os jogos',
    );
    yield put(FilterActions.getAllGamesFailure());
  }
}

export default all([takeLatest(FilterType.GET_ALL_GAMES_REQUEST, getAllGames)]);
