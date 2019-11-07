import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import useSocket from 'hooks/use-socket';
import { Creators as MessageActions } from 'ducks/message';
import { Creators as MatchActions } from 'ducks/match';
import { Creators as NotificationActions } from 'ducks/notification';

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
  const socket = useSocket();
  const dispatch = useDispatch();

  const authenticated = useSelector(state => state.auth.token);
  const userId = useSelector(state => state.auth.user.id);

  const Routes = createRouter(!!authenticated);

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
    const chat = socket.ws.subscribe(`messages:${userId}`);
    chat.on('message', message =>
      dispatch(MessageActions.setNewMessage(message)),
    );

    const matches = socket.ws.subscribe(`matches:${userId}`);
    matches.on('new', match => dispatch(MatchActions.setNewMatch(match)));
    matches.on('match', notification =>
      dispatch(NotificationActions.setNewNotification(notification)),
    );
  }, [dispatch, socket.ws, userId]);

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
