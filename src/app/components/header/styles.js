import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  height: 70;
  padding-horizontal: 15;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Informations = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerBackButton = styled.TouchableOpacity`
  margin-right: 25;
`;
