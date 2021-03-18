import React, { useState } from "react";
import { Colors, Typography, Spacing } from "../../../config";
import styled from "styled-components/native";
import Animated, { Easing } from "react-native-reanimated";
import { applyOpacity } from "../../../config/colors";

import DefaultTouchable from "../../core/DefaultTouchable";

import AddSVG from "../../../assets/icons/add.svg";
import DocumentTextSVG from "../../../assets/icons/document-text.svg";
import FolderSVG from "../../../assets/icons/folder.svg";
import {AddTileIcon} from "./styles";

import { FontAwesome } from '@expo/vector-icons';

export function Modal() {

  const [modalVisible, setModalVisible] = useState(false);

  return(
    <>
      <ContainerButtonModal>
        <ModalDelete
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            //Permite que o usuário saia do modal, sem clicar no botão "Cancelar" ou "Confirmar"
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <ContainerModal>
              <ContainerText>
                <ContentModal>Insira o seu comentário</ContentModal>
                <InputModal />
              </ContainerText>
             <ContainerButtons>
               <ButtonCancel
                  onPress={()=> {setModalVisible(false)}}
                 >
                    <ContentButtons>Cancelar</ContentButtons>
                </ButtonCancel>
                <ButtonConfirm>
                    <ContentButtons>Inserir</ContentButtons>
              </ButtonConfirm>
              </ContainerButtons>
          </ContainerModal>
        </ModalDelete>
        <OpenModal
          onPress={()=> {setModalVisible(true)}}
        >
            <AddTileIcon />
        </OpenModal>
      </ContainerButtonModal>
    </>
  );
}

/*Styles*/

//Container que envolve o Modal
export const ContainerButtonModal = styled.View`
  position: absolute;
  bottom:0;
  right: 0;
  margin-bottom: ${Spacing.getSpacing(10)};
  margin-right: ${Spacing.getSpacing(25)};
`;

//Containers do Modal

export const ModalDelete = styled.Modal``;

export const ContainerModal = styled.View`
  background-color: ${Colors.primaryLight};
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin-top: 15%;
  margin-left: ${Spacing.getSpacing(15)};
  margin-right: ${Spacing.getSpacing(15)};
  padding-left: ${Spacing.getSpacing(40)};
  padding-right: ${Spacing.getSpacing(40)};
  elevation: 10;
`;

export const ContainerText = styled.View`
  width: 100%;
`;

export const ContainerButtons = styled.View`
  justify-content: center;
  align-items: flex-end;
  flex-flow: row nowrap;
  padding-left: ${Spacing.getSpacing(10)};
  padding-right: ${Spacing.getSpacing(10)};
  width: 100%;
`;

//Conteudo Modal

export const Content = styled.Text`
  flex-flow: row wrap;
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};
`;

export const ContentModal = styled(Content)`
  color: ${Colors.primaryDark};
`;
export const InputModal = styled.TextInput`
  width: 100%;
  height:30%;
  margin-top: ${Spacing.getSpacing(5)};
  margin-bottom: ${Spacing.getSpacing(5)};
  border: 1px solid ${applyOpacity(Colors.primaryDark, 0.3)};
  flex-flow: row wrap;
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};
  color: ${applyOpacity(Colors.primaryDark, 0.3)};
  border-radius: ${Spacing.getSpacing(10)};

`;
// Buttons

export const OpenModal = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 28px;

  background-color: ${Colors.primaryDark};

  border: 2px solid  ${"#9975E4"};
  align-items: center;
  justify-content: center;
`;

export const ButtonsModal = styled.TouchableOpacity`
  justify-content: center;
  flex-flow: row nowrap;
  border-radius: ${Spacing.getSpacing(15)};
  width: 55%;
`;

export const ButtonCancel = styled(ButtonsModal)`
  background-color: ${Colors.secondary};
`;

export const ButtonConfirm = styled(ButtonsModal)`
  margin-left: ${Spacing.getSpacing(15)};
  background-color: ${Colors.tertiary};
`;

//Content Buttons

export const ContentButtons = styled(Content)`
  flex-flow: row wrap;
  justify-content: space-around;
  padding: ${Spacing.getSpacing(10)};
  color: ${Colors.primaryLight};
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


export default Modal;
