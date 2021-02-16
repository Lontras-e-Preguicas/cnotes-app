import React from "react";
import styled from "styled-components/native";

import DefaultTouchable from "./DefaultTouchable";

import { Ionicons } from "@expo/vector-icons";

import { Colors, Typography, Spacing } from "../../config";

export function Header({ title, rightButtons }) {
  /*
  rightButtons: [
    {
      icon: str, 
      onPress: function,
      ...props
    },
    ...
  ]
  */

  let rightButtonsComponent = <></>;

  if (rightButtons) {
    rightButtonsComponent = (
      <HeaderRightButtons>
        {rightButtons.map(({ icon, onPress, ...props }, index) => (
          <DefaultTouchable onPress={onPress} key={index.toString()} {...props}>
            <StyledHeaderIcon name={icon} />
          </DefaultTouchable>
        ))}
      </HeaderRightButtons>
    );
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
        {rightButtonsComponent}
      </HeaderContent>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.SafeAreaView`
  width: 100%;
  align-self: flex-start;
`;

export const HeaderContent = styled.View`
  height: 56px;
  width: 100%;

  padding: 0 ${Spacing.getSpacing(16)};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: relative; /* Later center the text */
`;

export const HeaderTitle = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.giant};
  color: ${Colors.primaryDark};
`;

export const HeaderRightButtons = styled.View`
  flex-direction: row;
`;

export const StyledHeaderIcon = styled(Ionicons).attrs({
  color: Colors.primaryDark,
  size: 24,
})`
  margin-left: ${Spacing.getSpacing(8)};
`;

export default Header;
