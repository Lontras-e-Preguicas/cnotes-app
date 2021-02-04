import React, { useState } from "react";
import { Keyboard } from "react-native";

import LoginPresentational from "../../presentational/Login";

function LoginContainer(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const setEmail = (email) => {
    setFormData({ ...formData, email });
  };
  const setPassword = (password) => {
    setFormData({ ...formData, password });
  };

  const doLogin = () => {
    Keyboard.dismiss();
    console.log(formData);
  };
  const doSignup = () => {
    Keyboard.dismiss();
  };
  const doForgotPassword = () => {
    Keyboard.dismiss();
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
