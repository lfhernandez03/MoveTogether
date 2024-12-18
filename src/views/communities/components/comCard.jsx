import React, { memo } from "react";
import Button from "../../global/elements/button";
import axios from "axios";

const token = localStorage.getItem("authToken");

const handleJoin = async (event) => {
  event.prevent.default;
  try {
    const response = await axios.post("http://localhost:5000/api/unirse/comunidad/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      console.log("Se ha unido a la comunidad");
    }
  } catch (error) {
    console.log(error);
  }
};

const ComCard = ({
  imagenPerfil,
  nombre,
  administradorId,
  categorias,
  miembros,
  descripcion,
}) => {
  return (
    <div className="flex w-128 bg-slate-100 justify-center p-4">
      <div className="flex flex-col p-4 rounded-xl bg-white w-96 justify-center gap-4">
        <div className="rounded-t-md">
          <img
            className="rounded-xl w-full h-52 object-contain"
            src={imagenPerfil}
            alt="Community"
          />
        </div>
        <div className="block">
          <span className="flex font-semibold text-2xl">{nombre}</span>
          <span className="flex text-sm">Creado por: {administradorId}</span>
        </div>
        <div className="flex py-4">
          {categorias.map((categoria) => (
            <div
              key={categoria}
              className="rounded-full bg-green-200 px-4 text-sm font-semibold"
            >
              {categoria}
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm">{descripcion}</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p>Miembros: {miembros.length}</p>
          </div>
          <div>
            <Button
              text="Unirse"
              className="bg-blue-500 text-white rounded-full"
              onClick={handleJoin}
            ></Button>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-xs">
            Haz click aqui para ver mas informacion
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(ComCard);
