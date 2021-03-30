import React, { useState, useEffect } from "react";

import GerenciamentoCadernoPresentational from "../../presentational/GerenciamentoCaderno";

function GerenciamentoCadernoContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(route.params.title);

  const retrieveData = async () => {
    setLoading(true);

    setData([
      {
        id: "1",
        name: "membro 1",
        role: "admin",
        is_active: true,
        is_banned: false,
        profile_picture: "../../../assets/images/default_user_image.png",
      },
      {
        id: "2",
        name: "membro 2",
        role: "mod",
        is_active: true,
        is_banned: false,
        profile_picture: "../../../assets/images/default_user_image.png",
      },
      {
        id: "3",
        name: "membro 3",
        role: "member",
        is_active: true,
        is_banned: false,
        profile_picture: "../../../assets/images/default_user_image.png",
      },
      {
        id: "4",
        name: "membro 4 banido",
        role: "member",
        is_active: false,
        is_banned: true,
        profile_picture: "../../../assets/images/default_user_image.png",
      },
      {
        id: "5",
        name: "membro 5 banido",
        role: "mod",
        is_active: false,
        is_banned: true,
        profile_picture: "../../../assets/images/default_user_image.png",
      },
      {
        id: "6",
        name: "membro 6",
        role: "member",
        is_active: true,
        is_banned: false,
        profile_picture: "../../../assets/images/default_user_image.png",
      },
    ]);

    setLoading(false);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const removeMember = async (id) => {
    console.warn("removeMember");
  };
  const changeTitle = async (newTitle) => {
    console.warn("changeTitle");
    setTitle(newTitle);
  };
  const addMember = async (email) => {
    console.warn("addMember");
  };
  const deleteNotebook = async () => {
    console.warn("deleteNotebook");
  };
  const leaveNotebook = async () => {
    console.warn("leaveNotebook");
  };
  const banMember = async (id) => {
    console.warn("banMember");
  };
  const unBanMember = async (id) => {
    console.warn("unBanMember");
  };
  const changeRole = async (id, newRole) => {
    console.warn("changeRole");
  };

  const presentationalProps = {
    id: route.params.id,
    folder: route.params.folder,
    title: title,
    goBack: navigation.goBack,
    data: data,
    role: route.params.membership.role,
    removeMember,
    addMember,
    changeTitle,
    deleteNotebook,
    leaveNotebook,
    banMember,
    unBanMember,
    changeRole,
    refreshing: loading,
    doRefresh: retrieveData,
  };

  return <GerenciamentoCadernoPresentational {...presentationalProps} />;
}

export default GerenciamentoCadernoContainer;
