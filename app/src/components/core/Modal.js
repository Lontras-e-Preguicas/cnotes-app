import React from "react";
import styled from "styled-components";
import { Colors, Typography, Spacing } from "../../config";
import DefaultTouchable from "./DefaultTouchable";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";

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
  behavior: Platform.OS === "ios" ? "padding" : "height",
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
