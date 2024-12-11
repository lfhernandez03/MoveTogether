import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCommunities = (token) => {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await axios.get("https://move-together-back.vercel.app/api/comunidades", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCommunities(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, [token]);

  return { communities, loading, error };
};

export default useFetchCommunities;