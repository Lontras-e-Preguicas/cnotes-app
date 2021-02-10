import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SignupScreen, HomeScreen, ProfileScreen } from "./screens";
import { Colors, Typography } from "./config";
import BackButton from "./components/core/BackButton";

const MainStack = createStackNavigator();

const AuthStack = createStackNavigator();

export function AuthRoutes(props) {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: () => <></>,
        headerTintColor: Colors.primaryLight,
        headerLeft: (props) => <BackButton {...props} />,
      }}
      initialRouteName="Login"
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

export function MainRoutes(props) {
  /*<MainStack.Navigator headerMode="none" initialRouteName="Auth">
    <MainStack.Screen name="Auth" component={AuthRoutes} />
    <MainStack.Screen name="Home" component={HomeScreen} />
  </MainStack.Navigator>*/
  return (
    <MainStack.Navigator headerMode="none" initialRouteName="Auth">
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
}

export default MainRoutes;
