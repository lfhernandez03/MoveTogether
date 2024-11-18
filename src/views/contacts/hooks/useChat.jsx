import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const useChat = (friend, setFriends) => {
  const [messages, setMessages] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null); // Guardar el currentUserId aquí
  const socketRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token && !socketRef.current) {
      socketRef.current = io("http://localhost:5000", {
        withCredentials: true,
        auth: { token },
      });
      console.log("Socket conectado:", socketRef.current.id);
    } else if (!token) {
      console.warn("No se puede conectar el socket: Falta el token de autenticación.");
    }

    const handleReceiveMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      setFriends((prevFriends) =>
        prevFriends.map((f) =>
          f._id === friend._id ? { ...f, unreadCount: (f.unreadCount || 0) + 1 } : f
        )
      );
    };

    if (friend && token) {
      setMessages([]); // Limpiar mensajes al cambiar de amigo
      console.log("Uniéndose a la conversación con:", friend._id);
      socketRef.current.emit("joinConversation", friend._id);

      socketRef.current.on("conversationJoined", ({ conversationId }) => {
        setCurrentConversation(conversationId);
        console.log("Conversación actualizada:", conversationId);
      });

      socketRef.current.on("previousMessages", (previousMessages) => {
        console.log("Mensajes previos recibidos:", previousMessages);
        setMessages(previousMessages);
      });

      socketRef.current.on("receiveMessage", handleReceiveMessage);
    }

    return () => {
      if (socketRef.current) {
        console.log("Desconectando socket:", socketRef.current.id);
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [friend, setFriends]);

  // Función para obtener el currentUserId desde el backend
  const fetchCurrentUserId = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/buscarPerfil", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      if (data && data.userId) {
        setCurrentUserId(data.userId);
      } else {
        console.error("No se pudo obtener el currentUserId");
      }
    } catch (error) {
      console.error("Error al obtener el currentUserId:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      fetchCurrentUserId(token); // Obtener el currentUserId cuando se cargue el token
    }
  }, []);

  const sendMessage = (messageContent) => {
    if (!currentConversation || !currentUserId) return;

    const message = {
      sender: currentUserId, // Usar el currentUserId que fue establecido desde el backend
      recipient: friend._id,
      content: messageContent,
      type: "text",
      timestamp: new Date(),
    };

    // Emitir el mensaje al servidor
    socketRef.current.emit("sendMessage", { conversationId: currentConversation, message });

    // Actualizar el estado localmente para agregar el nuevo mensaje
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return { messages, currentConversation, sendMessage };
};

export default useChat;
