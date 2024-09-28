import React, { useState } from "react";
import { toast } from "react-toastify";

const ChangeAuth = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setPassword] = useState("");
  const [step, setStep] = useState(1); // 1: email, 2: code, 3: password, 4: success
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  }

  const handleSubmitEmail = async (event) => {
    event.preventDefault();
    if (!email) {
      setError("El correo electrónico es requerido.");
      return;
    }
    try {
      const payload = { email };
      console.log("Enviando JSON:", JSON.stringify(payload));
      const response = await fetch(
        "https://move-together-back.vercel.app/api/cambio-contrasenia",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        let errorMessage =
          data.errores.msg || "Error en la solicitud de cambio de contraseña";
        setError(errorMessage);
        toast.error(errorMessage);
        return;
      } else {
        setStep(2); //Cuando la solicitud es exitosa, cambiamos el paso 
      }
    } catch (error) {
      setError("Error en la solicitud de cambio de contraseña");
    }
  };

  const handleSubmitCode = async (event) => {
    event.preventDefault();
    if (!code) {
      setError("El código es requerido.");
      return;
    }
  
    try {
      const payload = { code };
      console.log("Enviando JSON:", JSON.stringify(payload));
      const response = await fetch(
        "https://move-together-back.vercel.app/api/verificar-codigo-cambio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        let errorMessage =
          data.errores[0].msg || "Error en la solicitud de envío de código";
        setError(errorMessage);
        toast.error(errorMessage);
        return;
      } else {
        setStep(3); //Cuando la solicitud es exitosa, cambiamos el paso 
      }
    } catch (error) {
      setError("Error en la solicitud de envío de código");
    }
  };

  const handleSubmitPassword = async (event) => {
    event.preventDefault();
    if (!newPassword) {
      setError("La contraseña es requerida.");
      return;
    }
    try {
      const payload = { email, newPassword };
      console.log("Enviando JSON:", JSON.stringify(payload));
      const response = await fetch(
        "https://move-together-back.vercel.app/api/nueva-contrasenia",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        let errorMessage =
          data.errores.msg || "Error en la solicitud de envío de código";
        setError(errorMessage);
        toast.error(errorMessage);
        return;
      } else {
        setStep(4); //Cuando la solicitud es exitosa, cambiamos el paso 
      }
    } catch (error) {
      setError("Error en la solicitud de cambio de contraseña");
    }
  };

  return {
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
  };
};

export default ChangeAuth;