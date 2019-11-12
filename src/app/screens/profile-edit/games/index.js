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
  setGames,
  selectedGames,
  setSelectedGames,
  selectedPositions,
  setSelectedPositions,
}) => {
  const theme = useTheme();

  const renderRanking = ranking => (
    <SelectField
      label="Ranking"
      value={ranking.description}
      onChange={value => console.log(ranking.id)}
      placeholder="Escolha seu ranking"
      options={[{ id: 1, description: 'Bronze' }]}
    />
  );

  const renderPositions = positions => {
    const mappedPositions = positions.map(position => (
      <SelectField
        label="Posição"
        value={position.description}
        onChange={value => console.log(position.id)}
        placeholder="Escolha sua posição"
        options={[{ id: 1, description: 'AD Carry' }]}
      />
    ));

    return mappedPositions;
  };

  const renderGames = () => {
    const mappedGames = games.map(game => (
      <ContentBackground>
        <SelectField
          label="Jogo"
          value={game.description}
          onChange={value => console.log(value)}
          placeholder="Escolha o jogo"
          options={[{ id: 1, description: 'League of Legends' }]}
        />

        <If test={!!game.description}>
          {renderRanking(game.rankings)}
          {renderPositions(game.positions)}

          <AddMorePositionButton
            onPress={() => console.log('New position triggered')}>
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
            setGames({
              game: { id: 0, description: '' },
              rankings: { id: 0, description: '' },
              positions: [],
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
