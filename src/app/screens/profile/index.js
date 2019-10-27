import React, { useEffect } from 'react';

import useTheme from 'hooks/use-theme';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as ProfileActions } from 'ducks/profile';

import { BaseScreen } from 'components';
import Header from './header';
import Games from './games';

const Profile = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const authId = useSelector(state => state.auth.user.id);
  const user = useSelector(state => state.profile.user);

  useEffect(() => {
    dispatch(ProfileActions.getProfileRequest({ id: authId }));
  }, [authId, dispatch]);

  return (
    <BaseScreen statusBarBackground={theme.colors.primary.dark}>
      <Header data={user} />
      <Games data={user} />
    </BaseScreen>
  );
};

export default Profile;
