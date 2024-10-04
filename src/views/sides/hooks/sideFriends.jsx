import { React, useEffect, useState } from "react";
import UserAvatar from "../../global/elements/userAvatar";

const sideFriends = () => {
  const [friends, setFriends] = useState([]);

  const handleSideFriends = async () => {
    try {
      const response = await fetch(
        "https://move-together-back.vercel.app/api/listar/amigos?email=linamunoz438@gmail.com",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.amigos) {
        setFriends(data.amigos);
      }
    } catch (error) {
      console.log("Error en la solicitud de amigos");
    }
  };

  useEffect(() => {
    handleSideFriends();
  }, []);

  return { friends, handleSideFriends };
};

export default sideFriends;
