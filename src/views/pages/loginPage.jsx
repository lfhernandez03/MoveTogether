import React from "react";
import { MainLayout } from "../layouts/mainLayout";
import { Login } from "../auth/components/login";
import { Span } from "../global/elements/logo";
import { Button } from "../global/elements/button";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-4">
      <div className="row-span-4">
        <div className=" flex justify-start px-8 py-4">
          <Span
            width="64px"
            height="64px"
            className="flex text-2xl font-semibold"
          />
        </div>
        <div className="grid justify-center">
          <img
            src="src\assets\images\sprinting.gif"
            alt="Running"
            className="remove-bg w-64 flex justify-center items-center"
          />
        </div>
      </div>
      <div className="row-span-4 pt-24">
        <Login />
      </div>
      <div className="row-span-4">
        <div className=" flex justify-end px-8 py-4 items-start">
          <div className="flex items-center gap-4">
            <div>
              <Button text="Registrate" className="" />
            </div>
            <span className="border-l border-gray-400 h-8"></span>
            <div>
              <Button text="Nosotros" className="" />
            </div>
          </div>
        </div>
        <div>
          <img src="src\assets\images\biking.png" alt="biking"
            className="remove-bg w-64 "
          />
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
