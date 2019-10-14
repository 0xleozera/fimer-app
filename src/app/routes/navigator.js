import { NavigationActions, StackActions } from 'react-navigation';
import Container from '.';

const _navigator = Container;

const getState = () => (_navigator ? _navigator.state : {});

const goBack = () => _navigator.dispatch(NavigationActions.back());

const navigate = (routeName, params, key) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      key,
    }),
  );
};

const navigateReset = (routeName, params) => {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, params })],
    }),
  );
};

export default {
  goBack,
  navigate,
  navigateReset,
  getState,
};
