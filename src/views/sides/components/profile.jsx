import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: {userData.fullname}</p>
      <p>Email: {userData.email || 'No disponible'}</p>
      <p>Deportes: {userData.sports?.join(', ') || 'No disponibles'}</p>
    </div>
  );
};

export default UserProfile;
