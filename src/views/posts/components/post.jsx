import React from "react";
import { UserPost, UserComment } from "../../global/elements/userPost";
import Button from "../../global/elements/button";
import PostComment from "./postComment";
import DropDownMenu from "../../global/elements/dropDownMenu";

const Post = ({ valueUser, valueUserName, valueComment }) => {

  const handleSelect = (option) => {
    setActiveComponent(option.value);
  };

  const options = [
    {
      label: "Editar",
      value: "edit",
    },
    {
      label: "Eliminar",
      value: "delete",
    },
  ];

  return (
    <div className="block w-full max-w-lg border h-auto border-green-300 bg-white p-4 rounded-3xl md:max-w-xl md:h-auto ">
      <div className="flex w-full justify-between">
        <div className="">
          <UserPost valueUser={valueUser} valueUserName={valueUserName} />
        </div>
        <div className="">
          <DropDownMenu options={options} onSelect={handleSelect}/>
        </div>
      </div>
      <div>
        <p className="text-justify">{valueComment}</p>
      </div>
      <div className="h-44">
        <img src="images/gatis.jpeg" alt="imagen" className="w-full h-full rounded-3xl object-contain" />
      </div>
      <div className="pt-4">
        <span className="block w-full border-t border-gray-300"></span>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex gap-2 justify-center items-center">
          <Button icon="fa-solid fa-heart" text="Me gusta" className="flex hover:bg-red-200 rounded-full bg-white" />
          <Button icon="fa-solid fa-comment" text="Comentar" className="hover:bg-blue-200 rounded-full bg-white" />
        </div>
      </div>
      <div>
        <span className="block w-full border-t border-gray-300"></span>
      </div>
      <PostComment />
    </div>
  );
};

export default Post;