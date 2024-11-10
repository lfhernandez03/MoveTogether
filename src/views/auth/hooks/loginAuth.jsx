import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useLogin = () => {

  const navigate = useNavigate();

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
        let errorMessage;

        if (
          response.status === 400 &&
          errorData.errors &&
          errorData.errors.length > 0 //Error de validacion de datos: Correo invalido o contraseña invalida
        ) {
          errorMessage = errorData.errors[0].msg;
        } else if (response.status === 400) {
          //Error de validacion de datos
          errorMessage = errorData.message;
        } else if (response.status === 404) {
          //Error de usuario no encontrado
          errorMessage = errorData.message;
        } else if (response.status === 500) {
          //Error de servidor
          errorMessage = "Error en la solicitud de inicio de sesión";
        } else {
          errorMessage = "Ocurrió un error inesperado";
        }
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        const data = await response.json();
        if (data.success || response.ok) {
          localStorage.setItem("authToken", data.token);
          setError("");
          toast.success("Bienvenido");
          navigate("/home/feed");
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
