import React from "react";
import {UserPost, UserComment } from "../../global/elements/userPost";
import Button from "../../global/elements/button";
import PostComment from "./postComment";



const Post = () => {
  return (
    <div className="block w-full max-w-lg border h-auto border-green-300 bg-white p-4 rounded-3xl md:max-w-xl md:h-auto ">
      <div className="flex w-full justify-between">
        <div className="">
          <UserPost valueUser="lucho" valueUserName="@lucho" />
        </div>
        <div>
          <Button
            icon="fa-solid fa-ellipsis"
            className="hover:bg-slate-100 rounded-full"
          />
        </div>
      </div>
      <div className="pt-2 pb-4">
        <p className="text-justify text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="h-44 border border-blue-200 rounded-t-2xl ">
        <img
          src="images/gatis.jpeg"
          alt="imagen"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="pt-2">
        <span className="block w-full border-t border-gray-300"></span>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex gap-6 justify-center items-center">
          <div className="flex items-center gap-2">
            <Button
              icon="fa-solid fa-heart"
              className="flex hover:bg-red-300 rounded-full bg-red-200"
            />
            <span className="text-sm font-semibold">0</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              icon="fa-solid fa-comment"
              className="hover:bg-green-300 rounded-full bg-green-200"
            />
            <span className="text-sm font-semibold">0</span>
          </div>
        </div>
      </div>
      <div className="">
        <span className="block w-full border-t border-gray-300"></span>
      </div>
      <div className="">
        <div className="flex w-full pt-2 ">
          <UserComment valueUser="Lucho Durazno" valueComment="Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
      </div>
      <div className="pt-4">
        <PostComment />
      </div>
    </div>
  );
};

export default Post;
