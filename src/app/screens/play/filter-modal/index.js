import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';

import { Modal, Typography } from 'components';
import { ContentModal } from './styles';

const FilterModal = ({ isVisible, onSwipe, onBackdropPress }) => {
  const modalRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScrollTo = position => {
    if (modalRef.current) {
      modalRef.current.scrollTo(position);
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onSwipe={onSwipe}
      onBackdropPress={onBackdropPress}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}>
      <ContentModal>
        <ScrollView
          ref={modalRef}
          onScroll={event =>
            setScrollOffset(event.nativeEvent.contentOffset.y)
          }>
          <Typography size="h1">Play</Typography>
          <Typography size="h1">Play</Typography>
        </ScrollView>
      </ContentModal>
    </Modal>
  );
};

export default FilterModal;
