import React from "react";
import { UserPost } from "../../global/elements/userPost";
import DropDown from "../../global/elements/dropDownMenu";
import Button from "../../global/elements/button";

const Event = ({ event }) => {
  const options = [
    {
      value: "Editar",
      label: "Editar",
    },
  ];

  const eventDate = new Date(event.date);
  const utcDate = new Date(eventDate.getTime() + eventDate.getTimezoneOffset() * 60000);
  const day = utcDate.getUTCDate();
  const formattedDate = utcDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });


  return (
    <div className="mb-6 w-full max-w-lg border border-green-300 p-4 rounded-3xl md:max-w-xl md:h-auto">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <UserPost />
          <DropDown options={options} />
        </div>
        <div className="pt-4">
          <div className="text-center font-light">
            <p>@ te ha invitado a participar en un evento</p>
            <h1 className="font-medium">{event.title}</h1>
          </div>
          <div className="flex items-center justify-center py-4">
            <div className="">
              <span className="select-none text-4xl font-medium">{day}</span>
            </div>
            <div className="border-l border-black mx-4 h-16"></div>
            <div className="font-medium">
              <div>
                <span className="select-none text-sm">{formattedDate}</span>
              </div>
              <div>
                <span className="select-none text-sm">{event.time}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="select-none text-md">{event.city}</span>
          </div>
          <div className="flex items-center justify-center pt-4">
            <Button 
                text="Participar"
                icon="fas fa-check"
                className="border mx-2 px-4 py-2 rounded-full gap-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
