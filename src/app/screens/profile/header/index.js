import React from 'react';

import useTheme from 'hooks/use-theme';

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
} from './styles';

const Header = ({ data }) => {
  const theme = useTheme();
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

  return (
    <ContainerUserInformations>
      <AvatarAndNickUser>
        <Avatar
          size={150}
          avatar="https://scontent.fccm7-1.fna.fbcdn.net/v/t1.0-1/p160x160/25353925_1651673918223614_4154371523069863251_n.jpg?_nc_cat=104&_nc_oc=AQlptuWqU9BzpzTjg7NxLD0LlEl0GvEuV1wOoPlS7unUbJLw7-C-9PKpuNZr2VlQyEI&_nc_ht=scontent.fccm7-1.fna&oh=128d539f2226b3fb44c4df5775ca7f20&oe=5E2C85E9"
        />
        <Typography font="bold" size="h3" color="contrast">
          Darfus
        </Typography>
      </AvatarAndNickUser>
      <PositionInformationsAndActionButton>
        <WrapperInformations>{renderUserInformations()}</WrapperInformations>
        <WrapperPlayButton>
          <PlayButton
            background={theme.colors.accent.regular}
            loading={false}
            onPress={() => {}}
            hasIcon>
            Jogar
          </PlayButton>
        </WrapperPlayButton>
      </PositionInformationsAndActionButton>
    </ContainerUserInformations>
  );
};

export default Header;
