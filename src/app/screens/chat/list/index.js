import React, { useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';

import formatRelative from 'date-fns/formatRelative';
import parseISO from 'date-fns/parseISO';
import pt from 'date-fns/locale/pt';

import useNavigation from 'hooks/use-navigation';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as MatchActions } from 'ducks/match';

import { Typography, Avatar, If } from 'components';
import {
  ContainerList,
  Card,
  Informations,
  LastMessage,
  EmptyMatches,
} from './styles';

const List = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.id);
  const matches = useSelector(state => state.match.matches);

  const getMyMatches = useCallback(() => {
    dispatch(MatchActions.getMatchesRequest());
  }, [dispatch]);

  useEffect(() => {
    getMyMatches();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    navigation.addListener('willFocus', () => getMyMatches());
    // eslint-disable-next-line
  }, []);

  const getCurrentMatcherId = match => {
    return match.matcher.id !== userId ? match.matcher.id : match.matchee.id;
  };

  const getCurrentMatcherName = match => {
    return match.matcher.id !== userId
      ? match.matcher.nickname
      : match.matchee.nickname;
  };

  const getCurrentMatcherAvatar = match => {
    return match.matcher.id !== userId
      ? match.matcher.avatar.url
      : match.matchee.avatar.url;
  };

  const getCurrentMatcherMessageName = sender => {
    return sender.id !== userId ? sender.nickname : 'Você';
  };

  const getMessageBody = message => {
    return message.length >= 20 ? `${message.substring(0, 20)}...` : message;
  };

  const defineRouteParams = match => ({
    matchId: match.id,
    nickname: getCurrentMatcherName(match),
    avatar: getCurrentMatcherAvatar(match),
    userReceiveId: getCurrentMatcherId(match),
  });

  return (
    <ContainerList>
      <If test={matches.length === 0}>
        <EmptyMatches>
          <Typography font="bold" size="h6" color="contrast">
            Não há conversas no momento 😔
          </Typography>
        </EmptyMatches>
      </If>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={matches}
        renderItem={({ item, index }) => (
          <Card
            isFirstItem={index === 0}
            onPress={() =>
              navigation.navigate('Conversation', defineRouteParams(item))
            }>
            <Avatar noMargin size={50} avatar={getCurrentMatcherAvatar(item)} />
            <Informations>
              <Typography font="bold" color="contrast">
                {getCurrentMatcherName(item)}
              </Typography>

              {item.messages.length > 0 && (
                <LastMessage>
                  <Typography size="h7" font="medium" color="regular">
                    {`${getCurrentMatcherMessageName(
                      item.messages.slice(-1)[0].send,
                    )}: ${getMessageBody(item.messages.slice(-1)[0].body)}`}
                  </Typography>
                </LastMessage>
              )}
            </Informations>
          </Card>
        )}
      />
    </ContainerList>
  );
};

export default List;
