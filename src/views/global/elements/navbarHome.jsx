import React, { useState, useEffect, useRef } from "react";
import { Button } from "./button";
import NavigateH from "./navigate";
import CardOption from "./cardOption";
import { Input } from "./inputs";

const NavHome = () => {
    const [isMenuHidden, setIsMenuHidden] = useState(true);
    const menuRef = useRef(null);

    const [confiHidden, setConfiHidden] = useState(true);
    const confiRef = useRef(null);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuHidden(!isMenuHidden);
    };

    const toggleConfi = (event) => {
      event.stopPropagation();
      setConfiHidden(!confiHidden);
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


  return (
    <nav
      className="flex md:justify-between justify-center items-center h-20 md:h-16 bg-gray-300 text-black relative shadow-sm"
      role="navigation"
    >
      <div className="px-4 cursor-pointer flex flex-col md:hidden">
        <div className="flex justify-center text-green-400 font-semibold text-xl">Move<span className="text-blue-500">Together</span></div>
        <div className="flex justify-between gap-4">
            <span className={`flex-shrink-0`}>
              <img
                src="/images/movetogether.png"
                className="flex w-10 h-10 sm:flex sm:w-20 sm:h-20 md:w-16 md:h-16 lg:flex lg:w-16 lg:h-16 xl:flex xl:w-16 xl:h-16"
              />
            </span>
            <Input type="text" placeholder="Buscar" className="w-56 h-8 rounded-3xl"/>
            <NavigateH navigateTo="/" textColor="blue-500" icon="fa-bell"/>
            <NavigateH navigateTo="/" textColor="green-400" icon="fa-message"/>
            <div href={menuRef} className="text-black rounded-3xl w-8 h-8 flex justify-center items-center">
                <Button
                    icon="fa-solid fa-bars"
                    onClick={toggleMenu}
                />
                {!isMenuHidden && (
                    <div className="absolute right-4 top-16 p-4 w-60 bg-white border border-gray-200 rounded-md shadow-lg">
                        <h1>A donde quieres ir?</h1>
                        <CardOption navigateTo="/" icon="fa-house" label="Home" className="w-52"/>
                        <CardOption navigateTo="/" icon="fa-user" label="Perfil" className="w-52"/>
                        <CardOption navigateTo="/" icon="fa-user-group" label="Amigos" className="w-52"/>
                        <CardOption navigateTo="/" icon="fa-people-group" label="Comunidades" className="w-52"/>
                        <CardOption navigateTo="/" icon="fa-map" label="Rutas" className="w-52"/>
                        <CardOption navigateTo="/" icon="fa-circle-check" label="En linea" className="w-52"/>
                        <div href={confiRef}>
                          <CardOption onClick={toggleConfi} icon="fa-gear" label="Ajustes" className="w-52"/>
                          {!confiHidden && (
                            <div className="absolute right-60 top-72 p-4 w-72 bg-white border border-gray-200 rounded-md shadow-lg">
                              <CardOption navigateTo="/" icon="fa-gear" label="Cambiar Contraseña"/>
                              <CardOption navigateTo="/" icon="fa-right-from-bracket" label="Cerrar Sesión"/>
                            </div>
                          )}
                        </div>
                        <CardOption navigateTo="/" icon="fa-right-from-bracket" label="Cerrar Sesión" className="w-52"/>
                    </div>
                )}
            </div>
        </div>
      </div>
      <div className="pl-8 hidden md:flex md:items-center gap-4">
        <span className={`flex-shrink-0`}>
          <img
            src="/images/movetogether.png"
            className="flex w-20 h-20 sm:flex sm:w-20 sm:h-20 md:w-16 md:h-16 lg:flex lg:w-16 lg:h-16 xl:flex xl:w-16 xl:h-16"
          />
        </span>
        <Input type="text" placeholder="Buscar" className="w-64 rounded-3xl"/>
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
        <div href={confiRef} className="bg-white text-black rounded-3xl w-8 h-8 flex justify-center items-center pt-1">
                <Button
                    icon="fa-solid fa-gear"
                    onClick={toggleConfi}
                />
                {!confiHidden && (
                    <div className="absolute right-4 top-16 p-4 w-72 bg-white border border-gray-200 rounded-md shadow-lg">
                        <CardOption navigateTo="/" icon="fa-gear" label="Cambiar Contraseña"/>
                        <CardOption navigateTo="/" icon="fa-right-from-bracket" label="Cerrar Sesión"/>
                    </div>
                )}
        </div>      
      </div>
    </nav>
  );
};

export default NavHome ;
