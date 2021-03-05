import React from "react";

import { Images } from "../../../config";

import DefaultTouchable from "../../core/DefaultTouchable";
import Header from "../../core/Header";

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
  BottomText,
  BottomTextAlt,
  LoadingWrapper,
  LoadingIndicator,
  LoadingText,
} from "./styles.js";

const Info = ({ name, data }) => (
  <InfoWrapper>
    <InfoName>{name}</InfoName>
    <InfoData>{data}</InfoData>
  </InfoWrapper>
);

const PerfilPresentational = ({
  loading,
  userData,
  onEdit,
  onChangePassword,
  onLogout,
}) => {
  const rightButtons = [
    {
      icon: "pencil",
      onPress: onEdit,
    },
  ];

  let content = (
    <Content>
      <ProfilePictureWrapper>
        <ProfilePicture
          source={{
            uri: userData.profile_picture,
          }}
          defaultSource={Images.defaultUser}
        />
      </ProfilePictureWrapper>
      <ProfileName>{userData.name}</ProfileName>
      <InfoContainer>
        <Info name="Bio" data={userData.bio || ""} />
        <Info name="E-mail" data={userData.email} />
      </InfoContainer>
      <BottomRow>
        <DefaultTouchable onPress={onChangePassword}>
          <BottomText>Alterar senha</BottomText>
        </DefaultTouchable>
        <DefaultTouchable onPress={onLogout}>
          <BottomTextAlt>Sair</BottomTextAlt>
        </DefaultTouchable>
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
      {content}
    </Wrapper>
  );
};

export default PerfilPresentational;
