import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostProfile from '../../posts/components/postProfile';
import MakePost from '../../posts/components/makePost';

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
      <div className="flex flex-col justify-center items-center w-full max-w-lg border border-green-300 p-4 rounded-3xl md:max-w-xl md:h-auto gap-y-4">
        <img
          src={userData.avatar}
          alt="Avatar"
          className="flex w-72 h-72 rounded-full object-cover border-4 border-gray-200 mt-5"
        />
        <div className="space-y-2 text-center text-xl mb-5">
          <p className='font-semibold text-2xl'>{userData.fullname}</p>
          <p className='font-sans'>@{userData.username}</p>
          <p className='flex gap-3 flex-wrap justify-center pt-4'>
            {userData.sports?.length > 0 ? (
              userData.sports.map((sport, index) => (
                <span key={index} className='bg-blue-300 rounded-full p-2'>
                  {sport}
                  {index < userData.sports.length - 1}
                </span>
              ))
              ) : (
                'No disponibles'
              )
            }
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center p-6">
          <MakePost/>
        </div>
      <div className='flex justify-center'>
        <PostProfile/>
      </div>
    </div>
  );  
};

export default UserProfile;
