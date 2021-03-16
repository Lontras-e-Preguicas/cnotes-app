import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import Animated, { Easing } from "react-native-reanimated";

import DefaultTouchable from "../../core/DefaultTouchable";

import AddSVG from "../../../assets/icons/add.svg";
import DocumentTextSVG from "../../../assets/icons/document-text.svg";
import FolderSVG from "../../../assets/icons/folder.svg";

import { Colors, Spacing, Typography } from "../../../config";

export const FAB = ({ addFolder, addConj }) => {
  const [extended, setExtended] = useState(false); // Sub-element state
  const extendAnimation = useRef(new Animated.Value(0)).current; // Animated value

  const toggleElements = () => {
    // Handle toggle
    if (extended) {
      Animated.timing(extendAnimation, {
        toValue: extended ? 0 : 1,
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      }).start(() => setExtended(false)); // Only hide on animation end
      return;
    }
    setExtended(true); // Show before animation
    Animated.timing(extendAnimation, {
      toValue: 1,
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  const subElementStyle = {
    // Styling for animating the sub-elements
    //display: extended ? "block" : "none",
    opacity: extendAnimation,
  };

  const subElements = (
    <>
      <FABSubElementContainer style={subElementStyle}>
        <FABDescription>Adicionar conjunto de anotações</FABDescription>
        <FABSubElement onPress={addConj}>
          <AddConjIcon />
        </FABSubElement>
      </FABSubElementContainer>
      <FABSubElementContainer style={subElementStyle}>
        <FABDescription>Adicionar pasta</FABDescription>
        <FABSubElement onPress={addFolder}>
          <AddFolderIcon />
        </FABSubElement>
      </FABSubElementContainer>
    </>
  );

  const addIconStyle = {
    transform: [
      {
        rotate: extendAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  return (
    <FABContainer>
      <FABElement onPress={toggleElements}>
        <Animated.View style={addIconStyle}>
          <AddIcon />
        </Animated.View>
      </FABElement>
      {subElements}
    </FABContainer>
  );
};

// Core elements

export const FABContainer = styled.View`
  position: absolute;
  right: ${Spacing.getSpacing(16)};
  bottom: ${Spacing.getSpacing(24)};

  flex-direction: column-reverse;
  align-items: flex-end; /* Align to end, then later correct centering because of captions */

  max-width: 60%;

  z-index: 1;

  elevation: 1;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-offset: 0px 1px;
  shadow-radius: 2px;
`;

export const FABElement = styled(DefaultTouchable)`
  width: 56px;
  height: 56px;
  border-radius: 28px;

  background-color: ${Colors.primaryDark};

  border: 2px solid ${Colors.secondary};
  align-items: center;
  justify-content: center;
`;

// Sub-elements

export const FABSubElement = styled(FABElement)`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const FABSubElementContainer = styled(Animated.View)`
  margin-bottom: ${Spacing.getSpacing(12)}; /* Bottom spacing */
  margin-right: 4px; /* Element centering */

  flex-direction: row;
  align-items: center;
`;

export const FABDescription = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  flex-grow: 1;

  color: ${Colors.secondary}; /* Changed for better contrast */

  text-align: right;

  margin-right: ${Spacing.getSpacing(8)};
`;

// Icons

export const AddIcon = styled(AddSVG).attrs({
  fill: Colors.primaryLight,
})`
  height: 24px;
  width: 24px;
`;

export const AddConjIcon = styled(DocumentTextSVG).attrs({
  fill: Colors.primaryLight,
})`
  height: 24px;
  width: 24px;
`;

export const AddFolderIcon = styled(FolderSVG).attrs({
  fill: Colors.primaryLight,
})`
  height: 24px;
  width: 24px;
`;

export default FAB;
