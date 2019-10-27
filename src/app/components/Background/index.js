import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.accent.regular, theme.colors.accent.light],
}))`
  flex: 1;
`;
