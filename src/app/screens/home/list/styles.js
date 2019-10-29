import styled from 'styled-components/native';

import { Button } from 'components';

export const ContainerList = styled.View`
  padding-horizontal: 10;
`;

export const Card = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-vertical: 10;
  padding-horizontal: 10;
  margin-bottom: 10;
  height: 80;
  border-radius: ${({ theme }) => theme.radius.regular};
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Informations = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 10;
`;

export const Nickname = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PlayButton = styled(Button)`
  width: 80;
  height: 30;
`;

export const Details = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;