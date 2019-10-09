module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/app/components',
          containers: './src/app/containers',
          screens: './src/app/screens',
          configs: './src/configs',
          services: './src/core/services',
          api: './src/core/services/api',
          ducks: './src/core/redux/ducks',
          sagas: './src/core/redux/sagas',
          store: './src/core/redux/store',
          utils: './src/utils',
        },
      },
    ],
  ],
};
