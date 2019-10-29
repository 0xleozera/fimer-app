import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
  background: ${({ background }) => background};
  border-radius: 60;
`;

export const ContainerIcon = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContainerForbidden = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 6.5;
  height: 35;
  border-radius: 4;
  position: absolute;
  left: 23;
  top: -3;
  background-color: ${({ theme }) => theme.colors.actions.red};
`;

export const Forbidden = styled.View`
  width: 3;
  height: 35;
  border-radius: 4;
  background-color: ${({ theme }) => theme.colors.primary.contrast};
`;
