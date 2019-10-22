import React from 'react';
import { Text } from 'react-native';

import useTheme from 'hooks/use-theme';

import { BaseScreen } from 'components';

const Profile = () => {
  const theme = useTheme();

  return (
    <BaseScreen>
      <Text>Profile</Text>
    </BaseScreen>
  );
};

export default Profile;
