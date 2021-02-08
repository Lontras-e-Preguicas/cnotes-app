import React from "react";

import { Wrapper, Header, HeaderTitle, HeaderIcon, PerfilImage, Infos, UserInfos,Info, InfoTitle } from "./styles.js";
import { Ionicons } from '@expo/vector-icons';


const PerfilPresentational = () => (
  <>
    <Wrapper>
      <Header>
        <HeaderTitle>Perfil</HeaderTitle>
        <HeaderIcon>
         <Ionicons name="ios-pencil" size={20} color="black" />
        </HeaderIcon>
      </Header>
      <PerfilImage source={require('./assets/images/ednaldoPereira.png')}/>
      <Infos>
        <UserInfos>
          <InfoTitle>Bio</InfoTitle>
          <Info>Sr. Dr. professor em audiovisual</Info>
        </UserInfos>
        <UserInfos>
          <InfoTitle>E-mail</InfoTitle>
          <Info>abcd@gmail.com</Info>
        </UserInfos>
      </Infos>
    </Wrapper>
  </>
);

export default PerfilPresentational;
