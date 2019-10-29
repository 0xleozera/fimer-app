import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import theme from 'configs/theme';

import { Dialog } from './styles';

const Modal = ({
  isVisible,
  onSwipe,
  scrollTo,
  scrollOffset,
  onBackdropPress,
  statusBarColor,
  children,
}) => {
  useEffect(() => {
    isVisible
      ? StatusBar.setBackgroundColor('rgba(0,0,0,0.7)')
      : StatusBar.setBackgroundColor(statusBarColor);
  }, [isVisible, statusBarColor]);

  return (
    <Dialog
      isVisible={isVisible}
      onSwipeComplete={onSwipe}
      onBackdropPress={onBackdropPress}
      scrollTo={scrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={150}
      swipeDirection="down">
      {children}
    </Dialog>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  statusBarColor: PropTypes.string,
  isVisible: PropTypes.bool,
  scrollOffset: PropTypes.number,
  scrollTo: PropTypes.func,
  onSwipe: PropTypes.func,
  onBackdropPress: PropTypes.func,
};

Modal.defaultProps = {
  isVisible: false,
  scrollOffset: 0,
  statusBarColor: theme.colors.primary.dark,
  onSwipe: () => {},
  onBackdropPress: () => {},
  scrollTo: () => {},
};

export default Modal;
