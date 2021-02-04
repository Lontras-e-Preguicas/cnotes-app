import styled from "styled-components/native";
import { Typography, Spacing } from "../../config";
import { applyOpacity } from "../../config/colors";

export const HintedInputWrapper = styled.View`
  flex-direction: column;
  align-items: center;

  width: ${(props) => props.width};
`;

export const HintedInputHintText = styled.Text`
  margin-left: ${Spacing.getSpacing(10)};
  margin-bottom: ${Spacing.getSpacing(4)};
  align-self: flex-start;

  color: ${(props) => props.color};

  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
`;

export const HintedInputInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor:
    props.placeholderTextColor || applyOpacity(props.color, 0.6),
}))`
  background-color: transparent;
  border: 1px solid ${(props) => props.color};
  border-radius: ${Spacing.getSpacing(10)};
  color: ${(props) => props.color};

  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};

  padding-left: ${Spacing.getSpacing(10)};
  padding-right: ${Spacing.getSpacing(10)};

  height: ${(props) => props.inputHeight};
  width: 100%;
`;
