import React, { useState, useRef } from 'react';

import useTheme from 'hooks/use-theme';
import genders from 'utils/genders';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as SignUpActions } from 'ducks/sign-up';

import { Background, TextField, DateField, SelectField } from 'components';
import {
  Container,
  Logo,
  Form,
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

  const [hasError, setHasError] = useState(false);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());

  const loadingSignUp = useSelector(state => state.signUp.isLoading);
  const loadingSignIn = useSelector(state => state.auth.isLoading);

  const validateForm = () => {
    if (!name || !nickname || !gender || !email || !password || !birthDate) {
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const validatedForm = validateForm();
    const formattedBirthDate = format(birthDate, 'dd/MM/yyyy', { locale: pt });

    if (validatedForm) {
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

      setHasError(false);
      return;
    }

    setHasError(true);
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
          <TextField
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => nicknameRef.current.focus()}
            value={name}
            onChangeText={setName}
            hasError={hasError}
            errorMessage="Nome completo é obrigatório"
            breatheBottom
          />

          <TextField
            icon="logo-game-controller-b"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Apelido nos jogos"
            ref={nicknameRef}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={nickname}
            onChangeText={setNickname}
            hasError={hasError}
            errorMessage="Apelido nos jogos é obrigatório"
            breatheBottom
          />

          <DateField
            placeholder="Aniversário"
            date={birthDate}
            onChange={handleBirthDateChange}
            hasError={hasError}
            errorMessage="Aniversário é obrigatório"
            breatheBottom
          />

          <SelectField
            icon="transgender-alt"
            value={gender}
            onChange={value => setGender(value.description)}
            placeholder="Sexo"
            options={genders}
            container={false}
            statusBarColor={theme.colors.accent.regular}
            hasError={hasError}
            errorMessage="Sexo é obrigatório"
            breatheBottom
          />

          <TextField
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
            hasError={hasError}
            errorMessage="Email é obrigatório"
            breatheBottom
          />

          <TextField
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
            hasError={hasError}
            errorMessage="Senha é obrigatória"
            breatheBottom
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
