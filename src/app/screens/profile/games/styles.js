import styled from 'styled-components/native';

export const ContentUserGames = styled.View`
  flex: 1;
  margin-vertical: 10;
  margin-horizontal: 10;
`;

export const CardGame = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100;
  margin-bottom: 10;
  border-width: 0.3;
  border-color: ${({ theme }) => theme.colors.opacity.border};
  border-radius: 4;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;
