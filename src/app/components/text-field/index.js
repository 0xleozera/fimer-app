import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import useTheme from 'hooks/use-theme';

import { ErrorMessage } from 'components';
import { Container, Input, Field } from './styles';

const TextField = ({ style, icon, hasError, errorMessage, ...rest }, ref) => {
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
    <Container>
      <Field style={style}>
        {icon && renderIcon()}
        <Input {...rest} ref={ref} />
      </Field>
      {hasError && !rest.value && <ErrorMessage message={errorMessage} />}
    </Container>
  );
};

TextField.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

TextField.defaultProps = {
  icon: null,
  style: {},
  hasError: false,
  errorMessage: 'Campo obrigatório',
};

export default forwardRef(TextField);
