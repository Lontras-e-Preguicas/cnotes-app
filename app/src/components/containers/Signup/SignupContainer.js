import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { signup } from "../../../utils/api";

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

    setLoading(true);
    try {
      await signup(formData.name, formData.email, formData.password);
      navigation.goBack();
    } catch (ex) {
      Alert.alert(ex.message);
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
