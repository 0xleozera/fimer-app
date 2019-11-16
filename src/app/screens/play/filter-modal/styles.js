import styled from 'styled-components/native';

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
