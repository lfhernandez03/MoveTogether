import React, { useState, useEffect, useRef } from "react";
import { Span } from "./logo";
import { Button } from "./button";

const NavLogin = ( isLoginPage ) => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const menuRef = useRef(null);

  isLoginPage = isLoginPage.isLoginPage;

  const toggleMenu = (event) => {
    event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
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
    <div className="container mx-auto py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex justify-start">
          <Span className="" />
        </div>
        <div className="relative md:hidden" ref={menuRef}>
          <Button
            icon="fa-solid fa-bars"
            className="border rounded-full border-green-400"
            onClick={toggleMenu}
          />
          {!isMenuHidden && (
            <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="flex flex-col justify-center items-center">
                <Button
                  text={isLoginPage ? "Regístrate" : "Iniciar Sesión"}
                  navigateTo={isLoginPage ? "/register" : "/login"}
                  className="text-md w-full text-center hover:bg-gray-100"
                >
                  {isLoginPage ? "Regístrate" : "Iniciar Sesión"}
                </Button>
                <Button
                  text="Nosotros"
                  navigateTo="#"
                  className="text-md w-full text-center hover:bg-gray-100"
                >
                  Nosotros
                </Button>
              </div> 
            </div>
          )}
        </div>
        <div className="hidden md:flex">
          <div className=" flex justify-end px-8 py-1 items-start">
            <div className="flex items-center gap-4">
              <div>
                <Button
                  text={isLoginPage ? "Regístrate" : "Iniciar Sesión"}
                  navigateTo={isLoginPage ? "/register" : "/login"}
                  className="border rounded-md border-green-400"
                />
              </div>
              <span className="border-l border-gray-400 h-8"></span>
              <div>
                <Button
                  text="Nosotros"
                  className="border rounded-md border-green-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {NavLogin};
