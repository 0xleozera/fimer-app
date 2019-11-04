import styled from 'styled-components/native';

import { getViewportDimension } from 'utils/dimensions';

export const Content = styled.View`
  height: ${getViewportDimension('height') - 165};
  padding-horizontal: 15;
`;
