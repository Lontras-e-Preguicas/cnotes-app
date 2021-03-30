import React, { useRef } from "react";

import {
  Background,
  StyledSafeAreaView,
  FormWrapper,
  Title,
  StyledInput,
  SignupButton,
  KeyboardAvoidingView,
  StyledScrollView,
} from "./styles";

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
}) => {
  const emailInputRef = useRef();
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
                <Title>Cadastro</Title>
              </View>
              <StyledInput
                hint="Nome"
                placeholder="Nome..."
                autoCapitalize="words"
                autoCompleteType="name"
                value={name}
                onChangeText={setName}
                blurOnSubmit={false}
                onSubmitEditing={() => emailInputRef.current.focus()}
              />
              <StyledInput
                hint="E-mail"
                placeholder="E-mail..."
                autoCapitalize="none"
                autoCompleteType="email"
                value={email}
                onChangeText={setEmail}
                inputRef={emailInputRef}
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
                onSubmitEditing={doSignup}
              />

              <SignupButton onPress={doSignup} loading={loading}>
                Cadastrar-se
              </SignupButton>
            </FormWrapper>
          </StyledScrollView>
        </KeyboardAvoidingView>
      </StyledSafeAreaView>
    </Background>
  );
};

export default SignupPresentational;
