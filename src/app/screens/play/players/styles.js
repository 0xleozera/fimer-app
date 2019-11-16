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
  flex: 1;
  justify-content: center;
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

export const HeaderPlayerInformation = styled.View`
  align-items: center;
  margin-bottom: 10;
`;

export const HeaderPersonalInformations = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 10;
`;

export const HeaderGameInformations = styled.View`
  margin-vertical: 10;
`;

export const HeaderTitleGameInformations = styled.View`
  margin-vertical: 10;
`;

export const HeaderDataGameInformations = styled.View`
  flex-direction: ${({ positions }) => (positions ? 'row' : 'column')};
  margin-vertical: 3;
`;

export const DescriptionPosition = styled.View`
  margin-right: 15;
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

export const EmptyPlayers = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${parsePercentageToPixels(75)};
  margin-top: 100;
`;
