import React, { useEffect } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import useNavigation from 'hooks/use-navigation';

import theme from 'configs/theme';

import { If } from 'components';
import { Container } from './styles';

const BaseScreen = ({ children, statusBarBackground, barStyle, hasScroll }) => {
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
      <StatusBar
        translucent
        backgroundColor={statusBarBackground}
        barStyle={barStyle}
      />

      <If test={hasScroll}>
        <ScrollView>{children}</ScrollView>
      </If>

      <If test={!hasScroll}>
        <View>{children}</View>
      </If>
    </Container>
  );
};

BaseScreen.propTypes = {
  children: PropTypes.node,
  statusBarBackground: PropTypes.string,
  barStyle: PropTypes.string,
  hasScroll: PropTypes.bool,
};

BaseScreen.defaultProps = {
  statusBarBackground: theme.colors.primary.regular,
  barStyle: 'light-content',
  hasScroll: true,
};

export default BaseScreen;
