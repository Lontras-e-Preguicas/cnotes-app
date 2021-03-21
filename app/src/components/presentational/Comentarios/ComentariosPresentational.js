import React from "react";
import styled from "styled-components/native";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  AddTileContainer,
  AddTileIcon,
  AddTileText,
  Container,
  StyledFlatList,
  TileContainer,
  TileContent,
  TileDescription,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
} from "./styles";

import Modal from "./Modal";


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
        <Modal />
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
