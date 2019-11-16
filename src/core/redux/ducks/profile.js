import { createActions, createReducer } from 'reduxsauce';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const { Creators, Types } = createActions({
  getProfileRequest: ['payload'],
  getProfileSuccess: ['data'],
  getProfileFailure: [],

  getProfileEditRequest: ['payload'],
  getProfileEditSuccess: ['data'],
  getProfileEditFailure: [],

  getAllGamesRequest: ['payload'],
  getAllGamesSuccess: ['data'],
  getAllGamesFailure: [],

  updateProfileRequest: ['payload'],
  updateProfileSuccess: ['data'],
  updateProfileFailure: [],

  profileLikeRequest: ['payload'],
  profileLikeSuccess: ['data'],
  profileLikeFailure: [],

  profileUnlikeRequest: ['payload'],
  profileUnlikeSuccess: ['data'],
  profileUnlikeFailure: [],
});

const INITIAL_STATE = {
  isLoading: false,
  status: 'unplayable',
  user: {
    id: 0,
    email: '',
    name: '',
    nickname: '',
    birthDate: '',
    region: '',
    gender: '',
    avatar: {
      url: '',
    },
    games: [],
    position: [],
    rankings: [],
  },
  edit: {
    id: 0,
    email: '',
    name: '',
    nickname: '',
    birthDate: format(new Date(), 'dd/MM/yyyy', { locale: pt }),
    region: '',
    gender: '',
    avatar: {
      url: '',
    },
    games: [],
    selectedGames: [],
    selectedPositions: [],
  },
  allGames: [],
};

const getProfileRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getProfileSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  status: action.data.status,
  user: action.data.user,
});

const getProfileFailure = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
});

const getProfileEditRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getProfileEditSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  edit: action.data,
});

const getProfileEditFailure = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
});

const getAllGamesRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getAllGamesSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  allGames: action.data,
});

const getAllGamesFailure = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
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

const updateProfileFailure = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
});

const profileLikeRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const profileLikeSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  status: 'liked',
});

const profileLikeFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

const profileUnlikeRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const profileUnlikeSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  status: 'playable',
});

const profileUnlikeFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_PROFILE_REQUEST]: getProfileRequest,
  [Types.GET_PROFILE_SUCCESS]: getProfileSuccess,
  [Types.GET_PROFILE_FAILURE]: getProfileFailure,

  [Types.GET_PROFILE_EDIT_REQUEST]: getProfileEditRequest,
  [Types.GET_PROFILE_EDIT_SUCCESS]: getProfileEditSuccess,
  [Types.GET_PROFILE_EDIT_FAILURE]: getProfileEditFailure,

  [Types.GET_ALL_GAMES_REQUEST]: getAllGamesRequest,
  [Types.GET_ALL_GAMES_SUCCESS]: getAllGamesSuccess,
  [Types.GET_ALL_GAMES_FAILURE]: getAllGamesFailure,

  [Types.UPDATE_PROFILE_REQUEST]: updateProfileRequest,
  [Types.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
  [Types.UPDATE_PROFILE_FAILURE]: updateProfileFailure,

  [Types.PROFILE_LIKE_REQUEST]: profileLikeRequest,
  [Types.PROFILE_LIKE_SUCCESS]: profileLikeSuccess,
  [Types.PROFILE_LIKE_FAILURE]: profileLikeFailure,

  [Types.PROFILE_UNLIKE_REQUEST]: profileUnlikeRequest,
  [Types.PROFILE_UNLIKE_SUCCESS]: profileUnlikeSuccess,
  [Types.PROFILE_UNLIKE_FAILURE]: profileUnlikeFailure,
});
