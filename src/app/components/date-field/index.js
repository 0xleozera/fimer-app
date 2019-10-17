import React, { useState, useMemo } from 'react';
import DatePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

const DateField = ({ date, onChange, placeholder }) => {
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
          <Icon name="cake" color="rgba(255, 255, 255, 0.6)" size={20} />
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

export default DateField;
