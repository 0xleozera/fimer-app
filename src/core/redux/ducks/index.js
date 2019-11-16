import { combineReducers } from 'redux';

import auth from './auth';
import filters from './filters';
import home from './home';
import match from './match';
import message from './message';
import play from './play';
import profile from './profile';
import signUp from './sign-up';

const reducers = combineReducers({
  auth,
  filters,
  home,
  match,
  message,
  play,
  profile,
  signUp,
});

export default reducers;
