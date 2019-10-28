import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';

import useTheme from 'hooks/use-theme';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Modal, Typography, SelectItem } from 'components';
import {
  ContentModal,
  TitleModal,
  ClearButton,
  WrapperIconButton,
} from './styles';

// MOCK DATA
const data = [
  { name: 'League of Legends' },
  { name: 'Fortnite' },
  { name: 'Counter Strike: Global Offensive' },
  { name: 'Dota2' },
];

const FilterModal = ({ isVisible, onSwipe, onBackdropPress }) => {
  const theme = useTheme();
  const modalRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScrollTo = position => {
    if (modalRef.current) {
      modalRef.current.scrollTo(position);
    }
  };

  const renderItems = () => {
    const mappedItems = data.map((item, index) => (
      <SelectItem
        key={item.name}
        label={item.name}
        active={index === 1}
        onPress={() => console.log('Select triggered')}
      />
    ));

    return mappedItems;
  };

  return (
    <Modal
      isVisible={isVisible}
      onSwipe={onSwipe}
      onBackdropPress={onBackdropPress}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}>
      <ContentModal>
        <TitleModal>
          <Typography font="bold" size="h7" color="contrast">
            ESCOLHA O JOGO
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
