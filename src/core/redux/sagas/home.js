import api from 'api';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Creators as HomeActions, Types as HomeTypes } from 'ducks/home';

export function* getHome(action) {
  try {
    const { data } = yield call(api.get, 'home');
    yield put(HomeActions.getHomeSuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha ao carregar a home',
      'Houve um erro ao carregar a home, verifique seus dados',
    );
    yield put(HomeActions.getHomeFailure());
  }
}

export default all([takeLatest(HomeTypes.GET_HOME_REQUEST, getHome)]);
