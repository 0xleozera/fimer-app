import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import { StatusBar } from 'components';
import { Container, Safe } from './styles';

const BaseScreen = ({ theme, children }) => (
  <Container>
    <StatusBar
      backgroundColor={theme.colors.primary.regular}
      barStyle="light-content"
    />
    <Safe>
      <ScrollView>{children}</ScrollView>
    </Safe>
  </Container>
);

BaseScreen.propTypes = {
  children: PropTypes.node,
};

export default withTheme(BaseScreen);
