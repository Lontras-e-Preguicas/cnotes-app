import React from "react";

import {
  Background,
  StyledSafeAreaView,
  FormWrapper,
  Title,
  StyledInput,
  SignupButton,
  KeyboardAvoidingView,
  StyledScrollView,
  StyledActivityIndicator,
} from "./styles";
import { HintedInputHintText, HintedInputInput } from "../../core/HintedInput";
import { View, Platform } from "react-native";
import { Images } from "../../../config";

const BackgroundSource = Images.auth;

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
    <StyledSafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StyledScrollView>
          <FormWrapper>
            <View>
              <Title>Cadastro</Title>
            </View>
            <StyledInput
              hint="Nome"
              placeholder="Nome..."
              autoCapitalize="words"
              autoCompleteType="name"
              value={name}
              onChangeText={setName}
            />
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

            <SignupButton onPress={doSignup}>
              {loading ? <StyledActivityIndicator /> : "Cadastrar-se"}
            </SignupButton>
          </FormWrapper>
        </StyledScrollView>
      </KeyboardAvoidingView>
    </StyledSafeAreaView>
  </Background>
);

export default SignupPresentational;
