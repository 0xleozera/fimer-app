import styled from 'styled-components/native';

import { PlayActionButton } from 'components';

import {
  getViewportDimension,
  parsePercentageToPixels,
} from 'utils/dimensions';

export const ContainerPlayers = styled.View`
  align-items: center;
`;

export const CardPlayer = styled.View`
  height: ${getViewportDimension('height') - 330};
  padding-horizontal: 10;
  padding-vertical: 10;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border-width: 1;
  border-color: ${({ theme }) => theme.colors.opacity.border}
  border-radius: ${({ theme }) => theme.radius.regular};
  shadow-color: #000;
  shadow-opacity: 0.5;
  shadow-offset: { width: 0, height: 10 };
  shadow-radius: 10;
`;

export const HeaderCardPlayer = styled.View`
  align-items: center;
`;

export const ContainerActionButtons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: ${parsePercentageToPixels(90)};
  margin-top: 25;
`;

export const ProfileActionButton = styled(PlayActionButton)`
  margin-left: 35;
  margin-right: 35;
`;
