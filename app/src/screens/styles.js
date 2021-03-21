import React from "react";
import { StatusBar } from "expo-status-bar";

export const AuthStatusBar = () => (
  <StatusBar style={"light"} translucent={true} />
);

export const MainStatusBar = () => (
  <StatusBar style={"dark"} translucent={true} />
);
