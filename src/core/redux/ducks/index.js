import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';
import signUp from './sign-up';

const reducers = combineReducers({ auth, profile, signUp });

export default reducers;
