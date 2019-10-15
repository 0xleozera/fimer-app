import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  signUpRequest: ['payload'],
  signUpSuccess: ['data'],
  signUpFailure: ['error'],

  signOut: [],
});

const INITIAL_STATE = {
  isLoading: false,
  user: null,
  token: '',
};

const signUpRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const signUpSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  token: action.data.token,
  user: action.data.user,
});

const signUpFailure = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE,
  error: action.error,
});

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure,
});
