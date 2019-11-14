import React from 'react';

import { useSelector } from 'react-redux';
import useTheme from 'hooks/use-theme';

import { BaseScreen, Typography } from 'components';
import { HeaderChat } from './styles';

import List from './list';

const Chat = () => {
  const theme = useTheme();
  const loading = useSelector(state => state.match.isLoading);

  return (
    <BaseScreen
      hasScroll={false}
      loading={loading}
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
