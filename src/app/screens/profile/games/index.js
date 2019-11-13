import React from 'react';

import { Typography } from 'components';
import {
  ContentUserGames,
  CardGame,
  ListPositions,
  Position,
  ContainerInformations,
  Label,
} from './styles';

const Games = ({ data }) => {
  const { games, positions, rankings } = data;

  const renderPositions = currentPositions => {
    const mappedPositions = currentPositions.map(position => (
      <Position key={position.id}>
        <Typography font="medium" type="secondary" color="regular">
          {position.description}
        </Typography>
      </Position>
    ));

    return (
      <ListPositions>
        <Label>
          <Typography font="medium" type="accent" color="regular">
            {mappedPositions.length > 1 ? 'Posições' : 'Posição'}
          </Typography>
        </Label>
        {mappedPositions}
      </ListPositions>
    );
  };

  const filterGamesInformations = (information, gameId) => {
    return information.gameId === gameId;
  };

  const mountCardGames = game => {
    const position = positions.filter(currentPosition =>
      filterGamesInformations(currentPosition, game.id),
    );

    const ranking = rankings.find(currentRanking =>
      filterGamesInformations(currentRanking, game.id),
    );

    return (
      <CardGame key={game.id}>
        <ContainerInformations>
          <Label>
            <Typography font="medium" type="accent" color="regular">
              Jogo
            </Typography>
          </Label>
          <Typography font="medium" type="secondary" color="regular">
            {game.name}
          </Typography>
        </ContainerInformations>

        {renderPositions(position)}

        <ContainerInformations>
          <Label>
            <Typography font="medium" type="accent" color="regular">
              Ranking
            </Typography>
          </Label>
          <Typography font="medium" type="secondary" color="regular">
            {ranking.description}
          </Typography>
        </ContainerInformations>
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
