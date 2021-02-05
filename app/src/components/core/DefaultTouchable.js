import React from "react";
import { TouchableOpacity } from "react-native";

export const DefaultTouchable = ({ activeOpacity = 0.4, ...props }) => (
  <TouchableOpacity activeOpacity={activeOpacity} {...props} />
);

export default DefaultTouchable;
