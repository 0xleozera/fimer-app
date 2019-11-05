module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          assets: './src/assets',
          components: './src/app/components',
          containers: './src/app/containers',
          screens: './src/app/screens',
          configs: './src/configs',
          services: './src/core/services',
          api: './src/core/services/api',
          contexts: './src/core/contexts',
          hooks: './src/core/hooks',
          ducks: './src/core/redux/ducks',
          sagas: './src/core/redux/sagas',
          store: './src/core/redux/store',
          routes: './src/app/routes',
          utils: './src/utils',
        },
      },
    ],
  ],
};
