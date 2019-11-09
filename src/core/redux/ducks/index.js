import { combineReducers } from 'redux';

import auth from './auth';
import home from './home';
import match from './match';
import message from './message';
import notification from './notification';
import profile from './profile';
import signUp from './sign-up';

const reducers = combineReducers({
  auth,
  home,
  match,
  message,
  notification,
  profile,
  signUp,
});

export default reducers;
