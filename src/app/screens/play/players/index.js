import React from 'react';

import useTheme from 'hooks/use-theme';

import Carousel from 'react-native-snap-carousel';

import { parsePercentageToPixels } from 'utils/dimensions';

import { Typography, PlayActionButton, Avatar } from 'components';
import {
  ContainerPlayers,
  CardPlayer,
  HeaderCardPlayer,
  ContainerActionButtons,
  ProfileActionButton,
} from './styles';

const Players = () => {
  const theme = useTheme();

  const renderItem = ({ item, index }) => (
    <CardPlayer>
      <HeaderCardPlayer>
        <Avatar
          size={150}
          avatar="https://www.maisesports.com.br/wp-content/uploads/2019/06/brTT-e-Flanalista-Flamengo-2%C2%BA-Split-CBLoL-2019-1.jpg"
        />
        <Typography font="bold" size="h3" color="contrast">
          brTT
        </Typography>
      </HeaderCardPlayer>
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
