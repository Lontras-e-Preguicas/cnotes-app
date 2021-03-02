import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../../config";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  AddIcon,
  Container,
  EmptyListText,
  EmptyListTitle,
  FABContainer,
  FABDescription,
  FABElement,
  FABGenericIcon,
  FABSubElement,
  FABSubElementContainer,
  PathText,
  StyledFlatList,
  TileContainer,
  TileContent,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
} from "./styles";

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

const FAB = () => {
  const [extended, setExtended] = useState(false);

  let subElements = <></>;

  const toggleElements = () => {
    setExtended(!extended);
  };

  if (extended) {
    subElements = (
      <FABSubElementContainer>
        <FABDescription>Foda que texto longo</FABDescription>
        <FABSubElement>
          <FABGenericIcon name="close" />
        </FABSubElement>
      </FABSubElementContainer>
    );
  }

  return (
    <FABContainer>
      <FABElement onPress={toggleElements}>
        <AddIcon rotation={extended * 45} />
      </FABElement>
      {subElements}
    </FABContainer>
  );
};

export default CadernoPresentational;
