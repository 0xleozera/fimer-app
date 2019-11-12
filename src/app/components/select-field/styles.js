import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10;
`;

export const Label = styled.View`
  margin-bottom: 5;
`;

export const SelectButton = styled.TouchableOpacity`
  padding: ${({ theme }) => `0 ${theme.padding.regular}px`};
  height: 46;
  background: ${({ theme }) => theme.colors.opacity.black};
  border-radius: ${({ theme }) => theme.radius.small};
  flex-direction: row;
  align-items: center;
`;

export const SelectText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.typography.h5};
  color: ${({ isPlaceholder, theme }) =>
    isPlaceholder
      ? theme.colors.opacity.placeholder
      : theme.colors.primary.contrast};
  margin-left: 10;
`;

export const ContentModal = styled.View`
  min-height: 150;
  max-height: 250;
  background-color: ${({ theme }) => theme.colors.primary.regular};
  padding-horizontal: 15;
`;

export const TitleModal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 10;
  z-index: 5;
`;

export const ClearButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const WrapperIconButton = styled.View`
  justify-content: center;
  align-items: center;
  width: 15;
  height: 15;
  border-radius: 15;
  background-color: ${({ theme }) => theme.colors.primary.contrast};
  margin-right: 5;
`;
