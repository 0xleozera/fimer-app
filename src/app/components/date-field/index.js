import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import useTheme from 'hooks/use-theme';

import DatePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

const DateField = ({ date, onChange, placeholder }) => {
  const theme = useTheme();

  const [opened, setOpened] = useState(false);

  const minimumDate = new Date(1950, 0, 0);
  const currentDate = new Date();
  const currentDateIsEqualToDate =
    format(date, 'dd/MM/yyyy', { locale: pt }) ===
    format(currentDate, 'dd/MM/yyyy', { locale: pt });

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date],
  );

  const handleDateChange = (_, newDate) => {
    onChange(newDate);
    setOpened(false);
  };

  return (
    <>
      <Container>
        <DateButton onPress={() => setOpened(!opened)}>
          <Icon
            name="cake"
            color={theme.colors.opacity.white}
            size={theme.controls.icon.small}
          />
          <DateText isPlaceholder={currentDateIsEqualToDate}>
            {currentDateIsEqualToDate ? placeholder : dateFormatted}
          </DateText>
        </DateButton>
      </Container>

      {opened && (
        <Picker>
          <DatePicker
            value={date}
            onChange={handleDateChange}
            minimumDate={minimumDate}
            maximumDate={new Date()}
            mode="date"
            display="calendar"
            is24Hour={true}
            locale="pt-BR"
          />
        </Picker>
      )}
    </>
  );
};

DateField.propTypes = {
  date: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

DateField.defaultProps = {
  date: new Date(),
  onChange: () => {},
  placeholder: '',
};

export default DateField;
