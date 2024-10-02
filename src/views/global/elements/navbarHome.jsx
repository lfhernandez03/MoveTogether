import React, { useState, useEffect, useRef } from "react";
import { Button } from "./button";
import NavigateH from "./navigate";
import CardOption from "./cardOption";

const NavHome = () => {
    const [isMenuHidden, setIsMenuHidden] = useState(true);
    const menuRef = useRef(null);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuHidden(!isMenuHidden);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
         setIsMenuHidden(true);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


  return (
    <nav
      className="flex md:justify-between justify-center items-center h-20 md:h-16 bg-gray-300 text-black relative shadow-sm"
      role="navigation"
    >
      <div className="px-4 cursor-pointer flex flex-col md:hidden">
        <div className="flex justify-center text-green-400 font-semibold text-xl">Move<span className="text-blue-500">Together</span></div>
        <div className="flex justify-between gap-4">
            <NavigateH navigateTo="/" bgColor="white" icon="fa-user"/>
            <div className="bg-gray-500 w-40 h-8 rounded-3xl flex justify-between items-center p-4 text-white">
                Buscar
                <i className="fa-solid fa-magnifying-glass relative"></i>
            </div>
            <NavigateH navigateTo="/" textColor="blue-600" icon="fa-bell"/>
            <NavigateH navigateTo="/" textColor="green-600" icon="fa-message"/>
            <div href={menuRef} className="text-black rounded-3xl w-8 h-8 flex justify-center items-center">
                <Button
                    icon="fa-solid fa-bars"
                    onClick={toggleMenu}
                />
                {!isMenuHidden && (
                    <div className="absolute right-4 top-16 p-4 w-60 bg-white border border-gray-200 rounded-md shadow-lg">
                        <h1>A donde quieres ir?</h1>
                        <CardOption navigateTo="/" icon="fa-house" label="Home"/>
                        <CardOption navigateTo="/" icon="fa-user" label="Perfil"/>
                        <CardOption navigateTo="/" icon="fa-user-group" label="Amigos"/>
                        <CardOption navigateTo="/" icon="fa-people-group" label="Comunidades"/>
                        <CardOption navigateTo="/" icon="fa-map" label="Rutas"/>
                        <CardOption navigateTo="/" icon="fa-circle-check" label="En linea"/>
                        <CardOption navigateTo="/" icon="fa-gear" label="Ajustes"/>
                        <CardOption navigateTo="/" icon="fa-right-from-bracket" label="Cerrar Sesión"/>
                    </div>
                )}
            </div>
        </div>
      </div>
      <div className="pl-8 hidden md:flex md:items-center gap-4">
        <NavigateH navigateTo="/" bgColor="white" icon="fa-gear"/>
        <div className="bg-gray-500 w-40 h-8 rounded-3xl flex justify-between items-center p-4 text-white">
          Buscar
          <i className="fa-solid fa-magnifying-glass relative "></i>
        </div>
      </div>
      <div className="pr-8 hidden md:flex gap-4">
        <NavigateH navigateTo="/" bgColor="white" icon="fa-house"/>
        <NavigateH navigateTo="/" bgColor="white" icon="fa-map"/>
        <NavigateH navigateTo="/" bgColor="white" icon="fa-award"/>
        <NavigateH navigateTo="/" bgColor="white" icon="fa-user"/>
      </div>
      <div className="pr-8 hidden md:flex gap-4">
        <NavigateH navigateTo="/" bgColor="white" icon="fa-bell"/>
        <NavigateH navigateTo="/" bgColor="white" icon="fa-inbox"/>
        <NavigateH navigateTo="/" bgColor="white" icon="fa-gear"/>      
      </div>
    </nav>
  );
};

export default NavHome ;
