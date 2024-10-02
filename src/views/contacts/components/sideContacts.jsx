import React from "react";
import UserAvatar from "../../global/elements/userAvatar";

const SideContacts = (props) => {

  return (
    <div className="flex gap-4 items-center">
      <div className="flex justify-center select-none">
        <UserAvatar />
      </div>
      <div className="justify-center items-center">
        <span
          className={`font-medium select-none ${props.className}`}
        >
          {props.value}
        </span>
      </div>
    </div>
  );
};

export default SideContacts;
