import React from 'react';
import { FlatList } from 'react-native';

import { Avatar, Typography } from 'components';
import { Content, ContainerMessage, Spacing, Balloon } from './styles';

const ContentConversation = () => {
  return (
    <Content>
      <FlatList
        keyExtractor={item => item.name}
        data={[
          { text: 'Fala tu, beleza?', me: true },
          { text: 'Beleza, bora bater um gameplay?', me: false },
          {
            text:
              'Agora não posso véi, tenho que apresentar no seminário de andamento',
            me: true,
          },
        ]}
        renderItem={({ item }) => (
          <ContainerMessage me={item.me}>
            <Spacing me={item.me}>
              <Avatar
                noMargin
                size={45}
                avatar={
                  item.me
                    ? 'https://www.maisesports.com.br/wp-content/uploads/2019/06/brTT-e-Flanalista-Flamengo-2%C2%BA-Split-CBLoL-2019-1.jpg'
                    : 'https://static.invenglobal.com/upload/image/2019/04/01/i1554138410409502.jpeg'
                }
              />
            </Spacing>
            <Balloon me={item.me}>
              <Typography size="h7" font="regular" color="contrast">
                {item.text}
              </Typography>
            </Balloon>
          </ContainerMessage>
        )}
      />
    </Content>
  );
};

export default ContentConversation;
