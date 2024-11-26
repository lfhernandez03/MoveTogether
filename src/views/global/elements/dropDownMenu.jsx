import React, { useState, useEffect, useRef } from "react";

const DropdownMenu = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    if (onSelect) {
      onSelect(option);
    }
    setIsOpen(false); // Cierra el menú después de seleccionar una opción
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block text-left mr-2">
      <button onClick={toggleMenu} className="focus:outline-none flex rounded-full hover:bg-slate-100 p-2 active:bg-slate-200 ">
        <i className="fa-solid fa-ellipsis"></i>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSelect(option)}
                  className="block w-full text-right px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
