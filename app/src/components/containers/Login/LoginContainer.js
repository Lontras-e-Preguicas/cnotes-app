import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Api from "../../../utils/api";

import LoginPresentational from "../../presentational/Login";

function LoginContainer(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigation = useNavigation();

  const setEmail = (email) => {
    setFormData({ ...formData, email });
  };
  const setPassword = (password) => {
    setFormData({ ...formData, password });
  };

  const doLogin = async () => {
    Keyboard.dismiss();

    const api = new Api();
    try {
      await api.login(formData.email, formData.password);
      navigation.navigate("Home");
    } catch (ex) {
      console.warn("Falha ao logar", ex.message);
    }
  };
  const doSignup = () => {
    Keyboard.dismiss();
    console.warn("Signup não implementado");
  };
  const doForgotPassword = () => {
    Keyboard.dismiss();
    console.warn("Esqueci senha não implementado");
  };

  const presentationalProps = {
    ...formData,
    setEmail,
    setPassword,
    doLogin,
    doSignup,
    doForgotPassword,
  };

  return <LoginPresentational {...presentationalProps} />;
}

export default LoginContainer;
