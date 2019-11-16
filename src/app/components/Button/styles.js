import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 46;
  background: ${({ background }) => background};
  border-radius: ${({ theme }) => theme.radius.small};

  align-items: center;
  justify-content: center;
`;

export const WrapperIcon = styled.View`
  margin-right: 10;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary.contrast};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme, mini }) =>
    mini ? theme.typography.h7 : theme.typography.h5};
`;
