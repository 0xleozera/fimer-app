import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

import { ThemeProvider } from 'styled-components';
import theme from 'configs/theme';

import Screens from 'screens/app';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Screens />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
