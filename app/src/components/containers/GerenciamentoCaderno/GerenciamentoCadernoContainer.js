import React, {useState, useEffect} from "react";

import GerenciamentoCadernoPresentational from "../../presentational/GerenciamentoCaderno";
import { Modal } from "react-native";
import { SingleDataInputModal, ConfirmModal, MemberOptionsModal, ChangeRoleModal } from "../../presentational/GerenciamentoCaderno/modals";


/*  Nessa classe são realizadas as operações: alterar cargo, adicionar membro,
 * remover mebro, banir membro, retirar da lista de banidos, renomear caderno e
 * apagar caderno.
 */

function GerenciamentoCadernoContainer({navigation, route}){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(route.params.title);


  const retrieveData = async () => {
    setLoading(true);

/*dados de exemplo por enquanto:*/
/*obs.: quando os dados não forem mais de exemplo é necessario mudar 1 unica coi no Gerenciamento presentational:
passar o src de MemberImage de require para uri com o profile_picture*/
    setData([
        {
          id:1,
          name: "membro 1",
          role: "admin",
          is_active: true,
          is_banned: false,
          profile_picture: '../../../assets/images/default_user_image.png',
        },
        {
          id:2,
          name: "membro 2",
          role: "mod",
          is_active: true,
          is_banned: false,
          profile_picture: '../../../assets/images/default_user_image.png'
        },
        {
          id:3,
          name: "membro 3",
          role: "member",
          is_active: true,
          is_banned: false,
          profile_picture: '../../../assets/images/default_user_image.png'
        },
        {
          id:4,
          name: "membro 4 banido",
          role: "member",
          is_active: false,
          is_banned: true,
          profile_picture: '../../../assets/images/default_user_image.png'
        },
        {
          id:5,
          name: "membro 5 banido",
          role: "mod",
          is_active: false,
          is_banned: true,
          profile_picture: '../../../assets/images/default_user_image.png'
        },
        {
          id:6,
          name: "membro 6",
          role: "member",
          is_active: true,
          is_banned: false,
          profile_picture: '../../../assets/images/default_user_image.png'
        },
    ]);

    setLoading(false);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  let membersData = data.filter(m => (!m.is_banned && m.is_active));
  let bannedMembersData = data.filter(m => m.is_banned);

/**********************************************************************/
/* funções que de fato vão atuar no BD quando a integração for feita: */
/**********************************************************************/

  const removeMember = (member)=>{
    console.warn("chamou a função remove member que futuramente vai atuar no BD, para o membro: ID-", member.id," nome: ",member.name);
    /*como vai ficar depois, quando integrar:
      const removeMember = async (currentMember)=>{

      }
    */
  }
  const changeName = (text)=>{
    console.warn("chamou a função changeName que futuramente vai atuar no BD, mudando o nome de: ", title," para: ",text);
    setTitle(text);
  }
  const addMember = (text)=>{
    console.warn("chamou a função addMember que futuramente vai atuar no BD, enviando um convite para: ", text);
  }
  const deleteNotebook = ()=>{
    console.warn("chamou a função deleteNotebook que futuramente vai atuar no BD, deletando: ", title);
  }
  const leaveNotebook = ()=>{
    console.warn("chamou a função leaveNotebook que futuramente vai atuar no BD");
  }
  const banMember = ()=>{
    console.warn("chamou a função banMember que futuramente vai atuar no BD banindo o membro: ", currentMember.name);
  }
  const unBanMember = ()=>{
    console.warn("chamou a função unBanMember que futuramente vai atuar no BD removendo o membro: ", currentMember.name, " da lista de banidos");
  }
  const changeRole = (cargo)=>{
    console.warn("chamou a função changeRole que futuramente vai atuar no BD alterando o cargo do mebro de: ", currentMember.role," para: ", cargo);
  }



/*states reponsaveis por controlar a visibilidade do modal e qual operação está sendo
 relizada nele naquele momento, pois a tela é renderizada com só 1 modal que muda de
 conteúdo de acordo com a operção realizada naquel momento*/

  const [modalOperation,setModalOperation]=useState(null);
  const [modalVisible,setModalVisible]=useState(false);

/*é necessário que haja esse função para que os componentes internos do modal que
estão em ../../presentational/GerenciamentoCaderno/modals.js possam alterar sua
visibilidade e, assim, "fechar" o modal ao cancelar uma operação*/

  const setModalVisibility=(bool)=>{
    setModalVisible(bool);
  };

/*esse state serve para armazenar qual membro está com seu menu de opções aberto e, portanto, qual será modificado no backend*/
  const [currentMember, setCurrentMember] = useState({
                                                        id:null,
                                                        name: null,
                                                        role: null,
                                                        profile_picture: null,
                                                      });
  const [currentBannedMember, setCurrentBannedMember] = useState({
                                                                    id:null,
                                                                    name: null,
                                                                    role: null,
                                                                    profile_picture: null,
                                                                  });

/*informações passadas para todos os modais, quais ações os botoões desempenham,
quais seus textos internos... enfim, todos os parametros cobrado por cada tipo de
modal (é possivel verifila-los em presentational/GerenciamentoCaderno/modals.js)*/
  const infosToMemberOptionsModal={
    options: [
      {
        id:1,
        optionName: "Remover",
        optionIcon: "person-remove",
        onPress: ()=>{
          setModalOperation("removeMember");
        },
      },
      {
        id:2,
        optionName: "Banir",
        optionIcon: "close-circle-outline",
        onPress: ()=>{
          setModalOperation("banMember");
        },
      },
      {
        id:3,
        optionName: "Alterar cargo",
        optionIcon: null,
        onPress: ()=>{
          setModalOperation("changeRole");
        },
      },
    ],
    setVisible: setModalVisible,
  };

  const infosToRemoveMemberModal={
    memberInfos:currentMember,
    contentText:"Tem certeza que deseja remover '"+currentMember.name+"' ?",
    rightButtonText: "Remover",
    rightButtonAction: ()=>{removeMember(currentMember);},/*aqui chama a função que de fato altera o banco de dados*/
    setVisible: setModalVisible,
  };
  const infosToBanMemberCofirmModal={
    memberInfos:currentMember,
    contentText:"Tem certeza que deseja banir '"+currentMember.name+"' (todas as contribuições delx serão removidas do caderno)?",
    rightButtonText: "Banir",
    rightButtonAction: ()=>{banMember(currentMember);},/*função que vai upar os dados para o server quando um mebro for banido*/
    setVisible: setModalVisible,
  };
  const infosToChangeRoleModal={
    memberInfos:currentMember,
    contentText:"Alterar o cargo de "+currentMember.name+" para: ",
    rightButtonText: "Alterar",
    rightButtonAction: (cargo)=>{changeRole(cargo)},/*função que vai upar os dados para o server quando o cargo de um mebro for alterado*/
    setVisible: setModalVisible,
  };

  const infosToUnBanMemberModal={
    contentText:"Deseja retirar '"+currentBannedMember.name+"' da lista de banidos (elx e suas contribuições retornarão ao caderno)?",
    rightButtonText: "Retirar",
    rightButtonAction: ()=>{unBanMember(currentMember);},/*função que vai upar os dados para o server quando um mebro for retirado da lista de banidos*/
    setVisible: setModalVisible,
  };

  const infosToRenameNotebookModal={
    actualInputValue: title,
    contentText:(route.params.folder ? "Renomear pasta" : "Renomear caderno"),
    rightButtonText: "Renomear",
    rightButtonAction: (text)=>{changeName(text);},/*função que vai upar os dados para o server quando mudar de titulo*/
    setVisible: setModalVisible,
  };

  const infosToAddMemberModal={
    placeholder: "example@email.com",
    contentText:"Adicionar novo membro",
    rightButtonText: "Adicionar",
    rightButtonAction: (text)=>{addMember(text);},/*função que vai upar os dados para o server quando adicionar um membro*/
    setVisible: setModalVisible,
  };
  const infosToDeleteNotebookModal={
    contentText:(route.params.folder ? "Tem certeza de que realmente deseja deletar esta pasta?" :
                                        "Tem certeza de que realmente deseja deletar este caderno?"),
    rightButtonText: "Deletar",
    rightButtonAction: ()=>{deleteNotebook();},/*função que vai upar os dados para o server quando deletar uma pasta ou caderno*/
    setVisible: setModalVisible,
  };
  const infosToLeaveNotebook={
    contentText:"Tem certeza de que deseja deixar de ser membro deste caderno?",
    rightButtonText: "Sair",
    rightButtonAction: ()=>{leaveNotebook();},/*função que vai upar os dados para o server quando um membro sair de um caderno*/
    setVisible: setModalVisible,
  };


/*propriedades passadas para o presentational, inclusive funções settando as operações do modal presente no container*/

  const presentationalProps = {
    id: route.params.id,
    folder: route.params.folder,
    title: title,
    goBack: navigation.goBack,
    membersData: membersData,
    bannedMembersData: bannedMembersData,

    functionalityOperations:{
      openMemberOptions: (member)=>{
        /*função usada para settar a operação que abre o memberOptionsModal,
        que é chamado no onPress do icone de menu dentro do presentational*/
        setCurrentMember(member);
        setModalVisible(true);
        setModalOperation("memberModal");
      },
      openUnBanMember: (member)=>{
        setCurrentBannedMember(member);
        setModalVisible(true);
        setModalOperation("bannedMemberModal");
      },
      changeNotebooksName: ()=>{
        setModalVisible(true);
        setModalOperation("changeNotebooksName");
      },
      addMember: ()=>{
        setModalVisible(true);
        setModalOperation("addMember");
      },
      deleteNotebook: ()=>{
        setModalVisible(true);
        setModalOperation("deleteNotebook");
      },
      leaveNotebook: ()=>{
        setModalVisible(true);
        setModalOperation("leaveNotebook");
      },
    },
  };

  return (
    <>
    <GerenciamentoCadernoPresentational {...presentationalProps}/>
    <Modal
      transparent={true}
      animationType='fade'
      visible={modalVisible}
      onRequestClose={()=> {setModalVisible(false)}}
    >
        {
          modalOperation=="changeNotebooksName" ? <SingleDataInputModal {...infosToRenameNotebookModal}/>:
          modalOperation=="addMember" ? <SingleDataInputModal {...infosToAddMemberModal}/>:
          modalOperation=="deleteNotebook" ? <ConfirmModal {...infosToDeleteNotebookModal}/>:
          modalOperation=="bannedMemberModal" ? <ConfirmModal {...infosToUnBanMemberModal}/>:
          modalOperation=="memberModal" ? <MemberOptionsModal {...infosToMemberOptionsModal}/>:
          modalOperation=="removeMember" ? <ConfirmModal {...infosToRemoveMemberModal}/>:
          modalOperation=="banMember" ? <ConfirmModal {...infosToBanMemberCofirmModal}/>:
          modalOperation=="changeRole" ? <ChangeRoleModal {...infosToChangeRoleModal}/>:
          <ConfirmModal {...infosToLeaveNotebook}/>
        }
    </Modal>
    </>
  );
}

export default GerenciamentoCadernoContainer;
