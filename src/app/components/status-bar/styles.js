import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  height: ${Platform.OS === 'ios'
    ? getStatusBarHeight(true)
    : StatusBar.currentHeight};
  background: ${({ backgroundColor }) => backgroundColor};
`;
