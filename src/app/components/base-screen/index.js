import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { StatusBar } from 'components';
import { Container, Safe } from './styles';

const BaseScreen = ({ children }) => (
  <Container>
    <StatusBar backgroundColor="#32334d" barStyle="light-content" />
    <Safe>
      <ScrollView>{children}</ScrollView>
    </Safe>
  </Container>
);

BaseScreen.propTypes = {
  children: PropTypes.node,
};

export default BaseScreen;
