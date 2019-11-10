import { combineReducers } from 'redux';

import auth from './auth';
import home from './home';
import match from './match';
import message from './message';
import notification from './notification';
import play from './play';
import profile from './profile';
import signUp from './sign-up';

const reducers = combineReducers({
  auth,
  home,
  match,
  message,
  notification,
  play,
  profile,
  signUp,
});

export default reducers;
