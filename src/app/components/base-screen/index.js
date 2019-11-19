import React, { useEffect } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import Loadable from 'react-native-loading-spinner-overlay';

import useNavigation from 'hooks/use-navigation';

import theme from 'configs/theme';

import { If } from 'components';
import { Container, ContainerWithoutScrollView } from './styles';

const BaseScreen = ({
  children,
  statusBarBackground,
  barStyle,
  hasScroll,
  loading,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    const setCurrentStatusBar = navigation.addListener('willFocus', () => {
      StatusBar.setBackgroundColor(statusBarBackground);
      StatusBar.setBarStyle(barStyle);
    });

    return () => setCurrentStatusBar.remove();
  }, [barStyle, navigation, statusBarBackground]);

  return (
    <Container>
      <Loadable
        visible={loading}
        textContent="Carregando..."
        textStyle={{
          fontSize: theme.typography.h5,
          fontFamily: theme.fonts.bold,
          color: theme.colors.primary.contrast,
        }}
        color={theme.colors.accent.regular}
        overlayColor="rgba(0, 0, 0, 0.5)	"
      />

      <StatusBar
        translucent
        backgroundColor={statusBarBackground}
        barStyle={barStyle}
      />

      <If test={hasScroll}>
        <ScrollView>{children}</ScrollView>
      </If>

      <If test={!hasScroll}>
        <ContainerWithoutScrollView>{children}</ContainerWithoutScrollView>
      </If>
    </Container>
  );
};

BaseScreen.propTypes = {
  children: PropTypes.node,
  statusBarBackground: PropTypes.string,
  barStyle: PropTypes.string,
  hasScroll: PropTypes.bool,
  loading: PropTypes.bool,
};

BaseScreen.defaultProps = {
  statusBarBackground: theme.colors.primary.regular,
  barStyle: 'light-content',
  hasScroll: true,
  loading: false,
};

export default BaseScreen;
