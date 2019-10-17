import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, Input } from './styles';

const TextField = ({ style, icon, ...rest }, ref) => (
  <Container style={style}>
    {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
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

export default forwardRef(TextField);
