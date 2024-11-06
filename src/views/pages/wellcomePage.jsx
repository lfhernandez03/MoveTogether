import React from "react";
import Button from "../global/elements/button";

const WellcomePage = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex justify-center items-center px-20">
        <img src="/images/wellcome.png" alt="wellcome" className=" px-10 py-32 shadow-custom"/>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col gap-20 pr-20">
        <h1 className="text-8xl">BIENVENIDO<span className="text-blue-700">!</span></h1>
        <h1 className="text-2xl text-center px-24">Aquí no solo te conectarás con otros amantes del deporte, sino que también podrás compartir 
            tus aventuras, descubrir rutas increíbles y encontrar todo lo que necesitas para mejorar tu 
            rendimiento. Ya seas corredor, ciclista o simplemente alguien que disfruta mantenerse activo, 
            ¡esta es tu comunidad! Nos encanta verte alcanzar tus metas, así que siéntete libre de explorar y 
            disfrutar todo lo que tenemos para ti. </h1>
        <Button navigateTo="/" text="Empecemos juntos!" className="bg-green-600 rounded-full text-xl "/>
      </div>
    </div>
  );
<<<<<<< Updated upstream
}
=======
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

  const handleSportsChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSports(selectedOptions);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (username[0] != "@") {
      return toast.error("El nombre de usuario no puede comenzar con '@'");
    }
    formData.append("username", username);
    formData.append("sports", JSON.stringify(sports)); // Convertir el array de deportes a JSON
    if (selectedFile) {
      formData.append("profileImage", selectedFile); // Adjuntar la imagen de perfil
    }

    console.log("Form data:", formData);

    try {
      const response = await fetch("https:FALTAA", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Redirigir al usuario o mostrar un mensaje de éxito
        toast.success("Perfil creado correctamente");
        navigate("/home/feed");
      } else {
        console.error("Error en la petición:", response.statusText);
      }
    } catch (error) {
      console.error("Error en el fetch:", error);
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

        <div className="mb-4">
          <label
            htmlFor="sports"
            className="block text-lg font-medium text-gray-700"
          >
            ¿Qué deporte practicas?
          </label>
          <select
            id="sports"
            multiple
            value={sports}
            onChange={handleSportsChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="running">Running</option>
            <option value="cycling">Cycling</option>
            <option value="skating">Skating</option>
            <option value="swimming">Swimming</option>
            <option value="gym">Gym</option>
          </select>
        </div>

        <div className="flex justify-center items-center m-4">
          <Button
            onClick={handleSubmit} // Llamar a handleSubmit al hacer clic en "Guardar"
            text="Guardar"
            className="bg-blue-600 rounded-full text-xl hover:bg-blue-400"
          />
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center">
        <img
          src="/images/InitialInfo.png"
          alt="Info"
          className="border px-10 py-32 shadow-custom"
        />
      </div>
    </div>
  );
};

export { WellcomePage, InitialInfoPage };
>>>>>>> Stashed changes

export default WellcomePage;