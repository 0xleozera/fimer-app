import theme from './theme';

export default {
  message: 'Oops... 😔',
  description: 'Eita, aconteceu um problema, pode tentar novamente?',
  type: 'default',
  backgroundColor: theme.colors.actions.red,
  color: theme.colors.primary.contrast,
  duration: 2000,
  titleStyle: {
    fontFamily: theme.fonts.bold,
  },
  textStyle: {
    fontFamily: theme.fonts.medium,
  },
  style: {
    height: 90,
  },
};
