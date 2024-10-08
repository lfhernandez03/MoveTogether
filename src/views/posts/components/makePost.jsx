import React from "react";
import { UserPost } from "../../global/elements/userPost";
import { Input } from "../../global/elements/inputs";
import { Button } from "../../global/elements/button";

const MakePost = () => {
  return (
    <div className="block w-full max-w-lg border border-green-300 bg-slate-100 p-4 rounded-3xl md:max-w-xl md:h-auto">
      <div className="flex w-full pb-4">
        <UserPost valueUser="Lucho" valueUserName="@lucho" />
      </div>
      <div className="w-full">
        <Input
          type="text"
          placeholder="Que estas pensando?"
          className="rounded-full w-full h-12 text-center"
        />
      </div>
      <div className="flex w-full h-full pt-3">
        <div className="flex gap-2">
          <Button icon="fa-solid fa-face-grin-squint-tears" className="hover:bg-blue-200 rounded-full bg-white" />
          <Button icon="fa-solid fa-image" className="hover:bg-blue-200 rounded-full bg-white" />
        </div>
        <div className="flex justify-end items-end w-full">
          <Button icon="fa-solid fa-paper-plane" className="hover:bg-blue-200 rounded-full bg-white"/>
        </div>
      </div>
    </div>
  );
};

export default MakePost;
