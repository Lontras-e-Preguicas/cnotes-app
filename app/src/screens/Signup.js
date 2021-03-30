import React from "react";

import SignupContainer from "../components/containers/Signup";
import { AuthStatusBar } from "./styles";

const SignupScreen = (props) => (
  <>
    <AuthStatusBar />
    <SignupContainer />
  </>
);

export { SignupScreen };

export default SignupScreen;
