import React, { useEffect, useState } from 'react';
import axios from 'axios';
import sideFriends from '../hooks/sideFriends';
import UserAvatar from '../../global/elements/userAvatar';
import Button from '../../global/elements/button';

const ListFriends = () => {
  const { friends, handleSideFriends } = sideFriends();
  const token = localStorage.getItem('authToken'); // Recuperar el token desde localStorage

  const handleRemoveFriend = async (friendId) => {
    try {
      const response = await axios.delete(`https://move-together-back.vercel.app/api/eliminar/amigo/${friendId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        handleSideFriends(); // Actualizar la lista de amigos
      }
    } catch (error) {
      console.error('Error al eliminar amigo', error);
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
                  className="bg-blue-500 text-white px-4 py-2 rounded"
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