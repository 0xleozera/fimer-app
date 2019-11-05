import React from 'react';

import useTheme from 'hooks/use-theme';

import { BaseScreen, Typography } from 'components';
import { HeaderChat } from './styles';

import List from './list';

const Chat = () => {
  const theme = useTheme();

  return (
    <BaseScreen
      hasScroll={false}
      statusBarBackground={theme.colors.primary.dark}>
      <HeaderChat>
        <Typography size="h4" font="bold" color="contrast">
          Conversas
        </Typography>
      </HeaderChat>
      <List />
    </BaseScreen>
  );
};

export default Chat;
