import React from "react";
import styled from "styled-components";
import { Colors, Typography, Spacing } from "../../config";
import DefaultTouchable from "./DefaultTouchable";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";
import Button from "./Button";
import { applyOpacity } from "../../config/colors";

export function Modal({ visible, setVisible, children, title, close }) {
  const insets = useSafeAreaInsets();

  if (!close) {
    close = () => setVisible(false);
  }

  let titleComponent = <></>;

  if (title) {
    titleComponent = <TitleText>{title}</TitleText>;
  }

  return (
    <>
      <StyledModal visible={visible} onRequestClose={close}>
        <Backdrop onPress={close} />

        <ContainerModal>
          <ContentWrapper insets={insets}>
            {titleComponent}
            {children}
          </ContentWrapper>
        </ContainerModal>
      </StyledModal>
    </>
  );
}

export const ModalButtonRow = styled.View`
  flex-direction: row;
  margin-top: ${Spacing.getSpacing(16)};
`;

export const ConfirmModalButtom = styled(Button).attrs({
  fill: true,
  color: Colors.tertiaryAlt,
  textColor: Colors.primaryLight,
})`
  flex: 1;
  margin: 0 ${Spacing.getSpacing(8)};
`;

export const CancelModalButton = styled(ConfirmModalButtom).attrs({
  color: Colors.secondaryAlt,
})``;

export const ModalDescription = styled.Text`
  margin-top: ${Spacing.getSpacing(8)};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  max-width: 80%;
  color: ${applyOpacity(Colors.primaryDark, 0.8)};
  text-align: center;
  align-self: center;
`;

/* Styles */

//Containers do Modal

const StyledModal = styled.Modal.attrs({
  animationType: "slide",
  transparent: true,
})``;

const Backdrop = styled(DefaultTouchable).attrs({
  activeOpacity: 1,
})`
  height: 100%;
  width: 100%;
`;

const ContainerModal = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "",
})`
  background-color: ${Colors.primaryLight};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  position: absolute;
  bottom: 0;

  background-color: ${Colors.primaryLight};

  width: 100%;

  elevation: 16;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-offset: 0px 1px;
  shadow-radius: 2px;
`;

const ContentWrapper = styled.View`
  padding: ${Spacing.getSpacing(24)};
  margin-bottom: ${({ insets }) => insets.bottom}px;
`;

const TitleText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.huge};
`;

export default Modal;
