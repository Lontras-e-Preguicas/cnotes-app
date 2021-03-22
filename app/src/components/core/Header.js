import React from "react";
import styled from "styled-components/native";

import DefaultTouchable from "./DefaultTouchable";

import { Ionicons } from "@expo/vector-icons";

import { Colors, Typography, Spacing } from "../../config";

export function Header({ title, rightButtons, leftButtons }) {
  /*
  rightButtons: [
    {
      icon: [str],
      label: [str],
      onPress: [function],
      ...props
    },
    ...
  ]

  leftButtons: [
    {
      icon: [str],
      label: [str],
      onPress: [function],
      ...props
    },
    ...
  ]
  */

  let rightButtonsComponent = <></>;

  if (rightButtons) {
    rightButtonsComponent = (
      <HeaderRightButtons>
        {rightButtons.map(({ icon, onPress, label, ...props }, index) => (
          <HeaderIconTouchable
            onPress={onPress}
            key={index.toString()}
            {...props}
          >
            {icon ? <StyledHeaderIcon name={icon} /> : null}
            {label ? <HeaderIconLabel>{label}</HeaderIconLabel> : null}
          </HeaderIconTouchable>
        ))}
      </HeaderRightButtons>
    );
  }

  if (!leftButtons) {
    return (
      <HeaderContainer>
        <HeaderContent>
          <HeaderTitle>{title}</HeaderTitle>
          {rightButtonsComponent}
        </HeaderContent>
      </HeaderContainer>
    );
  }

  let leftButtonsComponent = (
    <HeaderLeftButtons>
      {leftButtons.map(({ icon, onPress, label, ...props }, index) => (
        <HeaderIconTouchable
          onPress={onPress}
          key={index.toString()}
          {...props}
        >
          <StyledHeaderIcon name={icon} />
          {label ? <HeaderIconLabel>{label}</HeaderIconLabel> : null}
        </HeaderIconTouchable>
      ))}
    </HeaderLeftButtons>
  );

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderCenterWrapper>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderCenterWrapper>
        {leftButtonsComponent}
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

export const HeaderCenterWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  left: ${Spacing.getSpacing(16)};
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

export const HeaderRightButtons = styled.View`
  flex-direction: row;
  margin-left: auto;
`;

export const HeaderLeftButtons = styled.View`
  flex-direction: row;
`;

export const StyledHeaderIcon = styled(Ionicons).attrs({
  color: Colors.primaryDark,
  size: 24,
})`
  margin-left: ${Spacing.getSpacing(8)};
`;

export const HeaderIconLabel = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${Colors.primaryDark};
`;

export const HeaderIconTouchable = styled(DefaultTouchable)`
  flex-direction: row;
  align-items: center;
`;

export default Header;
