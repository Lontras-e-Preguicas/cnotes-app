import React from "react";

import { StatusBar } from "expo-status-bar";

import { View, Text } from "react-native";

// Home Screen Filler
const HomeScreen = (props) => (
  <>
    <StatusBar style="light" />
    <View
      style={{
        backgroundColor: "#222",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text>Home screen test</Text>
      <Text>🏳️‍⚧️🏳️‍⚧️</Text>
    </View>
  </>
);

export { HomeScreen };

export default HomeScreen;
