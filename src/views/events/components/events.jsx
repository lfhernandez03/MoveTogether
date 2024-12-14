import React from 'react';
import Event from './event';

const Events = ({ events }) => {
  return (
    <div className="block w-full max-w-lg h-auto rounded-3xl md:max-w-xl md:h-auto">
      {events.map((event) => (
        <Event key={event._id} event={event} />
      ))}
    </div>
  );
};

export default Events;