import React, { useState } from "react";

import {
  Wrapper,
  ContentWrapper,
  MemberContainer,
  MemberPictureWrapper,
  MemberPictureImage,
  MemberInfoWrapper,
  MemberNameText,
  MemberRoleText,
  MemberWrapper,
  MemberTopDelimiter,
  TitleText,
  StyledFlatList,
  MemberModalPicture,
  MemberModalContainer,
  MemberModalName,
  MemberModalRole,
  BanIndicator,
  PositiveButton,
  NegativeButton,
  StyledAddMemberIcon,
  AddMemberContainer,
  StyledHintedInput,
} from "./styles";
import Header from "../../core/Header";
import { formatTitle } from "../../../utils/format";
import { Images } from "../../../config";
import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
} from "../../core/Modal";
import { Alert } from "react-native";

const ROLE_MAP = {
  member: "Membro",
  mod: "Moderador",
  admin: "Administrador",
};

function GerenciamentoCadernoPresentational({
  title,
  goBack,
  data,
  refreshing,
  doRefresh,
  membership,
  removeMember,
  addMember,
  changeTitle,
  deleteNotebook,
  leaveNotebook,
  banMember,
  unBanMember,
  changeRole,
}) {
  const role = membership.role;
  const [memberModalVisible, setMemberModalVisible] = useState(false);
  const [inviteMemberModalVisible, setInviteMemberModalVisible] = useState(
    false,
  );
  const [renameModalVisible, setRenameModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});
  const [modalActionLoading, setModalActionLoading] = useState(false);

  const openMember = (memberInfo) => {
    setSelectedMember(memberInfo);
    setMemberModalVisible(true);
  };

  const doBan = async (id, banned) => {
    if (modalActionLoading) {
      return;
    }

    setModalActionLoading(true);
    if (banned) {
      await unBanMember(id);
    } else {
      await banMember(id);
    }
    setModalActionLoading(false);
    setMemberModalVisible(false);
  };

  const doKick = async (id) => {
    if (modalActionLoading) {
      return;
    }

    setModalActionLoading(true);

    Alert.alert(
      "Tem certeza que deseja expulsar esse membro do caderno?",
      "Ele só poderá voltar com um novo convite.",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {
            setModalActionLoading(false);
          },
        },
        {
          text: "Expulsar",
          onPress: async () => {
            await removeMember(id);

            setModalActionLoading(false);
            setMemberModalVisible(false);
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const doPromote = async (id, role) => {
    if (modalActionLoading) {
      return;
    }

    setModalActionLoading(true);

    const newRole = role === "member" ? "mod" : "admin";

    await changeRole(id, newRole);

    setModalActionLoading(false);
    setMemberModalVisible(false);
  };

  const doDemote = async (id, role) => {
    if (modalActionLoading) {
      return;
    }

    setModalActionLoading(true);

    const newRole = role === "mod" ? "member" : "mod";

    await changeRole(id, newRole);

    setModalActionLoading(false);
    setMemberModalVisible(false);
  };

  const doLeave = () => {
    Alert.alert(
      "Tem certeza que deseja sair do caderno?",
      "Você só poderá voltar com um novo convite.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: () => leaveNotebook(),
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const doDelete = () => {
    Alert.alert(
      "Tem certeza que deseja DELETAR o caderno?",
      "Essa ação é irreversível!",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: () => {
            Alert.alert(
              "Deseja mesmo continuar?",
              "Todo conteúdo do caderno será IRRECUPERÁVEL!",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "Deletar",
                  onPress: () => deleteNotebook(),
                  style: "destructive",
                },
              ],
              {
                cancelable: true,
              },
            );
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const headerProps = {
    title: formatTitle(title),
    leftButtons: [
      {
        icon: "chevron-back",
        label: "Voltar",
        onPress: goBack,
      },
    ],
    rightButtons: [],
  };

  if (role !== "admin") {
    headerProps.rightButtons.push({
      icon: "exit-outline",
      onPress: doLeave,
    });
  } else {
    headerProps.rightButtons.push({
      icon: "pencil-outline",
      onPress: () => setRenameModalVisible(true),
    });
    headerProps.rightButtons.push({
      icon: "trash-outline",
      onPress: doDelete,
    });
  }

  return (
    <Wrapper>
      <Header {...headerProps} />
      <ContentWrapper>
        <TitleText>Membros</TitleText>

        <StyledFlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, ...props }) => (
            <MemberComponent
              onPress={() => openMember(item)}
              {...props}
              {...item}
            />
          )}
          refreshing={refreshing}
          onRefresh={doRefresh}
          ListHeaderComponent={() => (
            <MemberWrapper>
              <AddMemberContainer
                onPress={() => setInviteMemberModalVisible(true)}
              >
                <StyledAddMemberIcon />
                <MemberInfoWrapper>
                  <MemberNameText>Convidar novo membro</MemberNameText>
                </MemberInfoWrapper>
              </AddMemberContainer>
              <MemberTopDelimiter />
            </MemberWrapper>
          )}
        />
      </ContentWrapper>
      <MemberModal
        memberInfo={selectedMember}
        visible={memberModalVisible}
        setVisible={setMemberModalVisible}
        doBan={doBan}
        doKick={doKick}
        doPromote={doPromote}
        doDemote={doDemote}
        loading={modalActionLoading}
        membership={membership}
      />
      <SingleFieldModal
        visible={inviteMemberModalVisible}
        setVisible={setInviteMemberModalVisible}
        doAction={addMember}
        title="Convidar novo membro"
        hint="E-mail"
        placeholder="E-mail..."
        confirmText="Convidar"
      />
      <SingleFieldModal
        visible={renameModalVisible}
        setVisible={setRenameModalVisible}
        doAction={changeTitle}
        title="Renomear caderno"
        hint="Título"
        placeholder="Título..."
        confirmText="Renomear"
        initialValue={title}
      />
    </Wrapper>
  );
}

const SingleFieldModal = ({
  visible,
  setVisible,
  doAction,
  title,
  hint,
  placeholder,
  confirmText,
  initialValue = "",
}) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await doAction(data);
    setLoading(false);
    setVisible(false);
    setData("");
  };

  return (
    <Modal title={title} visible={visible} setVisible={setVisible}>
      <StyledHintedInput
        hint={hint}
        placeholder={placeholder}
        value={data}
        onChangeText={setData}
      />

      <ModalButtonRow>
        <CancelModalButton onPress={() => setVisible(false)}>
          Cancelar
        </CancelModalButton>
        <ConfirmModalButtom loading={loading} onPress={handleSubmit}>
          {confirmText}
        </ConfirmModalButtom>
      </ModalButtonRow>
    </Modal>
  );
};

const MemberComponent = ({
  index,
  profile_picture,
  name,
  role,
  is_banned,
  onPress,
}) => (
  <MemberWrapper>
    {(index && <MemberTopDelimiter />) || undefined}
    <MemberContainer banned={is_banned} onPress={onPress}>
      <MemberPictureWrapper>
        <MemberPictureImage
          source={
            (profile_picture && {
              uri: profile_picture,
            }) ||
            undefined
          }
          defaultSource={Images.defaultUser}
        />
      </MemberPictureWrapper>
      <MemberInfoWrapper>
        <MemberNameText banned={is_banned}>{name}</MemberNameText>
        <MemberRoleText>{ROLE_MAP[role]}</MemberRoleText>
      </MemberInfoWrapper>
    </MemberContainer>
  </MemberWrapper>
);

const MemberModal = ({
  memberInfo: { id, profile_picture, name, role, is_banned },
  visible,
  setVisible,
  doPromote,
  doDemote,
  doBan,
  doKick,
  membership,
  loading,
}) => {
  const currentRole = membership.role;
  const isNotMe = membership.id !== id;

  const canPromote =
    isNotMe && !is_banned && currentRole === "admin" && role === "member";
  const canDemote =
    isNotMe && !is_banned && currentRole === "admin" && role === "mod";
  const canBan = isNotMe && currentRole !== "member";
  const canKick = isNotMe && currentRole !== "member;";
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <MemberModalContainer>
        <MemberModalPicture
          source={
            (profile_picture && {
              uri: profile_picture,
            }) ||
            undefined
          }
          defaultSource={Images.defaultUser}
        />
        <MemberModalName>{name}</MemberModalName>
        <MemberModalRole>
          {(is_banned && <BanIndicator>Banido</BanIndicator>) || ROLE_MAP[role]}
        </MemberModalRole>
        {(canPromote || canDemote) && (
          <ModalButtonRow>
            {canPromote && (
              <PositiveButton
                loading={loading}
                onPress={() => doPromote(id, role)}
              >
                Promover
              </PositiveButton>
            )}
            {canDemote && (
              <NegativeButton
                loading={loading}
                onPress={() => doDemote(id, role)}
              >
                Rebaixar
              </NegativeButton>
            )}
          </ModalButtonRow>
        )}

        {(canBan || canKick) && (
          <ModalButtonRow>
            {canBan && (
              <PositiveButton
                loading={loading}
                onPress={() => doBan(id, is_banned)}
              >
                {is_banned ? "Desbanir" : "Banir"}
              </PositiveButton>
            )}
            {canKick && (
              <NegativeButton loading={loading} onPress={() => doKick(id)}>
                Expulsar
              </NegativeButton>
            )}
          </ModalButtonRow>
        )}
        <ModalButtonRow>
          <CancelModalButton onPress={() => setVisible(false)}>
            Fechar
          </CancelModalButton>
        </ModalButtonRow>
      </MemberModalContainer>
    </Modal>
  );
};

export default GerenciamentoCadernoPresentational;
