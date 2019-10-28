import React, { useState } from 'react';

import useTheme from 'hooks/use-theme';

import { BaseScreen, Typography } from 'components';
import Filters from './filters';
import FilterModal from './filter-modal';

const Play = () => {
  const theme = useTheme();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <BaseScreen statusBarBackground={theme.colors.primary.dark}>
      <Filters openModal={value => setIsVisible(value)} />
      <Typography>Play</Typography>
      <FilterModal
        isVisible={isVisible}
        onSwipe={() => setIsVisible(false)}
        onBackdropPress={() => setIsVisible(false)}
      />
    </BaseScreen>
  );
};

export default Play;
