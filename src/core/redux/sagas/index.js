import { all } from 'redux-saga/effects';

import auth from './auth';
import home from './home';
import match from './match';
import message from './message';
import notification from './notification';
import profile from './profile';
import signUp from './sign-up';

export default function* root() {
  yield all([auth, home, match, message, notification, profile, signUp]);
}
