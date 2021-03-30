import styled from "styled-components/native";
import { Colors, Spacing, Typography } from "../../../config";
import getSpacing from "../../../config/spacing";
import Button from "../../core/Button";
import DefaultTouchable from "../../core/DefaultTouchable";

import { SafeAreaView } from "react-native-safe-area-context";

import { HintedInput } from "../../core/HintedInput";

// Containers

export const Background = styled.ImageBackground`
  height: 100%;
  background-color: ${Colors.primaryDark};
`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    height: "100%",
    justifyContent: "center",
  },
})`
  width: 100%;
`;

export const FormWrapper = styled.View`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

// Form Items

export const Title = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.giant};
  text-align: center;

  color: ${Colors.primaryLight};

  margin-bottom: ${Spacing.getSpacing(4)};
`;

export const StyledInput = styled(HintedInput)`
  width: 80%;
  margin-top: ${getSpacing(12)};
`;

// Form bottom row

export const FormBottomRow = styled.View`
  width: 80%;
`;

export const ForgotPasswordWrapper = styled(DefaultTouchable)`
  align-self: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.small};

  color: ${Colors.tertiary};

  align-self: flex-end;

  text-decoration: underline;
  text-decoration-color: ${Colors.tertiary};

  padding: ${getSpacing(8)} 0;

  margin-bottom: ${getSpacing(4)};
`;

// Buttons

export const LoginButton = styled(Button).attrs({
  fill: true,
  color: Colors.secondary,
  textColor: Colors.primaryLight,
})`
  width: 75%;
  height: 48px;
`;

export const SignupButton = styled(Button).attrs({
  color: Colors.tertiary,
})`
  width: 75%;
  height: 48px;
  margin-top: ${getSpacing(16)};
`;

// Modal

export const StyledModalHintedInput = styled(HintedInput).attrs({
  color: Colors.primaryDark,
})`
  margin-top: ${Spacing.getSpacing(8)};
  width: 100%;
`;
