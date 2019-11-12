import React, { useRef } from 'react';

import parseISO from 'date-fns/parseISO';
import { splitDate } from 'utils/date';

import { Avatar, Typography, DateField } from 'components';
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
  const genderRef = useRef();
  const regionRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

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
            onPress={() => {}}
            avatar={user.avatar.url}
            uploader
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
          onSubmitEditing={() => genderRef.current.focus()}
          value={user.nickname}
          onChangeText={value => setUser('nickname', value)}
        />

        <FormInput
          icon="transgender-alt"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Sexo"
          ref={genderRef}
          returnKeyType="next"
          onSubmitEditing={() => regionRef.current.focus()}
          value={user.gender}
          onChangeText={value => setUser('gender', value)}
        />

        <FormInput
          icon="home"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Região"
          ref={regionRef}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={user.region}
          onChangeText={value => setUser('region', value)}
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
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={user.email}
          onChangeText={value => setUser('email', value)}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Nova Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={() => {}}
          value={user.password}
          onChangeText={value => setUser('password', value)}
        />
      </ContentBackground>
    </ContainerInformations>
  );
};

export default Informations;
