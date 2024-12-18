import React from 'react';

const UserAvatar = ({ avatar, fullname, isLoggedIn }) => {
  return (
    <div className="relative flex items-center">
      <div className="relative">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
        <span
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${isLoggedIn ? "bg-green-500" : "bg-red-500"}`}
        ></span>
      </div>
      <div className="flex px-4">
        <span className="font-medium select-none text-md">{fullname}</span>
      </div>
    </div>
  );
};

export default UserAvatar;

