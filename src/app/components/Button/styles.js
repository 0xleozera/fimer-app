import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-radius: ${({ theme }) => theme.radius.small};

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary.contrast};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.typography.h5};
`;
