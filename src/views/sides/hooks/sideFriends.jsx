import { React, useEffect, useState } from "react";

const sideFriends = () => {
  const [friends, setFriends] = useState([]);

  const handleSideFriends = async (e) => {
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

  return {
    friends,
    handleSideFriends,
  };
};

export default sideFriends;
