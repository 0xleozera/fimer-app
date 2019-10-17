import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const nativeLog = console.log;

  console.log = (...args) => {
    nativeLog.apply(null, args);

    Reactotron.display({
      name: 'CONSOLE.LOG',
      important: true,
      value: args,
      preview: args.length ? JSON.stringify(args) : args[0],
    });
  };

  const tron = Reactotron.configure({ name: 'Fimer' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
