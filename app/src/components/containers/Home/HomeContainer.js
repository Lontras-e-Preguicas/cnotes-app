import React, { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";

// import Api from "../../../utils/api";

import HomePresentational from "../../presentational/Home";

function HomeContainer(props) {
  // const navigation = useNavigation();

  const sample_data = [
    {
      id: "id-goes-bruh",
      title: "INF 3A",
    },
    {
      id: "id-to-the-moon",
      title: "Lontras e Preguiças",
    },
    {
      id: "id-🦍",
      title: "Gurila 🦍",
    },
  ];

  const [notebooks, setNotebooks] = useState(sample_data);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setRefreshing(true);
    const timeout = setTimeout(() => setRefreshing(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2500);
  };

  const presentationalProps = {
    notebooks,
    refreshing,
    onRefresh,
  };

  return <HomePresentational {...presentationalProps} />;
}

export default HomeContainer;
