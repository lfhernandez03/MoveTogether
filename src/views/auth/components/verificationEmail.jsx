import React, { useState } from "react";
import { Button } from "../../global/elements/button";
import { Input } from "../../global/elements/inputs";
import VerificationAuth from "../hooks/verificationAuth";

const VerificationEmail = ({ onClose }) => {
  const {
    code,
    email,
    step,
    error,
    handleCodeChange,
    handleEmailChange,
    handleSubmitCode,
    handleSubmitChange,
  } = VerificationAuth();

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="grid justify-center mb-8">
            <h2 className="text-center font-bold text-2xl mb-4">
              Ingresar código
            </h2>
            <p className="items-center text-center text-sm">
              Por favor, ingresa el código de 6 dígitos que recibiste.
            </p>
            <div className="relative flex justify-center mb-4">
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
            </div>
            <div className="flex justify-center">
              <Button
                text="Verificar"
                className="bg-green-500 text-white rounded-md"
                onClick={handleSubmitCode} // Maneja la verificación aquí sin usar <form>
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid justify-center mb-8">
            <h2 className="text-center font-bold text-2xl mb-4">Email confirmado</h2>
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

export default VerificationEmail;
