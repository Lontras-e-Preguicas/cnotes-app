import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "./config";

import BackButton from "./components/core/BackButton";

import {
  LoginScreen,
  SignupScreen,
  HomeScreen,
  ProfileScreen,
  TelaDoCaderno,
} from "./screens";
import { applyOpacity } from "./config/colors";

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();

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

export function HomeRoutes(props) {
  return (
    <HomeTabs.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: Colors.primaryDark },
        activeTintColor: Colors.primaryLight,
        inactiveTintColor: applyOpacity(Colors.primaryLight, 0.4),
      }}
    >
      <HomeTabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Cadernos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-journal" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <HomeTabs.Screen
        name="Activity"
        options={{
          tabBarLabel: "Atividades",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-notifications" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <HomeTabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-person" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
    </HomeTabs.Navigator>
  );
}

export function MainRoutes(props) {
  return (
    <MainStack.Navigator headerMode="none" initialRouteName="AuthStack">
      <MainStack.Screen name="AuthStack" component={AuthRoutes} />
      <MainStack.Screen name="HomeTabs" component={HomeRoutes} />

      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="Caderno" component={TelaDoCaderno} />
    </MainStack.Navigator>
  );
}

export default MainRoutes;
