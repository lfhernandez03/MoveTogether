import React, { useState } from "react";
import { toast } from "react-toastify";

const ChangeAuth = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
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
        "https://move-together-back.vercel.app/api/cambiar-contrasenia",
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
          data.message || "Error en la solicitud de cambio de contraseña";
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
    // Aquí iría la lógica para verificar el código
    console.log("Código enviado:", code);
  };

  return {
    email,
    code,
    step,
    error,
    handleEmailChange,
    handleCodeChange,
    handleSubmitEmail,
    handleSubmitCode,
  };
};

export default ChangeAuth;
