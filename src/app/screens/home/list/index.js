import React, { useEffect, useCallback } from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';

import useTheme from 'hooks/use-theme';
import useNavigation from 'hooks/use-navigation';

import { randomNumber } from 'utils/random-number';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as HomeActions } from 'ducks/home';

import { Typography, Avatar } from 'components';
import {
  ContainerList,
  Card,
  Informations,
  ContainerNickname,
  Nickname,
  PlayButton,
  Details,
} from './styles';

const List = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const users = useSelector(state => state.home.users);

  // Filters
  const authGames = useSelector(state => state.auth.user.games);
  const profileGames = useSelector(state => state.profile.user.games);
  const games = profileGames.length > 0 ? profileGames : authGames;
  const indexGame = randomNumber(games.length, 0);
  const currentGame = games.length > 0 ? games[indexGame].id : 0;
  const region = useSelector(state => state.auth.user.region);

  const getHomesIndications = useCallback(() => {
    dispatch(HomeActions.getHomeRequest({ game: currentGame, region }));
  }, [currentGame, dispatch, region]);

  useEffect(() => {
    getHomesIndications();
    navigation.addListener('willFocus', () => getHomesIndications());
    // eslint-disable-next-line
  }, [getHomesIndications]);

  const getGame = playerGames => {
    if (playerGames.length > 0) {
      const game = playerGames.find(
        playerGame => playerGame.id === currentGame,
      );

      return game ? game.name : '';
    }
  };

  const getPosition = playerPositions => {
    if (playerPositions.length > 0) {
      const position = playerPositions.find(
        playerPosition => playerPosition.gameId === currentGame,
      );

      return position ? position.description : '';
    }
  };

  const getRanking = playerRankings => {
    if (playerRankings.length > 0) {
      const ranking = playerRankings.find(
        playerRanking => playerRanking.gameId === currentGame,
      );

      return ranking ? ranking.description : '';
    }
  };

  return (
    <ContainerList>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={users}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate('ShowProfileHome', { userId: item.id })
            }>
            <Avatar noMargin size={50} avatar={item.avatar.url} />
            <Informations>
              <ContainerNickname>
                <Nickname>
                  <Typography font="bold" color="contrast">
                    {item.nickname}
                  </Typography>
                </Nickname>
                <TouchableWithoutFeedback>
                  <PlayButton
                    background={theme.colors.accent.regular}
                    onPress={() =>
                      dispatch(HomeActions.homeLikeRequest(item.id))
                    }
                    hasIcon
                    mini>
                    Jogar
                  </PlayButton>
                </TouchableWithoutFeedback>
              </ContainerNickname>
              <Details>
                <Typography size="h7" font="medium">
                  {getGame(item.games)}
                </Typography>
                <Typography size="h7" font="medium">
                  {getPosition(item.positions)}
                </Typography>
                <Typography size="h7" font="medium">
                  {getRanking(item.rankings)}
                </Typography>
              </Details>
            </Informations>
          </Card>
        )}
      />
    </ContainerList>
  );
};

export default List;
