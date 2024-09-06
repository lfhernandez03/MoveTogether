import React from "react";
import { MainLayout } from "../layouts/mainLayout";
import { Login } from "../auth/components/login";
import { Span } from "../global/elements/logo";
import { Button } from "../global/elements/button";
import { NavLogin } from "../global/elements/nav";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavLogin isLoginPage={true} />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="hidden lg:block lg:col-span-1 items-center justify-center">
          <img
            src="/images/ilustracion1.svg"
            alt="Running"
            className="remove-bg w-full"
          />
        </div>
        <div className="col-span-1 lg:col-span-1 flex items-center justify-center pt-20 lg:pt-0">
          <Login />
        </div>
        <div className="hidden lg:block lg:col-span-1 items-center justify-center">
          <img
            src="/images/ilustracion2.svg"
            alt="Biking"
            className="remove-bg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
