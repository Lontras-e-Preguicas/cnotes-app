import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import { Colors, Spacing, Typography } from "../../../config";
import { applyOpacity } from "../../../config/colors";
import Button, { ButtonText } from "../../core/Button";
import { HintedInput } from "../../core/HintedInput";

export const Wrapper = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "",
})`
  height: 100%;
  background-color: ${Colors.primaryLight};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${Spacing.getSpacing(8)};

  align-items: center;
  padding: 0 ${Spacing.getSpacing(16)};
`;

export const ProfilePictureWrapper = styled.View`
  elevation: 1;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-offset: 1px 1px;
  shadow-radius: 2px;
`;

export const ProfilePicture = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const ProfileName = styled.TextInput`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.huge};
  color: ${Colors.primaryDark};

  text-align: center;

  margin: ${Spacing.getSpacing(8)} 0;
`;

export const InfoContainer = styled.View`
  flex-grow: 1;
  margin-top: ${Spacing.getSpacing(8)};
  padding: 0 ${Spacing.getSpacing(8)};
  width: 100%;
`;

export const InfoWrapper = styled.View`
  flex-direction: column;
  margin-bottom: ${Spacing.getSpacing(16)};
`;

export const InfoName = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${applyOpacity(Colors.primaryDark, 0.8)};

  margin-bottom: ${Spacing.getSpacing(4)};
`;

export const InfoData = styled.TextInput`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  color: ${applyOpacity(Colors.primaryDark, 0.6)};

  margin-bottom: ${Spacing.getSpacing(4)};
  text-align: justify;
`;

export const BottomRow = styled.View`
  width: 100%;
  margin-bottom: ${Spacing.getSpacing(24)};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LoadingWrapper = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};
  color: ${Colors.primaryDark};
  margin-top: ${Spacing.getSpacing(8)};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  color: Colors.primaryDark,
  size: "large",
})``;

export const StyledButtonText = styled(ButtonText)`
  font-size: ${Typography.FONT_SIZES.medium};
`;

export const ChangePasswordButton = styled(Button).attrs({
  fill: false,
  color: Colors.primaryDark,
  ContentComponent: StyledButtonText,
})``;

export const LogoutButton = styled(Button).attrs({
  fill: false,
  color: Colors.secondaryAlt,
  ContentComponent: StyledButtonText,
})``;

export const UploadingModalContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${Spacing.getSpacing(24)};
`;

export const UploadingText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};
  color: ${Colors.primaryDark};
  margin-top: ${Spacing.getSpacing(8)};
`;

export const EditModeWrapper = styled.View`
  padding: ${Spacing.getSpacing(4)} ${Spacing.getSpacing(16)};
  background: ${Colors.tertiary};
`;

export const EditModeText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.regular};
  color: ${Colors.primaryDark};
`;

export const ModalContent = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${Spacing.getSpacing(8)};
`;

export const PasswordInput = styled(HintedInput).attrs({
  color: Colors.primaryDark,
})`
  margin-top: ${Spacing.getSpacing(8)};
  width: 100%;
`;
