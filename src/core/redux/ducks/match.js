import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getMatchesRequest: ['payload'],
  getMatchesSuccess: ['data'],
  getMatchesFailure: [],

  setNewMatch: ['data'],
});

const INITIAL_STATE = {
  isLoading: false,
  matches: [],
};

const getMatchesRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getMatchesSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  matches: action.data,
});

const getMatchesFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

const setNewMatch = (state = INITIAL_STATE, action) => ({
  ...state,
  matches: [...state.matches, action.data],
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_MATCHES_REQUEST]: getMatchesRequest,
  [Types.GET_MATCHES_SUCCESS]: getMatchesSuccess,
  [Types.GET_MATCHES_FAILURE]: getMatchesFailure,

  [Types.SET_NEW_MATCH]: setNewMatch,
});
