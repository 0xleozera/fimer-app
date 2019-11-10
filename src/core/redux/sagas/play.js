import api from 'api';
import { URLBuilder } from 'utils/url-builder';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as PlayActions, Types as PlayTypes } from 'ducks/play';

export function* getPlayers(action) {
  try {
    const queryParams = URLBuilder(action.payload);
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

export default all([takeLatest(PlayTypes.GET_PLAY_REQUEST, getPlayers)]);
