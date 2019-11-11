import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'components';
import { ContainerBadge, ButtonBadge } from './styles';

const Badge = ({ label, active, onPress }) => {
  return (
    <ContainerBadge>
      <ButtonBadge onPress={onPress} active={active}>
        <Typography size="h7" font="bold" color="contrast">
          {label}
        </Typography>
      </ButtonBadge>
    </ContainerBadge>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

Badge.defaultProps = {
  label: '',
  active: false,
  onPress: () => {},
};

export default Badge;
