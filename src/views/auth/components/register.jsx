import React, { useState } from "react";
import { Button } from "../../global/elements/button";
import { Input } from "../../global/elements/inputs";
import useRegister from "../hooks/registerAuth";
import VerificationEmail from "../components/verificationEmail";

const Register = () => {
  const {
    nombre,
    telefono,
    fechaNacimiento,
    genero,
    ciudad,
    pais,
    email,
    password,
    passwordConfirm,
    handleNameChange,
    handlePhoneChange,
    handleDateChange,
    handleGeneroChange,
    handleCityChange,
    handleCountryChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegister,
  } = useRegister();

  const [showChangePass, setShowChangePass] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowChangePass(true);
  };

  const handleClosePopup = () => {
    setShowChangePass(false);
  };

  return (
    <div className="grid grid-cols-1 border rounded-3xl border-green-400 p-9 shadow-custom flex-wrap m-10">
      <h1 className="text-center font-bold text-3xl mb-10">
        Formulario de Registro
      </h1>
      <form
        onSubmit={handleRegister}
        className="lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 grid-cols-1 space-y-2"
      >
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder="Nombre de usuario"
            value={nombre}
            onChange={handleNameChange}
            required
          />
          <i className="fa-solid fa-user relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="tel"
            placeholder="telefono"
            value={telefono}
            onChange={handlePhoneChange}
            required
          />
          <i className="fa-solid fa-phone relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="lg:col-span-2 col-span-1 flex items-center lg:justify-between lg:px-6 gap-2">
          <h1 className="font-semibold text-xl">Fecha de nacimiento:</h1>
          <Input
            id="fecha-nacimiento"
            type="date"
            placeholder="Fecha de nacimiento"
            value={fechaNacimiento}
            onChange={handleDateChange}
            required
            className="lg:w-56"
          />
        </div>
        <div className="lg:col-span-2 flex lg:justify-end justify-center">
          <Input
            type="text"
            placeholder="Genero"
            value={genero}
            onChange={handleGeneroChange}
            required
          />
          <i className="fa-solid fa-venus-mars relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder="Ciudad"
            value={ciudad}
            onChange={handleCityChange}
            required
          />
          <i className="fa-solid fa-city relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder="País"
            value={pais}
            onChange={handleCountryChange}
            required
          />
          <i className="fa-solid fa-earth-americas relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <Input
            type="text"
            placeholder="correo"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <i className="fa-solid fa-envelope relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <i className="fa-solid fa-lock relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="password"
            placeholder="Confirmar password"
            value={passwordConfirm}
            onChange={handleConfirmPasswordChange}
            required
          />
          <i className="fa-solid fa-lock relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="lg:flex lg:col-span-2 lg:justify-center flex justify-center">
          <Button
            text="Registrarse"
            onClick={handleForgotPasswordClick}
            style={{
              backgroundColor: "#0081DA",
              color: "#ecf0f1",
              borderRadius: "5px",
              width: "250px",
            }}
          />
          {showChangePass && <VerificationEmail onClose={handleClosePopup} />}
        </div>
      </form>
    </div>
  );
};

export default Register;
