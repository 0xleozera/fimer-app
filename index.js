if (__DEV__) {
  import('configs/reactotron');
}

import { AppRegistry } from 'react-native';
import App from 'screens/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
