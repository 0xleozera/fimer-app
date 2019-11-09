import React from 'react';

import useTheme from 'hooks/use-theme';
import useNavigation from 'hooks/use-navigation';

import { useDispatch } from 'react-redux';
import { Creators as AuthActions } from 'ducks/auth';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import { Avatar, Typography, If } from 'components';
import {
  ContainerUserInformations,
  AvatarAndNickUser,
  PositionInformationsAndActionButton,
  WrapperInformations,
  Information,
  WrapperIcon,
  WrapperPlayButton,
  PlayButton,
  ConfigButton,
} from './styles';

const Header = ({ data }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const parsedData = Object.entries(data);

  const getIcon = icon => {
    const icons = {
      name: (
        <IconMaterial
          name="person"
          size={18}
          color={theme.colors.secondary.regular}
        />
      ),
      birthDate: (
        <IconMaterial
          name="cake"
          size={18}
          color={theme.colors.secondary.regular}
        />
      ),
      region: (
        <IconMaterial
          name="location-on"
          size={18}
          color={theme.colors.secondary.regular}
        />
      ),
      gender: (
        <IconAwesome
          name="transgender-alt"
          size={18}
          color={theme.colors.secondary.regular}
        />
      ),
    };

    return icons[icon];
  };

  const filterCorrectFields = ([key]) => {
    const fields = ['name', 'birthDate', 'region', 'gender'];

    return fields.includes(key);
  };

  const mappedFields = ([key, value]) => (
    <If key={key} test={!!value}>
      <Information>
        <WrapperIcon>{getIcon(key)}</WrapperIcon>
        <Typography font="medium" type="secondary" color="regular">
          {value}
        </Typography>
      </Information>
    </If>
  );

  const renderUserInformations = () => {
    const informations = parsedData
      .filter(filterCorrectFields)
      .map(mappedFields);

    return informations;
  };

  const handleRedirectRoute = route => navigation.navigate(route);

  const handleSignOutPressed = () => {
    dispatch(AuthActions.signOut());
  };

  return (
    <ContainerUserInformations>
      <If test={navigation.state.routeName === 'ShowMyProfile'}>
        <ConfigButton isLeft onPress={() => handleSignOutPressed()}>
          <IconMaterial
            name="exit-to-app"
            size={20}
            color={theme.colors.primary.contrast}
          />
        </ConfigButton>

        <ConfigButton onPress={() => handleRedirectRoute('EditProfile')}>
          <IconMaterial
            name="edit"
            size={20}
            color={theme.colors.primary.contrast}
          />
        </ConfigButton>
      </If>

      <AvatarAndNickUser>
        <Avatar
          size={150}
          avatar="https://www.maisesports.com.br/wp-content/uploads/2019/06/brTT-e-Flanalista-Flamengo-2%C2%BA-Split-CBLoL-2019-1.jpg"
        />
        <Typography font="bold" size="h3" color="contrast">
          {data.nickname}
        </Typography>
      </AvatarAndNickUser>
      <PositionInformationsAndActionButton>
        <WrapperInformations>{renderUserInformations()}</WrapperInformations>

        <If test={navigation.state.routeName === 'ShowProfile'}>
          <WrapperPlayButton>
            <PlayButton
              background={theme.colors.accent.regular}
              loading={false}
              onPress={() => {}}
              hasIcon>
              Jogar
            </PlayButton>
          </WrapperPlayButton>
        </If>
      </PositionInformationsAndActionButton>
    </ContainerUserInformations>
  );
};

export default Header;
