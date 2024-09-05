import React from "react";
import { Button } from "../../global/elements/button";
import { Input } from "../../global/elements/inputs";
import useLogin from "../hooks/loginAuth";

const Login = () => {
  const {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLogin();

  return (
    <div className="border rounded-3xl border-green-400 p-5 shadow-custom">
      <div className="">
        <div className="grid justify-center mb-4">
          <h1 className="text-3xl font-bold text-center mb-5">Login</h1>
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
                  className="rounded font-semibold my-1 bg-slate-100 border-gray-500 border"
                />
                <i className="fa-solid fa-user absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>
              <div className="flex justify-center relative">
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                  className="rounded font-semibold py-0.5 px-6 my-1 bg-slate-100 border-gray-500 border"
                />
                <i className="fa-solid fa-lock absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>
              <div className="flex justify-center ">
                <Button
                  text="Inicia Sesion"
                  className="text-white rounded-md w-full"
                  style={{ backgroundColor: "##0081DA" }}
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
        <div>
          <p className="text-center font-semibold ">
            ¿Olvidaste tu contraseña?{" "}
            <a href="/forgot" className="text-blue-500">
              Recuperar
            </a>
          </p>
        </div>
        <div>
          <p className="text-center font-semibold ">
            ¿No tienes cuenta?{" "}
            <a href="/signup" className="text-blue-500">
              Registrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Login };
