import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../../config";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  Container,
  EmptyListText,
  EmptyListTitle,
  PathText,
  StyledFlatList,
  TileContainer,
  TileContent,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
} from "./styles";
import FAB from "./FAB";

function CadernoPresentational({
  goBack,
  openTile,
  data,
  loading,
  retrieveData,
  title,
  path,
}) {
  const dimensions = useDimensions();

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const headerProps = {
    title: title,
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
        <PathText>{path}</PathText>
        <StyledFlatList
          data={data}
          renderItem={(props) => (
            <Tile tileSize={tileSize} openTile={openTile} {...props} />
          )}
          keyExtractor={(data, index) => index.toString()}
          refreshing={loading}
          onRefresh={retrieveData}
          ListEmptyComponent={EmptyList}
        />
        <FAB />
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
