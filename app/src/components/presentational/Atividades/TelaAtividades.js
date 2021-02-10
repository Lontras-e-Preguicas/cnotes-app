import React from "react";
import styled from "styled-components";

import { HeaderAtividades, TitleHeaderAtividades, IconHeaderAtividades} from "./styles.js";
import FunctionMenu from "../../core/MainMenu.js";
import { FontAwesome } from '@expo/vector-icons';


const TelaAtividades = () => (
  <>
    <HeaderAtividades>
      <TitleHeaderAtividades>Atividades Recentes</TitleHeaderAtividades>
      <IconHeaderAtividades>
      <FontAwesome name="envelope-o" size={24} color="black" />
      </IconHeaderAtividades>
      </HeaderAtividades>
    <FunctionMenu/>
  </>
);

export default TelaAtividades;
