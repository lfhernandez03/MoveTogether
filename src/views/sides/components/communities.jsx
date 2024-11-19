import React from "react";
import SideCom from "./communitiesSide";

const Communities = (props) => {
  const handleSelect = (option) => {
    setActiveComponent(option.value);
  };

  const options = [
    { label: "Contactos", value: "Contactos" },
    { label: "Comunidades", value: "Comunidades" },
  ];

  return (
    <div className="flex flex-col">
      <div className="">
        <span>Creadas por ti</span>
        <div className="py-5">
          <SideCom />
        </div>
      </div>
      <div className="">
        <span>Comunidades a las que te has unido</span>
        <div className="py-5">
          <SideCom CreatedBy='Hola' Title="Move" Members='10'/>
        </div>
      </div>
    </div>
  );
};

export default Communities;
