import React from 'react';

import useTheme from 'hooks/use-theme';

import { useSelector } from 'react-redux';

import { BaseScreen, Typography } from 'components';
import { HeaderHome, Logo, ContainerGreet, Greet } from './styles';

import List from './list';

const Home = () => {
  const theme = useTheme();
  const nickname = useSelector(state => state.auth.user.nickname);

  return (
    <BaseScreen statusBarBackground={theme.colors.primary.dark}>
      <HeaderHome>
        <Logo />
      </HeaderHome>
      <ContainerGreet>
        <Greet>
          <Typography size="h4" font="bold" color="contrast">
            Fala tu, {nickname}!
          </Typography>
        </Greet>
        <Typography size="h6" font="medium" color="contrast">
          Encontramos alguns jogadores para jogar com você
        </Typography>
      </ContainerGreet>
      <List />
    </BaseScreen>
  );
};

export default Home;
