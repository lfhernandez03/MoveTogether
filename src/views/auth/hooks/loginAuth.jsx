import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useLogin = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.success) {
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
    userName,
    password,
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
  };
};

export default useLogin;
