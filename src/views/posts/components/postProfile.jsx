import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import DropDownMenu from "../../global/elements/dropDownMenu";
import Button from "../../global/elements/button";

const PostProfile = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState(null);
  const [userId, setUserId] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(5);

  const handleSelect = (option, postId) => {
    setActiveComponent(option.value);
    if (option.value === "delete") {
      handleDelete(postId);
    }
  };

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
            Authorization: `Bearer ${token}`,
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

  const handleLike = async (postId) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No se encontró el token");
      return;
    }

    try {
      const response = await fetch(
        `https://move-together-back.vercel.app/api/${postId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud POST");
      }
      // Actualizar el estado de los posts para reflejar el "me gusta"
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? {
                ...post,
                likes: post.likes.includes(userId)
                  ? post.likes.filter((id) => id !== userId)
                  : [...post.likes, userId],
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error al dar me gusta", error);
    }
  };

  const handleDelete = async (postId) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No se encontró el token");
      return;
    }

    try {
      const response = await fetch(
        `https://move-together-back.vercel.app/api/${postId}/eliminar`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud DELETE");
      }
      // Actualizar el estado de los posts para reflejar la eliminación
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error al eliminar la publicación", error);
    }
  };


  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };


  useEffect(() => {
    fetchUserPosts();
  }, []);

  const options = [{ label: "Eliminar", value: "delete" }];

  const formatDate = (date) => {
    const now = moment();
    const postDate = moment(date);
    const diffMinutes = now.diff(postDate, "minutes");
    const diffHours = now.diff(postDate, "hours");

    if (diffMinutes < 60) {
      return `${diffMinutes} minutos`;
    } else if (diffHours < 24) {
      return `${diffHours} horas`;
    } else {
      return postDate.format("DD/MM/YYYY");
    }
  };
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="block w-full max-w-lg h-auto bg-white p-4 rounded-3xl md:max-w-xl md:h-auto">
      {loading ? (
        <p>Cargando posts...</p>
      ) : posts.length > 0 ? (
        <div>
          {sortedPosts.slice(0, visiblePosts).map((post) => (
            <div
              key={post._id}
              className="post mb-6 w-full max-w-lg border border-green-300 p-4 rounded-3xl md:max-w-xl md:h-auto"
            >
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt="author"
                  className="h-10 w-10 rounded-full"
                ></img>
                <div className="ml-4 flex-1">
                  <p className="font-medium">{post.author.fullname}</p>
                  <p className="text-sm text-gray-500">
                    @{post.author.username}
                  </p>
                  <p className="text-xs text-gray-400">
                    {formatDate(post.createdAt)}
                  </p>
                </div>
                <DropDownMenu options={options} onSelect={(option) => handleSelect(option, post._id)}/>
              </div>
              <div className="pt-2 pb-4">
                <p className="text-justify text-md whitespace-normal break-words">
                  {post.content}
                </p>
              </div>
              {post.image && (
                <div className="relative w-full pt-4">
                  <img
                    src={post.image}
                    alt="imagen"
                    className="w-full h-auto object-contain rounded-t-2xl"
                />
              </div>
              )}
              <div className="pt-3 pl-2 flex gap-3 items-center">
              <Button
                  icon="fa-solid fa-thumbs-up"
                  className={`rounded-full ${post.likes.includes(userId) ? 'bg-blue-500' : 'bg-white'}`}
                  onClick={() => handleLike(post._id)}
                />
                <span>{post.likes.length}</span>
              </div>
            </div>
          ))}
         {visiblePosts < sortedPosts.length && (
            <div className="flex justify-center">
              <Button
                text="Cargar más"
                className="hover:bg-blue-200 rounded-full bg-white mt-4"
                onClick={handleLoadMore}
              />
            </div>
          )}
        </div>
      ) : (
        <p>No hay posts disponibles.</p>
      )}
    </div>
  );
};

export default PostProfile;
