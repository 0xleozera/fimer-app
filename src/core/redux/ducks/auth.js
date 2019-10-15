import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  signInRequest: ['payload'],
  signInSuccess: ['data'],
  signInFailure: ['error'],

  signOut: [],
});

const INITIAL_STATE = {
  isLoading: false,
  user: {},
  token: '',
};

const signInRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const signInSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  token: action.data.token,
  user: action.data.user,
});

const signInFailure = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE,
  error: action.error,
});

const signOut = (state = INITIAL_STATE) => ({
  ...INITIAL_STATE,
});

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
  [Types.SIGN_OUT]: signOut,
});
