import api from 'api';

import { showMessage } from 'react-native-flash-message';
import notification from 'configs/notification';

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
    showMessage(notification);
    yield put(MessageActions.getMessagesFailure());
  }
}

export function* storeMessage(action) {
  try {
    yield call(api.post, 'messages', action.payload);
    yield put(MessageActions.storeMessageSuccess());
  } catch (err) {
    showMessage(notification);
    yield put(MessageActions.storeMessageFailure());
  }
}

export default all([
  takeLatest(MessageTypes.GET_MESSAGES_REQUEST, getMessages),
  takeLatest(MessageTypes.STORE_MESSAGE_REQUEST, storeMessage),
]);
