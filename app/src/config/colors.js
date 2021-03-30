const Colors = {
  primaryLight: "#FAFCFC",
  primaryDark: "#1E1E1E",
  secondary: "#F25C5C",
  secondaryAlt: "#D94141",
  tertiary: "#63E9E9",
  tertiaryAlt: "#13ECEC",
  success: "#00C853",
};

export function applyOpacity(color, opacity) {
  let opacityValue = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0");
  return color + opacityValue;
}

export default Colors;
