import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import useTheme from 'hooks/use-theme';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import { Modal, SelectItem, Typography } from 'components';
import {
  Container,
  Label,
  SelectButton,
  SelectText,
  ContentModal,
  TitleModal,
  ClearButton,
  WrapperIconButton,
} from './styles';

const SelectField = ({ label, value, onChange, placeholder, options }) => {
  const theme = useTheme();
  const [opened, setOpened] = useState(false);

  const modalRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleChangeOptions = option => {
    onChange(option);
  };

  const handleScrollTo = currentPosition => {
    if (modalRef.current) {
      modalRef.current.scrollTo(currentPosition);
    }
  };

  const handleClearFilter = () => {
    handleChangeOptions({ id: 0, description: '' });
    setOpened(false);
  };

  const handlePressed = ({ id, description }) => {
    handleChangeOptions({ id, description });
    setOpened(false);
  };

  const renderItems = () => {
    const mappedItems = options.map(item => (
      <SelectItem
        key={item.id}
        label={item.description}
        active={value === item.description}
        onPress={() => handlePressed(item)}
      />
    ));

    return mappedItems;
  };

  return (
    <>
      <Container>
        {!!label && (
          <Label>
            <Typography font="bold" size="h7" color="contrast">
              {label}
            </Typography>
          </Label>
        )}
        <SelectButton onPress={() => setOpened(!opened)}>
          <Icon
            name="logo-game-controller-b"
            color={theme.colors.opacity.white}
            size={theme.controls.icon.small}
          />
          <SelectText isPlaceholder={value === ''}>
            {value === '' ? placeholder : value}
          </SelectText>
        </SelectButton>
      </Container>

      {opened && (
        <Modal
          isVisible={opened}
          onSwipe={() => setOpened(false)}
          onBackdropPress={() => setOpened(false)}
          scrollTo={handleScrollTo}
          scrollOffset={scrollOffset}>
          <ContentModal>
            <TitleModal>
              <Typography font="bold" size="h7" color="contrast">
                {placeholder.toUpperCase()}
              </Typography>
              <ClearButton onPress={() => handleClearFilter()}>
                <WrapperIconButton>
                  <IconMaterial
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
      )}
    </>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: '',
  value: '',
  onChange: () => {},
  placeholder: '',
  options: [],
};

export default SelectField;
