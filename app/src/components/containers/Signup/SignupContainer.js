import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { API_URLS, extractFailureInfo, fetchTimeout } from "../../../utils/api";
import Toast from "react-native-toast-message";

import SignupPresentational from "../../presentational/Signup";

function SignupContainer(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const setName = (name) => {
    setFormData({ ...formData, name });
  };
  const setEmail = (email) => {
    setFormData({ ...formData, email });
  };
  const setPassword = (password) => {
    setFormData({ ...formData, password });
  };

  const doSignup = async () => {
    Keyboard.dismiss();

    if (loading) {
      return;
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

      const res = await fetchTimeout(API_URLS.signup, payload);

      if (res.status === 201) {
        Toast.show({
          type: "success",
          text1: "Conta criada com sucesso",
        });
        navigation.goBack();
      } else {
        const fInfo = await extractFailureInfo(res);
        if (fInfo.fail) {
          if ("name" in fInfo.fields) {
            Toast.show({
              type: "error",
              text1: `Nome: ${fInfo.fields.name}`,
            });
          } else if ("email" in fInfo.fields) {
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

  const presentationalProps = {
    ...formData,
    setName,
    setEmail,
    setPassword,
    doSignup,
    loading,
  };

  return <SignupPresentational {...presentationalProps} />;
}

export default SignupContainer;
