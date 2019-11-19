import React, { useEffect, useRef, useCallback } from 'react';
import { FlatList } from 'react-native';

import useNavigation from 'hooks/use-navigation';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as MessageActions } from 'ducks/message';

import { Avatar, Typography } from 'components';
import { Content, ContainerMessage, Spacing, Balloon } from './styles';

const ContentConversation = ({ matchId }) => {
  const dispatch = useDispatch();
  const list = useRef(null);
  const navigation = useNavigation();

  const userId = useSelector(state => state.auth.user.id);
  const messages = useSelector(state => state.message.messages);

  const getMessages = useCallback(() => {
    dispatch(MessageActions.getMessagesRequest(matchId));
  }, [dispatch, matchId]);

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    navigation.addListener('willFocus', () => getMessages());
    // eslint-disable-next-line
  }, []);

  const itsMe = send => send.id === userId;

  return (
    <Content>
      <FlatList
        ref={list}
        keyExtractor={item => item.id.toString()}
        onContentSizeChange={() => list.current.scrollToEnd()}
        data={messages}
        renderItem={({ item }) => (
          <ContainerMessage key={item.id} me={itsMe(item.send)}>
            <Spacing me={itsMe(item.send)}>
              <Avatar noMargin size={45} avatar={item.send.avatar.url} />
            </Spacing>
            <Balloon me={itsMe(item.send)}>
              <Typography size="h7" font="regular" color="contrast">
                {item.body}
              </Typography>
            </Balloon>
          </ContainerMessage>
        )}
      />
    </Content>
  );
};

export default ContentConversation;
