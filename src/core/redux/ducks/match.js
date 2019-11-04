import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getMatchRequest: ['payload'],
  getMatchSuccess: ['data'],
  getMatchFailure: [],
});

const INITIAL_STATE = {
  isLoading: false,
  matches: [],
};

const getMatchRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getMatchSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  matches: action.data,
});

const getMatchFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_Match_REQUEST]: getMatchRequest,
  [Types.GET_Match_SUCCESS]: getMatchSuccess,
  [Types.GET_Match_FAILURE]: getMatchFailure,
});
