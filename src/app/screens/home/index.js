import React from 'react';

import useTheme from 'hooks/use-theme';

import { useDispatch } from 'react-redux';
import { Creators as AuthActions } from 'ducks/auth';

import { BaseScreen, Typography, Button } from 'components';
import { HeaderHome, ContainerGreet, Greet } from './styles';

import List from './list';

const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSignOutPressed = () => {
    dispatch(AuthActions.signOut());
  };

  return (
    <BaseScreen statusBarBackground={theme.colors.primary.dark}>
      <HeaderHome>
        <Typography size="h3" font="bold" color="contrast">
          FIMER
        </Typography>
      </HeaderHome>
      <ContainerGreet>
        <Button loading={false} onPress={() => handleSignOutPressed()}>
          SignOut
        </Button>
        <Greet>
          <Typography size="h4" font="bold" color="contrast">
            Fala tu, Darfus!
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
