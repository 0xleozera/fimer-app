import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import reactotronConfig from 'configs/reactotron';

import AsyncStorage from '@react-native-community/async-storage';

import reducers from 'ducks';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: reactotronConfig.createSagaMonitor(),
});

const middlewares = [sagaMiddleware];

const persistConfig = {
  key: 'FimerDev',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(
    reactotronConfig.createEnhancer(),
    applyMiddleware(...middlewares),
  ),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
