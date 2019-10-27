import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  height: 46px;
  background: ${({ background }) => background};
  border-radius: ${({ theme }) => theme.radius.small};

  align-items: center;
  justify-content: center;
`;

export const WrapperIcon = styled.View`
  margin-right: 10;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary.contrast};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.typography.h5};
`;
