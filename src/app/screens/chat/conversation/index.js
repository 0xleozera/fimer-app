import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import useTheme from 'hooks/use-theme';

import { BaseScreen, Avatar, Header, ChatField, Typography } from 'components';
import {
  PlayerInformationsHeader,
  Content,
  NickName,
  ContainerSender,
  Sender,
  SenderButton,
} from './styles';

const Conversation = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const theme = useTheme();

  return (
    <BaseScreen
      statusBarBackground={theme.colors.primary.dark}
      hasScroll={false}>
      <Header hasBackButton>
        <PlayerInformationsHeader
          onPress={() => navigation.navigate('ShowProfile')}>
          <Avatar
            noMargin
            size={45}
            avatar="https://www.maisesports.com.br/wp-content/uploads/2019/06/brTT-e-Flanalista-Flamengo-2%C2%BA-Split-CBLoL-2019-1.jpg"
          />
          <NickName>
            <Typography size="h4" font="bold" color="contrast">
              brTT
            </Typography>
          </NickName>
        </PlayerInformationsHeader>
      </Header>

      <Content>
        <FlatList
          keyExtractor={item => item.name}
          data={[
            { name: 'JOGOS' },
            { name: 'POSIÇÃO' },
            { name: 'RANKING' },
            { name: 'REGIÃO' },
            { name: 'GAME' },
            { name: 'JOGOS' },
            { name: 'POSIÇÃO' },
            { name: 'RANKING' },
            { name: 'REGIÃO' },
            { name: 'GAME' },
            { name: 'JOGOS' },
            { name: 'POSIÇÃO' },
            { name: 'RANKING' },
            { name: 'REGIÃO' },
            { name: 'GAME' },
            { name: 'JOGOS' },
            { name: 'POSIÇÃO' },
            { name: 'RANKING' },
            { name: 'REGIÃO' },
            { name: 'GAME' },
            { name: 'JOGOS' },
            { name: 'POSIÇÃO' },
            { name: 'RANKING' },
            { name: 'REGIÃO' },
            { name: 'GAME' },
            { name: 'JOGOS' },
            { name: 'POSIÇÃO' },
            { name: 'RANKING' },
            { name: 'REGIÃO' },
            { name: 'GAME' },
            { name: 'JOGOS' },
            { name: 'POSIÇÃO' },
            { name: 'RANKING' },
            { name: 'REGIÃO' },
            { name: 'GAME' },
            { name: 'JOGOS' },
            { name: 'POSIÇÃO' },
            { name: 'RANKING' },
            { name: 'REGIÃO' },
            { name: 'GAME' },
          ]}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 5 }}>
              <Typography size="h4" font="bold" color="contrast">
                brTT
              </Typography>
            </View>
          )}
        />
      </Content>

      <ContainerSender>
        <Sender>
          <ChatField
            multiline
            keyboardType="default"
            autoCorrect
            returnKeyType="send"
            onSubmitEditing={() => console.log('Send triggered')}
            value={message}
            onChangeText={setMessage}
          />
          <SenderButton onPress={() => console.log('Send triggered')}>
            <Icon name="send" size={20} color={theme.colors.primary.contrast} />
          </SenderButton>
        </Sender>
      </ContainerSender>
    </BaseScreen>
  );
};

export default Conversation;
