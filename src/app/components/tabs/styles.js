import styled from 'styled-components/native';

export const ContainerTabs = styled.View`
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Content = styled.View`
  flex-direction: row;
  height: 60;
`;

export const Tab = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 12;
  padding-bottom: 12;
  border-bottom-color: ${({ active, theme }) =>
    active ? theme.colors.accent.regular : 'transparent'};
  border-bottom-width: 3;
`;
