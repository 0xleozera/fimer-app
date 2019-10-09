import camelCaseKeys from 'camelcase-keys';
import snakeCaseKeys from 'snakecase-keys';

const camelize = input => {
  return camelCaseKeys(input, { deep: true });
};

const decamelize = input => {
  return snakeCaseKeys(input, { deep: true });
};

export { camelize, decamelize };
