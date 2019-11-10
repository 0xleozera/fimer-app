import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as FilterActions } from 'ducks/filters';

import { Typography, Badge } from 'components';
import { ContainerFilters, PositionFilterList } from './styles';

const Filters = ({ openModal }) => {
  const dispatch = useDispatch();

  const game = useSelector(state => state.filters.game);
  const position = useSelector(state => state.filters.position);
  const ranking = useSelector(state => state.filters.ranking);
  const region = useSelector(state => state.filters.region);
  const gender = useSelector(state => state.filters.gender);

  useEffect(() => {
    dispatch(FilterActions.getAllGamesRequest());
  }, [dispatch]);

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
