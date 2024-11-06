import React, { memo } from "react";
import Button from "../../global/elements/button";

const ComCard = ({ img, name, created, sport, members }) => {
  return (
    <div className="flex w-128 bg-slate-100 justify-center p-4">
      <div className="flex flex-col p-4 rounded-xl bg-white w-96 justify-center gap-4">
        <div className="rounded-t-md">
          <img
            className="rounded-xl w-full h-52 object-contain"
            src={img}
            alt="Community"
          />
        </div>
        <div className="block">
          <span className="flex font-semibold text-2xl">{name}</span>
          <span className="flex text-sm">Creado por: {created}</span>
        </div>
        <div className="flex py-4">
          <div className=" rounded-full bg-green-200 px-4 text-sm font-semibold">{sport}</div>
        </div>
        <div>
          <p>
            Texto textarudo de la comunidad, describiendo lo que se hace en
            ella.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <span className="text-sm">Miembros:</span>
            <span className="font-semibold text-md mx-2">{members}</span>
          </div>
          <div>
            <Button
              text="Unirse"
              className="bg-blue-500 text-white rounded-full"
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

export default ComCard;
