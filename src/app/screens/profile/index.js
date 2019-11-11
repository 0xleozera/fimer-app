import React, { useEffect } from 'react';

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
  const user = useSelector(state => state.profile.user);
  const userId = navigation.getParam('userId');

  useEffect(() => {
    dispatch(ProfileActions.getProfileRequest({ id: userId || authId }));
  }, [authId, dispatch, userId]);

  return (
    <BaseScreen statusBarBackground={theme.colors.primary.dark}>
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
      <HeaderUserInformations data={user} />
      <Games data={user} />
    </BaseScreen>
  );
};

export default Profile;
