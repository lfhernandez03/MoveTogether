import React from "react";
import Input from "../../global/elements/inputs";
import Button from "../../global/elements/button";

const PostComment = () => {
    return (
      <div className="flex w-full border rounded-lg bg-gray-100">
        <div className="flex w-full items-center justify-center px-2">
          <div className="border rounded-full mx-2">
            <img
              src="https://randomuser.me/api/portraits"
              alt="avatar"
              className="w-10 h-10 rounded-full object-contain"
            />
          </div>
          <div className="flex w-full items-center justify-center h-full py-2">
            <input
              type="text"
              placeholder="Haz un comentario..."
              className="w-full h-full outline-none text-sm text-center bg-gray-100 rounded-full hover:bg-gray-200"
            />
          </div>
          <div className="flex gap-2">
            <div className="w-full h-full">
              <Button
                icon="fa-solid fa-face-grin-squint-tears"
                className="hover:bg-slate-200 rounded-full"
              />
            </div>
            <div className="w-full h-full">
              <Button
                icon="fa-solid fa-paper-plane"
                className="bg-white hover:bg-blue-300 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PostComment;
