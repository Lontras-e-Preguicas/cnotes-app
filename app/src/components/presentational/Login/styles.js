import styled from "styled-components/native";
import { Colors, Spacing, Typography } from "../../../config";
import getSpacing from "../../../config/spacing";
import Button from "../../core/Button";

import { HintedInputWrapper } from "../../core/HintedInput";

// Containers

export const Background = styled.ImageBackground`
  height: 100%;
`;

export const SafeAreaView = styled.SafeAreaView`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const StyledScrollView = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    height: "100%",
    justifyContent: "center",
  },
}))`
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

export const StyledInputWrapper = styled(HintedInputWrapper)`
  width: 80%;

  margin-top: ${getSpacing(12)};
`;

// Form bottom row

export const FormBottomRow = styled.View`
  width: 80%;
`;

export const ForgotPasswordWrapper = styled.TouchableOpacity`
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

export const LoginButton = styled(Button).attrs((props) => ({
  fill: true,
  color: Colors.secondary,
  textColor: Colors.primaryLight,
}))`
  width: 75%;
`;

export const SignupButton = styled(Button).attrs((props) => ({
  color: Colors.tertiary,
}))`
  width: 75%;
  margin-top: ${getSpacing(16)};
`;
