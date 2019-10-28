import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'components';
import { ContainerItem } from './styles';

const SelectItem = ({ label, active, onPress }) => {
  return (
    <ContainerItem active={active} onPress={onPress}>
      <Typography font="bold" color={active ? 'contrast' : 'regular'}>
        {label}
      </Typography>
    </ContainerItem>
  );
};

SelectItem.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

SelectItem.defaultProps = {
  label: '',
  active: false,
  onPress: () => {},
};

export default SelectItem;
