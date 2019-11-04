import React from 'react';

import useNavigation from 'hooks/use-navigation';

import { Avatar, Header, Typography } from 'components';
import { PlayerInformationsHeader, NickName } from './styles';

const HeaderConversation = () => {
  const navigation = useNavigation();

  return (
    <Header hasBackButton>
      <PlayerInformationsHeader
        onPress={() => navigation.navigate('ShowProfile')}>
        <Avatar
          noMargin
          size={45}
          avatar="https://static.invenglobal.com/upload/image/2019/04/01/i1554138410409502.jpeg"
        />
        <NickName>
          <Typography size="h4" font="bold" color="contrast">
            Faker
          </Typography>
        </NickName>
      </PlayerInformationsHeader>
    </Header>
  );
};

export default HeaderConversation;
