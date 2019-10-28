import styled from 'styled-components/native';

export const ContainerItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  height: 50;
  padding-horizontal: 10;
  margin-bottom: 10;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: ${({ theme }) => theme.radius.regular};
  border-width: 2;
  border-color: ${({ theme, active }) =>
    active ? theme.colors.accent.regular : theme.colors.primary.dark};
`;
