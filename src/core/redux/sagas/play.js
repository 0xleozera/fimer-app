import api from 'api';
import { URLBuilder } from 'utils/url-builder';

import { Alert } from 'react-native';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import { Creators as PlayActions, Types as PlayTypes } from 'ducks/play';
import { Types as FilterTypes } from 'ducks/filters';

export function* getPlayers() {
  try {
    const { data } = yield call(api.get, 'search');
    yield put(PlayActions.getPlaySuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha ao carregar',
      'Houve um erro ao carregar a lista de jogadores',
    );
    yield put(PlayActions.getPlayFailure());
  }
}

export function* getFilteringPlayers() {
  try {
    const [game, position, ranking, region, gender] = yield all([
      select(state => state.filters.game.selected),
      select(state => state.filters.position.selected),
      select(state => state.filters.ranking.selected),
      select(state => state.filters.region.selected),
      select(state => state.filters.gender.selected),
    ]);

    const queryParams = URLBuilder({ game, position, ranking, region, gender });
    const { data } = yield call(api.get, `search${queryParams}`);
    yield put(PlayActions.getPlaySuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha ao carregar',
      'Houve um erro ao carregar a lista de jogadores',
    );
    yield put(PlayActions.getPlayFailure());
  }
}

export function* like() {
  try {
    const [currentIndex, players] = yield all([
      select(state => state.play.currentIndex),
      select(state => state.play.players),
    ]);

    yield call(api.post, 'likes', { likeeId: players[currentIndex].id });
    yield put(PlayActions.likeSuccess());
  } catch (err) {
    Alert.alert('Falha no curtir', 'Houve um erro ao curtir o jogador');
    yield put(PlayActions.likeFailure());
  }
}

export default all([
  takeLatest(PlayTypes.GET_PLAY_REQUEST, getPlayers),
  takeLatest(PlayTypes.LIKE_REQUEST, like),
  takeLatest(FilterTypes.CLEAR_FILTER, getFilteringPlayers),
  takeLatest(FilterTypes.SET_FILTER, getFilteringPlayers),
]);
