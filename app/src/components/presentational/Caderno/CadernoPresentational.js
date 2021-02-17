import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

import {
  AddIcon,
  Container,
  EmptyListText,
  EmptyListTitle,
  FABContainer,
  FABElement,
  FABIcon,
  PathText,
  StyledFlatList,
  TileContainer,
  TileContent,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../config";
import Header from "../../core/Header";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function CadernoPresentational({ goBack, openTile }) {
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

  const data = [
    {
      title: "Pasta 1",
      folder: true,
    },
    {
      title: "Pasta 2",
      folder: true,
    },
    {
      title: "Pasta 3",
      folder: true,
    },
    {
      title: "Conjunto 1",
      folder: false,
    },
    {
      title: "Conjunto 2",
      folder: false,
    },
  ];

  const headerProps = {
    title: "INF 3A",
    leftButtons: [
      {
        icon: "chevron-back",
        label: "Voltar",
        onPress: goBack,
      },
    ],
    rightButtons: [
      {
        icon: "search-outline",
      },
      {
        icon: "settings-outline",
      },
    ],
  };

  return (
    <Container>
      <Wrapper>
        <Header {...headerProps} />
        <PathText>/Raiz</PathText>
        <StyledFlatList
          data={data}
          renderItem={(props) => (
            <Tile tileSize={tileSize} openTile={openTile} {...props} />
          )}
          keyExtractor={(data, index) => index.toString()}
          ListEmptyComponent={EmptyList}
        />
        <FABContainer>
          <FABElement>
            <AddIcon />
          </FABElement>
        </FABContainer>
      </Wrapper>
    </Container>
  );
}

const Tile = ({ item, openTile, tileSize }) => (
  <TileContainer tileSize={tileSize} onPress={() => openTile(item)}>
    <TileHeader {...item}>
      <TileHeaderText>{item.title}</TileHeaderText>
    </TileHeader>
    <TileContent />
    <TileFooter>
      <Ionicons
        name={item.folder ? "md-folder" : "md-document-text"}
        size={24}
        color={Colors.primaryLight}
      />
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

export default CadernoPresentational;
