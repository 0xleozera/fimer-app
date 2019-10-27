import React from 'react';

import useTheme from 'hooks/use-theme';

import { BaseScreen, Typography } from 'components';
import Filters from './filters';

const Play = () => {
  const theme = useTheme();

  return (
    <BaseScreen statusBarBackground={theme.colors.primary.dark}>
      <Filters />
      <Typography>Play</Typography>
    </BaseScreen>
  );
};

export default Play;
