import { combineReducers } from 'redux';

import auth from './auth';
import match from './match';
import message from './message';
import profile from './profile';
import signUp from './sign-up';

const reducers = combineReducers({ auth, match, message, profile, signUp });

export default reducers;
