import React, { useEffect, useState } from "react";
import axios from "axios";

const PostProfile = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserPosts = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("Token no encontrado. Por favor, inicia sesión.");
      }

      const response = await axios.get(
        "https://move-together-back.vercel.app/api/usuarios/publicaciones",
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      setPosts(response.data.publicaciones);
    } catch (error) {
      console.error("Error al traer los posts del usuario:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Perfil del Usuario</h1>

      <h2 className="text-xl font-semibold mb-2">Posts:</h2>

      {loading ? (
        <p>Cargando posts...</p>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">{post.content}</h3>
              <img
                src={post.image}
                alt="Post"
                className="w-full h-48 object-cover rounded-lg"
              ></img>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay posts disponibles.</p>
      )}
    </div>
  );
};

export default PostProfile;
