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

  const handleChangeFilter = filter => {
    dispatch(FilterActions.currentFilter(filter));
    openModal(true);
  };

  const handleCurrentData = () => {
    if (game.selected === 0) {
      return [
        { key: 'game', description: 'JOGO', ...game },
        { key: 'region', description: 'REGIÃO', ...region },
        { key: 'gender', description: 'GÊNERO', ...gender },
      ];
    }

    return [
      { key: 'game', description: 'JOGO', ...game },
      { key: 'position', description: 'POSIÇÃO', ...position },
      { key: 'ranking', description: 'RANKING', ...ranking },
      { key: 'region', description: 'REGIÃO', ...region },
      { key: 'gender', description: 'GÊNERO', ...gender },
    ];
  };

  return (
    <ContainerFilters>
      <Typography font="bold" size="h4" color="contrast">
        Filtros
      </Typography>
      <PositionFilterList>
        <FlatList
          horizontal
          keyExtractor={item => item.key}
          data={handleCurrentData()}
          renderItem={({ item }) => (
            <Badge
              onPress={() => handleChangeFilter(item.key)}
              label={item.selected !== 0 ? item.label : item.description}
              active={item.selected !== 0}
            />
          )}
        />
      </PositionFilterList>
    </ContainerFilters>
  );
};

export default Filters;
