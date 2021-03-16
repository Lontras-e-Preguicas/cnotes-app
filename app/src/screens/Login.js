import React from "react";

import { AuthStatusBar } from "./styles";
import LoginContainer from "../components/containers/Login";

const LoginScreen = (props) => (
  <>
    <AuthStatusBar />
    <LoginContainer />
  </>
);

export { LoginScreen };

export default LoginScreen;
