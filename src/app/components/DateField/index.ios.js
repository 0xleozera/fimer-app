import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

const DateField = ({ date, onChange, placeholder }) => {
  const [opened, setOpened] = useState(false);

  const currentDate = new Date();
  const currentDateIsEqualToDate =
    currentDate.getUTCDate() === date.getUTCDate();

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date],
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="rgba(255, 255, 255, 0.6)" size={20} />
        <DateText isPlaceholder={currentDateIsEqualToDate}>
          {currentDateIsEqualToDate ? placeholder : dateFormatted}
        </DateText>

        {opened && (
          <Picker>
            <DatePickerIOS
              date={date}
              onDateChange={onChange}
              minimumDate={currentDate}
              minuteInterval={60}
              locale="pt"
              mode="date"
            />
          </Picker>
        )}
      </DateButton>
    </Container>
  );
};

export default DateField;
