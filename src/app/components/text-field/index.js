import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import { Container, Input } from './styles';

const TextField = ({ style, icon, theme, ...rest }, ref) => (
  <Container style={style}>
    {icon && (
      <Icon
        name={icon}
        size={theme.controls.icon.small}
        color={theme.colors.opacity.white}
      />
    )}
    <Input {...rest} ref={ref} />
  </Container>
);

TextField.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

TextField.defaultProps = {
  icon: null,
  style: {},
};

export default withTheme(forwardRef(TextField));
