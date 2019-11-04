import { combineReducers } from 'redux';

import auth from './auth';
import match from './match';
import profile from './profile';
import signUp from './sign-up';

const reducers = combineReducers({ auth, match, profile, signUp });

export default reducers;
