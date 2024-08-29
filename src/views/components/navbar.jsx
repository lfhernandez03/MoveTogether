import React from "react";
import { Button } from "./button";

const Navbar = (props) => {
  return (
    <div className="container">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-screen h-20 border-b-2 border-b-green-950">
        <div className="flex items-center flex-shrink-0 text-white mr-6 gap-6 px-9">
          <img
            src="src\assets\images\movetogether.png"
            className="w-14 h-14"
          ></img>
          <span className="font-semibold text-xl tracking-tight">MoveTogether</span>
          <h1>/</h1>
          <div className="flex flex-wrap">
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
          </div>
        </div>
        <div className="flex gap-4 px-16">
          <Button
            text="Sing in"
            className="bg-white rounded-full px-2 py-1 border-gray-200 border-2"
          />
          <Button
            text="Log in"
            className="rounded-full px-2 py-1 border-gray-200 border-2"
          />
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
