import React from "react";
import { useNavigation } from "@react-navigation/native";

import CadernoPresentational from "../../presentational/Caderno";

function CadernoContainer(props) {
  const navigation = useNavigation();

  const openTile = ({ folder }) => {
    if (folder) {
      navigation.push("Caderno");
      return;
    }

    navigation.navigate("Conjunto");
  };

  const presentationalProps = {
    goBack: navigation.goBack,
    openTile,
  };

  return <CadernoPresentational {...presentationalProps} />;
}

export default CadernoContainer;
