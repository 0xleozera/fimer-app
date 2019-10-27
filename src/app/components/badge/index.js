import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'components';
import { ContainerBadge, ButtonBadge } from './styles';

const Badge = ({ label }) => {
  return (
    <ContainerBadge>
      <ButtonBadge>
        <Typography size="h7" font="bold" color="contrast">
          {label}
        </Typography>
      </ButtonBadge>
    </ContainerBadge>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
};

Badge.defaultProps = {
  label: '',
};

export default Badge;
