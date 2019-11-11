import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const HeaderInformations = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SaveButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 40;
  height: 40;
  background-color: ${({ theme }) => theme.colors.accent.regular};
  border-radius: 20;
`;
