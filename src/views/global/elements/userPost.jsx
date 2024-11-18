import React, { useEffect, useState } from "react";
import axios from "axios";

const UserPost = () => {
  const [userData, setUserData] = useState({ username: "", fullname: "", avatar: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken'); 

      if (!token) {
        setError('No se encontró el token');
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
          console.log("Datos recibidos:", response.data);
          setUserData({
            username: response.data.username,
            fullname: response.data.fullname,
            avatar: response.data.avatar,
          });
        } else {
          setError('No se encontraron datos');
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario', error);
        setError('Error al obtener los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="">
        <img
          src={userData.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="block px-4">
        <div>
          <span className="font-medium select-none text-md">
            {userData.username}
          </span>
        </div>
        <div>
          <span className="select-none text-xs">{userData.fullname}</span>
        </div>
      </div>
    </div>
  );
};

const UserPostFeed = ({ setPosts, setUserId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('authToken'); 

      if (!token) {
        setError('No se encontró el token');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://move-together-back.vercel.app/api/posts/feed', {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          console.log("Datos recibidos:", response.data);
          setPosts(response.data);

          const userResponse = await axios.get('https://move-together-back.vercel.app/api/buscarPerfil', {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          });
          setUserId(userResponse.data.id);
        } else {
          setError('No se encontraron datos');
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario', error);
        setError('Error al obtener los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [setPosts, setUserId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return null; 
};


export { UserPost, UserPostFeed };
