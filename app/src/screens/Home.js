import React from "react";

import { StatusBar } from "expo-status-bar";

import HomeContainer from "../components/containers/Home";

const HomeScreen = (props) => (
  <>
    <StatusBar style="dark" />
    <HomeContainer />
  </>
);

export { HomeScreen };

export default HomeScreen;
