import React, { useState, useEffect, useRef } from "react";
import { Button } from "./button";
import NavigateH from "./navigate";
import CardOption from "./cardOption";
import { Input } from "./inputs";
import DropdownMenu from "./dropDownMenu";
import Search from "./search"; // Importa el componente Search

const NavbarHome = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [confiHidden, setConfiHidden] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal
  const menuRef = useRef(null);
  const confiRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("Search value:", searchValue);
    setIsModalOpen(true); // Abrir modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cerrar modal
  };

  const toggleConfi = () => {
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
        <div className="flex items-center w-full">
          <Input
            type="text"
            icon="fa-search"
            placeholder="Buscar"
            className="w-full h-8 rounded-3xl outline-none border-none hover:bg-slate-200 focus:bg-slate-200 placeholder-gray-500 min-w-36"
            value={searchValue}
            onChange={handleInputChange}
          />
          <Button icon="fa-solid fa-search text-blue-500" onClick={handleSearchClick} />
        </div>
      </div>
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex gap-4 items-center">
          <NavigateH navigateTo="/home/feed" bgColor="white" icon="fa-house" />
          <NavigateH navigateTo="/home/rutas" bgColor="white" icon="fa-map" />
          <NavigateH navigateTo="/" bgColor="white" icon="fa-award" />
          <NavigateH navigateTo="/home/profile" bgColor="white" icon="fa-user" />
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

      {/* Modal para resultados de búsqueda */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Resultados de búsqueda</h2>
              <button
                onClick={closeModal}
                className="text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </div>
            <Search searchValue={searchValue} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarHome;