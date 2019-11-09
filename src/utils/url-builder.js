export const URLBuilder = ({
  game = '',
  ranking = '',
  position = '',
  region = '',
  gender = '',
}) => {
  const hasGame = game;
  const hasRanking = ranking;
  const hasPosition = position;
  const hasRegion = region;
  const hasGender = gender;

  if (!hasGame && !hasRanking && !hasPosition && !hasRegion && !hasGender) {
    return '';
  }

  const query = defineQuery({ game, ranking, position, region, gender });

  return buildQuery(query);
};

const defineQuery = ({ game, ranking, position, region, gender }) => {
  const filters = [
    { filter: 'games', isArray: true, value: game },
    { filter: 'rankings', isArray: true, value: ranking },
    { filter: 'positions', isArray: true, value: position },
    { filter: 'region', isArray: false, value: region },
    { filter: 'gender', isArray: false, value: gender },
  ];
  const query = [];

  filters.forEach(currentFilter =>
    currentFilter.value
      ? query.push(
          `${
            currentFilter.isArray
              ? `${currentFilter.filter}[]`
              : `${currentFilter.filter}`
          }=${currentFilter.value}`,
        )
      : '',
  );

  return query;
};

const buildQuery = query => {
  return query.length > 0
    ? query.reduce((finalQuery, current, index) => {
        if (index === 0) {
          return `?${current}&`;
        }

        if (index === query.length - 1) {
          return `${finalQuery}${current}`;
        }

        if (index < query.length - 1) {
          return `${finalQuery}${current}&`;
        }
      }, '')
    : '';
};
