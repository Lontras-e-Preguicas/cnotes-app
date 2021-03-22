import React, { useState } from "react";
import styled from "styled-components";
import { Colors, Typography, Spacing } from "../../../config";

export function ModalAtividades() {

  const [modalVisible, setModalVisible] = useState(true);

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
                <ContentModal>Você tem certeza que deseja limpar as notificações?</ContentModal>
              </ContainerText>
              <ContainerButtons>
                <ButtonCancel
                  onPress={()=> {setModalVisible(false)}}
                 >
                    <ContentButtons>Cancelar</ContentButtons>
                  </ButtonCancel>
                  <ButtonConfirm>
                    <ContentButtons>Confirmar</ContentButtons>
                  </ButtonConfirm>
              </ContainerButtons>
            </ContainerModal>
          </ModalDelete>
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
  padding: ${Spacing.getSpacing(40)};
  elevation: 10;
`;

export const ContainerText = styled.View`
  width: 100%;
`;

export const ContainerButtons = styled.View`
  justify-content: center;
  align-items: flex-end;
  flex-flow: row nowrap;
  padding: ${Spacing.getSpacing(25)};
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

// Buttons

export const ButtonsModal = styled.TouchableOpacity`
  justify-content: center;
  flex-flow: row nowrap;
  border-radius: 15px;
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

export default ModalAtividades;
