import React, { useState, useEffect, useRef } from "react";
import { Span } from "./logo";
import { Button } from "./button";

const NavLogin = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const menuRef = useRef(null);

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
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Inicia Sesion
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Nosotros
              </a>
            </div>
          )}
        </div>
        <div className="hidden md:flex">
          <div className=" flex justify-end px-8 py-1 items-start">
            <div className="flex items-center gap-4">
              <div>
                <Button
                  text="Registrate"
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
