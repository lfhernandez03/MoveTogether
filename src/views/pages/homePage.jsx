import React from "react";
import { NavHome } from "../global/elements/navbarHome";

const HomePage = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <div>
          <NavHome />
        </div>
        <div className="flex-grow flex justify-center items-center">
          <h1>Home Page</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
