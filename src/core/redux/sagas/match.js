import api from 'api';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as MatchActions, Types as MatchTypes } from 'ducks/match';

export function* getMatches() {
  try {
    const { data } = yield call(api.get, 'matches');
    yield put(MatchActions.getMatchesSuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha ao carregar os matches',
      'Houve um erro ao carregar seus matches, verifiique seus dados',
    );
    yield put(MatchActions.getMatchesFailure());
  }
}

export default all([takeLatest(MatchTypes.GET_MATCHES_REQUEST, getMatches)]);
