import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${({ theme, font }) => theme.fonts[font]};
  font-size: ${({ theme, size }) => theme.typography[size]};
  color: ${({ theme, type, color }) => theme.colors[type][color]};
`;
