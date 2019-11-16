import React from 'react';

import useTheme from 'hooks/use-theme';

import { useSelector } from 'react-redux';

import { BaseScreen, Typography } from 'components';
import {
  HeaderHome,
  Logo,
  ContainerGreet,
  Greet,
  IndicationMessage,
} from './styles';

import List from './list';

const Home = () => {
  const theme = useTheme();
  const authNickname = useSelector(state => state.auth.user.nickname);
  const profileNickname = useSelector(state => state.profile.user.nickname);
  const indications = useSelector(state => state.home.users);
  const loading = useSelector(state => state.home.isLoading);

  return (
    <BaseScreen
      loading={loading}
      hasScroll={false}
      statusBarBackground={theme.colors.primary.dark}>
      <HeaderHome>
        <Logo />
      </HeaderHome>
      <ContainerGreet>
        <Greet>
          <Typography size="h4" font="bold" color="contrast">
            Fala tu, {profileNickname || authNickname}!
          </Typography>
        </Greet>
        <IndicationMessage>
          <Typography size="h6" font="medium" color="contrast">
            {indications.length > 0
              ? 'Encontramos alguns jogadores para jogar com você'
              : 'No momento não encontramos nenhuma sugestão para te dar 😔'}
          </Typography>
        </IndicationMessage>
      </ContainerGreet>
      <List />
    </BaseScreen>
  );
};

export default Home;
