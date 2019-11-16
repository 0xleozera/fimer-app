import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255, 0.8)',
})`
  flex: 1;
  min-height: 30;
  max-height: 100;
  color: ${({ theme }) => theme.colors.primary.contrast};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.typography.h6};
  border-radius: ${({ theme }) => theme.radius.small};
  border-width: 1;
  border-color: ${({ theme }) => theme.colors.accent.regular};
  background: ${({ theme }) => theme.colors.opacity.black};
  padding-left: 10;
  padding-right: 10;
  padding-top: 5;
  padding-bottom: 5;
`;
