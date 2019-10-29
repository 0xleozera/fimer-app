import React from 'react';
import PropTypes from 'prop-types';

import theme from 'configs/theme';

import { Container } from './styles';

const Separator = ({ background }) => <Container background={background} />;

Separator.propTypes = {
  background: PropTypes.string,
};

Separator.defaultProps = {
  background: theme.colors.accent.regular,
};

export default Separator;
