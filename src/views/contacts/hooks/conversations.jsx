import { useEffect, useState } from 'react';
import axios from 'axios';

const useConversations = (userId) => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return; // Evita ejecutar si no hay userId

    const controller = new AbortController();
    const fetchConversations = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://localhost:5000/api/conversations/672431e30f1ec66e8c107c89`, 
          { signal: controller.signal } // Pasamos el controlador de aborto
        );
        setConversations(response.data);
      } catch (error) {
        if (error.name !== 'CanceledError') { // Ignora el error si se canceló la solicitud
          console.error('Error al obtener las conversaciones:', error);
          setError('Error al obtener las conversaciones');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();

    // Cleanup para cancelar la solicitud en caso de desmontaje
    return () => controller.abort();
  }, [userId]);

  return { conversations, loading, error };
};

export default useConversations;
