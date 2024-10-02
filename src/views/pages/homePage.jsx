import React from "react";
import NavHome from "../global/elements/navbarHome";
import MakePost from "../posts/components/makePost";
import {SideBarIz, SideBarDer} from "../sides/components/sideBars";

const HomePage = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <div>
          <NavHome />
        </div>
        <div className="flex-grow flex">
          <div className="flex">
            <div className="h-full">
              <SideBarIz />
            </div>
            <div className="col-span-4 row-span-5 flex justify-center items-center">
              <MakePost />
            </div>
            <div className="row-span-5 col-start-6 flex justify-end">
              <SideBarDer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
