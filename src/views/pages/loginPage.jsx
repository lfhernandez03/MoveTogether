import React from "react";
import { MainLayout } from "../layouts/mainLayout";
import { Login } from "../auth/components/login";
import { Span } from "../components/span";

const LoginPage = () => {
  return (
    <div className="h-full ">
      <MainLayout>
        <div className="grid grid-cols-5 grid-rows-4 gap-4 h-full mx-24">
          <div className="col-span-3  flex justify-start items-center">
            <Span width="100px" height="100px" fontSize="32px" marginTop="25px" />
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-2 flex justify-start items-start text-justify">
            <span className="text-7xl font-semibold ">
                <p className="">
                    Connect with the <br/>  most (in)credible <br/> professionals!
                </p>
            </span>
          </div>
          <div className="col-span-3 row-start-4 flex justify-start items-start">  
            <span className="text-3xl font-semibold">
                Aquí va el footer
            </span>
          </div>
          <div className="col-span-2 row-span-4 col-start-4 row-start-1 grid ">
            <Login />
          </div>
        </div>
      </MainLayout>
    </div>
  ); 
};

export { LoginPage };
