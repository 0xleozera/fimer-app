import React from 'react';

import useTheme from 'hooks/use-theme';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { Typography, SelectField } from 'components';
import {
  ContainerGames,
  ContentBackground,
  Title,
  NewGameButton,
  AddMorePositionButton,
} from './styles';

const Games = () => {
  const theme = useTheme();

  return (
    <ContainerGames>
      <Title>
        <Typography size="h6" font="bold" color="contrast">
          Informações de Jogo
        </Typography>
        <NewGameButton onPress={() => console.log('New triggered')}>
          <IconMaterial
            name="add"
            size={15}
            color={theme.colors.primary.contrast}
          />
        </NewGameButton>
      </Title>
      <ContentBackground>
        <SelectField
          label="Jogo"
          value=""
          onChange={value => console.log(value)}
          placeholder="Escolha o jogo"
          options={[{ id: 1, description: 'League of Legends' }]}
        />
        <SelectField
          label="Ranking"
          value=""
          onChange={value => console.log(value)}
          placeholder="Escolha seu ranking"
          options={[{ id: 1, description: 'Bronze' }]}
        />
        <SelectField
          label="Posição"
          value=""
          onChange={value => console.log(value)}
          placeholder="Escolha sua posição"
          options={[{ id: 1, description: 'AD Carry' }]}
        />
        <AddMorePositionButton
          onPress={() => console.log('New position triggered')}>
          <Typography size="h6" font="bold" color="contrast">
            Mais uma posição
          </Typography>
        </AddMorePositionButton>
      </ContentBackground>
    </ContainerGames>
  );
};

export default Games;
