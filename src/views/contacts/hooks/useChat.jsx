import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const useChat = (friend, setFriends) => {
  const [messages, setMessages] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [currentUserId] = useState("672431e30f1ec66e8c107c89");
  const socketRef = useRef(null);

  useEffect(() => {
    if (!socketRef.current) {
      // Inicializar socket solo una vez
      socketRef.current = io("http://localhost:5000", { withCredentials: true });
    }

    // Función para manejar eventos de recepción de mensajes
    const handleReceiveMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      setFriends((prevFriends) =>
        prevFriends.map((f) =>
          f._id === friend._id ? { ...f, unreadCount: (f.unreadCount || 0) + 1 } : f
        )
      );
    };

    if (friend) {
      setMessages([]); // Limpiar mensajes anteriores al cambiar de amigo
      socketRef.current.emit("joinConversation", friend._id, currentUserId);

      socketRef.current.on("conversationJoined", ({ conversationId }) => {
        setCurrentConversation(conversationId);
      });

      socketRef.current.on("previousMessages", (previousMessages) => {
        setMessages(previousMessages);
      });

      socketRef.current.on("receiveMessage", handleReceiveMessage);
    }

    return () => {
      // Limpiar eventos y desconectar el socket solo si cambia `friend`
      if (socketRef.current) {
        socketRef.current.off("receiveMessage", handleReceiveMessage);
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [friend, currentUserId, setFriends]);

  const sendMessage = (text) => {
    if (!currentConversation) return;

    const message = {
      sender: currentUserId,
      recipient: friend._id,
      content: text,
      type: "text",
      timestamp: new Date(),
    };

    socketRef.current.emit("sendMessage", { conversationId: currentConversation, message });
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return { messages, sendMessage, currentUserId };
};

export default useChat;
