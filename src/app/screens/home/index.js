import React from 'react';
import { View, Text } from 'react-native';

import { BaseScreen } from 'components';

const Home = () => (
  <BaseScreen>
    <Text style={{ color: '#fff' }}>Home</Text>
    <View
      style={{
        height: 46,
        width: 100,
        backgroundColor: '#6e6eff',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: '#fff' }}>Okay</Text>
    </View>
  </BaseScreen>
);

export default Home;
