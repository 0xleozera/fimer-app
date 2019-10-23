import React from 'react';
import { Text } from 'react-native';

import useTheme from 'hooks/use-theme';

import { Typography } from 'components';
import { ContentUserGames, CardGame } from './styles';

const Games = ({ data }) => {
  const { games, positions, rankings } = data;
  const theme = useTheme();

  const filterGamesInformations = (information, gameId) => {
    return information.gameId === gameId;
  };

  const mountCardGames = game => {
    const position = positions.filter(currentPosition =>
      filterGamesInformations(currentPosition, game.id),
    )[0];

    const ranking = rankings.filter(currentRanking =>
      filterGamesInformations(currentRanking, game.id),
    )[0];

    return (
      <CardGame key={game.id}>
        <Typography font="medium" type="secondary" color="regular">
          {game.name}
        </Typography>
        <Typography font="medium" type="secondary" color="regular">
          {position.description}
        </Typography>
        <Typography font="medium" type="secondary" color="regular">
          {ranking.description}
        </Typography>
      </CardGame>
    );
  };

  const renderCardGames = () => {
    const mappedGames = games.map(mountCardGames);

    return mappedGames;
  };

  return <ContentUserGames>{renderCardGames()}</ContentUserGames>;
};

export default Games;
