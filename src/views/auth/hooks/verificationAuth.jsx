import React, { useState } from "react";
import { toast } from "react-toastify";

const VerificationAuth = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1: email, 2: code
  const [error, setError] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
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
        "https://move-together-back.vercel.app/api/verificar-codigo",
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
          data.errores.msg || "Error en la verificacion";
        setError(errorMessage);
        toast.error(errorMessage);
        return;
      } else {
        handleVerification(data);
      }
    } catch (error) {
      setError("Error en la solicitud de verificacion de email");
    }
  };

  const handleVerification = (response) => {
    const { token } = response;
    localStorage.setItem("authToken", token);
    console.log("Token almacenado en localStorage");
    setStep(2);
  };

  const handleSubmitEmail = async (event) => {
    event.preventDefault();
    if (!email) {
      setError("El código es requerido.");
      return;
    }
    // Aquí iría la lógica para verificar el código
    console.log("Código enviado:", code);
  };

  return {
    code,
    email,
    step,
    error,
    handleCodeChange,
    handleEmailChange,
    handleSubmitCode,
    handleSubmitEmail,
  };
};

export default VerificationAuth;
