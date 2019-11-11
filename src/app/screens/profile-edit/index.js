import React from 'react';

import useTheme from 'hooks/use-theme';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { BaseScreen, Typography, Header } from 'components';
import { HeaderInformations, SaveButton } from './styles';

const ProfileEdit = () => {
  const theme = useTheme();

  return (
    <BaseScreen statusBarBackground={theme.colors.primary.dark}>
      <Header hasBackButton>
        <HeaderInformations>
          <Typography font="bold" size="h4" color="contrast">
            Editar Perfil
          </Typography>
          <SaveButton onPress={() => console.log('Save triggered')}>
            <IconMaterial
              name="check"
              size={20}
              color={theme.colors.primary.contrast}
            />
          </SaveButton>
        </HeaderInformations>
      </Header>
    </BaseScreen>
  );
};

export default ProfileEdit;
