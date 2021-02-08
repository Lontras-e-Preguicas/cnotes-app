import React from "react";
import styled from "styled-components";

import {Header,TitleHeader, IconHeader1, IconHeader2} from "../../core/Header.js";
import {Caderno, HeaderCaderno,TitleHeaderCaderno,BottomCaderno, Icon} from "../../core/Caderno.js";
import FunctionMenu from "../../core/MainMenu.js";
import {Ionicons, Feather, Octicons } from '@expo/vector-icons';

const TelaPrincipal = (props) => (
  <>
      <Header>
          <TitleHeader >{props.TituloCaderno}</TitleHeader>
          <IconHeader1><Octicons name="search" size={24} color="black" /></IconHeader1>
          <IconHeader2><Feather name="plus" size={27} color="black" /></IconHeader2>
      </Header>
      <Caderno>
          <HeaderCaderno>
              <TitleHeaderCaderno>{props.NomeCaderno}</TitleHeaderCaderno>
          </HeaderCaderno>
          <BottomCaderno>
            <Icon>
              <Ionicons name="journal" size={20} color="white" />
            </Icon>
          </BottomCaderno>
      </Caderno>
      <FunctionMenu/>
    </>
);

export default TelaPrincipal;
