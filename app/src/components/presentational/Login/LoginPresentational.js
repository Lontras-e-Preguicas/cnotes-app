import React from "react";

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
  StyledActivityIndicator,
  StyledInput,
} from "./styles";
import { HintedInputHintText, HintedInputInput } from "../../core/HintedInput";
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
}) => (
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
            />
            <StyledInput
              hint="Senha"
              placeholder="Senha..."
              autoCapitalize="none"
              autoCompleteType="password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            <FormBottomRow>
              <ForgotPasswordWrapper onPress={doForgotPassword}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPasswordWrapper>
            </FormBottomRow>

            <LoginButton onPress={doLogin}>
              {loading ? <StyledActivityIndicator /> : "Login"}
            </LoginButton>
            <SignupButton onPress={doSignup}>Cadastrar-se</SignupButton>
          </FormWrapper>
        </StyledScrollView>
      </KeyboardAvoidingView>
    </StyledSafeAreaView>
  </Background>
);

export default LoginPresentational;
