import React from "react";

import { AuthStatusBar } from "./styles";
import SignupContainer from "../components/containers/Signup";

const SignupScreen = (props) => (
  <>
    <AuthStatusBar />
    <SignupContainer />
  </>
);

export { SignupScreen };

export default SignupScreen;
