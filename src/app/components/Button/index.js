import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import { Container, Text } from './styles';

const Button = ({ children, loading, theme, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.primary.contrast} />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default withTheme(Button);
