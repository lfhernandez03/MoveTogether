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
      const response = await fetch(
        "https://move-together-back.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      //Manejar los posibles errores al iniciar sesion
      if (!response.ok) {
        const errorData = await response.json();
        if (
          response.status === 400 &&
          errorData.errors &&
          errorData.errors.length > 0
        ) {
          const errorMessage = errorData.errors[0].msg;
          setError(errorMessage);
          toast.error(errorMessage);
        } else {
          throw new Error("Error en la solicitud de inicio de sesión");
        }
      } else {
        const data = await response.json();
        if (data.success || response.ok) {
          setError("");
          toast.success("Bienvenido");
        } else {
          setError("Usuario o contraseña incorrectos");
          toast.error("Usuario o contraseña incorrectos");
        }
      }
    } catch (error) {
      setError("Error en la solicitud de inicio de sesión");
      toast.error("Error en la solicitud de inicio de sesión");
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
