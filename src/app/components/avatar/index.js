import React from 'react';
import PropTypes from 'prop-types';

import useTheme from 'hooks/use-theme';

import Icon from 'react-native-vector-icons/Ionicons';

import { If } from 'components';
import {
  Button,
  Container,
  ContainerAvatar,
  UserImage,
  ContainerIcon,
} from './styles';

const Avatar = ({ onPress, avatar, uploader, size, sizeIcon, noMargin }) => {
  const theme = useTheme();

  return (
    <Button onPress={onPress}>
      <Container noMargin={noMargin} size={size}>
        <ContainerAvatar size={size}>
          <If test={!!avatar}>
            <UserImage source={{ uri: avatar }} size={size} />
          </If>

          <If test={!avatar}>
            <Icon
              name="md-person"
              size={sizeIcon}
              color={theme.colors.primary.regular}
            />
          </If>
        </ContainerAvatar>
        <If test={uploader}>
          <ContainerIcon>
            <Icon
              name="ios-camera"
              size={15}
              color={theme.colors.primary.contrast}
            />
          </ContainerIcon>
        </If>
      </Container>
    </Button>
  );
};

Avatar.propTypes = {
  onPress: PropTypes.func,
  avatar: PropTypes.string,
  uploader: PropTypes.bool,
  size: PropTypes.number,
  sizeIcon: PropTypes.number,
  noMargin: PropTypes.bool,
};

Avatar.defaultProps = {
  onPress: () => {},
  avatar: 'AB',
  uploader: false,
  size: 50,
  sizeIcon: 20,
  noMargin: false,
};

export default Avatar;
