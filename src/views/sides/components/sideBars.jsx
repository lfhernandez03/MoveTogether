import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../global/elements/button";
import { Span } from "../../global/elements/logo";
import DropdownMenu from "../../global/elements/dropDownMenu";
import Friends from "./friends";
import Communities from "./communities";
import UserAvatar from "../../global/elements/userAvatar";
import LastMessage from "./lastmessage";
import OnlyFriends from "./onlyFriends";
import sideFriends from "../hooks/sideFriends";

const SideBarIz = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/home/feed");
  };

  return (
    <div className="hidden md:block md:w-auto lg:w-80 h-full fixed left-0">
      <div className="flex flex-col h-full">
        <div className="w-full h-full border-r-2 p-4">
          <div onClick={handleNavigateHome} className="cursor-pointer">
            <div className="font-bold text-xl flex justify-center">
              <span className="text-green-400">
                Move<span className="text-blue-400">Together</span>
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col h-full pt-24">
            <ul className="w-full">
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
                <Button 
                text="Amigos" 
                classname="" 
                navigateTo="/home/listsFriend"
                />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
                <Button
                  text="Comunidades"
                  classname=""
                  navigateTo="/home/community"
                />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
                <Button text="Rutas" classname="" navigateTo="/home/rutas" />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
                <Button text="Eventos" classname="" navigateTo="/home/eventos" />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
              <Button text="Tu Perfil" classname="" navigateTo="/home/profile" />
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
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setActiveComponent(option.value);
  };

  const handleFriendClick = (friendId) => {
    navigate(`/home/friend-profile/${friendId}`);
  };

  const options = [
    { label: "Contactos", value: "Contactos" },
    { label: "Comunidades", value: "Comunidades" },
  ];

  return (
    <div className="hidden md:block md:w-64 lg:w-80 h-full fixed right-0">
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
        <div className="flex-grow overflow-y-auto cursor-pointer">
          {activeComponent === "Contactos" && <Friends onFriendClick={handleFriendClick} />}
          {activeComponent === "Comunidades" && <Communities />}
        </div>
      </div>
    </div>
  );
};
const SideBarDerChat = ({ onSelectFriend, onSelectConversation }) => {
  const { friends } = sideFriends();

  const onlineFriends = friends.filter((friend) => friend.isLoggedIn);
  const offlineFriends = friends.filter((friend) => !friend.isLoggedIn);

  return (
    <div className="hidden md:flex md:flex-col md:w-64 lg:w-80 h-full fixed right-0 overflow-y-auto bg-gray-100 border-l border-gray-300">
      <div className="flex flex-col h-full p-4 overflow-y-auto">
        {/* Título de la sección de conversaciones */}
        <h2 className="font-semibold text-xl text-gray-700 mb-4">
          Conversaciones
        </h2>

        {/* Componente de resumen de conversaciones */}
        <LastMessage onSelectConversation={onSelectConversation} />

        {/* Lista de amigos conectados */}
        <OnlyFriends
          friends={onlineFriends}
          onSelectFriend={onSelectFriend}
          title="Amigos Conectados"
          filterCondition={(friend) => friend.isLoggedIn}
        />

        {/* Lista de amigos desconectados */}
        <OnlyFriends
          friends={offlineFriends}
          onSelectFriend={onSelectFriend}
          title="Amigos Desconectados"
          filterCondition={(friend) => !friend.isLoggedIn}
        />
      </div>
    </div>
  );
};

export { SideBarIz, SideBarDer, SideBarDerChat };
