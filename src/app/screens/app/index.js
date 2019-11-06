import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import useSocket from 'hooks/use-socket';
import { Creators as MessageActions } from 'ducks/message';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

import { ThemeProvider } from 'styled-components';
import themeConfig from 'configs/theme';
import useTheme from 'hooks/use-theme';

import createRouter from 'routes';
import Navigator from 'routes/navigator';

import { SocketProvider } from 'contexts/socket';

const Router = () => {
  const theme = useTheme();
  const authenticated = useSelector(state => state.auth.token);
  const Routes = createRouter(!!authenticated);
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    function setAndroidNavigationBar() {
      changeNavigationBarColor(theme.colors.primary.dark);
    }

    function handleAppStateChange(nextAppState) {
      if (nextAppState === 'active') {
        setAndroidNavigationBar();
      }
    }

    setAndroidNavigationBar();

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [socket.ws, theme.colors.primary.dark]);

  useEffect(() => {
    const chat = socket.ws.subscribe('messages:1');
    chat.on('message', message =>
      dispatch(MessageActions.setNewMessage(message)),
    );
  }, [dispatch, socket.ws]);

  return <Routes ref={ref => Navigator.setNavigator(ref)} />;
};

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SocketProvider>
        <ThemeProvider theme={themeConfig}>
          <Router />
        </ThemeProvider>
      </SocketProvider>
    </PersistGate>
  </Provider>
);

export default App;
