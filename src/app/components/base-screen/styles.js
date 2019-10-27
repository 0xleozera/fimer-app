import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'ios'
    ? getStatusBarHeight(true)
    : StatusBar.currentHeight};
  background: ${({ theme }) => theme.colors.primary.regular};
`;
