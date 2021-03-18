import React from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../config";

export const AuthStatusBar = () => (
  <StatusBar style={"light"} translucent={true} />
);

export const MainStatusBar = () => (
  <StatusBar
    style={"dark"}
    translucent={false}
    backgroundColor={Colors.primaryLight}
  />
);