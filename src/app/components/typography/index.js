import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './styles';

const Typography = ({ font, size, type, color, children }) => (
  <Text font={font} size={size} type={type} color={color}>
    {children}
  </Text>
);

Typography.propTypes = {
  font: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

Typography.defaultProps = {
  font: 'regular',
  size: 'h6',
  type: 'secondary',
  color: 'regular',
};

export default Typography;
