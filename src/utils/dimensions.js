import { Dimensions } from 'react-native';

export const getViewportDimension = dimension => {
  return Dimensions.get('window')[dimension];
};

export const parsePercentageToPixels = percentage => {
  const value = (percentage * getViewportDimension('width')) / 100;

  return Math.round(value);
};
