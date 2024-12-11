import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import NavigateH from "./navigate";
import CardOption from "./cardOption";
import { Input } from "./inputs";
import DropdownMenu from "./dropDownMenu";

const NavbarHome = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [confiHidden, setConfiHidden] = useState(true);
  const menuRef = useRef(null);
  const confiRef = useRef(null);

  const toggleConfi = () => {
    setConfiHidden(!confiHidden);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuHidden(true);
    }
    if (confiRef.current && !confiRef.current.contains(event.target)) {
      setConfiHidden(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const options = [
    { label: "Home", value: "Home" },
    { label: "Amigos", value: "Amigos" },
    { label: "Comunidades", value: "Comunidades" },
    { label: "Rutas", value: "Rutas" },
    { label: "Tu Perfil", value: "Tu Perfil" },
  ];

  const handleSelect = (option) => {
    console.log("Option selected:", option);
  };

  return (
    <nav
      className="flex justify-between items-center w-full h-20 md:h-16 bg-white text-black relative border-b-2 border-gray-300"
      role="navigation"
    >
      <div className="flex items-center gap-4 w-80 px-4">
        <span className="flex-shrink-0">
          <img
            src="/images/movetogether.png"
            className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
          />
        </span>
        <Input
          type="text"
          placeholder="Buscar"
          className="w-full h-8 rounded-3xl outline-none border-none hover:bg-slate-200 focus:bg-slate-200 placeholder-gray-500"
        />
      </div>
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex gap-4 items-center">
          <NavigateH navigateTo="/home/feed" bgColor="white" icon="fa-house" />
          <NavigateH navigateTo="/home/rutas" bgColor="white" icon="fa-map" />
          <NavigateH navigateTo="/" bgColor="white" icon="fa-award" />
          <NavigateH
            navigateTo="/home/profile"
            bgColor="white"
            icon="fa-user"
          />
        </div>
      </div>
      <div className="hidden md:flex gap-4 items-center px-4 w-80 justify-end">
        <NavigateH navigateTo="/" bgColor="white" icon="fa-bell" />
        <NavigateH navigateTo="/" bgColor="white" icon="fa-inbox" />
        <div
          ref={confiRef}
          className="bg-white text-black rounded-3xl w-8 h-8 flex justify-center items-center relative"
        >
          <Button icon="fa-solid fa-gear" onClick={toggleConfi} />
          {!confiHidden && (
            <div className="absolute top-full right-0 p-4 w-auto gap-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <CardOption
                navigateTo="/"
                icon="fa-gear"
                label="Cambiar Contraseña"
                className="w-full"
              />
              <CardOption
                navigateTo="/"
                icon="fa-right-from-bracket"
                label="Cerrar Sesión"
                onClick={handleLogout}
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden flex items-center justify-end w-full px-4">
        <NavigateH navigateTo="/" bgColor="white" icon="fa-bell" />
        <NavigateH navigateTo="/" bgColor="white" icon="fa-inbox" />
        <DropdownMenu
          options={options}
          handleSelect={handleSelect}
          className=""
        />
      </div>
    </nav>
  );
};

export default NavbarHome;
