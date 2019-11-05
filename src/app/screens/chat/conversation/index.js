import React from 'react';

import useTheme from 'hooks/use-theme';

import { BaseScreen } from 'components';

import Header from './header';
import Content from './content';
import Sender from './sender';

const Conversation = ({ navigation }) => {
  const theme = useTheme();

  const matchId = navigation.getParam('matchId', 0);
  const avatar = navigation.getParam('avatar', '');
  const nickname = navigation.getParam('nickname', '');

  return (
    <BaseScreen
      statusBarBackground={theme.colors.primary.dark}
      hasScroll={false}>
      <Header avatar={avatar} nickname={nickname} />
      <Content matchId={matchId} />
      <Sender />
    </BaseScreen>
  );
};

export default Conversation;
