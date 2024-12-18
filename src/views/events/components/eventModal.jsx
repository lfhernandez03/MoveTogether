import React, { useState } from "react";
import Button from "../../global/elements/button";
import axios from "axios";
import { toast } from "react-toastify";

const EventModal = ({ isOpen, onClose, onCreateEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateEvent({ title, date, time, destination });
    setTitle("");
    setDate("");
    setTime("");
    setDestination("");
    onClose();
  };

  const token = localStorage.getItem("authToken");
  const handleSendForm = async (event) => {
    event.preventDefault();
    const payload = {
      title: title,
      date: date,
      time: time,
      destination: destination,
    };
    try {
      const response = await axios.post(
        "https://move-together-back.vercel.app/api/crear/evento",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        toast.success("Evento creado con éxito");
      } else {
        toast.error(response.data.message || "Error al crear el evento");
      }
    } catch (error) {
      toast.error(error.message || "Error al crear el evento");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Título:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fecha:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hora:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Destino:</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="flex justify-end">
            <Button
              text="Cancelar"
              onClick={onClose}
              className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
            />
            <Button
              text="Crear"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={handleSendForm}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
