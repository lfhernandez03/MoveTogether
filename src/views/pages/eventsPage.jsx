import React, { useState } from "react";
import EventCalendar from "../events/components/eventCalendar";
import EventModal from "../events/components/eventModal";
import Button from "../global/elements/button";
import Events from "../events/components/events";
import Event from "../events/components/event";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  const handleCreateEvent = (event) => {
    setEvents([...events, event]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateClick = (date) => {
    console.log("Date clicked:", date);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="font-semibold text-2xl">Eventos</h1>
        <p>Aqui puedes planear tus eventos y guardarlos en tu calendario.</p>
      </div>
      <EventCalendar events={events} onDateClick={handleDateClick} />
      <Button
        text="Crear Evento"
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      />
      {isModalOpen && (
        <EventModal
          isOpen={isModalOpen}
          onCreateEvent={handleCreateEvent}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div className="mt-10">
        <Events events={events} />
      </div>
    </div>
  );
};

export default EventsPage;
