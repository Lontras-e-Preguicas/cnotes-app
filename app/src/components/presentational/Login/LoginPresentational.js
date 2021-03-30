import React, { useRef, useState } from "react";

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
  StyledModalHintedInput,
} from "./styles";

import { View, Platform } from "react-native";
import { Images } from "../../../config";
import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
  ModalDescription,
} from "../../core/Modal";

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
  const [resetEmail, setResetEmail] = useState("");
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [resetRequestLoading, setResetRequestLoading] = useState(false);

  const handleResetSubmit = async () => {
    setResetRequestLoading(true);

    await doForgotPassword(resetEmail);

    setResetRequestLoading(false);
    setResetModalVisible(false);
    setResetEmail("");
  };

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
                <ForgotPasswordWrapper
                  onPress={() => setResetModalVisible(true)}
                >
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
      <ResetModal
        visible={resetModalVisible}
        setVisible={setResetModalVisible}
        email={resetEmail}
        setEmail={setResetEmail}
        onSubmit={handleResetSubmit}
        loading={resetRequestLoading}
      />
    </Background>
  );
};

const ResetModal = ({
  visible,
  setVisible,
  onSubmit,
  email,
  setEmail,
  loading,
}) => (
  <Modal visible={visible} setVisible={setVisible} title="Recuperar senha">
    <ModalDescription>
      Você receberá um e-mail com as instruções para recuperar sua senha
    </ModalDescription>
    <StyledModalHintedInput
      hint="E-mail"
      placeholder="E-mail..."
      value={email}
      onChangeText={setEmail}
    />
    <ModalButtonRow>
      <CancelModalButton onPress={() => setVisible(false)}>
        Cancelar
      </CancelModalButton>
      <ConfirmModalButtom loading={loading} onPress={onSubmit}>
        Enviar
      </ConfirmModalButtom>
    </ModalButtonRow>
  </Modal>
);

export default LoginPresentational;
