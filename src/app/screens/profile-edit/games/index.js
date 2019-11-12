import React from 'react';

import useTheme from 'hooks/use-theme';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { Typography, SelectField, If } from 'components';
import {
  ContainerGames,
  ContentBackground,
  Title,
  NewGameButton,
  AddMorePositionButton,
} from './styles';

const Games = ({
  games,
  addMoreGame,
  addMorePosition,
  updatePosition,
  updateGameOrRanking,
  selectedGames,
  setSelectedGames,
  selectedPositions,
  setSelectedPositions,
}) => {
  const theme = useTheme();

  const renderRanking = (ranking, index) => (
    <SelectField
      label="Ranking"
      value={ranking.description}
      onChange={value => updateGameOrRanking(index, 'ranking', value)}
      placeholder="Escolha seu ranking"
      options={[{ id: 1, description: 'Bronze' }]}
    />
  );

  const renderPositions = (positions, gameIndex) => {
    const mappedPositions = positions.map((position, index) => (
      <SelectField
        label="Posição"
        value={position.description}
        onChange={value => updatePosition(gameIndex, index, value)}
        placeholder="Escolha sua posição"
        options={[{ id: 1, description: 'AD Carry' }]}
      />
    ));

    return mappedPositions;
  };

  const renderGames = () => {
    console.log(games);
    const mappedGames = games.map((game, index) => (
      <ContentBackground>
        <SelectField
          label="Jogo"
          value={game.description}
          onChange={value => updateGameOrRanking(index, 'game', value)}
          placeholder="Escolha o jogo"
          options={[{ id: 1, description: 'League of Legends' }]}
        />

        <If test={!!game.game.description}>
          {renderRanking(game.ranking, index)}
          {renderPositions(game.positions, index)}

          <AddMorePositionButton
            onPress={() => addMorePosition({ id: 0, description: '' }, index)}>
            <Typography size="h6" font="bold" color="contrast">
              Mais uma posição
            </Typography>
          </AddMorePositionButton>
        </If>
      </ContentBackground>
    ));

    return mappedGames;
  };

  return (
    <ContainerGames>
      <Title>
        <Typography size="h6" font="bold" color="contrast">
          Informações de Jogo
        </Typography>
        <NewGameButton
          onPress={() =>
            addMoreGame({
              game: { id: 0, description: '' },
              ranking: { id: 0, description: '' },
              positions: [{ id: 0, description: '' }],
            })
          }>
          <IconMaterial
            name="add"
            size={15}
            color={theme.colors.primary.contrast}
          />
        </NewGameButton>
      </Title>
      {renderGames()}
    </ContainerGames>
  );
};

export default Games;
