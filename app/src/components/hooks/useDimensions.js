import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export default function useDimensions() {
  // Custom hook to auto update dimensions on rotate, work as a state

  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
    screen: Dimensions.get("screen"),
  });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return dimensions;
}
