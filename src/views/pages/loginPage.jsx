import React from "react";
import { MainLayout } from "../layouts/mainLayout";
import { Login } from "../auth/components/login";
import { Span } from "../global/elements/logo";
import { Button } from "../global/elements/button";
import { NavLogin } from "../global/elements/nav";

const LoginPage = () => {
  return (
    <div className=" md:grid-cols-3 md:grid-rows-6 gap-4">
      <div className="col-span-3">
        <NavLogin isLoginPage={true}/>
      </div>
      <div className="hidden row-span-5">
        <div className="grid justify-center">
          <img
            src="/images/ilustracion1.svg"
            alt="Running"
            className="remove-bg w-full  "
          />
        </div>
      </div>
      <div className=" flex items-center justify-center pt-20 ">
        <Login />
      </div>
      <div className="hidden row-span-5">
        <div>
          <img
            src="/images/ilustracion2.svg"
            alt="biking"
            className="remove-bg w-full "
          />
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
