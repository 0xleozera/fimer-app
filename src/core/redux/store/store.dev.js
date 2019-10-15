import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import AsyncStorage from '@react-native-community/async-storage';

import reducers from 'ducks';
import rootSaga from 'sagas';

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: console.tron.createSagaMonitor(),
});

const middlewares = [sagaMiddleware];

const persistConfig = {
  key: 'FimerDev',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
