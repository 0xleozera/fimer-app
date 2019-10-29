import styled from 'styled-components/native';

export const HeaderChat = styled.View`
  flex: 1;
  justify-content: center;
  height: 70;
  padding-horizontal: 15;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;
