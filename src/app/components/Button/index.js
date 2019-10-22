import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import useTheme from 'hooks/use-theme';

import { Container, Text } from './styles';

const Button = ({ children, loading, ...rest }) => {
  const theme = useTheme();

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

export default Button;
