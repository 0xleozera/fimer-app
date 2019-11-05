import api from 'api';

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  Creators as MessageActions,
  Types as MessageTypes,
} from 'ducks/message';

export function* getMessages(action) {
  try {
    const { data } = yield call(api.get, `messages/${action.payload}`);
    yield put(MessageActions.getMessagesSuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha ao carregar as mensagens',
      'Houve um erro ao carregar suas mensagens, verifiique seus dados',
    );
    yield put(MessageActions.getMessagesFailure());
  }
}

export function* storeMessage(action) {
  try {
    const { data } = yield call(api.post, 'messages', action.payload);
    yield put(MessageActions.storeMessageSuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha ao carregar os matches',
      'Houve um erro ao carregar seus matches, verifiique seus dados',
    );
    yield put(MessageActions.storeMessageFailure());
  }
}

export default all([
  takeLatest(MessageTypes.GET_MESSAGES_REQUEST, getMessages),
  takeLatest(MessageTypes.STORE_MESSAGE_REQUEST, storeMessage),
]);
