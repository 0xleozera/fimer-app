import React from 'react';

import useTheme from 'hooks/use-theme';

import { BaseScreen } from 'components';

import Header from './header';
import Content from './content';
import Sender from './sender';

const Conversation = () => {
  const theme = useTheme();

  return (
    <BaseScreen
      statusBarBackground={theme.colors.primary.dark}
      hasScroll={false}>
      <Header />
      <Content />
      <Sender />
    </BaseScreen>
  );
};

export default Conversation;
