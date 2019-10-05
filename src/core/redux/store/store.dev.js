import ReactotronConfig from 'configs/reactotron';
import Reactotron from 'reactotron-react-native';

import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import AsyncStorage from '@react-native-community/async-storage';

import reducers from 'ducks';
import rootSaga from 'sagas';

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: Reactotron.createSagaMonitor(),
});

const middlewares = [sagaMiddleware];

const persistConfig = {
  key: 'FimerDev',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = ReactotronConfig.createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
