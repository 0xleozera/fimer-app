import React, { useState } from 'react';

import useTheme from 'hooks/use-theme';

import { useDispatch } from 'react-redux';
import { Creators as MessageActions } from 'ducks/message';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { ChatField } from 'components';
import { ContainerSender, Sender, SenderButton } from './styles';

const SenderConversation = ({ matchId, userReceiveId }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const payload = {
      body: message,
      userReceiveId: userReceiveId,
      matchId: matchId,
    };

    dispatch(MessageActions.storeMessageRequest(payload));
    setMessage('');
  };

  return (
    <ContainerSender>
      <Sender>
        <ChatField
          multiline
          keyboardType="default"
          autoCorrect
          returnKeyType="send"
          onSubmitEditing={() => handleSendMessage()}
          value={message}
          onChangeText={setMessage}
        />
        <SenderButton onPress={() => handleSendMessage()}>
          <Icon name="send" size={20} color={theme.colors.primary.contrast} />
        </SenderButton>
      </Sender>
    </ContainerSender>
  );
};

export default SenderConversation;
