import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../global/elements/button";
import { Span } from "../../global/elements/logo";
import DropdownMenu from "../../global/elements/dropDownMenu";
import Friends from "./friends";
import Communities from "./communities";
import UserAvatar from "../../global/elements/userAvatar";

const SideBarIz = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/home/feed");
  };

  return (
    <div className="hidden md:block md:w-45 md:h-full lg:w-80">
      <div className="flex flex-col h-full">
        <div className=" w-full h-full border-r-2 p-4">
          <div className="flex md:hidden">
            <Span classname="" />
          </div>
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
                <Button text="Amigos" classname="" href="/" />
              </li>
              <li className="hover:bg-gray-300 hover:rounded-md border-b-2 flex items-center">
                <Button
                  text="Comunidades"
                  classname=""
                  navigateTo="/home/community"
                />
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

const SideBarDerChat = ({ conversations = [], onlineFriends = [], offlineFriends = [], onSelectFriend }) => {
  return (
    <div className="hidden md:flex md:flex-col md:h-full md:w-60 lg:flex lg:flex-col lg:w-80 lg:h-full">
      <div className="flex flex-col h-full border-l-2 p-4 overflow-y-auto">
        
        {/* Sección de conversaciones recientes */}
        <h2 className="font-medium text-xl mb-4">Conversaciones</h2>
<div className="flex-grow overflow-y-auto">
  {conversations.length > 0 ? (
    conversations.map((conversation) => (
      <div
        key={conversation._id}
        className="flex items-center justify-between p-2 hover:bg-gray-200 cursor-pointer"
        onClick={() => onSelectFriend(conversation.friend)}
      >
        <div className="flex items-center">
          <img
            src={conversation.friend.avatar}
            alt={conversation.friend.fullname}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>{conversation.friend.fullname}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm">{conversation.lastMessage}</span>
          {conversation.unreadCount > 0 && (
            <span className="bg-blue-500 text-white rounded-full px-2 text-xs">
              {conversation.unreadCount}
            </span>
          )}
        </div>
      </div>
    ))
  ) : (
    <span className="text-gray-500">No hay conversaciones recientes.</span>
          )}
        </div>

        {/* Lista de amigos conectados */}
        <div className="mt-6">
          <span className="text-lg select-none">Amigos Conectados</span>
        </div>
        <div className="flex flex-col gap-4 max-h-60 overflow-y-auto">
          {onlineFriends.length > 0 ? (
            onlineFriends.map((friend) => (
              <div key={friend._id} onClick={() => onSelectFriend(friend)}>
                <UserAvatar
                  avatar={friend.avatar}
                  fullname={friend.fullname}
                  isLoggedIn={friend.isLoggedIn}
                />
              </div>
            ))
          ) : (
            <span className="text-gray-500">No hay amigos conectados.</span>
          )}
        </div>

        {/* Lista de amigos desconectados */}
        <div className="mt-6">
          <span className="text-lg select-none">Amigos Desconectados</span>
        </div>
        <div className="flex flex-col gap-4 max-h-60 overflow-y-auto">
          {offlineFriends.length > 0 ? (
            offlineFriends.map((friend) => (
              <div key={friend._id} onClick={() => onSelectFriend(friend)}>
                <UserAvatar
                  avatar={friend.avatar}
                  fullname={friend.fullname}
                  isLoggedIn={friend.isLoggedIn}
                />
              </div>
            ))
          ) : (
            <span className="text-gray-500">No hay amigos desconectados.</span>
          )}
        </div>
      </div>
    </div>
  );
};


export { SideBarIz, SideBarDer, SideBarDerChat };
