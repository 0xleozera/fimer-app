import React, { useEffect } from 'react';

import { splitDate } from 'utils/date';
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as PlayActions } from 'ducks/play';

import useTheme from 'hooks/use-theme';

import { parsePercentageToPixels } from 'utils/dimensions';

import Carousel from 'react-native-snap-carousel';
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
  const players = useSelector(state => state.play.players);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PlayActions.getPlayRequest());
  }, [dispatch]);

  const handleBirthDate = birthDate => {
    const { day, month, years } = splitDate(birthDate);
    const difference = differenceInCalendarYears(
      new Date(),
      new Date(years, month, day),
    );

    return `${difference} anos`;
  };

  const renderItem = ({ item }) => (
    <CardPlayer>
      <HeaderPlayerInformation>
        <Avatar size={150} avatar={item.avatar.url} />
        <Typography font="bold" size="h3" color="contrast">
          {item.nickname}
        </Typography>
      </HeaderPlayerInformation>
      <HeaderPersonalInformations>
        <Typography font="medium" size="h7">
          {item.name}
        </Typography>
        <Typography font="medium" size="h7">
          {handleBirthDate(item.birthDate)}
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
        data={players}
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
