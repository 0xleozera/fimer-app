import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

import { ThemeProvider } from 'styled-components';
import themeConfig from 'configs/theme';
import useTheme from 'hooks/use-theme';

import createRouter from 'routes';
import Navigator from 'routes/navigator';

const Router = () => {
  const theme = useTheme();
  const authenticated = useSelector(state => state.auth.token);
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

  return <Routes ref={ref => Navigator.setNavigator(ref)} />;
};

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={themeConfig}>
        <Router />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
