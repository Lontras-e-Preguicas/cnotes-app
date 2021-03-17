import React, { useRef, useState } from "react";
import styled from "styled-components/native";

import {
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import  {  WebView  }  from 'react-native-webview' ;

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../config";
import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";
import { Images } from "../../../config";

import {
  AddTileContainer,
  AddTileIcon,
  AddTileText,
  AuthorContainer,
  AuthorPicture,
  AuthorText,
  Container,
  RatingIcon,
  RatingTextContainer,
  RatingValue,
  StyledFlatList,
  TileContainer,
  TileContent,
  TileDescription,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
} from "./styles";

import FAB from "./FAB";

import { formatRating, formatTitle } from "../../../utils/format";

function ComentariosPresentational({
  goBack,
  data,
  title,
  loading,
  retrieveData,
  addTile,
     }) {

  const dimensions = useDimensions();

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const headerButtons = {
    leftButtons: [
      {
        icon: "md-close",
        onPress: goBack,
      },
    ],
  };


  return (
    <>
      <Wrapper>
        <Header {...headerButtons} />
        <StyledFlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          refreshing={loading}
          onRefresh={retrieveData}
          renderItem={(props) => (
            <Tile tileSize={tileSize} {...props} />
          )}
        />
        <FAB addTile={addTile}/>
      </Wrapper>
    </>
  );
}

const Tile = ({tileSize}) => (
  <TileContainer tileSize={tileSize}>
    <TileHeader>
      <TileHeaderText>Comentário por:</TileHeaderText>
    </TileHeader>
    <TileContent>
      <TileDescription>Teste descricao</TileDescription>
    </TileContent>
  </TileContainer>
);

export default ComentariosPresentational;
