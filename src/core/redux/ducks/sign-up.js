import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  signUpRequest: ['payload'],
  signUpSuccess: ['data'],
  signUpFailure: ['error'],
});

const INITIAL_STATE = {
  isLoading: false,
  user: null,
};

const signUpRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const signUpSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  user: action.data,
});

const signUpFailure = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure,
});
