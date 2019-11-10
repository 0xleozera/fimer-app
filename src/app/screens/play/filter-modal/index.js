import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';

import useTheme from 'hooks/use-theme';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as FilterActions } from 'ducks/filters';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Modal, Typography, SelectItem } from 'components';
import {
  ContentModal,
  TitleModal,
  ClearButton,
  WrapperIconButton,
} from './styles';

const FilterModal = ({ isVisible, closeModal }) => {
  const theme = useTheme();
  const modalRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const dispatch = useDispatch();

  const filters = useSelector(state => state.filters);
  const currentFilter = useSelector(state => state.filters.currentFilter);

  const handleScrollTo = currentPosition => {
    if (modalRef.current) {
      modalRef.current.scrollTo(currentPosition);
    }
  };

  const handlePressed = ({ id: selected, slug: label }) => {
    dispatch(
      FilterActions.setFilter({ field: currentFilter, selected, label }),
    );
    closeModal();
  };

  const renderItems = () => {
    const mappedItems = filters[currentFilter].items.map(item => (
      <SelectItem
        key={item.id}
        label={item.description}
        active={filters[currentFilter].selected === item.id}
        onPress={() => handlePressed(item)}
      />
    ));

    return mappedItems;
  };

  return (
    <Modal
      isVisible={isVisible}
      onSwipe={closeModal}
      onBackdropPress={closeModal}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}>
      <ContentModal>
        <TitleModal>
          <Typography font="bold" size="h7" color="contrast">
            {filters[currentFilter].modal}
          </Typography>
          <ClearButton onPress={() => console.log('Clear triggered')}>
            <WrapperIconButton>
              <Icon
                size={10}
                color={theme.colors.primary.regular}
                name="close"
              />
            </WrapperIconButton>
            <Typography font="bold" size="h7" color="contrast">
              LIMPAR
            </Typography>
          </ClearButton>
        </TitleModal>
        <ScrollView
          ref={modalRef}
          onScroll={event => {
            setScrollOffset(event.nativeEvent.contentOffset.y);
          }}>
          {renderItems()}
        </ScrollView>
      </ContentModal>
    </Modal>
  );
};

export default FilterModal;
