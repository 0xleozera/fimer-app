import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  setNewNotification: ['payload'],
  closeNotification: [],
});

const INITIAL_STATE = {
  open: false,
  content: '',
};

const setNewNotification = (state = INITIAL_STATE, action) => ({
  ...state,
  open: true,
  content: action.payload,
});

const closeNotification = () => ({
  ...INITIAL_STATE,
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_NEW_NOTIFICATION]: setNewNotification,
  [Types.CLOSE_NOTIFICATION]: closeNotification,
});
