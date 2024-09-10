import React, { useState } from "react";
import { toast } from "react-toastify";

const VerificationAuth = () => {
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1); // 1: email, 2: code
  const [error, setError] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setError("");
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
    code,
    step,
    error,
    handleCodeChange,
    handleSubmitCode,
  };
};

export default VerificationAuth;
