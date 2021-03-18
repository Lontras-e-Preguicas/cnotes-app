import React, { useEffect, useState } from "react";
import { Keyboard, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Api from "../../../utils/api";

import LoginPresentational from "../../presentational/Login";

function LoginContainer(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    autoRedirect();
  }, []);

  const setEmail = (email = "") => {
    setFormData({ ...formData, email });
  };
  const setPassword = (password = "") => {
    setFormData({ ...formData, password });
  };

  const clearCredentials = () => {
    setFormData({ email: "", password: "" });
  };

  const autoRedirect = async () => {
    setLoading(true);
    const api = new Api();
    try {
      const info = await api.me();
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeTabs" }],
      });
    } catch {
      try {
        await api.logout();
      } catch {}
    }
    setLoading(false);
  };

  const doLogin = async () => {
    Keyboard.dismiss();
    //navigation.navigate("HomeTabs");

    if (loading) {
      return; // Prevent request stacking
    }

    const api = new Api();
    setLoading(true);
    try {
      await api.login(formData.email, formData.password);
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeTabs" }],
      });
    } catch (ex) {
      Alert.alert(ex.message);
    }
    setLoading(false);
  };

  const doSignup = () => {
    Keyboard.dismiss();
    navigation.navigate("Signup");
    clearCredentials();
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
