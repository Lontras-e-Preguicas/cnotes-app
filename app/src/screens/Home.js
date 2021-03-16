import React from "react";

import { MainStatusBar } from "./styles";
import HomeContainer from "../components/containers/Home";

const HomeScreen = (props) => (
  <>
    <MainStatusBar />
    <HomeContainer />
  </>
);

export { HomeScreen };

export default HomeScreen;
