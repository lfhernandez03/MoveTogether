import React from "react";
import MakePost from "./makePost";
import PostsAPI from "../hooks/postsAPI";

const Feed = () => {
  return (
    <div className="flex flex-grow w-full">
      <div className="block w-full">
        <div className="flex w-full items-center justify-center pb-6">
          <MakePost />
        </div>
        <div className="flex w-full items-center justify-center pb-6">
          <PostsAPI />
        </div>
      </div>
    </div>
  );
};

export default Feed;
