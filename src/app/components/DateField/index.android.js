import React, { useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles';

const DateField = ({ date, onChange, placeholder }) => {
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date],
  );

  const currentDate = new Date();
  const currentDateIsEqualToDate =
    currentDate.getUTCDate() === date.getUTCDate();

  const handleOpenPicker = async () => {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  };

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="rgba(255, 255, 255, 0.6)" size={20} />
        <DateText isPlaceholder={currentDateIsEqualToDate}>
          {currentDateIsEqualToDate ? placeholder : dateFormatted}
        </DateText>
      </DateButton>
    </Container>
  );
};

export default DateField;
