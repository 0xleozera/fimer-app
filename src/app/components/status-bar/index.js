import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles';

const StatusBar = ({ backgroundColor, ...props }) => (
  <Container backgroundColor={backgroundColor}>
    <RNStatusBar translucent backgroundColor={backgroundColor} {...props} />
  </Container>
);

StatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default StatusBar;
