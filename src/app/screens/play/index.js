import React, { useState } from 'react';
import { View } from 'react-native';

import useTheme from 'hooks/use-theme';

import { BaseScreen, Typography, Modal } from 'components';
import Filters from './filters';

const Play = () => {
  const theme = useTheme();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <BaseScreen statusBarBackground={theme.colors.primary.dark}>
      <Filters openModal={value => setIsVisible(value)} />
      <Typography>Play</Typography>
      <Modal
        isVisible={isVisible}
        onSwipe={() => setIsVisible(false)}
        onBackdropPress={() => setIsVisible(false)}>
        <View style={{ height: 200, backgroundColor: '#fff' }}>
          <Typography>Play</Typography>
        </View>
      </Modal>
    </BaseScreen>
  );
};

export default Play;
