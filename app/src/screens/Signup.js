import React from "react";

import { StatusBar } from "expo-status-bar";

import SignupContainer from "../components/containers/Signup";

const SignupScreen = (props) => (
  <>
    <StatusBar style="light" />
    <SignupContainer />
  </>
);

export { SignupScreen };

export default SignupScreen;
