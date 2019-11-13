import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'components';
import { Error } from './styles';

const ErrorMessage = ({ message }) => (
  <Error>
    <Typography size="h8" font="bold" type="actions" color="red">
      {message}
    </Typography>
  </Error>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: 'Campo obrigatório',
};

export default ErrorMessage;
