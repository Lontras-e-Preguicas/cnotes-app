import React from "react";

import LoginContainer from "../components/containers/Login";
import { AuthStatusBar } from "./styles";

const LoginScreen = (props) => (
  <>
    <AuthStatusBar />
    <LoginContainer />
  </>
);

export { LoginScreen };

export default LoginScreen;
