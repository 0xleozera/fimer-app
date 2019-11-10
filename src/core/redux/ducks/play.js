import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getPlayRequest: ['payload'],
  getPlaySuccess: ['data'],
  getPlayFailure: [],

  setCurrentIndex: ['payload'],

  removePlayer: [],
});

const INITIAL_STATE = {
  isLoading: false,
  currentIndex: 0,
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

const setCurrentIndex = (state = INITIAL_STATE, action) => ({
  ...state,
  currentIndex: action.payload,
});

const removePlayer = (state = INITIAL_STATE) => ({
  ...state,
  currentIndex: state.currentIndex - 1,
  players: state.players.filter(
    player => player.id !== state.players[state.currentIndex].id,
  ),
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_PLAY_REQUEST]: getPlayRequest,
  [Types.GET_PLAY_SUCCESS]: getPlaySuccess,
  [Types.GET_PLAY_FAILURE]: getPlayFailure,

  [Types.SET_CURRENT_INDEX]: setCurrentIndex,

  [Types.REMOVE_PLAYER]: removePlayer,
});
