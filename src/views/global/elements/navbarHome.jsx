import React, { useState, useEffect, useRef } from "react";
import { Button } from "./button";

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
      className="flex md:justify-between justify-center items-center h-20 md:h-16 bg-gray-300 text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <div className="px-4 cursor-pointer flex flex-col md:hidden">
        <div className="flex justify-center text-green-400 font-semibold text-xl">Move<span className="text-blue-500">Together</span></div>
        <div className="flex justify-between gap-4">
            <a href="/" className="bg-white rounded-3xl w-8 h-8 flex justify-center items-center">
                <i className="fa-solid fa-user relative"></i>
            </a>
            <div className="bg-gray-500 w-40 h-8 rounded-3xl flex justify-between items-center p-4 text-white">
                Buscar
                <i className="fa-solid fa-magnifying-glass relative "></i>
            </div>
            <a href="/" className="text-blue-600 rounded-3xl w-8 h-8 flex justify-center items-center">
                <i className="fa-solid fa-bell relative"></i>
            </a>
            <a href="/" className="text-green-600 rounded-3xl w-8 h-8 flex justify-center items-center">
                <i className="fa-solid fa-message relative"></i>
            </a>
            <div href={menuRef} className="text-black rounded-3xl w-8 h-8 flex justify-center items-center">
                <Button
                    icon="fa-solid fa-bars"
                    onClick={toggleMenu}
                />
                {!isMenuHidden && (
                    <div className="absolute right-4 top-16 p-4 w-60 bg-white border border-gray-200 rounded-md shadow-lg">
                        <h1>A donde quieres ir?</h1>
                        <a href="/" className="bg-white mt-3 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center">
                            <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
                                <i className="fa-solid fa-house"></i>
                            </div>
                            <h1>Home</h1>
                        </a>
                        <a href="/" className="bg-white mt-3 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center">
                            <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <h1>Perfil</h1>
                        </a>
                        <a href="/" className="bg-white mt-3 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center">
                            <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
                                <i className="fa-solid fa-user-group pt-1"></i>
                            </div>
                            <h1>Amigos</h1>
                        </a>
                        <a href="/" className="bg-white mt-3 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center">
                            <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
                                <i className="fa-solid fa-people-group pt-1"></i>
                            </div>
                            <h1>Comunidades</h1>
                        </a>
                        <a href="/" className="bg-white mt-3 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center">
                            <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
                                <i className="fa-solid fa-map pt-1"></i>
                            </div>
                            <h1>Rutas</h1>
                        </a>
                        <a href="/" className="bg-white mt-3 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center">
                            <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <h1>En linea</h1>
                        </a>
                        <a href="/" className="bg-white mt-3 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center">
                            <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
                                <i className="fa-solid fa-gear"></i>
                            </div>
                            <h1>Ajustes</h1>
                        </a>
                        <a href="/" className="bg-white mt-3 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center">
                            <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </div>
                            <h1>Cerrar Sesión</h1>
                        </a>
                        
                    </div>
                )}
            </div>

        </div>
      </div>
      <div className="pl-8 hidden md:flex md:items-center gap-4">
        <a href="/" className="bg-white rounded-3xl w-8 h-8 flex justify-center items-center">
          <i className="fa-solid fa-gear relative"></i>
        </a>
        <div className="bg-gray-500 w-40 h-8 rounded-3xl flex justify-between items-center p-4 text-white">
          Buscar
          <i className="fa-solid fa-magnifying-glass relative "></i>
        </div>
      </div>
      <div className="pr-8 hidden md:flex gap-4">
        <a href="/" className="bg-white rounded-3xl w-8 h-8 flex justify-center items-center">
          <i className="fa-solid fa-house relative"></i>
        </a>
        <a href="/" className="bg-white rounded-3xl w-8 h-8 flex justify-center items-center">
          <i className="fa-solid fa-map relative"></i>
        </a>
        <a href="/" className="bg-white rounded-3xl w-8 h-8 flex justify-center items-center">
          <i className="fa-solid fa-award relative"></i>
        </a>
        <a href="/" className="bg-white rounded-3xl w-8 h-8 flex justify-center items-center">
          <i className="fa-solid fa-user relative"></i>
        </a>
      </div>
      <div className="pr-8 hidden md:flex gap-4">
        <a href="/" className="bg-white rounded-3xl w-8 h-8 flex justify-center items-center">
          <i className="fa-solid fa-bell relative"></i>
        </a>
        <a href="/" className="bg-white rounded-3xl w-8 h-8 flex justify-center items-center">
          <i className="fa-solid fa-inbox relative"></i>
        </a>
        <a href="/" className="bg-white rounded-3xl w-8 h-8 flex justify-center items-center">
          <i className="fa-solid fa-gear relative"></i>
        </a>
      </div>
    </nav>
  );
};

export { NavHome };
