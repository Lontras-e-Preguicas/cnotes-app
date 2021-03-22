import React, { useState } from "react";
import { formatTimeStamp } from "../../../utils/format";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  AuthorPicture,
  AuthorPictureWrapper,
  StyledFlatList,
  TileContainer,
  TileContent,
  TileDescription,
  TileFooter,
  TileFooterTimeStamp,
  TileHeader,
  TileHeaderText,
  Wrapper,
} from "./styles";

import Modal from "../../core/Modal";

function ComentariosPresentational({
  goBack,
  data,
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
    rightButtons: [
      {
        icon: "md-add",
        onPress: () => setModalVisible(true),
      },
    ],
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Wrapper>
        <Header title="Comentários" {...headerButtons} />
        <StyledFlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          refreshing={loading}
          onRefresh={retrieveData}
          renderItem={(props) => <Tile tileSize={tileSize} {...props} />}
        />
        <Modal
          title="Comentar"
          visible={modalVisible}
          setVisible={setModalVisible}
        ></Modal>
      </Wrapper>
    </>
  );
}

const Tile = ({ item, tileSize }) => (
  <TileContainer tileSize={tileSize}>
    <TileHeader>
      <AuthorPictureWrapper>
        <AuthorPicture source={{ uri: item.commenter.profile_picture }} />
      </AuthorPictureWrapper>
      <TileHeaderText>{item.commenter.name}</TileHeaderText>
    </TileHeader>
    <TileContent>
      <TileDescription>{item.message}</TileDescription>
    </TileContent>
    <TileFooter>
      <TileFooterTimeStamp>
        {formatTimeStamp(item.creation_date)}
      </TileFooterTimeStamp>
    </TileFooter>
  </TileContainer>
);

export default ComentariosPresentational;
