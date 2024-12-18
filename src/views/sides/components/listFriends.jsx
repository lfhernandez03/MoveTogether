import React from "react";
import axios from "axios";
import useSideFriends from "../hooks/sideFriends";
import UserAvatar from "../../global/elements/userAvatar";

const ListFriends = () => {
  const { friends, setFriends, handleSideFriends } = useSideFriends(); // Usar handleSideFriends
  const token = localStorage.getItem("authToken"); // Recuperar el token desde localStorage

  const handleRemoveFriend = async (friendId) => {
    // Actualizar la lista visualmente antes de la solicitud
    setFriends((prevFriends) => prevFriends.filter((friend) => friend._id !== friendId));

    try {
      const response = await axios.delete(
        `https://move-together-back.vercel.app/api/eliminar/amigo/${friendId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.data.success) {
        console.error("Error al eliminar amigo en el servidor.");
        // Restaurar lista si falla
        await handleSideFriends(); // Usar la función existente
      }
    } catch (error) {
      console.error("Error al eliminar amigo", error);
      await handleSideFriends(); // Restaurar lista si ocurre un error
    }
  };

  return (
    <div className="h-full">
      <div>
        <div className="flex flex-col gap-4 max-h-60 overflow-y-auto">
          {friends.length > 0 ? (
            friends.map((friend, index) => (
              <div key={index} className="flex items-center justify-between">
                <UserAvatar
                  avatar={friend.avatar}
                  fullname={friend.fullname}
                  isLoggedIn={friend.isLoggedIn}
                />
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded border-2 border-red-700 hover:bg-red-600 transition-colors border-rounded"
                  onClick={() => handleRemoveFriend(friend._id)}
                >
                  Eliminar
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No tienes amigos en tu lista.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListFriends;
