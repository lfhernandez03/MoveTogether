import React from "react";
import { Button } from "../../global/elements/button";
import { Input } from "../../global/elements/inputs";

const Register = () => {
  return (
    <div className="grid grid-cols-1 border rounded-3xl border-green-400 p-9 shadow-custom flex-wrap m-10">
      <h1 className="text-center font-semibold text-2xl mb-10">
        Formulario de Registro
      </h1>
      <form className="lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 grid-cols-1 space-y-2">
        <div className="flex justify-center">
          <Input type="text" placeholder="Nombre de usuario" />
        </div>
        <div className="flex justify-center">
          <Input type="telefono" placeholder="telefono" />
        </div>
        <div className="lg:col-span-2 flex items-center lg:justify-between lg:px-6 gap-2">
          <h1 className="font-bold text-xl">Fecha de nacimiento:</h1>
          <Input
            id="fecha-nacimiento"
            type="date"
            placeholder="Fecha de nacimiento"
          />
        </div>
        <div className="lg:col-span-2 flex lg:justify-end justify-center">
          <Input type="genero" placeholder="Genero" />
        </div>
        <div className="flex justify-center">
          <Input type="text" placeholder="Ciudad" />
        </div>
        <div className="flex justify-center">
          <Input type="text" placeholder="País" />
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <Input type="text" placeholder="correo" />
        </div>
        <div className="flex justify-center">
          <Input type="password" placeholder="Password" />
        </div>
        <div className="flex justify-center">
          <Input type="password" placeholder="Confirmar password" />
        </div>
        <div className="lg:flex lg:col-span-2 lg:justify-center flex justify-center">
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
