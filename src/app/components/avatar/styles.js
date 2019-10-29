import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : 10)};
`;

export const ContainerAvatar = styled.View`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 100;
  border-width: 1;
  border-color: ${({ theme }) => theme.colors.accent.regular};
  background-color: ${({ theme }) => theme.colors.primary.dark};
  justify-content: center;
  align-items: center;
  shadow-color: ${({ theme }) => theme.colors.accent.regular};
  shadow-offset: {
    width: 0,
    height: 5
  };
  shadow-opacity: 0.34;
  shadow-radius: 6.27;
  elevation: 10;
`;

export const UserImage = styled.Image`
  width: ${({ size }) => size - 2};
  height: ${({ size }) => size - 2};
  border-radius: 100;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  bottom: 5;
  right: 10;
  height: 30;
  width: 30;
  border-radius: 100;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent.regular};
`;
