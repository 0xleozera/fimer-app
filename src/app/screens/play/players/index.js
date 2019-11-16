import React, { useEffect } from 'react';

import { splitDate } from 'utils/date';
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as PlayActions } from 'ducks/play';

import useTheme from 'hooks/use-theme';
import useNavigation from 'hooks/use-navigation';

import { parsePercentageToPixels } from 'utils/dimensions';

import Carousel from 'react-native-snap-carousel';
import {
  Typography,
  PlayActionButton,
  Avatar,
  Separator,
  If,
} from 'components';
import {
  ContainerPlayers,
  CardPlayer,
  HeaderPlayerInformation,
  HeaderPersonalInformations,
  HeaderGameInformations,
  HeaderTitleGameInformations,
  HeaderDataGameInformations,
  DescriptionPosition,
  ContainerActionButtons,
  ProfileActionButton,
  EmptyPlayers,
} from './styles';

const Players = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const currentIndex = useSelector(state => state.play.currentIndex);

  const players = useSelector(state => state.play.players);
  const selectedGame = useSelector(state => state.filters.game.selected);
  const selectedPosition = useSelector(
    state => state.filters.position.selected,
  );
  const selectedRanking = useSelector(state => state.filters.ranking.selected);

  useEffect(() => {
    dispatch(PlayActions.getPlayRequest());
  }, [dispatch]);

  const handleBirthDate = birthDate => {
    const { day, month, years } = splitDate(birthDate);
    const difference = differenceInCalendarYears(
      new Date(),
      new Date(years, month, day),
    );

    return `${difference} anos`;
  };

  const filteredPositions = (position, choicedGame) => {
    if (selectedPosition === 0 && selectedGame === 0) {
      return position.gameId === choicedGame;
    }

    if (selectedPosition !== 0 && selectedGame !== 0) {
      return (
        position.gameId === selectedGame && position.id === selectedPosition
      );
    }

    return position.gameId === selectedGame;
  };

  const getGame = (games, choicedGame) => {
    if (games.length === 0) {
      return null;
    }

    const game = games.find(currentGame => currentGame.id === selectedGame);
    const randomGame = games.find(
      currentGame => currentGame.id === choicedGame,
    );

    return (
      <HeaderDataGameInformations>
        <Typography font="bold" size="h6">
          {selectedGame === 0 ? randomGame.name : game.name}
        </Typography>
      </HeaderDataGameInformations>
    );
  };

  const getPositions = (positions, choicedGame) => {
    if (positions.length === 0) {
      return null;
    }

    const correctPositions = positions
      .filter(position => filteredPositions(position, choicedGame))
      .map(position => (
        <DescriptionPosition>
          <Typography font="bold" size="h6">
            {position.description}
          </Typography>
        </DescriptionPosition>
      ));

    return (
      <HeaderDataGameInformations positions>
        {correctPositions}
      </HeaderDataGameInformations>
    );
  };

  const getRanking = (rankings, choicedGame) => {
    if (rankings.length === 0) {
      return null;
    }

    const correctRanking = rankings.find(ranking => {
      if (selectedRanking === 0 && selectedGame === 0) {
        return ranking.gameId === choicedGame;
      }

      if (selectedRanking !== 0 && selectedGame !== 0) {
        return (
          ranking.gameId === selectedGame && ranking.id === selectedRanking
        );
      }

      return ranking.gameId === selectedGame;
    });

    return (
      <HeaderDataGameInformations>
        <Typography font="bold" size="h6">
          {correctRanking.description}
        </Typography>
      </HeaderDataGameInformations>
    );
  };

  const renderItem = ({ item }) => {
    const choicedGame =
      item.games.length > 0 && !selectedGame ? item.games[0].id : 0;

    return (
      <CardPlayer>
        <HeaderPlayerInformation>
          <Avatar size={150} avatar={item.avatar.url} />
          <Typography font="bold" size="h3" color="contrast">
            {item.nickname}
          </Typography>
        </HeaderPlayerInformation>
        <HeaderPersonalInformations>
          <Typography font="medium" size="h7">
            {item.name}
          </Typography>
          <Typography font="medium" size="h7">
            {handleBirthDate(item.birthDate)}
          </Typography>
        </HeaderPersonalInformations>
        <Separator />
        <HeaderGameInformations>
          <HeaderTitleGameInformations>
            <Typography font="bold" size="h6" color="contrast">
              {item.games.length > 0
                ? 'Informações de jogo'
                : 'Nenhum jogo cadastrado 😔'}
            </Typography>
          </HeaderTitleGameInformations>
          {getGame(item.games, choicedGame)}
          {getPositions(item.positions, choicedGame)}
          {getRanking(item.rankings, choicedGame)}
        </HeaderGameInformations>
      </CardPlayer>
    );
  };

  return (
    <ContainerPlayers>
      <If test={players.length === 0}>
        <EmptyPlayers>
          <Typography font="bold" size="h6" color="contrast">
            Não encontramos jogadores com essas características 😔
          </Typography>
        </EmptyPlayers>
      </If>
      <If test={players.length !== 0}>
        <Carousel
          layout="tinder"
          data={players}
          renderItem={renderItem}
          sliderWidth={parsePercentageToPixels(95)}
          itemWidth={parsePercentageToPixels(90)}
          layoutCardOffset={15}
          containerCustomStyle={{
            marginTop: parsePercentageToPixels(3),
            overflow: 'visible',
          }}
          contentContainerCustomStyle={{
            paddingVertical: 10,
          }}
          onBeforeSnapToItem={slideIndex =>
            dispatch(PlayActions.setCurrentIndex(slideIndex))
          }
        />
        <ContainerActionButtons>
          <PlayActionButton
            background={theme.colors.actions.red}
            forbidden
            onPress={() => dispatch(PlayActions.removePlayer())}
          />

          <ProfileActionButton
            background={theme.colors.actions.blue}
            iconName="md-person"
            onPress={() => {
              navigation.navigate('ShowProfilePlay', {
                userId: players[currentIndex].id,
              });
            }}
          />

          <PlayActionButton
            background={theme.colors.accent.regular}
            onPress={() => dispatch(PlayActions.likeRequest())}
          />
        </ContainerActionButtons>
      </If>
    </ContainerPlayers>
  );
};

export default Players;
