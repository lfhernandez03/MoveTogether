import React, { useState } from "react";
import { Button } from "../../global/elements/button";
import { Input } from "../../global/elements/inputs";
import useRegister from "../hooks/registerAuth";
import VerificationEmail from "../components/verificationEmail";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const {
    fullname,
    phoneNumber,
    birthDate,
    gender,
    city,
    country,
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

  const [showVerificationPopup, setShowVerificationPopup] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault(); // Prevenir comportamiento por defecto del formulario
    if (validateForm()) {
      handleRegister(e); // Llama a la función de registro si la validación es correcta
      setShowVerificationPopup(true); // Mostrar el popup si todo es correcto
    }
  };
  
  const validateForm = () => {
    if (
      !fullname ||
      !phoneNumber ||
      !birthDate ||
      !gender ||
      !city ||
      !country ||
      !email ||
      !password ||
      !passwordConfirm
    ) {
      toast.error("Por favor completa todos los campos.");
      return false;
    }
    if (password !== passwordConfirm) {
      toast.error("Las contraseñas no coinciden.");
      return false;
    }
    return true;
  };

  const handleClosePopup = () => {
    setShowVerificationPopup(false);
  };

  return (
    <div className="grid grid-cols-1 border rounded-3xl border-green-400 p-20 shadow-custom flex-wrap m-10">
      <ToastContainer />
      <h1 className="text-center font-bold text-3xl mb-10">
        Formulario de Registro
      </h1>
      <form
        onSubmit={handleRegisterSubmit}
        className="lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 grid-cols-1 space-y-2"
      >
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder="Nombre de usuario"
            value={fullname}
            onChange={handleNameChange}
            required
          />
          <i className="fa-solid fa-user relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="tel"
            placeholder="telefono"
            value={phoneNumber}
            onChange={handlePhoneChange}
            required
          />
          <i className="fa-solid fa-phone relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="email"
            placeholder="correo"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <i className="fa-solid fa-envelope relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder="Ciudad"
            value={city}
            onChange={handleCityChange}
            required
          />
          <i className="fa-solid fa-city relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder="País"
            value={country}
            onChange={handleCountryChange}
            required
          />
          <i className="fa-solid fa-earth-americas relative right-7 top-4 transform text-gray-500"></i>
        </div>
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder="Genero"
            value={gender}
            onChange={handleGeneroChange}
            required
          />
          <i className="fa-solid fa-venus-mars relative right-7 top-4 transform text-gray-500"></i>
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
        <div className="lg:col-span-2 col-span-1 flex items-center lg:justify-between lg:px-6 gap-2">
          <h1 className="font-semibold text-xl">Fecha de nacimiento:</h1>
          <Input
            id="fecha-nacimiento"
            type="date"
            placeholder="Fecha de nacimiento"
            value={birthDate}
            onChange={handleDateChange}
            required
            className="lg:w-56"
          />
        </div>
        <div className="lg:flex lg:col-span-2 lg:justify-center flex justify-center">
          <Button
            text="Registrarse"
            type="submit" // Cambiado a tipo submit
            style={{
              backgroundColor: "#0081DA",
              color: "#ecf0f1",
              borderRadius: "5px",
              width: "250px",
            }}
          />
          {showVerificationPopup && <VerificationEmail onClose={handleClosePopup} />}
        </div>
      </form>
    </div>
  );
};

export default Register;

