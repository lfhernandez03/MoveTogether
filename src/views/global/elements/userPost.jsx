import React from "react";

const UserPost = (props) => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center">
        <div className="">
          <img
            src="https://randomuser.me/api/portraits"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="block px-4">
          <div>
            <span className="font-medium select-none text-sm">{props.valueUser}</span>
          </div>
          <div>
            <span className="select-none text-xs">{props.valueUserName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
