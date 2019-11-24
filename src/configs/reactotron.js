import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

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

Reactotron.clear();

const reactotron = Reactotron.configure({ name: 'Fimer' })
  .configure({ host: '192.168.0.102' })
  .useReactNative()
  .use(reactotronRedux())
  .use(reactotronSaga())
  .connect();

export default reactotron;
