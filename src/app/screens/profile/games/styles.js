import styled from 'styled-components/native';

export const ContentUserGames = styled.View`
  flex: 1;
  margin-vertical: 10;
  margin-horizontal: 10;
`;

export const CardGame = styled.View`
  flex: 1;
  justify-content: center;
  margin-bottom: 10;
  border-width: 0.3;
  border-color: ${({ theme }) => theme.colors.opacity.border};
  border-radius: 4;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding-vertical: 15;
  padding-horizontal: 15;
`;

export const ListPositions = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 3;
`;

export const Position = styled.View`
  margin-right: 15;
`;

export const ContainerInformations = styled.View`
  flex-direction: row;
  margin-bottom: 3;
`;

export const Label = styled.View`
  margin-right: 10;
`;
