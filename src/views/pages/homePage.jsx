import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavHome from "../global/elements/navbarHome";
import Feed from "../posts/components/feed";
import { SideBarIz, SideBarDer } from "../sides/components/sideBars";
import ComCard from "../communities/components/comCard";
import Community from "../communities/components/community";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="select-none sticky top-0 z-10">
        <NavHome />
      </div>
      <div className="flex-grow flex select-none h-full">
        <div className="sticky top-0 h-full">
          <SideBarIz />
        </div>
        <div className="flex-grow flex justify-center items-start mt-6 p-4">
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/community" element={<Community/>} />
          </Routes>
        </div>
        <div className="sticky top-0 h-full">
          <SideBarDer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
