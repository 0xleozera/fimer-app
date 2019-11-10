import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getPlayRequest: ['payload'],
  getPlaySuccess: ['data'],
  getPlayFailure: [],
});

const INITIAL_STATE = {
  isLoading: false,
  players: [],
};

const getPlayRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getPlaySuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  players: action.data,
});

const getPlayFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_PLAY_REQUEST]: getPlayRequest,
  [Types.GET_PLAY_SUCCESS]: getPlaySuccess,
  [Types.GET_PLAY_FAILURE]: getPlayFailure,
});
