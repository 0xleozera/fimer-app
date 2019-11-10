import React from 'react';
import { FlatList } from 'react-native';

import { Typography, Badge } from 'components';
import { ContainerFilters, PositionFilterList } from './styles';

const Filters = ({ openModal }) => {
  return (
    <ContainerFilters>
      <Typography font="bold" size="h4" color="contrast">
        Filtros
      </Typography>
      <PositionFilterList>
        <FlatList
          horizontal
          keyExtractor={item => item.label}
          data={[
            { label: 'JOGOS' },
            { label: 'POSIÇÃO' },
            { label: 'RANKING' },
            { label: 'REGIÃO' },
            { label: 'GÊNERO' },
          ]}
          renderItem={({ item }) => (
            <Badge onPress={() => openModal(true)} label={item.label} />
          )}
        />
      </PositionFilterList>
    </ContainerFilters>
  );
};

export default Filters;
