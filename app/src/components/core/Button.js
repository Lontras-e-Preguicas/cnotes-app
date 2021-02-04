import React from "react";

import styled from "styled-components/native";
import { Colors, Typography } from "../../config";
import getSpacing from "../../config/spacing";

export function Button({
  ContentComponent = ButtonText,
  fill = false,
  color = Colors.primaryLight,
  children,
  ...props
}) {
  const textColor = props.textColor || color;

  return (
    <ButtonWrapper fill={fill} color={color} {...props}>
      <ContentComponent textColor={textColor}>{children}</ContentComponent>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.TouchableOpacity`
  border: ${({ fill }) => (fill ? "0" : "1px")} solid ${({ color }) => color};
  border-radius: ${getSpacing(10)};
  background-color: ${({ fill, color }) => (fill ? color : "transparent")};

  padding: ${getSpacing(12)} ${getSpacing(10)};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};

  color: ${({ textColor }) => textColor};
`;

export default Button;
