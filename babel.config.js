module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/app/components',
          screens: './src/app/screens',
          configs: './src/configs',
          ducks: './src/core/redux/ducks',
          sagas: './src/core/redux/sagas',
          store: './src/core/redux/store',
        },
      },
    ],
  ],
};
