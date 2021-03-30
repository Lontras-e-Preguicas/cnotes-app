import React, { useState, useEffect } from "react";

import AtividadesPresentational from "../../presentational/Atividades";

function AtividadesContainer(props) {
  const submitDeletion = (Newnotificacoes) => {
    setNotificacoes(Newnotificacoes);
  }
  const [notificacoes, setNotificacoes] = useState([
    {
      id: 1,
      title: "01/12/2020",
      data: ["Uma anotação sua foi comentada"],
      desc: ["Sua anotação “Arranjos e Contagens” do caderno “INF3 - Matemática” recebeu um comentário."]
    },
    {
      id: 2,
      title: "30/11/2020",
      data:  ["Uma anotação sua foi comentada"],
      desc: ["Sua anotação “Arranjos e Contagens” do caderno “INF3 - Matemática” recebeu um comentário."]
    },
  ]);

  const presentationalProps = {
    notificacoes,
    submitDeletion
  };

  return <AtividadesPresentational {...presentationalProps}/>;
}

export default AtividadesContainer;
