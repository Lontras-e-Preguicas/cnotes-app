import React from "react";

import { StatusBar } from "expo-status-bar";

import LoginContainer from "../components/containers/Login";

const LoginScreen = (props) => (
  <>
    <StatusBar style="light" />
    <LoginContainer />
  </>
);

export { LoginScreen };

export default LoginScreen;
