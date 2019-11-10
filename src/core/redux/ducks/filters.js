import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getAllGamesRequest: ['payload'],
  getAllGamesSuccess: ['data'],
  getAllGamesFailure: [],

  setFilter: ['payload'],
});

const INITIAL_STATE = {
  game: { label: '', selected: 0, items: [] },
  position: { label: '', selected: 0, items: [] },
  ranking: { label: '', selected: 0, items: [] },
  region: { label: '', selected: 0, items: [] },
  gender: { label: '', selected: 0, items: [] },

  allGames: [],
};

const getAllGamesRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getAllGamesSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  allGames: action.data,
});

const getAllGamesFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

const setFilter = (state = INITIAL_STATE, action) => {
  const { field, selected, label } = action.payload;

  if (field === 'game') {
    const positions = state.allGames.find(game => game.id === selected)
      .positions;
    const rankings = state.allGames.find(game => game.id === selected).rankings;

    return {
      ...state,
      game: { ...state[field], selected, label },
      position: { label: '', selected: 0, items: positions },
      ranking: { label: '', selected: 0, items: rankings },
    };
  }

  return {
    ...state,
    [field]: { selected, label, items: [...state[field].items] },
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.GET_ALL_GAMES_REQUEST]: getAllGamesRequest,
  [Types.GET_ALL_GAMES_SUCCESS]: getAllGamesSuccess,
  [Types.GET_ALL_GAMES_FAILURE]: getAllGamesFailure,

  [Types.SET_FILTER]: setFilter,
});
