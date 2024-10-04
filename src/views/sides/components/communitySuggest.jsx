import React from "react";
import Button from "../../global/elements/button";

const CommunitySuggest = (props) => {
  return (
    <div className="flex flex-col justify-center items-center pt-4 pb-4 border rounded-xl border-green-300">
      <div className="">
        <img src={props.src} alt="" className="w-12 h-12 border border-gray-400 rounded-full" />
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center font-medium text-base">
          <span>{props.communityName}</span>
        </div>
        <div className="flex justify-center items-center text-sm">
          <span>{props.communityAt}</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button text="Unirse" className="bg-blue-400 rounded-md text-white" />
      </div>
    </div>
  );
};

export default CommunitySuggest;
