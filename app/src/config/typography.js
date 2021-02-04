import { css } from "styled-components/native";

const FONT_FAMILIES = {
  Quicksand: {
    Regular: "Quicksand-Regular",
    Bold: "Quicksand-Bold",
    Light: "Quicksand-Light",
    Medium: "Quicksand-Medium",
    SemiBold: "Quicksand-SemiBold",
  },
};

const SIZE_MULTIPLIER = 1;

function getFontSize(value) {
  return value * SIZE_MULTIPLIER + "px";
}

const FONT_SIZES = {
  tiny: getFontSize(8),
  small: getFontSize(10),
  regular: getFontSize(12),
  medium: getFontSize(14),
  large: getFontSize(16),
  extraLarge: getFontSize(18),
  huge: getFontSize(20),
  giant: getFontSize(24),
};

function getTypography(family, size) {
  return css`
    font-family: ${family};
    font-size: ${size};
  `;
}

export { FONT_FAMILIES, FONT_SIZES, getFontSize, getTypography };
