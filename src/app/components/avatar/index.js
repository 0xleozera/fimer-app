import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import useTheme from 'hooks/use-theme';

import Icon from 'react-native-vector-icons/Ionicons';

import { If } from 'components';
import { Container, ContainerAvatar, UserImage, ContainerIcon } from './styles';

const Avatar = ({ onPress, avatar, uploader, size, sizeIcon }) => {
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container size={size}>
        <ContainerAvatar size={size}>
          <If test={!!avatar}>
            <UserImage source={{ uri: avatar }} />
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
          <ContainerIcon size={size}>
            <Icon
              name="ios-camera"
              size={15}
              color={theme.colors.primary.contrast}
            />
          </ContainerIcon>
        </If>
      </Container>
    </TouchableWithoutFeedback>
  );
};

Avatar.propTypes = {
  onPress: PropTypes.func,
  avatar: PropTypes.string,
  uploader: PropTypes.bool,
  size: PropTypes.number,
  sizeIcon: PropTypes.number,
};

Avatar.defaultProps = {
  onPress: () => {},
  avatar: 'AB',
  uploader: false,
  size: 50,
  sizeIcon: 20,
};

export default Avatar;
