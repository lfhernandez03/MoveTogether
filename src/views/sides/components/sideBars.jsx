import React, { useState } from "react";
import { Button } from "../../global/elements/button";
import { Span } from "../../global/elements/logo";
import DropdownMenu from "../../global/elements/dropDownMenu";
import Friends from "./friends";
import Communities from "./communities";

const SideBarIz = () => {
  return (
    <div className="hidden md:block md:w-45 md:h-full lg:w-80">
      <div className="flex flex-col h-full">
        <div className=" w-full h-full border-r-2 p-4">
          <div className="flex md:hidden">
            <Span classname="" />
          </div>
          <div className="font-bold text-xl flex justify-center">
            <span className="text-green-400">
              Move<span className="text-blue-400">Together</span>
            </span>
          </div>
          <div className="w-full flex flex-col h-full pt-24">
            <ul className="w-full">
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
                <Button text="Amigos" classname="" href="/" />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
                <Button text="Comunidades" classname="" href="/posts" />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
                <Button text="Rutas" classname="" href="/profile" />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
                <Button text="Tu Perfil" classname="" href="/settings" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center p-4">
          <span className="font-light text-sm">
            Desarrollado por: <br /> MoveTogetherTeam &copy; 2024
          </span>
        </div>
      </div>
    </div>
  );
};

const SideBarDer = () => {
  const [activeComponent, setActiveComponent] = useState("Contactos");

  const handleSelect = (option) => {
    setActiveComponent(option.value);
  };

  const options = [
    { label: "Contactos", value: "Contactos" },
    { label: "Comunidades", value: "Comunidades" },
  ];

  return (
    <div className="hidden md:flex md:flex-col md:h-full md:w-60 lg:flex lg:flex-col lg:w-80 lg:h-full">
      <div className="flex flex-col h-full border-l-2 p-4 overflow-y-auto">
        <div className="flex items-center mb-4">
          <div className="flex text-2xl w-full font-medium select-none">
            {activeComponent === "Contactos" ? "Amigos" : "Comunidades"}
          </div>
          <div className="flex items-center justify-end select-none">
            <Button icon="fa-solid fa-magnifying-glass" />
            <DropdownMenu options={options} onSelect={handleSelect} />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {activeComponent === "Contactos" && <Friends />}
          {activeComponent === "Comunidades" && <Communities />}
        </div>
      </div>
    </div>
  );
};

export { SideBarIz, SideBarDer };
