import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getProfileRequest: ['payload'],
  getProfileSuccess: ['data'],
  getProfileFailure: ['error'],

  updateProfileRequest: ['payload'],
  updateProfileSuccess: ['data'],
  updateProfileFailure: ['error'],
});

const INITIAL_STATE = {
  isLoading: false,
  user: {
    id: 0,
    email: '',
    name: '',
    nickname: '',
    birthDate: '',
    region: '',
    gender: '',
    avatar: null,
    games: [],
    position: [],
    rankings: [],
  },
};

const getProfileRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getProfileSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  user: action.data,
});

const getProfileFailure = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE,
  error: action.error,
});

const updateProfileRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const updateProfileSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  user: action.data,
});

const updateProfileFailure = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE,
  error: action.error,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_PROFILE_REQUEST]: getProfileRequest,
  [Types.GET_PROFILE_SUCCESS]: getProfileSuccess,
  [Types.GET_PROFILE_FAILURE]: getProfileFailure,

  [Types.UPDATE_PROFILE_REQUEST]: updateProfileRequest,
  [Types.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
  [Types.UPDATE_PROFILE_FAILURE]: updateProfileFailure,
});
