import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import useTheme from 'hooks/use-theme';

import { ChatField } from 'components';
import { ContainerSender, Sender, SenderButton } from './styles';

const SenderConversation = () => {
  const theme = useTheme();
  const [message, setMessage] = useState('');

  return (
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
  );
};

export default SenderConversation;
