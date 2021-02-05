import React from "react";

import {
  Background,
  SafeAreaView,
  FormWrapper,
  Title,
  StyledInputWrapper,
  SignupButton,
  KeyboardAvoidingView,
  StyledScrollView,
  StyledActivityIndicator,
} from "./styles";
import { HintedInputHintText, HintedInputInput } from "../../core/HintedInput";
import { View } from "react-native";

const BackgroundSource = require("../../../assets/images/Login-BG.jpg");

const SignupPresentational = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  doSignup,
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
              <Title>Cadastro</Title>
            </View>
            <StyledInputWrapper>
              <HintedInputHintText>Nome</HintedInputHintText>
              <HintedInputInput
                placeholder="Nome..."
                autoCapitalize="words"
                autoCompleteType="name"
                value={name}
                onChangeText={setName}
              />
            </StyledInputWrapper>
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

            <SignupButton onPress={doSignup}>
              {loading ? <StyledActivityIndicator /> : "Cadastrar-se"}
            </SignupButton>
          </FormWrapper>
        </StyledScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  </Background>
);

export default SignupPresentational;
