import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Safe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary.regular};
`;
