import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../../config";

import Header from "../../core/Header";

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

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function HomePresentational({ notebooks, refreshing, onRefresh }) {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

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
          renderItem={(props) => <Tile tileSize={tileSize} {...props} />}
          keyExtractor={(data, index) => index.toString()}
          ListEmptyComponent={EmptyList}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </Wrapper>
    </>
  );
}

const Tile = ({ item: { id, title }, tileSize }) => (
  <TileContainer tileSize={tileSize}>
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
