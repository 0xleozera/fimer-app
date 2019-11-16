import styled from 'styled-components/native';

export const Error = styled.View`
  flex: 1;
  margin-top: 3;
  margin-bottom: ${({ breatheBottom }) => (breatheBottom ? 10 : 0)};
`;
