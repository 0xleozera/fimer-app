import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getHomeRequest: ['payload'],
  getHomeSuccess: ['data'],
  getHomeFailure: [],

  homeLikeRequest: ['payload'],
  homeLikeSuccess: ['data'],
  homeLikeFailure: [],
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

const homeLikeRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const homeLikeSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  users: state.users.filter(user => user.id !== action.data),
});

const homeLikeFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_HOME_REQUEST]: getHomeRequest,
  [Types.GET_HOME_SUCCESS]: getHomeSuccess,
  [Types.GET_HOME_FAILURE]: getHomeFailure,

  [Types.HOME_LIKE_REQUEST]: homeLikeRequest,
  [Types.HOME_LIKE_SUCCESS]: homeLikeSuccess,
  [Types.HOME_LIKE_FAILURE]: homeLikeFailure,
});
