import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Asegúrate de importar Link

const Search = ({ searchValue, setIsSearchOpen }) => {
  const [users, setUsers] = useState([]); // Usuarios
  const [communities, setCommunities] = useState([]); // Comunidades
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para realizar la búsqueda con Axios
  const fetchSearchResults = async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.get(
        `https://move-together-back.vercel.app/api/buscar/general`,
        {
          params: { name: searchValue },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data); // Para verificar la estructura de los datos
      setUsers(response.data.usuarios || []); // Guardar los usuarios
      setCommunities(response.data.comunidades || []); // Guardar las comunidades
    } catch (err) {
      setError(err.response?.data?.error || "Error al buscar los datos");
    } finally {
      setLoading(false);
    }
  };

  // Ejecutar la búsqueda cuando el componente se monta o cambia el valor de búsqueda
  useEffect(() => {
    if (searchValue.trim() !== "") {
      fetchSearchResults();
    }
  }, [searchValue]);

  // Función para manejar el clic en una persona o comunidad
  const handleItemClick = () => {
    setIsSearchOpen(false); // Cerrar la ventana de búsqueda
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg max-w-md mx-auto">
      {loading && <p>Cargando resultados...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && users.length === 0 && communities.length === 0 && (
        <p>No se encontraron resultados</p>
      )}

      {/* Lista de usuarios */}
      {users.length > 0 && (
        <>
          <h3 className="font-bold text-lg mb-2">Personas</h3>
          <ul className="divide-y divide-gray-200 mb-4">
            {users.map((user) => (
              <li key={user._id} className="py-2 flex items-center gap-4">
                <Link to={`/home/friend-profile/${user._id}`} className="flex items-center gap-4" onClick={handleItemClick}>
                  <img
                    src={user.avatar}
                    alt={user.fullname}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold">{user.fullname}</p>
                    <p className="text-sm text-gray-500">@{user.username}</p>
                    <p className="text-sm text-gray-400">
                      {user.ubi.city}, {user.ubi.country}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Lista de comunidades */}
      {communities.length > 0 && (
        <>
          <h3 className="font-bold text-lg mb-2">Comunidades</h3>
          <ul className="divide-y divide-gray-200">
            {communities.map((community) => (
              <li key={community._id} className="py-2 flex items-center gap-4">
                <Link to={`/perfil/comunidad/${community._id}`} className="flex items-center gap-4" onClick={handleItemClick}>
                  <img
                    src={community.imagenPerfil}
                    alt={community.nombre}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold">{community.nombre}</p>
                    <p className="text-sm text-gray-500">{community.descripcion}</p>
                    <p className="text-sm text-gray-400">
                      Categorías: {community.categorias.join(", ")}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Search;