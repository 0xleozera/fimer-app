import { all } from 'redux-saga/effects';

import auth from './auth';
import filters from './filters';
import home from './home';
import match from './match';
import message from './message';
import play from './play';
import profile from './profile';
import signUp from './sign-up';

export default function* root() {
  yield all([auth, filters, home, match, message, play, profile, signUp]);
}
