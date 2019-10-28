import React from 'react';
import PropTypes from 'prop-types';

import { Dialog } from './styles';

const Modal = ({ isVisible, onSwipe, onBackdropPress, children }) => {
  return (
    <Dialog
      isVisible={isVisible}
      onSwipeComplete={onSwipe}
      onBackdropPress={onBackdropPress}
      swipeDirection="down">
      {children}
    </Dialog>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  onSwipe: PropTypes.func,
  onBackdropPress: PropTypes.func,
};

Modal.defaultProps = {
  isVisible: false,
  onSwipe: () => {},
  onBackdropPress: () => {},
};

export default Modal;
