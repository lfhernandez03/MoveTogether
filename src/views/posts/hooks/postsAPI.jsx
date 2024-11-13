import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Post from "./post";

const PostsAPI = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState("");
  const postsPerPage = 10;

  const handleFeedPosts = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No se encontró el token");
        return;
      }

      const decodedToken = jwt_decode(token);
      const userId = decodedToken.id; // Asegúrate de que el token contenga el userId

      const response = await fetch(
        `https://move-together-back.vercel.app/api/posts/feed/:${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        if (data.message) {
          setMessage(data.message);
          setPosts([]);
        } else {
          setPosts(data);
          setMessage("");
        }
      } else {
        setMessage(data.message || "Error al obtener el feed");
      }
    } catch (error) {
      console.log(error);
      setMessage("Error al obtener el feed");
    }
  };

  useEffect(() => {
    handleFeedPosts();
  }, []);

  // Obtener los posts actuales
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {message && <p className="text-center text-gray-500">{message}</p>}
      {currentPosts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostsAPI;
