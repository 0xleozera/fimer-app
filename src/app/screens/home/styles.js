import styled from 'styled-components/native';

export const HeaderHome = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 70;
  padding-horizontal: 15;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const ContainerGreet = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 30;
  margin-bottom: 20;
`;

export const Greet = styled.View`
  margin-bottom: 10;
`;
