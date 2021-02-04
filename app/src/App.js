import React from "react";
import { registerRootComponent } from "expo";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import styled from "styled-components";

const App = () => {
  let [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Wrapper>
        <Title>Hello, Fellas!</Title>
        <Content>This is the test screen.</Content>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.SafeAreaView`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background-color: #fef1f1;
`;

const Title = styled.Text`
  color: #1c1c1c;
  font-size: 24px;
  margin-bottom: 8px;
  font-family: Quicksand-Bold;
  font-weight: 800;
`;

const Content = styled.Text`
  color: #2e2e2e;
  font-size: 16px;
  font-family: Quicksand-Regular;
`;

export default App;

registerRootComponent(App);
