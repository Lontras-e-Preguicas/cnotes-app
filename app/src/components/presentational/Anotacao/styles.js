import { Platform, View, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Typography, Spacing } from "../../../config";
import Button from "../../core/Button";

// Main Wrappers

export const Wrapper = styled.View`
  height: 100%;
  background-color: ${Colors.primaryLight};
  padding-bottom: ${({ insets }) => insets.bottom}px;
`;

export const ContentWrapper = styled.View`
  padding: ${Spacing.getSpacing(8)} ${Spacing.getSpacing(16)};
  flex-grow: 1;
`;

// Title section

export const TitleContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-bottom: ${Spacing.getSpacing(16)};
`;

export const TitleText = styled.TextInput`
  flex-flow: row wrap;
  max-width: 60%;
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.giant};
  color: ${Colors.primaryDark};
  margin-bottom: ${Spacing.getSpacing(8)};
  opacity: 1;
`;

export const AuthorText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
`;

export const AuthorContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const AuthorPicture = styled.Image`
  border-radius: 12px;
  width: 24px;
  height: 24px;
  margin: 0 ${Spacing.getSpacing(4)};
`;

// Text section

export const ToolBarContainer = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  align-items: center;
  width: 100%;
`;

export const EditorContainer = styled.View`
  width: 100%;
  flex: 1;
`;

export const EditorScroll = styled.ScrollView``;

export const ScrollWrapper = styled.View`
  flex: 1;
`;

// Rating modal

export const RatingWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${Spacing.getSpacing(16)};
`;

export const StarIcon = styled(Ionicons).attrs(({ fill = true }) => ({
  name: fill ? "star" : "star-outline",
}))`
  color: gold;
  font-size: 40px;
  margin: 0 ${Spacing.getSpacing(8)};
`;

export const ModalButtonRow = styled.View`
  flex-direction: row;
  margin-top: ${Spacing.getSpacing(16)};
`;

export const RateModalButton = styled(Button).attrs({
  fill: true,
  color: Colors.tertiaryAlt,
  textColor: Colors.primaryLight,
})`
  flex: 1;
  margin: 0 ${Spacing.getSpacing(8)};
`;

export const CancelModalButton = styled(RateModalButton).attrs({
  color: Colors.secondaryAlt,
})``;
