import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';

const reducers = combineReducers({ auth, profile });

export default reducers;
