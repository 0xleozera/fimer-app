import styled from 'styled-components/native';

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

export const SenderButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40;
  height: 40;
  margin-left: 20;
  background-color: ${({ theme }) => theme.colors.accent.regular};
  border-radius: 100;
  z-index: 1;
`;
