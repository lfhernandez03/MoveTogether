import React, { useState } from "react";
import { Button } from "./button";
import { Span } from "./logo";

const Navbar = (props) => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div className="container">
      <nav className="flex items-center justify-between flex-wrap bg-green-600 p-6 w-screen h-24 border-b-2 border-b-blue-500 pb-2">
        <div className="flex items-center flex-shrink-0 text-white gap-6 px-6">
          <img
            src="/images/ilustracion2.svg"
            className="w-14 h-14"
          ></img>
          <span className="font-semibold text-xl tracking-tight">MoveTogether</span>
          <h1 className="text-4xl">/</h1>
        </div>
        <div>
          <Button onClick={toggleMenu} text="=" className="rounded-full px-2 py-1 bg-white lg:hidden border-white-500 shadow-custom mr-5" />
        </div>
        <div className={`lg:flex lg:flex-wrap lg:flex-1 lg:px-16 w-full ${isMenuHidden ? 'hidden' : ''} flex justify-center`}>
          <div className="lg:flex-1 lg:justify-end flex gap-4 lg:relative absolute top-6 lg:top-0">
            <Button
              text="Login"
              className="bg-white rounded-full px-2 py-1 border-gray-200 border-2"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
