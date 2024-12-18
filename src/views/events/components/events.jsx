import React from 'react';
import Event from './event';
import axios from 'axios';
import { useEffect, useState } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://move-together-back.vercel.app/api/usuarios/eventos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.eventos);
        if (response.status === 200) {
          setEvents(response.data.eventos);
        }
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request data:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      }
    };

    fetchEvents();
  }, [token]);

  return (
    <div>
      {Array.isArray(events) ? (
        events.map((event, index) => (
          <Event key={index} event={event} />
        ))
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export default EventList;