import React from "react";

import styled from "styled-components/native";
import { Typography, Spacing } from "../../config";
import Colors, { applyOpacity } from "../../config/colors";

export const HintedInput = ({
  hint,
  error,
  wrapperComponent = HintedInputWrapper,
  hintComponent = HintedInputHintText,
  inputComponent = HintedInputInput,
  inputContainerComponent = InputContainer,
  inputHeaderComponent = InputHeader,
  style,
  color = Colors.primaryLight,
  frameColor,
  errorColor = Colors.secondaryAlt,
  changeColorOnError = false,
  changeFrameColorOnError = true,
  ...props
}) => {
  const WrapperComponent = wrapperComponent;
  const HintComponent = hintComponent;
  const InputComponent = inputComponent;
  const InputContainerComponent = inputContainerComponent;
  const InputHeaderComponent = inputHeaderComponent;

  const _color = (error && changeColorOnError && errorColor) || color;
  const _frameColor =
    (error && changeFrameColorOnError && errorColor) || frameColor || color;

  return (
    <WrapperComponent style={style}>
      <InputHeaderComponent>
        {hint && <HintComponent color={_color}>{hint}</HintComponent>}
        {error && (
          <HintedInputErrorText errorColor={errorColor}>
            {error}
          </HintedInputErrorText>
        )}
      </InputHeaderComponent>
      <InputContainerComponent color={_frameColor}>
        <InputComponent color={_color} {...props} />
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

export const InputHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 ${Spacing.getSpacing(10)} ${Spacing.getSpacing(8)}
    ${Spacing.getSpacing(10)};
`;

export const HintedInputHintText = styled.Text`
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

export const HintedInputErrorText = styled.Text`
  align-self: flex-end;

  color: ${({ errorColor }) => errorColor};

  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
`;

HintedInputInput.defaultProps = {
  color: Colors.primaryLight,
};

HintedInputHintText.defaultProps = {
  color: Colors.primaryLight,
};

HintedInputErrorText.defaultProps = {
  errorColor: Colors.secondaryAlt,
};

const emptyFunction = () => null;
