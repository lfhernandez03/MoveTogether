import React from "react";
import { Button } from "../../global/elements/button";
import { Input } from "../../global/elements/inputs";

const Register = () => {
  return (
    <div className="grid grid-cols-1 border rounded-3xl border-green-400 p-9 shadow-custom flex-wrap m-10">
      <h1 className="text-center font-semibold text-2xl mb-10">
        Formulario de Registro
      </h1>
      <form className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Nombre de usuario"
          className="rounded font-semibold py-0.5 pl-6 pr-10 bg-slate-100 border-gray-500 border"
        />
        <Input
          type="telefono"
          placeholder="telefono"
          className="rounded font-semibold py-0.5 pl-6 pr-10 my-1 bg-slate-100 border-gray-500 border"
        />
        <div className="col-span-2 flex items-center justify-between px-6">
          <h1 className="font-bold text-xl">Fecha de nacimiento:</h1>
          <Input
            id="fecha-nacimiento"
            type="date"
            placeholder="Fecha de nacimiento"
            className="rounded font-semibold py-0.5 pl-6 pr-10 my-1 bg-slate-100 border-gray-500 border"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <Input
            type="genero"
            placeholder="Genero"
            className="rounded font-semibold py-0.5 pl-6 pr-10 my-1 bg-slate-100 border-gray-500 border"
          />
        </div>
        <Input
          type="text"
          placeholder="Ciudad"
          className="rounded font-semibold py-0.5 pl-6 pr-10 my-1 bg-slate-100 border-gray-500 border"
        />
        <Input
          type="text"
          placeholder="País"
          className="rounded font-semibold py-0.5 pl-6 pr-10 my-1 bg-slate-100 border-gray-500 border"
        />
        <div className="col-span-2 flex flex-1 justify-center">
          <Input
            type="text"
            placeholder="Correo"
            className="rounded font-semibold py-0.5 pl-6 pr-10 my-1 bg-slate-100 border-gray-500 border"
          />
        </div>
        <Input
          type="password"
          placeholder="Password"
          className="rounded font-semibold py-0.5 pl-6 pr-10 my-1 bg-slate-100 border-gray-500 border w-full"
        />

        <Input
          type="password"
          placeholder="Confirmar password"
          className="rounded font-semibold py-0.5 pl-6 pr-10 my-1 bg-slate-100 border-gray-500 border w-full"
        />

        <div className="lg:flex lg:col-span-2 lg:justify-center">
          <Button
            text="Registrarse"
            style={{
              backgroundColor: "#0081DA",
              color: "#ecf0f1",
              borderRadius: "5px",
              width: "250px",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
