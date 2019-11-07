import { takeEvery, put, all, delay } from 'redux-saga/effects';

import {
  Creators as NotificationActions,
  Types as NotificationTypes,
} from 'ducks/notification';

export function* closeNotification() {
  delay(3000);
  yield put(NotificationActions.getMatchesFailure());
}

export default all([
  takeEvery(NotificationTypes.CLOSE_NOTIFICATION, closeNotification),
]);
