import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { useSelector } from 'react-redux';

import createRouter from 'routes';
import Navigator from 'routes/navigator';

import { withTheme } from 'styled-components';

const App = ({ theme }) => {
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

export default withTheme(App);
