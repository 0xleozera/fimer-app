import React from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Fimer</Text>
      </View>
    </PersistGate>
  </Provider>
);

export default App;
