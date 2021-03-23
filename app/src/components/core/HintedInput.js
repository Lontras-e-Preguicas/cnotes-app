import React from "react";

import styled from "styled-components/native";
import { Typography, Spacing } from "../../config";
import Colors, { applyOpacity } from "../../config/colors";

export const HintedInput = ({
  hint,
  wrapperComponent = HintedInputWrapper,
  hintComponent = HintedInputHintText,
  inputComponent = HintedInputInput,
  inputContainerComponent = InputContainer,
  style,
  color = Colors.primaryLight,
  ...props
}) => {
  const WrapperComponent = wrapperComponent;
  const HintComponent = hintComponent;
  const InputComponent = inputComponent;
  const InputContainerComponent = inputContainerComponent;

  return (
    <WrapperComponent style={style}>
      {hint && <HintComponent color={color}>{hint}</HintComponent>}
      <InputContainerComponent color={color}>
        <InputComponent color={color} {...props} />
      </InputContainerComponent>
    </WrapperComponent>
  );
};

export const HintedInputWrapper = styled.View`
  flex-direction: column;
  align-items: center;

  width: 80%;
`;

export const InputContainer = styled.View`
  background-color: transparent;
  border: 1px solid ${({ color }) => color};
  border-radius: ${Spacing.getSpacing(10)};

  padding: ${Spacing.getSpacing(12)} ${Spacing.getSpacing(10)};

  width: 100%;
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
  }),
)`
  background-color: transparent;
  color: ${({ color }) => color};

  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};

  width: 100%;
`;

HintedInputInput.defaultProps = {
  color: Colors.primaryLight,
};

HintedInputHintText.defaultProps = {
  color: Colors.primaryLight,
};

const emptyFunction = () => null;
