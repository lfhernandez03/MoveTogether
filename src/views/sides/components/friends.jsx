import React, { useEffect } from "react";
import Button from "../../global/elements/button";
import DropdownMenu from "../../global/elements/dropDownMenu";
import SideContacts from "../../contacts/components/sideContacts";
import sideFriends from "../hooks/sideFriends";

const Friends = (props) => {
  const { friends, handleSideFriends } = sideFriends();

  useEffect(() => {
    handleSideFriends();
  }, []);

  return (
    <div>
      <div className="pb-6">
        <span className="text-lg select-none">Conectados</span>
      </div>
      <div className="flex flex-col gap-4">
        {friends.map((friend, index) => (
          <SideContacts key={index} value={friend.email} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
