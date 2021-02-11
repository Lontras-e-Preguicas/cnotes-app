import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  SignupScreen,
  HomeScreen,
  ProfileScreen,
  TelaDoCaderno,
} from "./screens";
import { Colors, Typography } from "./config";
import BackButton from "./components/core/BackButton";
import TelaConjuntoAnotacao from "./screens/TelaConjAnotacao";
import TelaDeAtividades from "./screens/TelaAtividades";

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
  return (
    <MainStack.Navigator headerMode="none" initialRouteName="Auth">
      <MainStack.Screen name="Auth" component={AuthRoutes} />
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Notifications" component={TelaDeAtividades} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="Caderno" component={TelaDoCaderno} />
      <MainStack.Screen name="Conjunto" component={TelaConjuntoAnotacao} />
    </MainStack.Navigator>
  );
}

export default MainRoutes;
