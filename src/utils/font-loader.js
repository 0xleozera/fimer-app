import { Platform } from 'react-native';

const FONT_NAME = 'Montserrat';

const fontLoader = type => {
  const font = `${FONT_NAME}-${type}`;

  return Platform.OS === 'android'
    ? font.toLowerCase().replace(/(-)/g, '_')
    : font;
};

export default fontLoader;
