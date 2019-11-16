import React from 'react';

import { splitDate } from 'utils/date';
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears';

import useTheme from 'hooks/use-theme';
import useNavigation from 'hooks/use-navigation';

import { useDispatch } from 'react-redux';
import { Creators as AuthActions } from 'ducks/auth';
import { Creators as ProfileActions } from 'ducks/profile';

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

const Header = ({ data, status }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const parsedData = Object.entries(data);

  const getButtonLabel = () => {
    const labels = {
      matched: 'Jogando',
      liked: 'Esperando',
      playable: 'Jogar',
      unplayable: 'Jogar',
    };

    return labels[status];
  };

  const handlePressButton = id => {
    if (status === 'matched' || status === 'liked') {
      dispatch(ProfileActions.profileUnlikeRequest(id));
      return;
    }

    dispatch(ProfileActions.profileLikeRequest(id));
  };

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

  const formatBirthDate = birthDate => {
    const { day, month, years } = splitDate(birthDate);
    const difference = differenceInCalendarYears(
      new Date(),
      new Date(years, month, day),
    );

    return `${difference} anos`;
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
          {key === 'birthDate' ? formatBirthDate(value) : value}
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
        <Avatar size={150} sizeIcon={80} avatar={data.avatar.url} />
        <Typography font="bold" size="h3" color="contrast">
          {data.nickname}
        </Typography>
      </AvatarAndNickUser>
      <PositionInformationsAndActionButton>
        <WrapperInformations>{renderUserInformations()}</WrapperInformations>

        <If
          test={[
            'ShowProfileHome',
            'ShowProfilePlay',
            'ShowProfileChat',
          ].includes(navigation.state.routeName)}>
          <WrapperPlayButton>
            <PlayButton
              background={theme.colors.accent.regular}
              loading={false}
              onPress={() => handlePressButton(data.id)}
              hasIcon>
              {getButtonLabel()}
            </PlayButton>
          </WrapperPlayButton>
        </If>
      </PositionInformationsAndActionButton>
    </ContainerUserInformations>
  );
};

export default Header;
