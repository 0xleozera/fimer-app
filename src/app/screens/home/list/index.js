import React from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';

import useTheme from 'hooks/use-theme';

import { Typography, Avatar } from 'components';
import {
  ContainerList,
  Card,
  Informations,
  Nickname,
  PlayButton,
  Details,
} from './styles';

const List = () => {
  const theme = useTheme();

  return (
    <ContainerList>
      <FlatList
        keyExtractor={item => item.name}
        data={[
          { name: 'JOGOS' },
          { name: 'POSIÇÃO' },
          { name: 'RANKING' },
          { name: 'REGIÃO' },
          { name: 'GÊNERO' },
        ]}
        renderItem={({ item }) => (
          <Card onPress={() => console.log('Card triggered')}>
            <Avatar
              noMargin
              size={50}
              avatar="https://www.maisesports.com.br/wp-content/uploads/2019/06/brTT-e-Flanalista-Flamengo-2%C2%BA-Split-CBLoL-2019-1.jpg"
            />
            <Informations>
              <Nickname>
                <Typography font="bold" color="contrast">
                  brTT
                </Typography>
                <TouchableWithoutFeedback>
                  <PlayButton
                    background={theme.colors.accent.regular}
                    onPress={() => console.log('Play triggered')}
                    hasIcon
                    mini>
                    Jogar
                  </PlayButton>
                </TouchableWithoutFeedback>
              </Nickname>
              <Details>
                <Typography size="h7" font="medium">
                  League of Legends
                </Typography>
                <Typography size="h7" font="medium">
                  AD Carry
                </Typography>
                <Typography size="h7" font="medium">
                  Desafiante
                </Typography>
              </Details>
            </Informations>
          </Card>
        )}
      />
    </ContainerList>
  );
};

export default List;
