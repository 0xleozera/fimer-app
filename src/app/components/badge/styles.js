import styled from 'styled-components/native';

export const ContainerBadge = styled.View`
  padding-bottom: 10;
  margin-right: 10;
`;

export const ButtonBadge = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15;
  padding-vertical: 12;
  background-color: transparent;
  border-radius: 50;
  border-width: 2;
  border-color: ${({ theme }) => theme.colors.accent.regular};
`;
