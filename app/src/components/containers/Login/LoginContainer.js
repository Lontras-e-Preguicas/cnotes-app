import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Api from "../../../utils/api";

import LoginPresentational from "../../presentational/Login";

function LoginContainer(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const setEmail = (email = "") => {
    setFormData({ ...formData, email });
  };
  const setPassword = (password = "") => {
    setFormData({ ...formData, password });
  };

  const doLogin = async () => {
    Keyboard.dismiss();

    if (loading) {
      return; // Prevent request stacking
    }

    const api = new Api();
    setLoading(true);
    try {
      await api.login(formData.email, formData.password);
      navigation.navigate("HomeTabs");

      // Clear credentials
      setEmail();
      setPassword();
    } catch (ex) {
      Alert.alert(ex.message);
    }
    setLoading(false);
  };
  const doSignup = () => {
    Keyboard.dismiss();
    navigation.navigate("Signup");
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
    loading,
  };

  return <LoginPresentational {...presentationalProps} />;
}

export default LoginContainer;
