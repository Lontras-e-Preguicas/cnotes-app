import React, { useEffect, useState } from "react";
import { Keyboard, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  API_URLS,
  authenticatedFetch,
  extractFailureInfo,
  fetchTimeout,
  setAuthToken,
} from "../../../utils/api";

import LoginPresentational from "../../presentational/Login";
import Toast from "react-native-toast-message";

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

    try {
      const res = await authenticatedFetch(API_URLS.me);

      if (res.status === 200) {
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeTabs" }],
        });
      }
    } catch {}

    setLoading(false);
  };

  const doLogin = async () => {
    Keyboard.dismiss();

    if (loading) {
      return; // Prevent request stacking
    }

    setLoading(true);
    try {
      const payload = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const res = await fetchTimeout(API_URLS.login, payload);

      if (res.status === 200) {
        const data = await res.json();
        await setAuthToken(data.token);
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeTabs" }],
        });
      } else {
        const fInfo = await extractFailureInfo(res);
        if (fInfo.fail) {
          if ("email" in fInfo.fields) {
            Toast.show({
              type: "error",
              text1: `E-mail: ${fInfo.fields.email}`,
            });
          } else if ("password" in fInfo.fields) {
            Toast.show({
              type: "error",
              text1: `Senha: ${fInfo.fields.password}`,
            });
          } else {
            Toast.show({
              type: "error",
              text1: fInfo.message,
            });
          }
        }
      }
    } catch (ex) {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
    setLoading(false);
  };

  const doSignup = () => {
    Keyboard.dismiss();
    navigation.navigate("Signup");
    clearCredentials();
  };
  const doForgotPassword = async (email) => {
    try {
      const payload = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      };
      const res = await fetch(API_URLS.passwordReset, payload);

      if (res.status === 200) {
        Toast.show({
          type: "success",
          text1: "Solicitação criada com sucesso",
        });
      } else {
        const fInfo = await extractFailureInfo(res);
        Toast.show({
          type: "error",
          text1:
            (fInfo.fields.email && `E-mail: ${fInfo.fields.email}`) ||
            fInfo.message,
        });
      }
    } catch {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
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
