import React from "react";

import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";
import { Typography } from "../../config";
import getSpacing from "../../config/spacing";

export const BackButton = ({
  tintColor,
  label,
  disabled,
  canGoBack,
  ...props
}) => {
  if (disabled || !canGoBack) {
    return <></>;
  }

  return (
    <Wrapper {...props}>
      <Ionicons name="chevron-back" color={tintColor} size={24} />
      <LabelText tintColor={tintColor}>{label}</LabelText>
    </Wrapper>
  );
};

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: ${getSpacing(4)};
`;

const LabelText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${({ tintColor }) => tintColor};
  margin-left: ${getSpacing(4)};
`;

export default BackButton;
