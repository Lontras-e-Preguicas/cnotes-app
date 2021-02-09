const colors = {
  PrimLight: '#FAFCFC',
  Secondary: '#F25C5C',
  Thirdary: '#63E9E9',
  PrimDark: '#1E1E1E',
  SecondaryAlt: '#D94141',
};

export function applyOpacity(color, opacity) {
  let opacityValue = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0");
  return color + opacityValue;
}

export default colors;
