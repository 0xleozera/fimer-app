import fontLoader from 'utils/font-loader';

const Theme = {
  colors: {
    primary: {
      regular: '#00E54C',
      contrast: '#FFFFFF',
    },
    secondary: {
      light: '#EBEBEB',
      regular: '#8F8F8F',
      dark: '#3A3A3A',
      contrast: '#8F8F8F',
    },
    danger: {
      light: '#FF9E7C',
      regular: '#FF7849',
      dark: '#FF5216',
      contrast: '#FFFFFF',
    },
    accent: {
      blue: '#453885',
      red: '#E50023',
      green: '#00E54C',
      grey: '#F3F3F3',
      contrast: '#FFFFFF',
    },
  },
  typography: {
    h1: 24,
    h2: 22,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
  },
  fonts: {
    light: fontLoader('Light'),
    regular: fontLoader('Regular'),
    medium: fontLoader('Medium'),
    bold: fontLoader('Bold'),
  },
  radius: {
    small: 12,
    regular: 16,
    large: 18,
  },
  controls: {
    height: 50,
    borderWidth: 2,
    iconSize: 30,
  },
  padding: {
    small: 15,
    regular: 15,
    large: 25,
  },
};

export default Theme;
