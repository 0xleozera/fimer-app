import React, { useState, useRef } from 'react';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as SignUpActions } from 'ducks/sign-up';

import { Background, DateField } from 'components';
import {
  Container,
  Logo,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const nicknameRef = useRef();
  const genderRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());

  const loadingSignUp = useSelector(state => state.signUp.isLoading);
  const loadingSignIn = useSelector(state => state.auth.isLoading);

  const handleSubmit = () => {
    const formattedBirthDate = format(birthDate, 'dd/MM/yyyy', { locale: pt });

    dispatch(
      SignUpActions.signUpRequest({
        name,
        nickname,
        gender,
        birthDate: formattedBirthDate,
        email,
        password,
      }),
    );
  };

  const handleBirthDateChange = date => {
    const currentDate = date || birthDate;

    setBirthDate(currentDate);
  };

  return (
    <Background>
      <Container>
        <Logo />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => nicknameRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="videogame-asset"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Apelido nos jogos"
            ref={nicknameRef}
            returnKeyType="next"
            onSubmitEditing={() => genderRef.current.focus()}
            value={nickname}
            onChangeText={setNickname}
          />

          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sexo"
            ref={genderRef}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={gender}
            onChangeText={setGender}
          />

          <DateField
            placeholder="Seu aniversário"
            date={birthDate}
            onChange={handleBirthDateChange}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton
            loading={loadingSignUp || loadingSignIn}
            onPress={handleSubmit}>
            Criar conta
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignUp;
