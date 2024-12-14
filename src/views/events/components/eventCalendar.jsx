import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventAlert from "./eventAlert";
import './eventCalendar.css';

const EventCalendar = ({ events, onDateClick }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
    onDateClick(date);
  };

  const handleDayClick = (date) => {
    const dayEvents = events.filter(event => new Date(event.date).toISOString().split('T')[0] === date.toISOString().split('T')[0]);
    if (dayEvents.length > 0) {
      alert(`Eventos:\n${dayEvents.map(event => `${event.title} - ${event.time} - ${event.destination}`).join('\n')}`);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dayEvents = events.filter(event => new Date(event.date).toISOString().split('T')[0] === date.toISOString().split('T')[0]);
      if (dayEvents.length > 0) {
        return 'highlight';
      }
    }
    return null;
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={tileClassName}
        onClickDay={handleDayClick}
        tileContent={({ date, view }) => {
          const dayEvents = events.filter(event => new Date(event.date).toISOString().split('T')[0] === date.toISOString().split('T')[0]);
          return (
            <div>
              {dayEvents.map((event, index) => (
                <div key={index}>{event.title}</div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
};

export default EventCalendar;
