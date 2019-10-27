import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: ${({ theme }) => `0 ${theme.padding.regular}px`};
  height: 46px;
  background: ${({ theme }) => theme.colors.opacity.black};
  border-radius: ${({ theme }) => theme.radius.small};
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.typography.h5};
  color: ${({ isPlaceholder, theme }) =>
    isPlaceholder
      ? theme.colors.opacity.placeholder
      : theme.colors.primary.contrast};
  margin-left: 10px;
`;

export const Picker = styled.View`
  background: ${({ theme }) => theme.colors.opacity.black};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 10px;
`;
