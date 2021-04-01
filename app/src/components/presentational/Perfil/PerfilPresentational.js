import React, { useEffect, useState } from "react";
import { Keyboard, ScrollView, Alert } from "react-native";

import { Images } from "../../../config";

import DefaultTouchable from "../../core/DefaultTouchable";
import Header from "../../core/Header";

import * as ImagePicker from "expo-image-picker";

import {
  Wrapper,
  Content,
  ProfileName,
  InfoContainer,
  InfoWrapper,
  InfoName,
  InfoData,
  ProfilePictureWrapper,
  ProfilePicture,
  BottomRow,
  LoadingWrapper,
  LoadingIndicator,
  LoadingText,
  ChangePasswordButton,
  LogoutButton,
  UploadingModalContainer,
  UploadingText,
  EditModeWrapper,
  EditModeText,
  ModalContent,
  PasswordInput,
} from "./styles.js";
import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
} from "../../core/Modal";

const Info = ({ name, edit, ...props }) => (
  <InfoWrapper>
    <InfoName>{name}</InfoName>
    <InfoData editable={edit} {...props} />
  </InfoWrapper>
);

const PerfilPresentational = ({
  loading,
  userData,
  onEdit,
  onLogout,
  name,
  bio,
  setName,
  setBio,
  edit,
  doUpdate,
  doChangeProfilePicture,
  doChangePassword,
}) => {
  const [uploading, setUploading] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  const rightButtons = [
    {
      icon: "pencil",
      onPress: onEdit,
    },
  ];

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Não foi possível obter a imagem");
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.6,
    });

    if (result.cancelled) {
      return;
    }
    setUploading(true);
    await doChangeProfilePicture(result.uri);
    setUploading(false);
  };

  let profile_picture = Images.defaultUser;

  if (userData.profile_picture) {
    profile_picture = {
      uri: userData.profile_picture,
    };
  }

  console.warn(profile_picture);

  const pictureElement = (
    <ProfilePicture
      source={profile_picture}
      defaultSource={Images.defaultUser}
    />
  );

  let content = (
    <Content>
      <ProfilePictureWrapper>
        {(edit && (
          <DefaultTouchable onPress={pickImage}>
            {pictureElement}
          </DefaultTouchable>
        )) ||
          pictureElement}
      </ProfilePictureWrapper>
      <ProfileName
        editable={edit}
        placeholder="Seu Nome"
        value={name}
        onChangeText={setName}
        onBlur={doUpdate}
      />
      <InfoContainer>
        <Info
          name="Bio"
          placeholder="Sem bio..."
          value={bio}
          onChangeText={setBio}
          data={userData.bio}
          onSubmitEditing={Keyboard.dismiss}
          edit={edit}
          onBlur={doUpdate}
          multiline
        />
        <Info edit={false} name="E-mail" value={userData.email} />
      </InfoContainer>
      <BottomRow>
        <ChangePasswordButton onPress={() => setPasswordModal(true)}>
          Alterar Senha
        </ChangePasswordButton>
        <LogoutButton onPress={onLogout}>Logout</LogoutButton>
      </BottomRow>
    </Content>
  );

  if (loading) {
    content = (
      <LoadingWrapper>
        <LoadingIndicator />
        <LoadingText>Carregando</LoadingText>
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      <Header title="Perfil" rightButtons={rightButtons} />
      {edit && (
        <EditModeWrapper>
          <EditModeText>Em edição</EditModeText>
        </EditModeWrapper>
      )}
      <ScrollView style={{ flexGrow: 1 }}>{content}</ScrollView>
      <UploadingIndicator visible={uploading} />
      <ChangePasswordModal
        visible={passwordModal}
        setVisible={setPasswordModal}
        doChangePassword={doChangePassword}
      />
    </Wrapper>
  );
};

const UploadingIndicator = ({ visible }) => (
  <Modal visible={visible} setVisible={() => {}} title="Enviando Imagem">
    <UploadingModalContainer>
      <LoadingIndicator />
      <UploadingText>Enviando</UploadingText>
    </UploadingModalContainer>
  </Modal>
);

const ChangePasswordModal = ({ visible, setVisible, doChangePassword }) => {
  const [password, setPassword] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  const handleSubmit = async () => {
    setActionLoading(true);

    await doChangePassword(password);

    setActionLoading(false);
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) {
      setPassword("");
    }
  }, [visible]);

  return (
    <Modal title="Alterar Senha" visible={visible} setVisible={setVisible}>
      <ModalContent>
        <PasswordInput
          hint={"Nova senha"}
          placeholder={"Sua nova senha"}
          value={password}
          onChangeText={setPassword}
          autoCompleteType="password"
          autoCapitalize="none"
          secureTextEntry
        />
        <ModalButtonRow>
          <CancelModalButton onPress={() => setVisible(false)}>
            Cancelar
          </CancelModalButton>
          <ConfirmModalButtom loading={actionLoading} onPress={handleSubmit}>
            Alterar
          </ConfirmModalButtom>
        </ModalButtonRow>
      </ModalContent>
    </Modal>
  );
};

export default PerfilPresentational;
