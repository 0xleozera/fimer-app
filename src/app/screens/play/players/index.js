import React from 'react';

import useTheme from 'hooks/use-theme';

import Carousel from 'react-native-snap-carousel';

import { parsePercentageToPixels } from 'utils/dimensions';

import { Typography, PlayActionButton, Avatar, Separator } from 'components';
import {
  ContainerPlayers,
  CardPlayer,
  HeaderPlayerInformation,
  HeaderPersonalInformations,
  HeaderGameInformations,
  HeaderTitleGameInformations,
  HeaderDataGameInformations,
  ContainerActionButtons,
  ProfileActionButton,
} from './styles';

const Players = () => {
  const theme = useTheme();

  const renderItem = ({ item, index }) => (
    <CardPlayer>
      <HeaderPlayerInformation>
        <Avatar
          size={150}
          avatar="https://www.maisesports.com.br/wp-content/uploads/2019/06/brTT-e-Flanalista-Flamengo-2%C2%BA-Split-CBLoL-2019-1.jpg"
        />
        <Typography font="bold" size="h3" color="contrast">
          brTT
        </Typography>
      </HeaderPlayerInformation>
      <HeaderPersonalInformations>
        <Typography font="medium" size="h7">
          Felipe Gonçalves
        </Typography>
        <Typography font="medium" size="h7">
          27 anos
        </Typography>
      </HeaderPersonalInformations>
      <Separator />
      <HeaderGameInformations>
        <HeaderTitleGameInformations>
          <Typography font="bold" size="h6" color="contrast">
            Informações no jogo
          </Typography>
        </HeaderTitleGameInformations>

        <HeaderDataGameInformations>
          <Typography font="bold" size="h6">
            League of Legends
          </Typography>
        </HeaderDataGameInformations>

        <HeaderDataGameInformations>
          <Typography font="bold" size="h6">
            AD Carry
          </Typography>
        </HeaderDataGameInformations>

        <HeaderDataGameInformations>
          <Typography font="bold" size="h6">
            Desafiante
          </Typography>
        </HeaderDataGameInformations>
      </HeaderGameInformations>
    </CardPlayer>
  );

  return (
    <ContainerPlayers>
      <Carousel
        layout="tinder"
        data={[
          { title: 'João' },
          { title: 'Carlos' },
          { title: 'Leo' },
          { title: 'Ramon' },
        ]}
        renderItem={renderItem}
        sliderWidth={parsePercentageToPixels(95)}
        itemWidth={parsePercentageToPixels(90)}
        layoutCardOffset={15}
        containerCustomStyle={{
          marginTop: parsePercentageToPixels(3),
          overflow: 'visible',
        }}
        contentContainerCustomStyle={{
          paddingVertical: 10,
        }}
      />
      <ContainerActionButtons>
        <PlayActionButton
          background={theme.colors.actions.red}
          forbidden
          onPress={() => {}}
        />

        <ProfileActionButton
          background={theme.colors.actions.blue}
          iconName="md-person"
          onPress={() => {}}
        />

        <PlayActionButton
          background={theme.colors.accent.regular}
          onPress={() => {}}
        />
      </ContainerActionButtons>
    </ContainerPlayers>
  );
};

export default Players;
