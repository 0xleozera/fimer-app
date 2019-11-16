import api from 'api';

import { showMessage } from 'react-native-flash-message';
import notification from 'configs/notification';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as MatchActions, Types as MatchTypes } from 'ducks/match';

export function* getMatches() {
  try {
    const { data } = yield call(api.get, 'matches');
    yield put(MatchActions.getMatchesSuccess(data));
  } catch (err) {
    showMessage(notification);
    yield put(MatchActions.getMatchesFailure());
  }
}

export default all([takeLatest(MatchTypes.GET_MATCHES_REQUEST, getMatches)]);
