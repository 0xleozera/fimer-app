import styled from 'styled-components/native';

import logo from 'assets/images/brand/logo.png';

export const HeaderHome = styled.View`
  justify-content: center;
  align-items: center;
  height: 70;
  padding-horizontal: 15;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Logo = styled.Image.attrs({ source: logo })`
  width: 50;
  height: 50;
`;

export const ContainerGreet = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30;
  margin-bottom: 20;
`;

export const Greet = styled.View`
  margin-bottom: 10;
`;
