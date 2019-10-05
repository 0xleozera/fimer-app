import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Fimer</Text>
      </SafeAreaView>
    </PersistGate>
  </Provider>
);

export default App;
