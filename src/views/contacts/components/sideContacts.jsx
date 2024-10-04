import React from "react";
import UserAvatar from "../../global/elements/userAvatar";

const SideContacts = (props) => {

  return (
    <div className="flex gap-4 items-center">
      <div className="flex justify-center select-none">
        <UserAvatar />
      </div>
    </div>
  );
};

export default SideContacts;
