import React from "react";
import Input from "../../global/elements/inputs";
import Button from "../../global/elements/button";

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center border-b-2 pb-6">
      <div className="pb-6">
        <h1 className="font-semibold text-2xl">Explora comunidades</h1>
      </div>
      <div>
        <p className="text-center">
          Encuentra y únete a comunidades que te interesen o crea la tuya.
        </p>
      </div>
      <div className="flex items-center justify-between pt-12">
        <div className="relative w-full max-w-md">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar comunidades"
              className="rounded-full border-none text-center w-full pl-10"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
        <div>
          <Button icon="fa-solid fa-plus" />
        </div>
      </div>
    </div>
  );
};

export default Community;
