import React, { useEffect, useState } from "react";
import { Button } from "../../global/elements/button";
import { Span } from "../../global/elements/logo";
import SideContacts from "../../contacts/components/sideContacts";
import DropdownMenu from "../../global/elements/dropDownMenu";
import sideFriends from "../hooks/sideFriends";
import Friends from "./friends";
import Communities from "./communities";

const SideBarIz = () => {
  return (
    <div className="hidden md:block md:w-full md:h-full">
      <div className="flex flex-col p-4 h-full">
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
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2">
                <Button text="Amigos" classname="" href="/" />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2">
                <Button text="Comunidades" classname="" href="/posts" />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2">
                <Button text="Rutas" classname="" href="/profile" />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2">
                <Button text="Tu Perfil" classname="" href="/settings" />
              </li>
            </ul>
          </div>
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
    <div className=" right-0 justify-end h-full w-full flex">
      <div className="h-full  border-l-2 p-4">
        <div className="flex items-center">
          <div className="flex text-2xl w-full font-medium select-none">
            {activeComponent === "Contactos" ? "Amigos" : "Comunidades"}
          </div>
          <div className="flex items-center justify-end select-none">
            <Button icon="fa-solid fa-magnifying-glass" />
            <DropdownMenu options={options} onSelect={handleSelect} />
          </div>
        </div>
        <div className="">
          {activeComponent === "Contactos" && <Friends />}
          {activeComponent === "Comunidades" && <Communities />}
        </div>
      </div>
    </div>
  );
};

export { SideBarIz, SideBarDer };
