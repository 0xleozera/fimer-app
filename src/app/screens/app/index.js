import React, { useEffect } from 'react';
import { AppState, StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import FlashMessage, { showMessage } from 'react-native-flash-message';

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
  }, [theme.colors.primary.dark]);

  useEffect(() => {
    if (userId !== 0) {
      const chat = socket.ws.subscribe(`messages:${userId}`);
      chat.on('message', message => {
        dispatch(MessageActions.setNewMessage(message));
      });

      const matches = socket.ws.subscribe(`matches:${userId}`);
      matches.on('match', notification => {
        showMessage({
          message: 'Bora jogar? 🎮',
          description: notification.content,
          type: 'default',
          backgroundColor: theme.colors.accent.regular,
          color: theme.colors.primary.contrast,
          duration: 3500,
          titleStyle: {
            fontFamily: theme.fonts.bold,
          },
          textStyle: {
            fontFamily: theme.fonts.medium,
          },
          style: {
            height: 90,
          },
        });
      });
    }
    // eslint-disable-next-line
  }, [userId]);

  return <Routes ref={ref => Navigator.setNavigator(ref)} />;
};

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SocketProvider>
        <ThemeProvider theme={themeConfig}>
          <StatusBar backgroundColor={themeConfig.colors.accent.regular} />
          <Router />
          <FlashMessage hideStatusBar position="top" />
        </ThemeProvider>
      </SocketProvider>
    </PersistGate>
  </Provider>
);

export default App;
