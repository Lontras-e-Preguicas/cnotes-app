import React, { useState, useEffect } from "react";

import AtividadesPresentational from "../../presentational/Atividades";

function AtividadesContainer(props) {

  const ExemploNotificacoes = [
    {
      title: "01/12/2020",
      data: ["Uma anotação sua foi comentada"],
      desc: ["Sua anotação “Arranjos e Contagens” do caderno “INF3 - Matemática” recebeu um comentário."]
    },
    {
      title: "30/11/2020",
      data:  ["Uma anotação sua foi comentada"],
      desc: ["Sua anotação “Arranjos e Contagens” do caderno “INF3 - Matemática” recebeu um comentário."]
    },
  ];

  const presentationalProps = {
    ExemploNotificacoes
  };

  return <AtividadesPresentational {...presentationalProps}/>;
}

export default AtividadesContainer;
