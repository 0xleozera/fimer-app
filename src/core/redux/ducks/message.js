import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getMessagesRequest: ['payload'],
  getMessagesSuccess: ['data'],
  getMessagesFailure: [],

  storeMessageRequest: ['payload'],
  storeMessageSuccess: ['data'],
  storeMessageFailure: [],
});

const INITIAL_STATE = {
  isLoading: false,
  messages: [],
};

const getMessagesRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const getMessagesSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  messages: action.data,
});

const getMessagesFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

const storeMessageRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const storeMessageSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
});

const storeMessageFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_MESSAGES_REQUEST]: getMessagesRequest,
  [Types.GET_MESSAGES_SUCCESS]: getMessagesSuccess,
  [Types.GET_MESSAGES_FAILURE]: getMessagesFailure,

  [Types.STORE_MESSAGE_REQUEST]: storeMessageRequest,
  [Types.STORE_MESSAGE_SUCCESS]: storeMessageSuccess,
  [Types.STORE_MESSAGE_FAILURE]: storeMessageFailure,
});
