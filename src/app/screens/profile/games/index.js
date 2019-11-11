import React from 'react';

import { Typography } from 'components';
import { ContentUserGames, CardGame } from './styles';

const Games = ({ data }) => {
  const { games, positions, rankings } = data;

  const filterGamesInformations = (information, gameId) => {
    return information.gameId === gameId;
  };

  const mountCardGames = game => {
    const position = positions.find(currentPosition =>
      filterGamesInformations(currentPosition, game.id),
    );

    const ranking = rankings.find(currentRanking =>
      filterGamesInformations(currentRanking, game.id),
    );

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
