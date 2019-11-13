import React, { useState, useRef } from 'react';

import useTheme from 'hooks/use-theme';
import genders from 'utils/genders';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as SignUpActions } from 'ducks/sign-up';

import { Background, DateField, SelectField } from 'components';
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
  const theme = useTheme();

  const nicknameRef = useRef();
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
            icon="logo-game-controller-b"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Apelido nos jogos"
            ref={nicknameRef}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={nickname}
            onChangeText={setNickname}
          />

          <DateField
            placeholder="Aniversário"
            date={birthDate}
            onChange={handleBirthDateChange}
          />

          <SelectField
            icon="transgender-alt"
            value={gender}
            onChange={value => setGender(value.description)}
            placeholder="Escolha seu gênero"
            options={genders}
            container={false}
            statusBarColor={theme.colors.accent.regular}
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
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha"
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
