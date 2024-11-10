import React from "react";
import UserAvatar from "../../global/elements/userAvatar";
import sideFriends from "../hooks/sideFriends";

const OnlyFriends = ({ onSelectFriend }) => {
  const { friends } = sideFriends();

  return (
    <div className="h-full">
      <div>
        <div className="pb-6">
          <span className="text-lg select-none">Amigos Conectados</span>
        </div>
        <div className="flex flex-col gap-4 max-h-60 overflow-y-auto">
          {friends
            .filter((friend) => friend.isLoggedIn)
            .map((friend, index) => (
              <div key={index} onClick={() => onSelectFriend(friend)}>
                <UserAvatar
                  avatar={friend.avatar}
                  fullname={friend.fullname}
                  isLoggedIn={friend.isLoggedIn}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="mt-6">
        <div className="pb-6">
          <span className="text-lg select-none">Amigos Desconectados</span>
        </div>
        <div className="flex flex-col gap-4 max-h-60 overflow-y-auto">
          {friends
            .filter((friend) => !friend.isLoggedIn)
            .map((friend, index) => (
              <div key={index} onClick={() => onSelectFriend(friend)}>
                <UserAvatar
                  avatar={friend.avatar}
                  fullname={friend.fullname}
                  isLoggedIn={friend.isLoggedIn}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OnlyFriends;
