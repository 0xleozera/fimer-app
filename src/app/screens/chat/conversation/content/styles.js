import styled from 'styled-components/native';

import { getViewportDimension } from 'utils/dimensions';

export const Content = styled.View`
  height: ${getViewportDimension('height') - 165};
  padding-horizontal: 15;
`;

export const ContainerMessage = styled.View`
  flex: 1;
  flex-direction: ${({ me }) => (me ? 'row-reverse' : 'row')};
  align-items: center;
  margin-vertical: 5;
`;

export const Spacing = styled.View`
  margin-right: ${({ me }) => (me ? 0 : 5)};
  margin-left: ${({ me }) => (me ? 5 : 0)};
`;

export const Balloon = styled.View`
  max-width: 250;
  padding-horizontal: 5;
  padding-vertical: 5;
  border-radius: 4;
  background-color: ${({ theme, me }) =>
    me ? theme.colors.accent.regular : theme.colors.secondary.regular};
`;
