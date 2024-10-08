import React from "react";
import MakePost from "./makePost";
import Post from "./post";

const Feed = () => {
  return (
    <div className="flex flex-grow w-full">
      <div className="block w-full">
        <div className="flex w-full items-center justify-center pb-6">
          <MakePost />
        </div>
        <div className="flex w-full items-center justify-center pb-6">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Feed;
