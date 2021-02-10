const Colors = {
  primaryLight: "#FAFCFC",
  primaryDark: "#1E1E1E",
  secondary: "#F25C5C",
  secondaryAlt: "#D94141",
  tertiary: "#63E9E9",
  opaciDark:'rgba(0,0,0,0.3)'//Coloquei isso só para teste pois não consegui usar a função a baixo
};

export function applyOpacity(color, opacity) {
  let opacityValue = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0");
  return color + opacityValue;
}

export default Colors;
