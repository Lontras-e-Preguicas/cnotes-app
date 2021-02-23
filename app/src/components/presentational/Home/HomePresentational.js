import React from "react";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../../config";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  StyledFlatList,
  TileContainer,
  TileContent,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
  EmptyListTitle,
  EmptyListText,
} from "./styles.js";

function HomePresentational({ notebooks, refreshing, onRefresh, openCaderno }) {
  const dimensions = useDimensions();

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const headerButtons = [
    {
      icon: "add",
    },
    {
      icon: "search-outline",
    },
  ];

  return (
    <>
      <Wrapper>
        <Header title="Meus cadernos" rightButtons={headerButtons} />

        <StyledFlatList
          data={notebooks}
          renderItem={(props) => (
            <Tile tileSize={tileSize} openCaderno={openCaderno} {...props} />
          )}
          keyExtractor={(data, index) => index.toString()}
          ListEmptyComponent={EmptyList}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </Wrapper>
    </>
  );
}

const Tile = ({ item: { id, title }, tileSize, openCaderno }) => (
  <TileContainer tileSize={tileSize} onPress={() => openCaderno(id)}>
    <TileHeader>
      <TileHeaderText>{title}</TileHeaderText>
    </TileHeader>
    <TileContent />
    <TileFooter>
      <Ionicons name="md-journal" size={24} color={Colors.primaryLight} />
    </TileFooter>
  </TileContainer>
);

const EmptyList = () => (
  <>
    <EmptyListTitle>Lista vazia</EmptyListTitle>
    <EmptyListText>
      Cadernos a que você se juntar ou criar aparecerão aqui.
    </EmptyListText>
  </>
);

export default HomePresentational;
