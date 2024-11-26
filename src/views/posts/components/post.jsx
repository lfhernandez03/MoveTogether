import React, { useState, useEffect } from "react";
import { UserPostFeed } from "../../global/elements/userPost";
import Button from "../../global/elements/button";
import DropDownMenu from "../../global/elements/dropDownMenu";
import moment from "moment";
import axios from "axios";

const Post = (post) => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(5); // Mostrar solo los 5 primeros posts
  const [liked, setLiked] = useState(false);
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };

  const handleSelect = (option) => {
    setActiveComponent(option.value);
  };

  useEffect(() => {
    // Verificar si el usuario ya le dio like al post
    if (post && post.likes) {
      setLiked(post.likes.includes(userId));
    }
  }, [post, userId]);
  const handleLike = async (postId) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No se encontró el token");
      return;
    }

    try {
      await axios.post(
       `https://move-together-back.vercel.api/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Actualizar el estado de los posts para reflejar el "me gusta"
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? { ...post, likes: [...post.likes, userId] }
            : post
        )
      );
    } catch (error) {
      console.error("Error al dar me gusta", error);
    }
  };

  const options = [
    { label: "Editar", value: "edit" },
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
      return postDate.format("DD/MM/YYYY");
    }
  };

  return (
    <div className="block w-full max-w-lg  h-auto rounded-3xl md:max-w-xl md:h-auto ">
      <UserPostFeed setPosts={setPosts} setUserId={setUserId} />
      {sortedPosts.slice(0, visiblePosts).map((post) => (
        <div
          key={post._id}
          className="post mb-6 w-full max-w-lg border border-green-300 p-4 rounded-3xl md:max-w-xl md:h-auto"
        >
          {" "}
          {/* Agrega margen inferior */}
          <div className="flex w-full">
            {post.author && (
              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="">
                  <p className="font-medium">{post.author.fullname}</p>
                  <p className="text-sm text-gray-500">
                    @{post.author.username}
                  </p>
                  <p className="text-xs text-gray-400">
                    Hace: {formatDate(post.createdAt)}
                  </p>
                </div>
              </div>
            )}

            <div className="">
              {post.author && post.author._id === userId && (
                <DropDownMenu options={options} onSelect={handleSelect} />
              )}
            </div>
          </div>
          <div className="pt-4 pb-4">
            <p className="text-md whitespace-normal break-words">
              {post.content}
            </p>
          </div>
          {post.image && (
            <div className=" overflow-hidden">
              <img
                src={post.image}
                alt="imagen"
                className="w-full h-full object-contain rounded-t-2xl"
              />
            </div>
          )}
          <div className="pt-2">
        <Button
          icon="fa-solid fa-thumbs-up"
          className={`rounded-full ${liked ? 'bg-blue-500' : 'bg-white'}`}
          onClick={() => handleLike(post._id)}
        />
        <span>{post.likes.length} likes</span>
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
  );
};

export default Post;
