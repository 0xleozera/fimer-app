import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'components';
import { ContainerBadge, ButtonBadge } from './styles';

const Badge = ({ label, onPress }) => {
  return (
    <ContainerBadge>
      <ButtonBadge onPress={onPress}>
        <Typography size="h7" font="bold" color="contrast">
          {label}
        </Typography>
      </ButtonBadge>
    </ContainerBadge>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
};

Badge.defaultProps = {
  label: '',
  onPress: () => {},
};

export default Badge;
