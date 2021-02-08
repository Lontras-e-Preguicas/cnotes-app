import React from "react";

import {
  Background,
  SafeAreaView,
  FormWrapper,
  Title,
  StyledInputWrapper,
  LoginButton,
  ForgotPasswordWrapper,
  ForgotPasswordText,
  FormBottomRow,
  SignupButton,
  KeyboardAvoidingView,
  StyledScrollView,
  StyledActivityIndicator,
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
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StyledScrollView>
          <FormWrapper>
            <View>
              <Title>Login</Title>
            </View>
            <StyledInputWrapper>
              <HintedInputHintText>E-mail</HintedInputHintText>
              <HintedInputInput
                placeholder="E-mail..."
                autoCapitalize="none"
                autoCompleteType="email"
                value={email}
                onChangeText={setEmail}
              />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <HintedInputHintText>Senha</HintedInputHintText>
              <HintedInputInput
                placeholder="Senha..."
                autoCapitalize="none"
                autoCompleteType="password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </StyledInputWrapper>

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
    </SafeAreaView>
  </Background>
);

export default LoginPresentational;
