import styled from 'styled-components/native';

export const ContainerList = styled.View`
  padding-top: 20;
  padding-bottom: 10;
  padding-horizontal: 10;
`;

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10;
  padding-horizontal: 10;
  margin-bottom: 10;
  height: 80;
  border-radius: ${({ theme }) => theme.radius.regular};
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Informations = styled.View`
  flex: 1;
  margin-left: 10;
`;

export const LastMessage = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5;
`;
