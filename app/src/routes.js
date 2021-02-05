import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SignupScreen, HomeScreen } from "./screens";

const Stack = createStackNavigator();

export function MainRoutes(props) {
  // TO-DO: remove none header mode and configure it per screen
  // TO-DO: update Auth flow transitions
  // TO-DO: isolate Auth flow (nested navigators)
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default MainRoutes;
