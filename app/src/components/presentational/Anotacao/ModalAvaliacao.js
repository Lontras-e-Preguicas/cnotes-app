import React, { useState } from "react";
import styled from "styled-components";
import { Colors, Typography, Spacing } from "../../../config";
import { Rating } from 'react-native-ratings';

export function ModalAvaliacao() {

  const [modalVisible, setModalVisible] = useState(true);

  return(
    <>
        <AvaliacaoModal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            //Permite que o usuário saia do modal, sem clicar no botão "Agora nao" ou "Enviar"
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
        >
        <ContainerModal>
          <ContainerText>
              <ContentModal>Avalie a anotação :</ContentModal>
          </ContainerText>
          <ContainerStar>
            <Rating
              ratingCount={5}
              startingValue={0}
              minValue={1}
              />
          </ContainerStar>
          <ContainerButtons>
            <ButtonCancel
              onPress={()=> {setModalVisible(false)}}
             >
              <ContentButtons>Agora não</ContentButtons>
            </ButtonCancel>
            <ButtonSubmit>
              <ContentButtons>Enviar</ContentButtons>
            </ButtonSubmit>
          </ContainerButtons>
        </ContainerModal>
      </AvaliacaoModal>
  </>
  );
}

/* Styles */

//Containers do Modal

export const AvaliacaoModal = styled.Modal``;

export const ContainerModal = styled.View`
  background-color: ${Colors.primaryLight};
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin-top: ${Spacing.getSpacing(45)};
  margin-left: ${Spacing.getSpacing(15)};
  margin-right: ${Spacing.getSpacing(15)};
  padding: ${Spacing.getSpacing(40)};
  elevation: 10;
`;

export const ContainerText = styled.View`
  width: 100%;
`;

export const ContainerButtons = styled.View`
  justify-content: space-around;
  flex-flow: row nowrap;
  padding: ${Spacing.getSpacing(25)};
  width: 100%;
`;

export const ContainerStar = styled.View`
  width: 100%;
  padding: 10%;
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
  flex-grow: 1;
  flex-basis: 0;
  border-radius: 15px;
`;

export const ButtonCancel = styled(ButtonsModal)`
  background-color: ${Colors.secondary};
`;

export const ButtonSubmit = styled(ButtonsModal)`
  margin-left: 5%;
  background-color: ${Colors.tertiary};
`;

//Content Buttons

export const ContentButtons = styled(Content)`
  flex-flow: row wrap;
  justify-content: space-around;
  padding: ${Spacing.getSpacing(10)};
  color: ${Colors.primaryLight};
`;

export default ModalAvaliacao;
