import React, { useState } from "react";
import Input from "../../global/elements/inputs";
import Button from "../../global/elements/button";



const ComPop = ({ isOpen, SetIsOpen }) => {

  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedSports, setSelectedSports] = useState([]);
  const [IsSportsOpen, setIsSportsOpen] = useState(false);
  const [state, setState] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImg(URL.createObjectURL(file));
    } else {
      setSelectedImg(null);
    }
  };

  const toggleSportsModal = (event) => {
    event.preventDefault();
    setIsSportsOpen(!IsSportsOpen);
  };

  const handleSports = (sport) => {
    if (selectedSports.length < 4 && !selectedSports.includes(sport)) {
      setSelectedSports([...selectedSports, sport]);
    }
  };

  const handleSportRemove = (sport) => {
    setSelectedSports(selectedSports.filter((s) => s !== sport));
  };

  const sportsOptions = [
    "Fútbol",
    "Baloncesto",
    "Tenis",
    "Natación",
    "Ciclismo",
  ];

  const togglePopup = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg z-50">
          <h2 className="flex text-xl font-semibold mb-4 justify-center">
            Crear nueva comunidad
          </h2>
          <div className="flex w-128 bg-slate-100 justify-center p-4">
            <div className="flex flex-col p-4 rounded-xl bg-white w-96 justify-center gap-4">
              <form action="">
                <div className="rounded-t-md">
                  {selectedImg ? (
                    <img
                      className="rounded-xl w-full h-52 object-cover"
                      src={selectedImg}
                      alt="Vista previa"
                    />
                  ) : (
                    <div className="rounded-xl w-full h-52 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Vista previa</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center">
                    <label
                      htmlFor="comImg"
                      className="block text-xs font-medium text-gray-700 mt-2 ml-2"
                    >
                      Agrega una imagen
                    </label>
                    <Input
                      type="file"
                      onChange={handleImage}
                      id="comImg"
                      accept="image/*"
                      required
                      className="text-xs rounded-full border-none w-full mt-2 text-ellipsis overflow-hidden"
                    />
                  </div>

                  <label
                    htmlFor="comName"
                    className="block text-sm font-medium text-gray-700 mt-4 mx-2"
                  >
                    Nombre de la comunidad
                  </label>
                  <Input
                    type="text"
                    placeholder="Nombre de la comunidad"
                    id="comName"
                    className="rounded-full border-none w-full"
                    required
                  />
                  <label
                    htmlFor="comDesc"
                    className="block text-sm font-medium text-gray-700 mt-4 mx-2"
                  >
                    Descripción
                  </label>
                  <Input
                    type="text"
                    placeholder="Descripción"
                    id="comDesc"
                    className="rounded-full border-none w-full"
                    required
                  />
                  <label
                    htmlFor="comSports"
                    className="block text-sm font-medium text-gray-700 mt-4 mx-2"
                  >
                    Agrega deportes
                  </label>
                  <div className="flex flex-wrap items-center gap-2 mt-2 ml-2">
                    {selectedSports.map((sport) => (
                      <div
                        key={sport}
                        className="flex items-center rounded-lg px-2 bg-blue-100 h-8"
                      >
                        <span className="text-sm">{sport}</span>
                        <button
                          type="button"
                          className=" flex text-xs ml-2 text-slate-500 rounded-full"
                          onClick={() => handleSportRemove(sport)}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    ))}
                    {selectedSports.length < 4 && (
                      <Button
                        icon="fa-solid fa-plus"
                        className="hover:bg-slate-200 rounded-full"
                        onClick={toggleSportsModal}
                      />
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    text="Cancelar"
                    className=" text-black rounded-full"
                    onClick={togglePopup}
                  />
                  <Button
                    text="Crear"
                    className="bg-blue-500 text-white rounded-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {IsSportsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg z-50">
            <h2 className="text-xl font-semibold mb-4">Selecciona deportes</h2>
            <div className="flex flex-wrap gap-2">
              {sportsOptions.map((sport) => (
                <button
                  key={sport}
                  type="button"
                  className={`px-4 py-2 rounded-full ${
                    selectedSports.includes(sport)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleSports(sport)}
                >
                  {sport}
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <Button
                text="Cerrar"
                className="bg-blue-500 text-white rounded-full"
                onClick={toggleSportsModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComPop;
