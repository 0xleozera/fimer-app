import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import useTheme from 'hooks/use-theme';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import { Modal, SelectItem, Typography, ErrorMessage } from 'components';
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

const SelectField = ({
  label,
  value,
  icon,
  onChange,
  placeholder,
  options,
  container,
  statusBarColor,
  hasError,
  errorMessage,
}) => {
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

  const hanldeIcon = () => {
    if (icon === 'transgender-alt') {
      return (
        <IconAwesome
          name={icon}
          color={theme.colors.opacity.white}
          size={theme.controls.icon.small}
        />
      );
    }

    if (icon === 'home') {
      return (
        <IconMaterial
          name={icon}
          color={theme.colors.opacity.white}
          size={theme.controls.icon.small}
        />
      );
    }

    return (
      <Icon
        name={icon}
        color={theme.colors.opacity.white}
        size={theme.controls.icon.small}
      />
    );
  };

  return (
    <>
      <Container container={container}>
        {!!label && (
          <Label>
            <Typography font="bold" size="h7" color="contrast">
              {label}
            </Typography>
          </Label>
        )}
        <SelectButton onPress={() => setOpened(!opened)}>
          {hanldeIcon()}
          <SelectText isPlaceholder={value === ''}>
            {!value ? placeholder : value}
          </SelectText>
        </SelectButton>
        {hasError && !value && <ErrorMessage message={errorMessage} />}
      </Container>

      <Modal
        isVisible={opened}
        onSwipe={() => setOpened(false)}
        onBackdropPress={() => setOpened(false)}
        scrollTo={handleScrollTo}
        scrollOffset={scrollOffset}
        statusBarColor={statusBarColor || theme.colors.primary.dark}>
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
    </>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  icon: PropTypes.string,
  container: PropTypes.bool,
  statusBarColor: PropTypes.string,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

SelectField.defaultProps = {
  label: '',
  value: '',
  onChange: () => {},
  placeholder: '',
  options: [],
  icon: 'logo-game-controller-b',
  container: true,
  statusBarColor: '',
  hasError: false,
  errorMessage: 'Campo obrigatório',
};

export default SelectField;
