import * as storeProd from './store.prod';
import * as storeDev from './store.dev';

const store = __DEV__ ? storeDev.store : storeProd.store;
const persistor = __DEV__ ? storeDev.persistor : storeProd.persistor;

export { store, persistor };
