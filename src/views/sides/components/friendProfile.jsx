import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FriendProfile = () => {
  const { id } = useParams();
  const [friendData, setFriendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFriend, setIsFriend] = useState(false);
  const token = localStorage.getItem('authToken');
  const currentUserId = localStorage.getItem('userId');

  const fetchFriendData = async () => {
    if (!token) {
      setError('Token no encontrado');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`https://move-together-back.vercel.app/api/amigos/${id}/perfil`, {
        headers: { "Authorization": `Bearer ${token}` },
      });

      if (response.data) {
        setFriendData(response.data);
        const isCurrentUserFriend = response.data.friends.some(friend => friend._id === currentUserId);
        setIsFriend(isCurrentUserFriend);
      } else {
        setError('Datos no encontrados');
      }
    } catch (error) {
      console.error('Error al obtener los datos del amigo', error);
      setError('Error al obtener los datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFriendData();
  }, [id]);

  const handleAddFriend = async () => {
    setIsFriend(true); // Cambiar el botón instantáneamente
    try {
      const response = await axios.post(`https://move-together-back.vercel.app/api/agregar/amigo/${id}`, {}, {
        headers: { "Authorization": `Bearer ${token}` },
      });

      if (response.data.success) {
        setFriendData(prevData => ({
          ...prevData,
          friends: [...(prevData.friends || []), { _id: currentUserId }],
        }));
      }
    } catch (error) {
      console.error('Error al agregar amigo', error);
      setIsFriend(false); // Revertir si falla
    }
  };

  const handleRemoveFriend = async () => {
    setIsFriend(false); // Cambiar el botón instantáneamente
    try {
      const response = await axios.delete(`https://move-together-back.vercel.app/api/eliminar/amigo/${id}`, {
        headers: { "Authorization": `Bearer ${token}` },
      });

      if (response.data.success) {
        setFriendData(prevData => ({
          ...prevData,
          friends: (prevData.friends || []).filter(friend => friend._id !== currentUserId),
        }));
      }
    } catch (error) {
      console.error('Error al eliminar amigo', error);
      setIsFriend(true); // Revertir si falla
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!friendData) {
    return <div>No se encontraron datos del amigo.</div>;
  }

  return (
    <div className="flex-1 mx-auto p-4 justify-center max-w-xl">
      <div className="flex flex-col justify-center items-center w-full max-w-lg border border-green-300 p-4 rounded-3xl md:max-w-xl md:h-auto gap-y-4">
        <img
          src={friendData.avatar}
          alt="Avatar"
          className="flex w-72 h-72 rounded-full object-cover border-4 border-gray-200 mt-5"
        />
        <div className="space-y-2 text-center text-xl mb-5">
          <p className='font-semibold text-2xl'>{friendData.fullname}</p>
          <p className='font-sans'>@{friendData.username}</p>
          <p className='flex gap-3 flex-wrap justify-center pt-4'>
            {friendData.sports?.length > 0 ? (
              friendData.sports.map((sport, index) => (
                <span key={index} className='bg-blue-300 rounded-full p-2'>
                  {sport}
                </span>
              ))
            ) : (
              'No disponibles'
            )}
          </p>
        </div>
        <div className="flex justify-center">
          {isFriend ? (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleRemoveFriend}
            >
              Eliminar Amigo
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleAddFriend}
            >
              Agregar Amigo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendProfile;
