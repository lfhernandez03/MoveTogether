import React, { useState } from "react";
import { Button } from "./button";

const Navbar = (props) => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div className="container">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-screen h-32 border-b-2 border-b-green-950">
        <div className="flex items-center flex-shrink-0 text-white mr-6 gap-6 px-9">
          <img
            src="src\assets\images\movetogether.png"
            className="w-14 h-14"
          ></img>
          <span className="font-semibold text-xl tracking-tight">MoveTogether</span>
          <h1>/</h1>
        </div>
        <div>
          <Button onClick={toggleMenu} text="=" className="rounded-full px-2 py-1 bg-red-500 block lg:hidden" />
        </div>
        <div className={`lg:flex lg:flex-wrap lg:flex-1 w-full ${isMenuHidden ? 'hidden' : ''} flex justify-center`}>
          <Button
            text="Sport"
            className="rounded-full px-2 py-1 hover:bg-white hover:border-gray-300 hover:border-2 mr-6 text-black"
          />
          <Button
            text="Nutrition"
            className="rounded-full px-2 py-1 hover:bg-white hover:border-gray-300 hover:border-2 mr-6 text-black"
          />
          <Button
            text="Sport"
            className="rounded-full px-2 py-1 hover:bg-white hover:border-gray-300 hover:border-2 mr-6 text-black"
          />
          <Button
            text="Nutrition"
            className="rounded-full px-2 py-1 hover:bg-white hover:border-gray-300 hover:border-2 mr-6 text-black"
          />
          <div className="lg:flex lg:gap-4 lg:px-16 lg:flex-wrap lg:flex-1 lg:justify-end flex gap-4">
            <Button
              text="Sing in"
              className="bg-white rounded-full px-2 py-1 border-gray-200 border-2"
            />
            <Button
              text="Log in"
              className="rounded-full px-2 py-1 border-gray-200 border-2"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };