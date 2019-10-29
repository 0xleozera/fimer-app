import React from 'react';

import useTheme from 'hooks/use-theme';

import Carousel from 'react-native-snap-carousel';

import { parsePercentageToPixels } from 'utils/dimensions';

import { Typography, PlayActionButton } from 'components';
import {
  ContainerPlayers,
  CardPlayer,
  ContainerActionButtons,
  ProfileActionButton,
} from './styles';

const Players = () => {
  const theme = useTheme();

  const renderItem = ({ item, index }) => (
    <CardPlayer>
      <Typography color="contrast">{item.title}</Typography>
      <Typography color="contrast">{item.title}</Typography>
      <Typography color="contrast">{item.title}</Typography>
      <Typography color="contrast">{item.title}</Typography>
      <Typography color="contrast">{item.title}</Typography>
      <Typography color="contrast">{item.title}</Typography>
      <Typography color="contrast">{item.title}</Typography>
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
