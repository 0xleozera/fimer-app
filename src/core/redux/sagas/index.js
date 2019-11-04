import { all } from 'redux-saga/effects';

import auth from './auth';
import match from './match';
import profile from './profile';
import signUp from './sign-up';

export default function* root() {
  yield all([auth, match, profile, signUp]);
}
