import * as storeProd from './store.prod';

// DEVELOPMENT
// const store = __DEV__ ? storeDev.store : storeProd.store;
// const persistor = __DEV__ ? storeDev.persistor : storeProd.persistor;

// RELEASED
const store = storeProd.store;
const persistor = storeProd.persistor;

export { store, persistor };
