import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../global/elements/button";
import Input from "../global/elements/inputs";
import { toast } from "react-toastify";
import axios from "axios";

// Componente de la página de bienvenida
const WellcomePage = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/welcome/info");
    }, 1000);
    console.log(localStorage.getItem("authToken"));
  };

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center ${
        fadeOut ? "animate-fadeOut" : ""
      }`}
    >
      <div className="lg:flex justify-center items-center px-20 hidden z-10">
        <img
          src="/images/wellcome.png"
          alt="wellcome"
          className="px-10 py-32 shadow-custom"
        />
      </div>
      <div className="absolute flex justify-center items-center">
        <img
          src="/images/Fondo.jpg"
          alt="wellcome"
          className="h-screen w-screen opacity-15"
        />
      </div>
      <div className="lg:flex-1 flex flex-col justify-center items-center gap-20 lg:pr-20 px-20 z-10">
        <h1 className="text-8xl">
          BIENVENIDO<span className="text-blue-700">!</span>
        </h1>
        <h1 className="text-2xl text-center lg:px-24">
          Aquí no solo te conectarás con otros amantes del deporte, sino que
          también podrás compartir tus aventuras, descubrir rutas increíbles y
          encontrar todo lo que necesitas para mejorar tu rendimiento. Ya seas
          corredor, ciclista o simplemente alguien que disfruta mantenerse
          activo, ¡esta es tu comunidad! Nos encanta verte alcanzar tus metas,
          así que siéntete libre de explorar y disfrutar todo lo que tenemos
          para ti.
        </h1>
        <Button
          onClick={handleStart}
          text="Empecemos juntos!"
          className="bg-green-600 rounded-full text-xl hover:bg-green-800"
        />
      </div>
    </div>
  );
};

// Página de información inicial
const InitialInfoPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [username, setUsername] = useState("");
  const [sports, setSports] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Usar el archivo real en lugar de la URL
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSportClick = (sport) => {
    if (sports.includes(sport)) {
      setSports(sports.filter((s) => s !== sport));
    } else {
      setSports([...sports, sport]);
    }
  };

  // Subir la imagen a Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Preset_MoveTogether"); // Cambia esto si tu preset es diferente

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dkzosj1gi/image/upload",
        formData
      );
      return response.data.secure_url; // Retorna la URL de la imagen subida
    } catch (error) {
      console.error("Error al subir la imagen a Cloudinary", error);
      toast.error("Error al subir la imagen");
      throw error;
    }
  };

  const handleSubmit = async () => {
    let imageUrl = null; // Definir una variable para la URL de la imagen

    if (username.length < 6) {
      return toast.error("El nombre de usuario no puede tener menos de 6 caracteres");
    }

    // Si hay un archivo seleccionado, subirlo a Cloudinary
    if (selectedFile) {
      try {
        imageUrl = await uploadImageToCloudinary(selectedFile); // Esperar a que la imagen se suba y obtener la URL
      } catch (error) {
        console.error("Error al subir la imagen:", error);
        return; // Detener el proceso si hay un error al subir la imagen
      }
    }

    // Crear el payload con los datos que quieres enviar
    const payload = {
      username, // El username que el usuario ingresó
      sports,   // Los deportes seleccionados
      avatar: imageUrl, // La URL de la imagen subida (o null si no hay imagen)
    };

    try {
      // Realizar la solicitud al backend enviando el payload como JSON
      const response = await fetch("https://move-together-back.vercel.app/api/actualizarPerfil", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Indicamos que el cuerpo de la solicitud es JSON
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`, // Token de autenticación
        },
        body: JSON.stringify(payload), // Convertir el objeto payload a JSON antes de enviarlo
      });

      console.log("Enviando JSON:", JSON.stringify(payload)); // Para depuración

      if (response.ok) {
        toast.success("Perfil creado correctamente");
        navigate("/home"); // Redirigir al usuario a la página principal
      } else {
        console.error("Error en la petición:", response.statusText);
        toast.error("Hubo un error al crear el perfil.");
      }
    } catch (error) {
      console.error("Error en el fetch:", error);
      toast.error("Error de conexión. Inténtalo más tarde.");
    }
  };

  return (
    <div className="flex items-center justify-evenly h-screen w-screen bg-gray-50">
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-6xl font-bold mb-4 text-center">
          <span className="text-blue-600">¡</span>BIENVENIDO
          <span className="text-blue-600">!</span>
        </h1>
        <p className="text-center text-3xl mb-6">Vamos a crear tu perfil.</p>

        <div className="flex flex-col mb-4">
          <div className="flex justify-evenly items-center">
            <div className="mb-4">
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
              )}
            </div>
            <label className="block mb-2 text-xl font-medium text-gray-700">
              Añadir foto de perfil
            </label>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-lg file:font-semibold
              file:bg-gray-100 file:text-blue-700
              hover:file:bg-blue-200 pl-4"
          />
        </div>

        <div className="my-6">
          <label
            htmlFor="username"
            className="block text-2xl font-medium text-gray-700"
          >
            Añade tu UserName
          </label>
          <Input
            type="text"
            id="username"
            value={username}
            placeholder="@Ejemplo1"
            onChange={handleUsernameChange}
            className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label
            htmlFor="sports"
            className="block text-lg font-medium text-gray-700"
          >
            ¿Qué deporte practicas?
          </label>
          <div className="flex flex-wrap justify-start mt-1 w-full p-2 max-w-lg gap-x-3 gap-y-2">
            {['running', 'Ciclismo', 'Patinaje', 'Natación', 'Gimnasio'].map((sport) => (
              <button
                key={sport}
                onClick={() => handleSportClick(sport)}
                className={`flex justify-center items-center mb-2 rounded-full w-32 h-8 ${
                  sports.includes(sport) ? 'bg-blue-600 text-white' : 'bg-blue-400 text-black'
              }`}
              >
                {sport.charAt(0).toUpperCase() + sport.slice(1)}
              </button>
            ))}
            </div>
        </div>

        <div className="flex justify-center items-center m-4">
          <Button
            onClick={handleSubmit}
            text="Guardar"
            className="bg-blue-600 rounded-full text-xl hover:bg-blue-400"
          />
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center">
        <img
          src="/images/InitialInfo.png"
          alt="wellcome"
          className="h-5/6 object-cover"
        />
      </div>
    </div>
  );
};

export { WellcomePage, InitialInfoPage };


