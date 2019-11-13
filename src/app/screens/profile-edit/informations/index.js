import React, { useEffect, useState, useRef } from 'react';

import ImagePicker from 'react-native-image-picker';
import imagePickerConfig from 'configs/image-picker';

import parseISO from 'date-fns/parseISO';
import { splitDate } from 'utils/date';
import states from 'utils/states';
import genders from 'utils/genders';

import { Avatar, Typography, DateField, SelectField } from 'components';
import {
  ContainerInformations,
  ContentBackground,
  ContentBackgroundAvatar,
  ContainerAvatar,
  Title,
  FormInput,
} from './styles';

const Informations = ({ user, setUser, setBirthDate }) => {
  const nicknameRef = useRef();
  const emailRef = useRef();

  const [avatar, setAvatar] = useState(user.avatar.url);

  useEffect(() => {
    setAvatar(user.avatar.url);
  }, [user.avatar.url]);

  const handleCamera = () => {
    ImagePicker.showImagePicker(imagePickerConfig, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setUser('newAvatar', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
        setAvatar(response.uri);
      }
    });
  };

  const getBirthDate = () => {
    const { day, month, years } = splitDate(user.birthDate);

    return parseISO(`${years}-${month}-${day}`);
  };

  return (
    <ContainerInformations>
      <ContentBackgroundAvatar>
        <Title>
          <Typography size="h6" font="bold" color="contrast">
            Avatar
          </Typography>
        </Title>
        <ContainerAvatar>
          <Avatar
            onPress={() => handleCamera()}
            avatar={avatar}
            uploader
            sizeIcon={70}
            size={130}
          />
        </ContainerAvatar>
      </ContentBackgroundAvatar>

      <ContentBackground>
        <Title>
          <Typography size="h6" font="bold" color="contrast">
            Informações Pessoais
          </Typography>
        </Title>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
          returnKeyType="next"
          onSubmitEditing={() => nicknameRef.current.focus()}
          value={user.name}
          onChangeText={value => setUser('name', value)}
        />

        <FormInput
          icon="logo-game-controller-b"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Apelido nos jogos"
          ref={nicknameRef}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={user.nickname}
          onChangeText={value => setUser('nickname', value)}
        />

        <SelectField
          icon="transgender-alt"
          value={user.gender}
          onChange={value => setUser('gender', value.description)}
          placeholder="Escolha seu sexo"
          options={genders}
        />

        <SelectField
          icon="home"
          value={user.region}
          onChange={value => setUser('region', value.description)}
          placeholder="Escolha sua região"
          options={states}
        />

        <DateField
          placeholder="Aniversário"
          date={getBirthDate()}
          onChange={value => setBirthDate(value)}
        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
          ref={emailRef}
          value={user.email}
          onChangeText={value => setUser('email', value)}
        />
      </ContentBackground>
    </ContainerInformations>
  );
};

export default Informations;
