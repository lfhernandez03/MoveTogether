import React, { useState } from "react";
import { Button } from "./button";
import { Span } from "./logo";

const Navbar = (props) => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div className="container flex items-center justify-center">
      <nav className="flex items-center flex-wrap p-4 w-full px-8">
        <div className="flex items-center flex-shrink-0 ">
          <Span
            width="64px"
            height="64px"
            className="flex text-2xl font-semibold"
          />
        </div>
        <div className="block lg:hidden">
          <Button
            onClick={toggleMenu}
            text="="
            className="rounded-full px-2 py-1 bg-red-500 block lg:hidden"
          />
        </div>
        <div
          className={`lg:flex lg:flex-wrap lg:flex-1 w-full ${
            isMenuHidden ? "hidden" : ""
          } flex justify-end`}
        >
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
      </nav>
    </div>
  );
};

export { Navbar };
