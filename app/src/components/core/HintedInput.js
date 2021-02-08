import styled from "styled-components/native";
import { Typography, Spacing } from "../../config";
import Colors, { applyOpacity } from "../../config/colors";

export const HintedInputWrapper = styled.View`
  flex-direction: column;
  align-items: center;

  width: ${({ width = "80%" }) => width};
`;

export const HintedInputHintText = styled.Text`
  margin-left: ${Spacing.getSpacing(10)};
  margin-bottom: ${Spacing.getSpacing(4)};
  align-self: flex-start;

  color: ${({ color }) => color};

  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
`;

export const HintedInputInput = styled.TextInput.attrs(
  ({ placeholderTextColor, color }) => ({
    placeholderTextColor: placeholderTextColor || applyOpacity(color, 0.6),
  })
)`
  background-color: transparent;
  border: 1px solid ${({ color }) => color};
  border-radius: ${Spacing.getSpacing(10)};
  color: ${({ color }) => color};

  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};

  padding-left: ${Spacing.getSpacing(10)};
  padding-right: ${Spacing.getSpacing(10)};

  height: ${({ inputHeight = "48px" }) => inputHeight};
  width: 100%;
`;

HintedInputInput.defaultProps = {
  color: Colors.primaryLight,
};

HintedInputHintText.defaultProps = {
  color: Colors.primaryLight,
};
