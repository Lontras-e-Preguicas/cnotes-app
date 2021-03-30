import React from "react";

import styled from "styled-components/native";
import { Colors, Typography } from "../../config";
import getSpacing from "../../config/spacing";
import DefaultTouchable from "./DefaultTouchable";
import { ActivityIndicator } from "react-native";

export function Button({
  ContentComponent = ButtonText,
  fill = false,
  color = Colors.primaryLight,
  children,
  loading = false,
  textColor,
  activityIndicatorColor,
  loadingComponent = ActivityIndicator,
  ...props
}) {
  const _textColor = textColor || color;
  const _activityIndicatorColor = activityIndicatorColor || textColor;
  const LoadingComponent = loadingComponent;

  let buttonContent = (
    <ContentComponent textColor={_textColor}>{children}</ContentComponent>
  );

  if (loading) {
    buttonContent = (
      <LoadingComponent size="small" color={_activityIndicatorColor} />
    );
  }

  return (
    <ButtonWrapper fill={fill} color={color} {...props}>
      {buttonContent}
    </ButtonWrapper>
  );
}

export const ButtonWrapper = styled(DefaultTouchable)`
  border: ${({ fill }) => (fill ? "0" : "1px")} solid ${({ color }) => color};
  border-radius: ${getSpacing(10)};
  background-color: ${({ fill, color }) => (fill ? color : "transparent")};

  padding: ${getSpacing(12)} ${getSpacing(10)};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};

  color: ${({ textColor }) => textColor};
`;

export default Button;
