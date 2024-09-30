import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useRegister = () => {
  const [fullname, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [birthDate, setDate] = useState("");
  const [gender, setGenero] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");

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

    if (password !== passwordConfirm) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (gender !== "Masculino" && gender !== "Femenino") {
      toast.error("El genero debe ser Masculino o Femenino");
      return;
    }

    const nombreArray = fullname.trim().split(" ");
    if (nombreArray.length < 2) {
      toast.error("El nombre debe contener al menos dos palabras");
      return;
    }

    try {
      const payload = {
        fullname,
        email,
        password,
        passwordConfirm,
        phoneNumber,
        birthDate,
        gender,
        ubi: {
          country,
          city,
        },
      };

      console.log("Enviando JSON:", JSON.stringify(payload));

      const response = await fetch(
        "https://move-together-back.vercel.app/api/usuarios/crear",
        {
          method: "POST",
          // mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const errorData = await response.json();
      if (!response.ok) {
        let errorMessage = "Ocurrió un error inesperado";
        if (response.status === 400 && errorData.errores) {
          errorMessage = errorData.errores[0].msg;
        } else if (response.status === 400) {
          errorMessage = errorData.errores[0].msg;
        } else if (response.status === 500) {
          errorMessage = "Error en la solicitud de registro";
        }
        toast.error(errorMessage);
      } else {
        toast.success("Usuario registrado correctamente");
      }
    } catch (error) {
      console.error("Error al registrar usuario", error);
      toast.error("Error al procesar la solicitud, intente nuevamente.");
    }
  };

  return {
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
  };
};

export default useRegister;
