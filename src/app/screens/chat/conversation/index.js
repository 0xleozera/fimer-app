import React from 'react';

import useTheme from 'hooks/use-theme';

import { BaseScreen, Typography } from 'components';

const Conversation = () => {
  const theme = useTheme();

  return (
    <BaseScreen statusBarBackground={theme.colors.primary.dark}>
      <Typography size="h4" font="bold" color="contrast">
        Conversas
      </Typography>
    </BaseScreen>
  );
};

export default Conversation;
