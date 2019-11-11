import React from 'react';

import useNavigation from 'hooks/use-navigation';

import { Avatar, Header, Typography } from 'components';
import { PlayerInformationsHeader, NickName } from './styles';

const HeaderConversation = ({ avatar, nickname }) => {
  const navigation = useNavigation();

  return (
    <Header hasBackButton>
      <PlayerInformationsHeader
        onPress={() => navigation.navigate('ShowProfileChat')}>
        <Avatar noMargin size={45} avatar={avatar} />
        <NickName>
          <Typography size="h4" font="bold" color="contrast">
            {nickname}
          </Typography>
        </NickName>
      </PlayerInformationsHeader>
    </Header>
  );
};

export default HeaderConversation;
