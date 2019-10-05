import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

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

const reactotron = Reactotron.configure({ name: 'fimer' })
  .useReactNative()
  .use(sagaPlugin({}))
  .use(reactotronRedux())
  .connect();

export default reactotron;
