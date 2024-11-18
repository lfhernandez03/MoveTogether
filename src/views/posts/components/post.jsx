import React, { useState } from "react";
import { UserPostFeed } from "../../global/elements/userPost";
import Button from "../../global/elements/button";
import DropDownMenu from "../../global/elements/dropDownMenu";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleSelect = (option) => {
    setActiveComponent(option.value);
  };

  const handleLike = async (postId) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No se encontró el token");
      return;
    }

    try {
      await axios.post(
        `https://move-together-back.vercel.app/api/posts/${postId}/like`,
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
          post._id === postId ? { ...post, likes: [...post.likes, userId] } : post
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

  return (
    <div className="block w-full max-w-lg border h-auto border-green-300 bg-white p-4 rounded-3xl md:max-w-xl md:h-auto ">
      <UserPostFeed setPosts={setPosts} setUserId={setUserId} />
      {posts.map((post) => (
        <div key={post._id} className="post">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <img
                src={post.author.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="font-medium">{post.author.fullname}</p>
                <p className="text-sm text-gray-500">@{post.author.username}</p>
              </div>
            </div>
            <div className="">
              {post.author._id === userId && (
                <DropDownMenu options={options} onSelect={handleSelect} />
              )}
            </div>
          </div>
          <div className="pt-2 pb-4">
            <p className="text-justify text-md whitespace-normal break-words">{post.content}</p>
          </div>
          {post.image && (
            <div className="h-44 border border-blue-200 rounded-t-2xl ">
              <img
                src={post.image}
                alt="imagen"
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
          )}
          <div className="pt-2">
            <Button
              icon="fa-solid fa-thumbs-up"
              className="hover:bg-blue-200 rounded-full bg-white"
              onClick={() => handleLike(post._id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;