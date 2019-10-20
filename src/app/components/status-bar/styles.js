import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

export const Container = styled.View`
  height: ${Platform.OS === 'ios' ? '50' : StatusBar.currentHeight};
  background: ${({ backgroundColor }) => backgroundColor};
`;
