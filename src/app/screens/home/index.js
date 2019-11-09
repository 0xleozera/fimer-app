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
  const nickname = useSelector(state => state.auth.user.nickname);
  const indications = useSelector(state => state.home.users);

  return (
    <BaseScreen
      hasScroll={false}
      statusBarBackground={theme.colors.primary.dark}>
      <HeaderHome>
        <Logo />
      </HeaderHome>
      <ContainerGreet>
        <Greet>
          <Typography size="h4" font="bold" color="contrast">
            Fala tu, {nickname}!
          </Typography>
        </Greet>
        <IndicationMessage adjustWidth={indications.length === 0}>
          <Typography size="h6" font="medium" color="contrast">
            {indications.length > 0
              ? 'Encontramos alguns jogadores para jogar com você'
              : 'No momento não encontramos nenhuma sugestão para te dar :('}
          </Typography>
        </IndicationMessage>
      </ContainerGreet>
      {indications.length > 0 && <List />}
    </BaseScreen>
  );
};

export default Home;
