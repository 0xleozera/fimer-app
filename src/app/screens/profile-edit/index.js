import React, { useState } from 'react';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import useTheme from 'hooks/use-theme';

import { useSelector } from 'react-redux';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { BaseScreen, Typography, Header } from 'components';
import { HeaderInformations, SaveButton, Content } from './styles';

import Informations from './informations';

const ProfileEdit = () => {
  const theme = useTheme();
  const currentUser = useSelector(state => state.profile.user);

  const [user, setUser] = useState(currentUser);

  const handleChangeUser = (field, value) => {
    setUser(oldUser => ({
      ...oldUser,
      [field]: value,
    }));
  };

  const handleChangeBirthDateUser = value => {
    const formattedBirthDate = format(value, 'dd/MM/yyyy', {
      locale: pt,
    });

    setUser(oldUser => ({
      ...oldUser,
      birthDate: formattedBirthDate,
    }));
  };

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
      <Content>
        <Informations
          user={user}
          setBirthDate={handleChangeBirthDateUser}
          setUser={(field, value) => handleChangeUser(field, value)}
        />
      </Content>
    </BaseScreen>
  );
};

export default ProfileEdit;
