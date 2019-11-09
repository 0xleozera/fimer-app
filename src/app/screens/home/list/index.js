import React, { useEffect } from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';

import useTheme from 'hooks/use-theme';

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

  useEffect(() => {
    dispatch(HomeActions.getHomeRequest());
  }, [dispatch]);

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
                  League of Legends
                </Typography>
                <Typography size="h7" font="medium">
                  AD Carry
                </Typography>
                <Typography size="h7" font="medium">
                  Desafiante
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
