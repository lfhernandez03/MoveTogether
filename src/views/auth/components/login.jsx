import React, { useState } from "react";
import { Button } from "../../global/elements/button";
import { Input } from "../../global/elements/inputs";
import useLogin from "../hooks/loginAuth";
import ChangePass from "../components/changePass";

const Login = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLogin();

  const [showChangePass, setShowChangePass] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowChangePass(true);
  };

  const handleClosePopup = () => {
    setShowChangePass(false);
  };

  return (
    <div>
      <div className="border rounded-3xl lg:w-full border-green-400 p-5 shadow-custom">
        <div className="">
          <div className="grid justify-center mb-4">
            <h1 className="text-3xl font-bold text-center mb-5">
              Inicia Sesión
            </h1>
            <p className="text-center font-semibold ">
              Hola, bienvenido a MoveTogether
            </p>
          </div>
          <div className="grid">
            <form onSubmit={handleLogin}>
              <div className="px-7">
                <div className="flex justify-center relative">
                  <Input
                    type="email"
                    placeholder="Usuario/Correo"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className=""
                  />
                  <i className="fa-solid fa-user absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="flex justify-center relative">
                  <Input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className=""
                  />
                  <i className="fa-solid fa-lock absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="flex justify-center ">
                  <Button
                    text="Inicia Sesión"
                    className="text-white rounded-md w-full"
                    style={{ backgroundColor: "#0081DA" }}
                  />
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className="flex items-center my-3">
              <span className="flex-grow border-t border-black"></span>
              <p className="text-center font-semibold mx-3">
                O inicia sesión con
              </p>
              <span className="flex-grow border-t border-black"></span>
            </div>
            <div className="flex justify-center relative pb-4">
              <Button
                text="Google"
                className=" rounded-md border-gray-400 border px-8 gap-2"
                icon="fa-brands fa-google"
              />
            </div>
          </div>
          <div className="">
            <p className="text-center font-semibold ">
              ¿Olvidaste tu contraseña?{" "}
              <button
                onClick={handleForgotPasswordClick}
                style={{ color: "green" }}
              >
                Recuperala
              </button>
            </p>
            {showChangePass && <ChangePass onClose={handleClosePopup} />}
          </div>
          <div>
            <p className="text-center font-semibold ">
              ¿No tienes cuenta?{" "}
              <a href="/register" className="text-blue-500">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex justify-center items-center py-4">
        <i className="fa-regular fa-copyright"></i>
        <p className="text-center font-semibold">
          MoveTogether 2024 - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export { Login };
