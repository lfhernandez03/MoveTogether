import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import DropDownMenu from "../../global/elements/dropDownMenu";

const PostProfile = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleSelect = (option) => {
    setActiveComponent(option.value);
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

  const options = [
    { label: "Eliminar", value: "delete" },
  ];

  const formatDate = (date) => {
    const now = moment();
    const postDate = moment(date);
    const diffMinutes = now.diff(postDate, 'minutes');
    const diffHours = now.diff(postDate, 'hours');
    const diffDays = now.diff(postDate, 'days');

    if (diffMinutes < 60) {
      return `${diffMinutes} minutos`;
    } else if (diffHours < 24) {
      return `${diffHours} horas`;
    } else {
      return postDate.format('DD/MM/YYYY');
    }
  };

  return (
    <div className="block w-full max-w-lg h-auto bg-white p-4 rounded-3xl md:max-w-xl md:h-auto">
      {loading ? (
        <p>Cargando posts...</p>
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (

            <div
              key={post._id}
              className="post mb-6 w-full max-w-lg border border-green-300 p-4 rounded-3xl md:max-w-xl md:h-auto">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar}
                  alt="author"
                  className="h-10 w-10 rounded-full">
                </img>
                <div className="ml-4 flex-1">
                  <p className="font-medium">{post.author.fullname}</p>
                  <p className="text-sm text-gray-500">@{post.author.username}</p>
                  <p className="text-xs text-gray-400">{formatDate(post.createdAt)}</p>
                </div>
                <DropDownMenu options={options} onSelect={handleSelect}/>
              </div>
              <div className="pt-2 pb-4">
                <p className="text-justify text-md whitespace-normal break-words">{post.content}</p>
              </div>
              <div className="h-44 border border-blue-200 rounded-t-2xl ">
                <img
                  src={post.image}
                  alt="imagen"
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="pt-3 pl-2 flex gap-3 items-center">
                <i className="far fa-thumbs-up text-blue-700"></i>
                <span>{post.likes.length}</span>
              </div>
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
