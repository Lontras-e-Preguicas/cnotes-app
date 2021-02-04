import React from "react";
import { registerRootComponent } from "expo";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import styled from "styled-components";
import { FONT_FAMILIES, FONT_SIZES } from "./config/typography";
import { Colors } from "./config";

const App = () => {
  const [fontsLoaded] = useFonts({
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
        <Title>Emojis ✨</Title>
        <Title>🙃🏳️‍⚧️</Title>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.SafeAreaView`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
`;

const Title = styled.Text`
  color: ${Colors.primaryLight};
  margin-bottom: 8px;
  font-family: ${FONT_FAMILIES.Quicksand.Medium};
  font-size: ${FONT_SIZES.giant};
`;

export default App;

registerRootComponent(App);
