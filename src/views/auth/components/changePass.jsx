import React, { useState } from "react";
import { Button } from "../../global/elements/button";
import { Input } from "../../global/elements/inputs";
import ChangeAuth from "../hooks/changeAuth";

const ChangePass = ({ onClose }) => {
  const {
    email,
    code,
    newPassword,
    step,
    error,
    handleEmailChange,
    handleCodeChange,
    handlePasswordChange,
    handleSubmitEmail,
    handleSubmitCode,
    handleSubmitPassword,
  } = ChangeAuth();

  const renderStepContent = () => {
    //Switch para renderizar el contenido de acuerdo al paso
    switch (step) { // 1: email, 2: code, 3: password, 4: success
      case 1: // Email
        return (
          <div>
            <div className="grid justify-center mb-8">
              <div className="grid justify-center items-center text-2xl mb-4">
                <i className="fa-solid fa-id-card"></i>
              </div>
              <h2 className="text-center font-bold text-2xl mb-4">
                Olvidaste tu contraseña?
              </h2>
              <p className="items-center text-center text-sm">
                No te preocupes, ingresa tu correo electrónico. <br />
                Recibirás un código para crear una nueva contraseña.
              </p>
            </div>
            <form onSubmit={handleSubmitEmail}>
              <div className="relative flex justify-center mb-4">
                <div className="relative w-full max-w-xs">
                  <Input
                    type="email"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="pl-10 pr-4 py-2 w-full border rounded-md"
                  />
                  <i className="fa-solid fa-at absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                </div>
              </div>
              <div className="flex justify-center">
                <Button text="Enviar" />
              </div>
            </form>
          </div>
        );
      case 2: // Code
        return (
          <div className="grid justify-center mb-8">
            <h2 className="text-center font-bold text-2xl mb-4">
              Ingresar código
            </h2>
            <p className="items-center text-center text-sm">
              Por favor, ingresa el código de 6 dígitos que recibiste.
            </p>
            <form
              onSubmit={handleSubmitCode}
              className="relative flex justify-center mb-4"
            >
              <div className="relative w-full max-w-xs">
                <Input
                  type="text"
                  placeholder="Código de 6 dígitos"
                  value={code}
                  onChange={handleCodeChange}
                  required
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                />
                <i className="fa-solid fa-key absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </form>
            <div className="flex justify-center">
              <Button
                text="Verificar"
                className="bg-green-500 text-white rounded-md"
                onClick={handleSubmitCode}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="grid justify-center mb-8">
            <h2 className="text-center font-bold text-2xl mb-4">
              Ingresa nueva contraseña
            </h2>
            <p className="items-center text-center text-sm">
              Por favor, ingresa tu nueva contraseñia.
            </p>
            <p className="items-center text-center text-sm">
            La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
            </p>
            <form
              onSubmit={handleSubmitPassword}
              className="relative flex justify-center mb-4"
            >
              <div className="relative w-full max-w-xs">
                <Input
                  type="password"
                  placeholder="Nueva contraseña"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  required
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                />
                <i className="fa-solid fa-key absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </form>
            <div className="flex justify-center">
              <Button
                text="Verificar"
                className="bg-green-500 text-white rounded-md"
                onClick={handleSubmitPassword}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid justify-center mb-8">
            <h2 className="text-center font-bold text-2xl mb-4">
              Contraseña actualizada
            </h2>
            <div className="flex justify-center">
              <Button
                text="Cerrar"
                onClick={onClose}
                className="bg-green-500 text-white rounded-md"
              />
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h2>Paso no reconocido</h2>
          </div>
        );
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-md p-5 ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl rounded-full"
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        {renderStepContent()}
      </div>
    </div>
  );
};

export default ChangePass;
