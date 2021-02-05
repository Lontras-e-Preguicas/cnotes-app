import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./screens";

const Stack = createStackNavigator();

export function MainRoutes(props) {
  // TO-DO: remove none header mode and configure it per screen
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default MainRoutes;
