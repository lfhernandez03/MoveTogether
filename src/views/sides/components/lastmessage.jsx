import React, { useEffect, useState } from "react";
import axios from "axios";

const LastMessage = ({ onSelectConversation }) => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    const fetchData = async () => {
      try {
        const response = await axios.get("https://move-together-back.vercel.app/api/ultimo-Mensaje", {
          headers: {
            Authorization: `Bearer ${token}` // Asegúrate de incluir el prefijo "Bearer"
          }
        });
        setConversations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando Conversaciones</div>;
  }

  if (conversations.length === 0) {
    return <div>Aún no tienes conversaciones.</div>;
  }

  return (
    <div className="conversation-summary p-4">
      {conversations.map((conversation) => (
        <div
          key={conversation._id}
          className="conversation-item flex items-center p-3 mb-4 bg-white rounded-lg shadow hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          onClick={() => onSelectConversation(conversation)} // Manejar clic para seleccionar conversación
        >
          <img
            src={conversation.friendAvatar}
            alt={`${conversation.friendName}'s avatar`}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="conversation-details flex-1">
            <h4 className="text-lg font-semibold text-gray-800">{conversation.friendName}</h4>
            <p className="text-sm text-gray-600">{conversation.lastMessage.content}</p>
            {/* <p className="text-xs text-blue-500 font-medium">
              {conversation.unreadCount}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastMessage;