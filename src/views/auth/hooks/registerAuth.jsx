import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useRegister = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [genero, setGenero] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleGeneroChange = (e) => {
    setGenero(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        phone,
        genero,
        city,
        country,
        email,
        password,
        confirmPassword,
      };
      console.log("Enviando JSON:", JSON.stringify(payload));
      const response = await fetch(
        "https://move-together-back.vercel.app/api/crearUsuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            genero,
            city,
            country,
            email,
            password,
            confirmPassword,
          }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        let errorMessage;
        if (
          response.status === 400 &&
          errorData.errors &&
          errorData.errors.length > 0
        ) {
          errorMessage = errorData.errors[0].msg;
        } else if (response.status === 400) {
          errorMessage = errorData.message;
        } else if (response.status === 500) {
          errorMessage = "Error en la solicitud de registro";
        } else {
          errorMessage = "Ocurrió un error inesperado";
        }
        toast.error(errorMessage);
      } else {
        const data = await response.json();
        if (data.success || response.ok) {
          toast.success("Usuario registrado correctamente");
        }
      }
    } catch (error) {
      console.error("Error al registrar usuario");
    }
  };

  return {
    name,
    phone,
    date,
    genero,
    city,
    country,
    email,
    password,
    confirmPassword,
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
  };
};

export default useRegister;
