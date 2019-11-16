import React, { useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from 'ducks/auth';

import { Background, TextField } from 'components';
import {
  Container,
  Logo,
  Form,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [hasError, setHasError] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.isLoading);
  const loadingSignUp = useSelector(state => state.signUp.isLoading);

  function handleSubmit() {
    if (!email && !password) {
      setHasError(true);
      return;
    }

    dispatch(AuthActions.signInRequest({ email, password }));
    setHasError(false);
  }

  return (
    <Background>
      <Container>
        <Logo />

        <Form>
          <TextField
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
            hasError={hasError}
            errorMessage="Digite seu email"
            breatheBottom
          />

          <TextField
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
            hasError={hasError}
            errorMessage="Digite sua senha"
            breatheBottom
          />

          <SubmitButton
            loading={loading || loadingSignUp}
            onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignIn;
