import React from "react";
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
} from "./styles.js";

const Info = ({ name, data }) => (
  <InfoWrapper>
    <InfoName>{name}</InfoName>
    <InfoData>{data}</InfoData>
  </InfoWrapper>
);

const PerfilPresentational = (props) => {
  const rightButtons = [
    {
      icon: "pencil",
      onPress: () => console.warn("editar"),
    },
  ];

  return (
    <Wrapper>
      <Header title="Perfil" rightButtons={rightButtons} />
      <Content>
        <ProfilePictureWrapper>
          <ProfilePicture
            source={require("../../../assets/images/ednaldoPereira.png")}
          />
        </ProfilePictureWrapper>
        <ProfileName>Ednaldo Pereira</ProfileName>
        <InfoContainer>
          <Info name="Bio" data="Sr. Dr. Professor em Audiovisual 😎" />
          <Info name="E-mail" data="ednaldo.pereira@ednaldoproducoes.com" />
        </InfoContainer>
        <BottomRow>
          <DefaultTouchable>
            <BottomText>Alterar senha</BottomText>
          </DefaultTouchable>
          <DefaultTouchable>
            <BottomTextAlt>Sair</BottomTextAlt>
          </DefaultTouchable>
        </BottomRow>
      </Content>
    </Wrapper>
  );
};

export default PerfilPresentational;
