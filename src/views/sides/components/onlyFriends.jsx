import React from "react";
import UserAvatar from "../../global/elements/userAvatar";

const OnlyFriends = ({ friends, onSelectFriend, title, filterCondition }) => {
  return (
    <div className="mt-6">
      <div className="pb-6">
        <span className="text-lg select-none">{title}</span>
      </div>
      <div className="flex flex-col gap-4 max-h-60 overflow-y-auto cursor-pointer">
        {friends
          .filter(filterCondition)
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
  );
};

export default OnlyFriends;