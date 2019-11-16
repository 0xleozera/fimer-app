import React from 'react';
import { useSelector } from 'react-redux';

import useTheme from 'hooks/use-theme';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { Typography, SelectField, If } from 'components';
import {
  ContainerGames,
  ContentBackground,
  Title,
  NewGameButton,
  AddMorePositionButton,
  ContainerRemoveButton,
  WrapperContentButton,
  RemoveIcon,
  ContainerSelectPosition,
  WrapperRemovePositionButton,
} from './styles';

const Games = ({
  games,
  addMoreGame,
  addMorePosition,
  updatePosition,
  updateGameOrRanking,
  removeGames,
  removePosition,
  selectedGames,
  selectedPositions,
  hasError,
}) => {
  const theme = useTheme();
  const allGames = useSelector(state => state.profile.allGames);

  const handleGameOptions = () => {
    const options = allGames.map(game => ({
      id: game.id,
      description: game.name,
    }));

    const filteredOptions = options.filter(
      option => !selectedGames.includes(option.description),
    );

    return filteredOptions;
  };

  const handlePositionOptions = indexGame => {
    const options = allGames
      .map(game => {
        const filteredPositions = game.positions
          .filter(position => games[indexGame].game.id === position.gameId)
          .map(position => ({
            id: position.id,
            description: position.description,
          }));

        return filteredPositions;
      })
      .reduce((all, game) => [...all, ...game], []);

    const filteredOptions = options.filter(
      option => !selectedPositions.includes(option.description),
    );

    return filteredOptions;
  };

  const handleRankingOptions = indexGame => {
    const options = allGames
      .map(game => {
        const filteredRankings = game.rankings
          .filter(ranking => games[indexGame].game.id === ranking.gameId)
          .map(ranking => ({
            id: ranking.id,
            description: ranking.description,
          }));

        return filteredRankings;
      })
      .reduce((all, game) => [...all, ...game], []);

    const filteredOptions = options.filter(
      option => !selectedPositions.includes(option.description),
    );

    return filteredOptions;
  };

  const renderRanking = (ranking, gameIndex) => (
    <SelectField
      icon="ios-trophy"
      label="Ranking"
      value={ranking.description}
      onChange={value => updateGameOrRanking(gameIndex, 'ranking', value)}
      placeholder="Escolha seu ranking"
      options={handleRankingOptions(gameIndex)}
      hasError={hasError}
      errorMessage="Ranking é obrigatório"
    />
  );

  const renderPositions = (positions, gameIndex) => {
    const mappedPositions = positions.map((position, index) => (
      <ContainerSelectPosition key={index}>
        <SelectField
          icon="md-contacts"
          label="Posição"
          value={position.description}
          onChange={value => updatePosition(gameIndex, index, value)}
          placeholder="Escolha sua posição"
          options={handlePositionOptions(gameIndex)}
          hasError={hasError}
          errorMessage="Posição é obrigatória"
        />
        <If test={index > 0}>
          <WrapperRemovePositionButton
            onPress={() => removePosition(gameIndex, index)}>
            <IconMaterial
              name="delete"
              color={theme.colors.primary.contrast}
              size={18}
            />
          </WrapperRemovePositionButton>
        </If>
      </ContainerSelectPosition>
    ));

    return mappedPositions;
  };

  const renderGames = () => {
    const mappedGames = games.map((currentGame, index) => {
      return (
        <ContentBackground key={index}>
          <ContainerRemoveButton>
            <WrapperContentButton onPress={() => removeGames(index)}>
              <RemoveIcon>
                <IconMaterial
                  name="delete"
                  color={theme.colors.primary.contrast}
                  size={13}
                />
              </RemoveIcon>
              <Typography size="h8" font="bold" color="contrast">
                REMOVER
              </Typography>
            </WrapperContentButton>
          </ContainerRemoveButton>
          <SelectField
            label="Jogo"
            value={currentGame.game.description}
            onChange={value => updateGameOrRanking(index, 'game', value)}
            placeholder="Escolha o jogo"
            options={handleGameOptions()}
            hasError={hasError}
            errorMessage="Jogo é obrigatório"
          />

          <If test={!!currentGame.game.description}>
            {renderRanking(currentGame.ranking, index)}
            {renderPositions(currentGame.positions, index)}

            <AddMorePositionButton
              onPress={() =>
                addMorePosition({ id: 0, description: '' }, index)
              }>
              <Typography size="h6" font="bold" color="contrast">
                Mais uma posição
              </Typography>
            </AddMorePositionButton>
          </If>
        </ContentBackground>
      );
    });

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
