import React, { useState } from "react";

import Header from "../../core/Header";

import {
  AlignBallNotification,
  BallNotification,
  ContainerNotification,
  ContainerInfoNotification,
  ContainerDateNotification,
  DateNotification,
  DescNotification,
  ListNotification,
  TitleNotification,
  EmptyListTitle,
  EmptyListText,
  Wrapper,
  ContentContainer,
  TitleRow,
  TimeText,
  InviteWrapper,
  InviteSenderPicture,
  InviteInfoWrapper,
  InviteAuthorName,
  InviteNotebookTitle,
  InviteActionsWrapper,
  AcceptActionIcon,
  DenyActionIcon,
  InviteModalList,
  InviteModalContainer,
} from "./styles.js";

import Modal, { CancelModalButton, ModalButtonRow } from "../../core/Modal";
import { formatTime } from "../../../utils/format";
import DefaultTouchable from "../../core/DefaultTouchable";
import { Images } from "../../../config";
import useDimensions from "../../hooks/useDimensions";

const AtividadesPresentational = ({
  activities,
  onRefresh,
  loading,
  retrieveInvite,
  invitesLoading,
  invites,
  acceptInvite,
  denyInvite,
  seeAll,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const rightButtons = [
    {
      icon: "eye-outline",
      onPress: seeAll,
    },
    {
      icon: invites.length ? "mail-unread-outline" : "mail-outline",
      onPress: () => {
        setModalVisible(true);
      },
    },
  ];

  const doAccept = async (id) => {
    if (actionLoading) {
      return;
    }

    setActionLoading(true);
    await acceptInvite(id);
    setActionLoading(false);
  };

  const doDeny = (id) => {
    setActionLoading(true);
    Alert.alert(
      "Tem certeza que deseja recusar o convite?",
      "Você só poderá entrar nesse caderno com um outro convite!",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Recusar",
          onPress: async () => {
            await denyInvite(id);
            setActionLoading(false);
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <>
      <Wrapper>
        <Header title="Atividades recentes" rightButtons={rightButtons} />
        <ContentContainer>
          <ListNotification
            sections={activities}
            ListEmptyComponent={EmptyList}
            keyExtractor={(item, index) => index.toString()}
            refreshing={loading}
            onRefresh={onRefresh}
            renderItem={({
              item: { title, description, creation_date, seen },
            }) => (
              <ContainerNotification>
                <AlignBallNotification>
                  <BallNotification seen={seen} />
                </AlignBallNotification>
                <ContainerInfoNotification>
                  <TitleRow>
                    <TitleNotification>{title}</TitleNotification>
                    <TimeText>{formatTime(creation_date)}</TimeText>
                  </TitleRow>
                  <DescNotification>{description}</DescNotification>
                </ContainerInfoNotification>
              </ContainerNotification>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <ContainerDateNotification>
                <DateNotification>{title}</DateNotification>
              </ContainerDateNotification>
            )}
          />
        </ContentContainer>
        <InviteModal
          visible={modalVisible}
          setVisible={setModalVisible}
          loading={invitesLoading}
          doRefresh={retrieveInvite}
          invites={invites}
          doAccept={doAccept}
          doDeny={doDeny}
        />
      </Wrapper>
    </>
  );
};

const EmptyList = () => (
  <>
    <EmptyListTitle>Sem notificações</EmptyListTitle>
    <EmptyListText>
      Não há atividades recentes para serem visualizadas aqui.
    </EmptyListText>
  </>
);

const InviteModal = ({
  visible,
  setVisible,
  doAccept,
  doDeny,
  loading,
  doRefresh,
  invites,
}) => {
  const dimensions = useDimensions();

  return (
    <Modal visible={visible} setVisible={setVisible} title="Convites pendentes">
      <InviteModalContainer>
        <InviteModalList
          dimensions={dimensions}
          data={invites}
          refreshing={loading}
          onRefresh={doRefresh}
          renderItem={(props) => (
            <InviteComponent
              {...props}
              acceptInvite={doAccept}
              denyInvite={doDeny}
            />
          )}
          keyExtractor={(_, i) => i.toString()}
          ListEmptyComponent={EmptyInviteList}
        />
      </InviteModalContainer>
      <ModalButtonRow>
        <CancelModalButton onPress={() => setVisible(false)}>
          Fechar
        </CancelModalButton>
      </ModalButtonRow>
    </Modal>
  );
};

const EmptyInviteList = () => (
  <>
    <EmptyListTitle>Sem convites pendentes</EmptyListTitle>
    <EmptyListText>Convites recebidos aparecerão aqui.</EmptyListText>
  </>
);

const InviteComponent = ({
  item: { id, sender },
  acceptInvite,
  denyInvite,
}) => {
  return (
    <InviteWrapper>
      <InviteSenderPicture
        source={
          (sender.profile_picture && {
            uri: sender.profile_picture,
          }) ||
          Images.defaultUser
        }
        defaultSource={Images.defaultUser}
      />
      <InviteInfoWrapper>
        <InviteAuthorName>{sender.name}</InviteAuthorName>
        <InviteNotebookTitle>{sender.notebook_title}</InviteNotebookTitle>
      </InviteInfoWrapper>
      <InviteActionsWrapper>
        <DefaultTouchable>
          <AcceptActionIcon onPress={() => acceptInvite(id)} />
        </DefaultTouchable>
        <DefaultTouchable>
          <DenyActionIcon onPress={() => denyInvite(id)} />
        </DefaultTouchable>
      </InviteActionsWrapper>
    </InviteWrapper>
  );
};

export default AtividadesPresentational;
