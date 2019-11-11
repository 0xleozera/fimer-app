import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import useTheme from 'hooks/use-theme';

import { Container, Input } from './styles';

const TextField = ({ style, icon, ...rest }, ref) => {
  const theme = useTheme();

  const renderIcon = () => {
    if (icon === 'transgender-alt') {
      return (
        <IconAwesome
          name="transgender-alt"
          size={theme.controls.icon.small}
          color={theme.colors.opacity.white}
        />
      );
    }

    if (icon === 'logo-game-controller-b') {
      return (
        <IconIonicons
          name="logo-game-controller-b"
          size={theme.controls.icon.small}
          color={theme.colors.opacity.white}
        />
      );
    }

    return (
      <IconMaterial
        name={icon}
        size={theme.controls.icon.small}
        color={theme.colors.opacity.white}
      />
    );
  };

  return (
    <Container style={style}>
      {icon && renderIcon()}
      <Input {...rest} ref={ref} />
    </Container>
  );
};

TextField.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

TextField.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(TextField);
