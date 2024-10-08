import React, { useState } from "react";

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
            <span className="font-medium select-none text-md">
              {props.valueUser}
            </span>
          </div>
          <div>
            <span className="select-none text-xs">{props.valueUserName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const UserComment = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; // Número máximo de caracteres antes de truncar

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderComment = () => {
    if (props.valueComment.length <= maxLength) {
      return props.valueComment;
    }

    if (isExpanded) {
      return (
        <>
          {props.valueComment}
          <span
            className="text-blue-500 cursor-pointer ml-2"
            onClick={toggleExpand}
          >
            Ver menos
          </span>
        </>
      );
    }

    return (
      <>
        {props.valueComment.substring(0, maxLength)}...
        <span
          className="text-blue-500 cursor-pointer ml-2"
          onClick={toggleExpand}
        >
          Ver más
        </span>
      </>
    );
  };

  return (
    <div className="flex justify-center border rounded-xl bg-green-100">
      <div className="flex px-4 py-2">
        <div>
          <div className="border rounded-full">
            <img
              src="https://randomuser.me/api/portraits"
              alt="avatar"
              className="w-10 h-10 rounded-full object-contain"
            />
          </div>
        </div>
        <div className="block px-4">
          <div>
            <span className="font-medium select-none text-md">
              {props.valueUser}
            </span>
          </div>
          <div className="pt-1">
            <p className="font-normal text-xs">{renderComment()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserPost, UserComment };
