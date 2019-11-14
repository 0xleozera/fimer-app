import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10;
`;

export const Field = styled.View`
  padding: ${({ theme }) => `0 ${theme.padding.regular}px`};
  height: 46px;
  background: ${({ theme }) => theme.colors.opacity.black};
  border-radius: ${({ theme }) => theme.radius.small};

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255, 0.8)',
})`
  flex: 1;
  color: ${({ theme }) => theme.colors.primary.contrast};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.typography.h6};
  margin-left: 10px;
`;
