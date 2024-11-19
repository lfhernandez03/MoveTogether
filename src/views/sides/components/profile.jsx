import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostProfile from '../../posts/components/postProfile';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);  // Para controlar el estado de carga
  const [error, setError] = useState(null);      // Para manejar errores
  const token = localStorage.getItem('authToken');   // Recuperar el token desde localStorage

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://move-together-back.vercel.app/api/buscarPerfil', {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.data) {
          setUserData(response.data);
        } else {
          setError('No data found');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);  // Cuando termine la carga, detener el loading
      }
    };

    fetchUserData();
  }, [token]);  // Dependencia del token

  if (loading) {
    return <div>Loading...</div>;  // Estado de carga
  }

  if (error) {
    return <div>{error}</div>;  // Mostrar el error si existe
  }

  if (!userData) {
    return <div>No user data found.</div>;  // Si no hay datos de usuario
  }

  return (
    <div className="flex-1 mx-auto p-4 justify-center max-w-xl">
      <div className="flex-col max-w-lg items-center space-y-4 m-10 bg-white shadow-custom rounded-xl inline-flex px-20 py-10">
        <img
          src={userData.avatar || 'https://via.placeholder.com/150'}  // Imagen predeterminada si no hay avatar
          alt="Avatar"
          className="flex w-72 h-72 rounded-full object-cover border-4 border-gray-200"
        />
        <div className="space-y-2 text-center text-2xl">
          <p><span className="font-bold">Nombre:</span> {userData.fullname}</p>
          <p><span className="font-bold">Username:</span> {userData.username}</p>
          <p><span className="font-bold">Deportes:</span> {userData.sports?.join(', ') || 'No disponibles'}</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <PostProfile />
      </div>
    </div>
  );  
};

export default UserProfile;
