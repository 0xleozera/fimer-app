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
  height: ${getViewportDimension('height') - 290};
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: ${({ theme }) => theme.radius.regular};
`;

export const ContainerActionButtons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: ${parsePercentageToPixels(90)};
  margin-top: 10;
`;

export const ProfileActionButton = styled(PlayActionButton)`
  margin-left: 35;
  margin-right: 35;
`;
