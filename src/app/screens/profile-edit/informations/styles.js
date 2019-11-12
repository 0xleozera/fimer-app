import styled from 'styled-components/native';

import { TextField } from 'components';

export const ContainerInformations = styled.View`
  flex: 1;
`;

export const ContentBackgroundAvatar = styled.View`
  flex: 1;
  padding-horizontal: 10;
  padding-top: 10;
  border-radius: 4;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  margin-top: 5;
  margin-bottom: 15;
`;

export const ContentBackground = styled.View`
  flex: 1;
  padding-horizontal: 10;
  padding-top: 10;
  border-radius: 4;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  margin-bottom: 25;
`;

export const ContainerAvatar = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled(TextField)`
  margin-bottom: 10px;
`;

export const Title = styled.View`
  margin-bottom: 20;
`;
