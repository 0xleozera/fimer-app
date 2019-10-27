import React from 'react';
import { FlatList } from 'react-native';

import { Typography, Badge } from 'components';
import { ContainerFilters, PositionFilterList } from './styles';

const Filters = () => {
  return (
    <ContainerFilters>
      <Typography font="bold" size="h4" color="contrast">
        Filtros
      </Typography>
      <PositionFilterList>
        <FlatList
          horizontal
          keyExtractor={item => item.name}
          data={[
            { name: 'JOGOS' },
            { name: 'POSIÇÃO' },
            { name: 'RANKING' },
            { name: 'REGIÃO' },
            { name: 'GÊNERO' },
          ]}
          renderItem={({ item }) => <Badge label={item.name} />}
        />
      </PositionFilterList>
    </ContainerFilters>
  );
};

export default Filters;
