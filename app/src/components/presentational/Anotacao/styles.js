import styled from "styled-components/native";

import { Colors, Typography, Spacing } from "../../../config";

// Main Wrappers

export const Wrapper = styled.View`
  height: 100%;
  background-color: ${Colors.primaryLight};
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

export const TitleText = styled.Text`
  flex-flow: row wrap;
  max-width: 60%;
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.giant};
  margin-bottom: ${Spacing.getSpacing(8)};
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

export const ToolBarContainer = styled.KeyboardAvoidingView`
  align-items: center;
  width: 100%;
  align-self: flex-end;
  align-items: flex-end;
`;

export const EditorContainer = styled.ScrollView`
  width: 100%;
`;
