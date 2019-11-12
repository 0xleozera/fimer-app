import React, { useState } from 'react';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import useTheme from 'hooks/use-theme';

import { useSelector } from 'react-redux';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { BaseScreen, Typography, Header, Tabs, If } from 'components';
import { HeaderInformations, SaveButton, Content } from './styles';

import Informations from './informations';
import Games from './games';

const ProfileEdit = () => {
  const theme = useTheme();
  const currentUser = useSelector(state => state.profile.user);

  const [currentTab, setCurrentTab] = useState('information');
  const [user, setUser] = useState(currentUser);

  const [games, setGames] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [selectedPositions, setSelectedPositions] = useState([]);

  const handleChangeUser = (field, value) => {
    setUser(oldUser => ({
      ...oldUser,
      [field]: value,
    }));
  };

  const handleChangeBirthDateUser = value => {
    const formattedBirthDate = format(value, 'dd/MM/yyyy', {
      locale: pt,
    });

    setUser(oldUser => ({
      ...oldUser,
      birthDate: formattedBirthDate,
    }));
  };

  const handleAddMoreGame = game => {
    setGames(oldGame => [...oldGame, game]);
  };

  const handleAddMorePosition = (position, index) => {
    setGames(oldGame => {
      const newGame = oldGame;
      newGame[index].positions = [...newGame[index].positions, position];

      return [...newGame];
    });
  };

  const handleUpdateGameOrRanking = (index, field, value) => {
    if (field === 'game' && games[index].game.description === '') {
      setSelectedGames(selectedGames.concat(value.description));
    }

    if (field === 'game' && games[index].game.description !== '') {
      setSelectedGames(oldSelectedGames => {
        const filteredSelectedGames = oldSelectedGames.filter(
          selectedGame => selectedGame !== games[index].game.description,
        );
        const addNewSelectedGame = filteredSelectedGames.concat(
          value.description,
        );

        return [...addNewSelectedGame];
      });
    }

    setGames(oldGame => {
      const newGame = oldGame;
      newGame[index][field] = value;

      return [...newGame];
    });
  };

  const handleUpdatePosition = (indexGame, indexPosition, value) => {
    if (games[indexGame].positions[indexPosition].description === '') {
      setSelectedPositions(selectedPositions.concat(value.description));
    }

    if (games[indexGame].positions[indexPosition].description !== '') {
      setSelectedPositions(oldSelectedPosition => {
        const filteredSelectedPositions = oldSelectedPosition.filter(
          selectedGame =>
            selectedGame !==
            games[indexGame].positions[indexPosition].description,
        );
        const addNewSelectedGame = filteredSelectedPositions.concat(
          value.description,
        );

        return [...addNewSelectedGame];
      });
    }

    setGames(oldGame => {
      const newGame = oldGame;
      newGame[indexGame].positions[indexPosition] = value;

      return [...newGame];
    });
  };

  return (
    <BaseScreen
      hasScroll={false}
      statusBarBackground={theme.colors.primary.dark}>
      <Header hasBackButton>
        <HeaderInformations>
          <Typography font="bold" size="h4" color="contrast">
            Editar Perfil
          </Typography>
          <SaveButton onPress={() => console.log('Save triggered')}>
            <IconMaterial
              name="check"
              size={20}
              color={theme.colors.primary.contrast}
            />
          </SaveButton>
        </HeaderInformations>
      </Header>
      <Tabs
        initialTab="information"
        onChange={tab => setCurrentTab(tab)}
        tabs={[
          { key: 'information', title: 'Pessoal' },
          { key: 'games', title: 'Jogos' },
        ]}
      />
      <Content>
        <If test={currentTab === 'information'}>
          <Informations
            user={user}
            setBirthDate={handleChangeBirthDateUser}
            setUser={(field, value) => handleChangeUser(field, value)}
          />
        </If>
        <If test={currentTab === 'games'}>
          <Games
            games={games}
            addMoreGame={game => handleAddMoreGame(game)}
            addMorePosition={(position, index) =>
              handleAddMorePosition(position, index)
            }
            updatePosition={(indexGame, indexPosition, value) =>
              handleUpdatePosition(indexGame, indexPosition, value)
            }
            updateGameOrRanking={(index, field, value) =>
              handleUpdateGameOrRanking(index, field, value)
            }
            selectedGames={selectedGames}
            selectedPositions={selectedPositions}
          />
        </If>
      </Content>
    </BaseScreen>
  );
};

export default ProfileEdit;
