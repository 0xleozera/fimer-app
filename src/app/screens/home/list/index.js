import React, { useEffect, useCallback } from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';

import useTheme from 'hooks/use-theme';

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
  const users = useSelector(state => state.home.users);

  // Filters
  const games = useSelector(state => state.auth.user.games);
  const indexGame = randomNumber(games.length, 0);
  const currentGame = games[indexGame].id;
  const region = useSelector(state => state.auth.user.region);

  const getHomesIndications = useCallback(() => {
    dispatch(HomeActions.getHomeRequest({ game: currentGame, region }));
  }, [currentGame, dispatch, region]);

  useEffect(() => {
    getHomesIndications();
  }, [getHomesIndications]);

  const getGame = playerGames => {
    const game = playerGames.filter(
      playerGame => playerGame.id === games[indexGame].id,
    );

    return game[0].name;
  };

  const getPosition = playerPositions => {
    const position = playerPositions.filter(
      playerPosition => playerPosition.gameId === games[indexGame].id,
    );

    return position[0].description;
  };

  const getRanking = playerRankings => {
    const ranking = playerRankings.filter(
      playerRanking => playerRanking.gameId === games[indexGame].id,
    );

    return ranking[0].description;
  };

  return (
    <ContainerList>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={users}
        renderItem={({ item }) => (
          <Card onPress={() => console.log('Card triggered')}>
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
                    onPress={() => console.log('Play triggered')}
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
