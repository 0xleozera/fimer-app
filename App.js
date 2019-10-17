import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

import Screens from 'screens/app';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Screens />
    </PersistGate>
  </Provider>
);

export default App;
