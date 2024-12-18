import React, { useEffect, useState } from "react";
import axios from "axios";
import Event from "./Event";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const token = "tu_token_aqui"; // Reemplaza con tu método para obtener el token

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/usuarios/eventos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setEvents(response.data); // Guarda los eventos en el estado
        }
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
      }
    };

    fetchEvents();
  }, [token]); // Ejecuta la petición cuando el token cambie

  return (
    <div>
      {events.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;
