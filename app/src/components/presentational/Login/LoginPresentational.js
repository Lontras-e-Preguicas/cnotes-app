import React, { useRef } from "react";

import {
  Background,
  StyledSafeAreaView,
  FormWrapper,
  Title,
  LoginButton,
  ForgotPasswordWrapper,
  ForgotPasswordText,
  FormBottomRow,
  SignupButton,
  KeyboardAvoidingView,
  StyledScrollView,
  StyledInput,
} from "./styles";

import { View, Platform } from "react-native";
import { Images } from "../../../config";

const BackgroundSource = Images.auth;

const LoginPresentational = ({
  email,
  password,
  setEmail,
  setPassword,
  doLogin,
  doSignup,
  doForgotPassword,
  loading,
}) => {
  const passwordInputRef = useRef();

  return (
    <Background source={BackgroundSource}>
      <StyledSafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <StyledScrollView>
            <FormWrapper>
              <View>
                <Title>Login</Title>
              </View>
              <StyledInput
                hint="E-mail"
                placeholder="E-mail..."
                autoCapitalize="none"
                autoCompleteType="email"
                value={email}
                onChangeText={setEmail}
                blurOnSubmit={false}
                onSubmitEditing={() => passwordInputRef.current.focus()}
              />
              <StyledInput
                hint="Senha"
                placeholder="Senha..."
                autoCapitalize="none"
                autoCompleteType="password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                inputRef={passwordInputRef}
                onSubmitEditing={doLogin}
              />

              <FormBottomRow>
                <ForgotPasswordWrapper onPress={doForgotPassword}>
                  <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </ForgotPasswordWrapper>
              </FormBottomRow>

              <LoginButton onPress={doLogin} loading={loading}>
                Login
              </LoginButton>
              <SignupButton onPress={doSignup}>Cadastrar-se</SignupButton>
            </FormWrapper>
          </StyledScrollView>
        </KeyboardAvoidingView>
      </StyledSafeAreaView>
    </Background>
  );
};

export default LoginPresentational;
