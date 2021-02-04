import React from "react";

import styled from "styled-components/native";
import { Colors, Typography, Spacing } from "../../config";
import { applyOpacity } from "../../config/colors";

export const HintedInput = ({
  color = Colors.primaryLight,
  inputHeight = "48px",
  width = "80%",
  placeholderTextColor,
  hint,
  placeholder,
  inputProps,
  value,
  ...props
}) => {
  let placeholderColor = placeholderTextColor || applyOpacity(color, 0.6);

  return (
    <Container width={width} {...props}>
      <HintText color={color}>{hint}</HintText>
      <StyledInput
        value={value}
        color={color}
        placeholder={placeholder || hint}
        inputHeight={inputHeight}
        placeholderTextColor={placeholderColor}
        {...inputProps}
      />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  align-items: center;

  width: ${(props) => props.width};
`;

const HintText = styled.Text`
  margin-left: ${Spacing.getSpacing(10)};
  margin-bottom: ${Spacing.getSpacing(4)};
  align-self: flex-start;

  color: ${(props) => props.color};

  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
`;

const StyledInput = styled.TextInput`
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

export default HintedInput;
