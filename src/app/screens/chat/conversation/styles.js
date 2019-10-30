import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const PlayerInformationsHeader = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const NickName = styled.View`
  margin-left: 15;
`;

export const ContainerSender = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Sender = styled.View`
  flex-direction: row;
  align-items: center;
  min-height: 60;
  max-height: 120;
  padding-vertical: 15;
  padding-horizontal: 15;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const SenderButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 40;
  height: 40;
  margin-left: 20;
  background-color: ${({ theme }) => theme.colors.accent.regular};
  border-radius: 100;
  z-index: 1;
`;
