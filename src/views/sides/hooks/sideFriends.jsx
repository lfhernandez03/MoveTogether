import { React, useEffect, useState } from "react";
import UserAvatar from "../../global/elements/userAvatar";

const sideFriends = () => {
  const [friends, setFriends] = useState([]);

  const handleSideFriends = async () => {

    
    const token = localStorage.getItem("authToken"); // Asegúrate de obtener el token aquí
    if (!token) {
      console.log("No se pudo obtener el token de autenticación");
      return;
    }
    try {

      const email = localStorage.getItem("email"); // Obtener el correo del almacenamiento local
      if (!email) {
        console.log("No se encontró el correo del usuario");
        return;
      }

      const response = await fetch(
        `https://move-together-back.vercel.app/api/listar/amigos`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.amigos) {
        setFriends(data.amigos);
      } else {
        setFriends([]);
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
