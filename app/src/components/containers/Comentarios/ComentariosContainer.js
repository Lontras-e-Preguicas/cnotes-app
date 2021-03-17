import React, { useEffect, useState } from "react";

import ComentariosPresentational from "../../presentational/Comentarios";

function ComentariosContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const presentationalProps = {
    goBack: navigation.goBack,
  };

  return <ComentariosPresentational {...presentationalProps} />;
}

export default ComentariosContainer;
