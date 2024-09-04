import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const payload = { email, password };
      console.log("Enviando JSON:", JSON.stringify(payload));
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.success || response.ok) {
        setError("");
        toast.success("Bienvenido");
      } else {
        setError("Usuario o contraseña incorrectos");
        toast.error("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      setError("Error en la solicitud de inicio de sesión");
      toast.error("Error en la solicitud de inicio de sesión", {
        position: "top-right",
      });
    }
  };

  return {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
};

export default useLogin;
