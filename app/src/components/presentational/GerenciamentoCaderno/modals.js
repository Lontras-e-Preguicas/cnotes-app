import React, {useState} from "react";
import styled from "styled-components/native";

import { Colors, Typography, Spacing } from "../../../config";
import { applyOpacity } from "../../../config/colors";

/*documentacao aqui para o picker component: https://reactnative.dev/docs/picker */
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, TouchableHighlight, FlatList, Picker } from "react-native";
import DefaultTouchable from "../../core/DefaultTouchable";
import { Ionicons } from "@expo/vector-icons";

import useDimensions from "../../hooks/useDimensions";

/*primeiro tipo de modal gerado para mudar nome do caderno ou adicionar alguém ao caderno, ou seja modal para entrada de 1 unico dado, por isso 1 so input*/
export function SingleDataInputModal({actualInputValue=null, placeholder=null, contentText, rightButtonText, rightButtonAction, setVisible}){
  const [text, onChangeText] = useState(actualInputValue);

  return(
    <ModalWrapper>
      <ModalBackground activeOpacity={1}
        onPress={()=>{setVisible(false)}}
      />
      <ModalView

      >
        <ContentView>
          <DefaultText>{contentText}</DefaultText>
          <TextInput
            value={text}
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={
              (text!=null && text.trim().length == 0) ?
              [{borderBottomColor: Colors.secondary}, {borderBottomWidth:1, height: '40%', width:'100%', backgroundColor:"#F3F3F3"}]
                  :
              [{borderBottomColor: Colors.tertiary}, {borderBottomWidth:1, height: '40%', width:'100%', backgroundColor:"#F3F3F3"}]
            }
          />
        </ContentView>
        <ButtonsView>
          <LeftButton
            activeOpacity={0.4}
            underlayColor={applyOpacity(Colors.secondary, 0.15)}
            onPress={()=>{setVisible(false)}}
          >
            <ButtonText>Cancelar</ButtonText>
          </LeftButton>

          <RightButton
            activeOpacity={0.4}
            underlayColor= {applyOpacity(Colors.tertiary, 0.15)}
            onPress={()=>{
              setVisible(false);
              rightButtonAction(text);
            }}
          >
            <ButtonText>{rightButtonText}</ButtonText>
          </RightButton>
        </ButtonsView>
      </ModalView>
    </ModalWrapper>
  )
}

export function ConfirmModal({ contentText, rightButtonText, rightButtonAction, setVisible}){

  return(
    <ModalWrapper>
      <ModalBackground activeOpacity={1}
        onPress={()=>{setVisible(false)}}
      />
      <ModalView>
        <ContentView>
          <DefaultText>{contentText}</DefaultText>
        </ContentView>
        <ButtonsView>
          <LeftButton
            activeOpacity={0.4}
            underlayColor= {applyOpacity(Colors.tertiary, 0.15)}
            onPress={()=>{setVisible(false)}}
          >
            <ButtonText>Cancelar</ButtonText>
          </LeftButton>

          <RightButton
            activeOpacity={0.4}
            underlayColor= {applyOpacity(Colors.secondary, 0.5)}
            onPress={()=>{
              setVisible(false);
              rightButtonAction();
            }}
          >
            <ButtonText>{rightButtonText}</ButtonText>
          </RightButton>
        </ButtonsView>
      </ModalView>
    </ModalWrapper>
  )
}

export function MemberOptionsModal({ options, setVisible}){

  return(
    <ModalWrapper>
      <ModalBackground activeOpacity={1}
        onPress={()=>{setVisible(false);}}
      />
      <MemberOptionsModalView>
        <OptionsView>
        <FlatList
          data={options}
          renderItem={({item})=>(
            <Option onPress={()=>{item.onPress()}}>
                <ButtonText>{item.optionName}</ButtonText>
                {(item.optionIcon!=null) ? <Ionicons name={item.optionIcon} size={24} color="black" /> : <></>}
            </Option>
          )}
          keyExtractor={item => item.id}
        />
        </OptionsView>
      </MemberOptionsModalView>
    </ModalWrapper>
  )
}

/*último tipo de modal unicamente para alteração do cargo de um membro*/
export function ChangeRoleModal({ memberInfos, contentText, rightButtonText, rightButtonAction, setVisible}){
  const [cargo,setCargo] = useState(memberInfos.role);

  return(
    <ModalWrapper>
      <ModalBackground activeOpacity={1}
        onPress={()=>{setVisible(false)}}
      />
      <ModalView>
        <ContentView>
          <DefaultText>{contentText}</DefaultText>
          <Select
            selectedValue={cargo}
            onValueChange={(itemValue, itemIndex) => setCargo(itemValue)}
          >
            <Picker.Item label="membro" value="member" />
            <Picker.Item label="moderador" value="mod" />
            <Picker.Item label="administrador" value="admin" />
          </Select>
        </ContentView>
        <ButtonsView>
          <LeftButton
            activeOpacity={0.4}
            underlayColor= {applyOpacity(Colors.tertiary, 0.15)}
            onPress={()=>{setVisible(false)}}
          >
            <ButtonText>Cancelar</ButtonText>
          </LeftButton>

          <RightButton
            activeOpacity={0.4}
            underlayColor= {applyOpacity(Colors.secondary, 0.5)}
            onPress={()=>{
              setVisible(false);
              rightButtonAction(cargo);
            }}
          >
            <ButtonText>{rightButtonText}</ButtonText>
          </RightButton>
        </ButtonsView>
      </ModalView>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.SafeAreaView`
  flex:1;
  justify-content: center;
  alignItems: center;
`;

const ModalBackground = styled.TouchableOpacity`
  background-color: ${applyOpacity(Colors.primaryDark, 0.15)};
  position: absolute;/*para que não ocupe espaço no wrapper e assim o ModalView fique no centro*/
  top: 0px;
  left: 0px;
  bottom: 0px;
  right:0px;
  z-index:-1; /*para que fique um fundo preto ATRÁS da ModalView*/
`;

/*as 'const's abaixo são usadas para os modais comuns de confirmação ou inserção de 1 único dado (single input e confirm modal)*/
const ModalView = styled.View`
  width: ${Spacing.getSpacing(300)};
  height: ${Spacing.getSpacing(200)};
  background-color: ${Colors.primaryLight};
  border-radius: ${Spacing.getSpacing(20)};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContentView = styled.View`
  width: 100%;
  height: 70%;
  padding: 10%;
  border-radius: ${Spacing.getSpacing(20)};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const ButtonsView = styled.View`
  width: 100%;
  height: 30%;
  border-bottom-left-radius: ${Spacing.getSpacing(20)};
  border-bottom-right-radius: ${Spacing.getSpacing(20)};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top-color: ${applyOpacity(Colors.primaryDark, 0.15)};
  border-top-width: ${Spacing.getSpacing(0.5)};
`;

const LeftButton = styled.TouchableHighlight`
 background-color: ${Colors.primaryLight};
 height:80%;
 flex:1;
 align-items: center;
 justify-content: center;
 border-right-color: ${applyOpacity(Colors.primaryDark, 0.15)};
 border-right-width: ${Spacing.getSpacing(0.5)};
 border-bottom-left-radius: ${Spacing.getSpacing(20)};
`;

const RightButton = styled.TouchableHighlight`
 background-color: ${Colors.primaryLight};
 height:80%;
 flex:1;
 align-items: center;
 justify-content: center;
 border-left-color: ${applyOpacity(Colors.primaryDark, 0.15)};
 border-left-width: ${Spacing.getSpacing(0.5)};
 border-bottom-right-radius: ${Spacing.getSpacing(20)};
`;

const MiddleButton = styled.TouchableHighlight`
 background-color: ${Colors.primaryLight};
 height:100%;
 flex:1;
 align-items: center;
 justify-content: center;
 border-left-color: ${applyOpacity(Colors.primaryDark, 0.15)};
 border-left-width: ${Spacing.getSpacing(0.5)};
 border-right-color: ${applyOpacity(Colors.primaryDark, 0.15)};
 border-right-width: ${Spacing.getSpacing(0.5)};
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: ${Typography.FONT_SIZES.large};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  text-align: center;
`;

const DefaultText = styled.Text`
  color: #000;
  font-size: ${Typography.FONT_SIZES.medium};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  text-align: center;
`;

/*as 'const's abaixo são usadas para o modal que aparece quando o usuario clica  o menu de opções
de um mebro do caderno (e infelizmente trbalhei nelas com medidas absolutas em algumas coisas porque...
minha paciencia ja era para estilização)*/
const MemberOptionsModalView = styled.View`
  width: ${Spacing.getSpacing(300)};
  height: ${Spacing.getSpacing(200)};
  background-color: ${Colors.primaryLight};
  border-radius: ${Spacing.getSpacing(20)};
  justify-content:center;
  padding: ${Spacing.getSpacing(20)};
  /*obs.: se mudar esse padding ou a aquntidade de opções no menu se torna necessario mudar também o height do 'Option'*/
`;

const OptionsView = styled.View`
  border-color: ${applyOpacity(Colors.primaryDark, 0.15)};
  border-width: ${Spacing.getSpacing(1)};
  flex-direction: column;
`;

const Option = styled(DefaultTouchable)`
  height: ${Spacing.getSpacing(51.3)};
  /*200 de altura do modal view - 40 pelo padding top de 20 e bottom de 20 = 160
   160/3 ~ 53.3 - (1px de borda * cada option, no caso sao 3, então) = 51.3*/
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  border-top-color: ${applyOpacity(Colors.primaryDark, 0.15)};
  border-top-width: ${Spacing.getSpacing(0.5)};
  border-bottom-color: ${applyOpacity(Colors.primaryDark, 0.15)};
  border-bottom-width: ${Spacing.getSpacing(0.5)};
`;

const Select = styled.Picker`
  border-color: #000;
  border-width: ${Spacing.getSpacing(1)};
  height: 40%;
  width: 100%;
  color: #000;
  font-size: ${Typography.FONT_SIZES.medium};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Light};
`;

export default ConfirmModal;
