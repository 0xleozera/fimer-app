import React from 'react';
import { View, FlatList } from 'react-native';

import useTheme from 'hooks/use-theme';

import { Avatar, Typography } from 'components';
import { Content } from './styles';

const ContentConversation = () => {
  const theme = useTheme();

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
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginVertical: 5,
              flexDirection: item.me ? 'row-reverse' : 'row',
            }}>
            <View
              style={{
                marginRight: item.me ? 0 : 5,
                marginLeft: item.me ? 5 : 0,
              }}>
              <Avatar
                noMargin
                size={45}
                avatar={
                  item.me
                    ? 'https://www.maisesports.com.br/wp-content/uploads/2019/06/brTT-e-Flanalista-Flamengo-2%C2%BA-Split-CBLoL-2019-1.jpg'
                    : 'https://static.invenglobal.com/upload/image/2019/04/01/i1554138410409502.jpeg'
                }
              />
            </View>
            <View
              style={{
                maxWidth: 250,
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 4,
                backgroundColor: item.me
                  ? theme.colors.accent.regular
                  : theme.colors.secondary.regular,
              }}>
              <Typography size="h7" font="regular" color="contrast">
                {item.text}
              </Typography>
            </View>
          </View>
        )}
      />
    </Content>
  );
};

export default ContentConversation;
