import { useEffect, useState } from "react";

const sideFriends = () => {
  const [friends, setFriends] = useState([]);

  const handleSideFriends = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.log("No se pudo obtener el token de autenticación");
      return;
    }
    try {
      const response = await fetch(
        `https://move-together-back.vercel.app/api/listar/amigos`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
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

  // Retornar también setFriends para permitir actualizaciones externas
  return { friends, setFriends, handleSideFriends };
};

export default sideFriends;
