import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { TextField, Button } from 'components';

import logo from 'assets/images/brand/logo.png';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.padding.wide}px`};
`;

export const Logo = styled.Image.attrs({ source: logo })`
  width: 130;
  height: 130;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.contrast};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.typography.h5};
`;
