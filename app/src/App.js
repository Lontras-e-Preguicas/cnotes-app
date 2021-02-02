import React from "react";

import styled from "styled-components";
import {ImageBackground, View} from "react-native";
import {Texto, Title,TextoButton} from "./components/presentational/Text";
import {ButtonLgCd, ButtonBackLg} from "./components/presentational/Button.js";
import {InputLgCdBase} from "./components/presentational/Input.js";
import fontsSize from './config/fontsSize.js';
import colors from './config/colors.js';
import estilos from "./config/estilos";

const App = () => (
  <>
      <ImageBackground
        source={require('./assets/images/fundo.jpg')}
        style={estilos.ImageBackground}
        blurRadius={3}>

        <ButtonBackLg>
        <TextoButton> Login</TextoButton>
        </ButtonBackLg>

        <View style={estilos.View}>

          <Title>Cadastro</Title>

          <Texto> Nome</Texto>
          <InputLgCdBase></InputLgCdBase>
          <Texto> Email</Texto>
          <InputLgCdBase></InputLgCdBase>
          <Texto> Senha</Texto>
          <InputLgCdBase></InputLgCdBase>

          <ButtonLgCd>
          <TextoButton>Cadastrar-se</TextoButton>
          </ButtonLgCd>

        </View>
      </ImageBackground>

    </>
);

export default App;
