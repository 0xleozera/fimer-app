import React from 'react';
import { FlatList } from 'react-native';

import { Typography, Avatar } from 'components';
import { ContainerList, Card, Nickname } from './styles';

const List = () => {
  return (
    <ContainerList>
      <FlatList
        keyExtractor={item => item.name}
        data={[
          { name: 'JOGOS' },
          { name: 'POSIÇÃO' },
          { name: 'RANKING' },
          { name: 'REGIÃO' },
          { name: 'GAME' },
        ]}
        renderItem={({ item }) => (
          <Card onPress={() => console.log('Card triggered')}>
            <Avatar
              noMargin
              size={50}
              avatar="https://www.maisesports.com.br/wp-content/uploads/2019/06/brTT-e-Flanalista-Flamengo-2%C2%BA-Split-CBLoL-2019-1.jpg"
            />
            <Nickname>
              <Typography font="bold" color="contrast">
                brTT
              </Typography>
            </Nickname>
          </Card>
        )}
      />
    </ContainerList>
  );
};

export default List;
