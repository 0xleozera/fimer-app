import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getHomeRequest: ['payload'],
  getHomeSuccess: ['data'],
  getHomeFailure: [],
});

const INITIAL_STATE = {
  isLoading: false,
  users: [],
};

const getHomeRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getHomeSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  users: action.data,
});

const getHomeFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_HOME_REQUEST]: getHomeRequest,
  [Types.GET_HOME_SUCCESS]: getHomeSuccess,
  [Types.GET_HOME_FAILURE]: getHomeFailure,
});
