import styled from 'styled-components/native';

export const ContainerFilters = styled.View`
  flex: 1;
  height: 100;
  padding-vertical: 15;
  padding-horizontal: 15;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const PositionFilterList = styled.View`
  margin-top: 15;
`;
