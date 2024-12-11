import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const useChat = (friend, setFriends) => {
  const [messages, setMessages] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [friendData, setFriendData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token && !socketRef.current) {
       socketRef.current = io("https://movetogetherback.up.railway.app"
      //socketRef.current = io("http://localhost:8080"
      , {
        withCredentials: true,
        auth: { token },
      });
      socketRef.current.on("connect", () => {
        console.log("Socket conectado:", socketRef.current.id);
      });

      socketRef.current.on("connect_error", (err) => {
        console.error("Error de conexión del socket:", err.message);
      });
    } else if (!token) {
      console.warn("No se puede conectar el socket: Falta el token de autenticación.");
    }

    const handleReceiveMessage = (message) => {
      //console.log("Mensaje recibido:", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    if (friend && token) {
      setMessages([]); // Limpiar mensajes al cambiar de amigo
      console.log("Uniéndose a la conversación con:", friend._id);
      socketRef.current.emit("joinConversation", friend._id);

      socketRef.current.on("conversationJoined", ({ conversationId }) => {
        if (conversationId) {
        setCurrentConversation(conversationId);
        console.log("Conversación actualizada:", conversationId);
      } else { 
        console.error("No se pudo unir a la conversación");
      }
    });

      socketRef.current.on("previousMessages", (previousMessages) => {
        //console.log("Mensajes previos recibidos:", previousMessages);
        setMessages(previousMessages);
      });

      socketRef.current.on("receiveMessage", handleReceiveMessage);
    }

    return () => {
      if (socketRef.current) {
        console.log("Desconectando socket:", socketRef.current.id);
        socketRef.current.off("receiveMessage", handleReceiveMessage);
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [friend, setFriends]);

  const fetchCurrentUserId = async (token) => {
    if (!token) {
      setError('No token found');
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
          console.log('Datos del usuario:', response.data);
          setUserData(response.data);
          setCurrentUserId(response.data._id);
      } else {
        console.error("No se pudo obtener el currentUserId");
        setError('No data found');
      }
    } catch (error) {
      console.error('Error al obtener el currentUserId:', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      fetchCurrentUserId(token);
    }
  }, []);

  useEffect(() => {
    if (currentUserId) {
      console.log('currentUserId:', currentUserId); // Verifica que esto se esté llamando
    }
  }, [currentUserId]);

  const sendMessage = (messageContent) => {
    if (!currentConversation || !currentUserId){
      console.error("No se puede enviar el mensaje: Falta la conversación o el usuario actual.");
      return;
    }

    const message = {
      sender: currentUserId,
      recipient: friend._id,
      content: messageContent,
      type: "text",
      timestamp: new Date(),
    };

    //console.log("Datos enviaods:", {conversationId: currentConversation, message});

    socketRef.current.emit("sendMessage", { conversationId: currentConversation, message });

    // Escuchar confirmación del servidor antes de actualizar estado local
  socketRef.current.once("messageSent", (serverMessage) => {
    setMessages((prevMessages) => [...prevMessages, serverMessage]);
  });
}

  return { messages, currentConversation, sendMessage, currentUserId };
};

export default useChat;