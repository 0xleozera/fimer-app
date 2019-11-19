import React, { useEffect, useCallback } from 'react';

import useTheme from 'hooks/use-theme';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as ProfileActions } from 'ducks/profile';

import { BaseScreen, Header, Typography, If } from 'components';

import HeaderUserInformations from './header';
import Games from './games';

const Profile = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const authId = useSelector(state => state.auth.user.id);
  const status = useSelector(state => state.profile.status);
  const user = useSelector(state => state.profile.user);
  const loading = useSelector(state => state.profile.isLoading);

  const userId = navigation.getParam('userId');

  const getProfile = useCallback(() => {
    dispatch(ProfileActions.getProfileRequest({ id: userId || authId }));
  }, [authId, dispatch, userId]);

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    navigation.addListener('willFocus', () => getProfile());
    // eslint-disable-next-line
  }, []);

  return (
    <BaseScreen
      loading={loading}
      statusBarBackground={theme.colors.primary.dark}>
      <If
        test={[
          'ShowProfileHome',
          'ShowProfilePlay',
          'ShowProfileChat',
        ].includes(navigation.state.routeName)}>
        <Header>
          <Typography size="h4" font="bold" color="contrast">
            Perfil
          </Typography>
        </Header>
      </If>
      <HeaderUserInformations data={user} status={status} />
      <Games data={user} />
    </BaseScreen>
  );
};

export default Profile;
