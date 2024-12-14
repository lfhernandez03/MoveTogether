import React from "react";

const EventAlert = ({ isOpen, onClose, events }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
        <ul>
          {events.map((event, index) => {
            const eventDate = new Date(event.date);
            const utcDate = new Date(
              eventDate.getTime() + eventDate.getTimezoneOffset() * 60000
            );
            const day = utcDate.getUTCDate();
            const formattedDate = utcDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            });
            return (
              <li key={index} className="mb-2">
                <div className="text-center font-medium">
                  <h1>{event.title}</h1>
                </div>
                <div className="flex items-center justify-center py-4">
                  <div className="">
                    <span className="select-none text-4xl font-medium">
                      {day}
                    </span>
                  </div>
                  <div className="border-l border-black mx-4 h-16"></div>
                  <div className="font-medium">
                    <div>
                      <span className="select-none text-sm">
                        {formattedDate}
                      </span>
                    </div>
                    <div>
                      <span className="select-none text-sm">{event.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="select-none text-md">
                    {event.destination}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EventAlert;
