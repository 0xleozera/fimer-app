import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import { Button } from 'components';

export const ContainerUserInformations = styled.View`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding-horizontal: 20;
  padding-vertical: 20;
  border-bottom-width: 0.3;
  border-bottom-color: ${({ theme }) => theme.colors.opacity.border};
`;

export const AvatarAndNickUser = styled.View`
  align-items: center;
`;

export const PositionInformationsAndActionButton = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20;
`;

export const WrapperInformations = styled.View`
  margin-right: 30;
`;

export const Information = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 5;
  margin-bottom: 5;
`;

export const WrapperIcon = styled.View`
  margin-right: 5px;
`;

export const WrapperPlayButton = styled.View`
  flex: 1;
  justify-content: center;
`;

export const PlayButton = styled(Button)``;

export const ConfigButton = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40;
  height: 40;
  top: 20;
  right: ${({ isLeft }) => (!isLeft ? 20 : 'auto')};
  left: ${({ isLeft }) => (isLeft ? 20 : 'auto')};
  background-color: ${({ theme }) => theme.colors.accent.regular};
  border-radius: 20;
  z-index: 1;
`;
