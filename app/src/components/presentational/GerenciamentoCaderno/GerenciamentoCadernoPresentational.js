import React, {useState} from "react";

import {Wrapper, Functionality, FunctionalityText, Member, MemberImage, MemberInfos, MemberOptions, LeaveNotebook} from "./styles";
import Header from "../../core/Header";
import { formatTitle } from "../../../utils/format";/*usado para manter o titulo do header no tamanho certo*/
import {ScrollView, Text, FlatList} from "react-native";

import { Ionicons } from "@expo/vector-icons";


function GerenciamentoCadernoPresentational({
  id, folder, title, goBack, membersData, bannedMembersData, functionalityOperations
  }) {

  const headerProps = {
    title: formatTitle(title),/*!!! não esquece de mudar depois para receber do caderno*/
    leftButtons: [
      {
        icon: "chevron-back",
        label: "Voltar",
        onPress: goBack,/*essa função está dentro do presentationprops em GerenciamentoCadernoContainer*/
      },
    ],
    rightButtons: [
      {
        icon: "pencil",
        onPress: functionalityOperations.changeNotebooksName
      },
    ],
  };

  /*esses dois são os únicos states que não serão controlados dentro do container,
  pois são relativos apenas ao controle da visibilidade da flatList com os membros,
  não é nem mesmo uma operação que afeta outros componentes é só por estlização (mostar
  todos os membros de uma vez numa lista giagnte e forçar o usuário a rolar a tela
  seria incomodo, por isso o controle da visibilidade)*/

  const [membersListVisible,setMembersListVisible]=useState(true);
  const [bannedMembersListVisible,setBannedMembersListVisible]=useState(false);


  return(

    <Wrapper>
      <Header {...headerProps}/>
      <ScrollView>

        <Functionality onPress={()=>{functionalityOperations.addMember();}}>
          <FunctionalityText>
            Adicionar membro
          </FunctionalityText>
          <Ionicons name="person-add" size={24} color="black" />
        </Functionality>

        <Functionality onPress={()=>{functionalityOperations.deleteNotebook();}}>

          {folder? <FunctionalityText>Deletar pasta</FunctionalityText> :
                   <FunctionalityText>Deletar caderno</FunctionalityText>
          }
          <Ionicons name="md-trash" size={24} color="black" />
        </Functionality>

        <Functionality
              onPress={()=>{setMembersListVisible(!membersListVisible)}}
        >
          <FunctionalityText>
            Membros
          </FunctionalityText>
          <Ionicons name={membersListVisible?"chevron-down":"chevron-forward"} size={24} color="black" />
        </Functionality>
        <FlatList
          style={membersListVisible? {display: 'flex'}: {display:'none'}}
          data={membersData}
          renderItem={({item})=>(
            <Member>
              <MemberInfos>
                <MemberImage source={require('../../../assets/images/default_user_image.png')}/>
                <Text>{item.name}</Text>
              </MemberInfos>
              <MemberOptions onPress={()=>{functionalityOperations.openMemberOptions(item);}}>
                <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
              </MemberOptions>
            </Member>
          )}
          keyExtractor={item => item.id}
        />

        <Functionality
              onPress={()=>{setBannedMembersListVisible(!bannedMembersListVisible)}}
        >
          <FunctionalityText>
            Lista de banidos
          </FunctionalityText>
          <Ionicons name={bannedMembersListVisible?"chevron-down":"chevron-forward"} size={24} color="black" />
        </Functionality>
        <FlatList
          style={bannedMembersListVisible? {display: 'flex'}: {display:'none'}}
          data={bannedMembersData}
          renderItem={({item})=>(
            <Member>
              <MemberInfos>
                <MemberImage source={require('../../../assets/images/default_user_image.png')}/>
                <Text>{item.name}</Text>
              </MemberInfos>
              <MemberOptions onPress={()=>{functionalityOperations.openUnBanMember(item);}}>
                <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
              </MemberOptions>
            </Member>
          )}
          keyExtractor={item => item.id}
        />

        <LeaveNotebook onPress={()=>{functionalityOperations.leaveNotebook();}}>
          <Ionicons name="md-log-out-outline" size={24} color="black" />
          <Text>Deixar de ser membro deste caderno</Text>
        </LeaveNotebook>
      </ScrollView>
    </Wrapper>
  );
}

export default GerenciamentoCadernoPresentational;
