import api from 'api';

import { showMessage } from 'react-native-flash-message';
import notification from 'configs/notification';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as FilterActions, Types as FilterType } from 'ducks/filters';

export function* getAllGames() {
  try {
    const { data } = yield call(api.get, 'games');
    yield put(FilterActions.getAllGamesSuccess(data));
  } catch (err) {
    showMessage(notification);
    yield put(FilterActions.getAllGamesFailure());
  }
}

export default all([takeLatest(FilterType.GET_ALL_GAMES_REQUEST, getAllGames)]);
