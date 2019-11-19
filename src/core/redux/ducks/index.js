import { combineReducers } from 'redux';

import { Types as AuthTypes } from 'ducks/auth';

import auth from './auth';
import filters from './filters';
import home from './home';
import match from './match';
import message from './message';
import play from './play';
import profile from './profile';
import signUp from './sign-up';

const appReducer = combineReducers({
  auth,
  filters,
  home,
  match,
  message,
  play,
  profile,
  signUp,
});

const rootReducer = (state, action) => {
  if (action.type === AuthTypes.SIGN_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
