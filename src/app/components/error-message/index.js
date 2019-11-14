import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'components';
import { Error } from './styles';

const ErrorMessage = ({ message, breatheBottom }) => (
  <Error breatheBottom={breatheBottom}>
    <Typography size="h8" font="bold" type="actions" color="red">
      {message}
    </Typography>
  </Error>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
  breatheBottom: PropTypes.bool,
};

ErrorMessage.defaultProps = {
  message: 'Campo obrigatório',
  breatheBottom: false,
};

export default ErrorMessage;
