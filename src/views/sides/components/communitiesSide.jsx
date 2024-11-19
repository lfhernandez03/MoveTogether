import React from "react";
import DropdownMenu from "../../global/elements/dropDownMenu";

const SideCom = (props) => {
  const handleSelect = (option) => {
    setActiveComponent(option.value);
  };

  const options = [
    { label: "Contactos", value: "Contactos" },
    { label: "Comunidades", value: "Comunidades" },
  ];

  return (
    <div className="flex border rounded-lg border-blue-200 p-2">
      <div className="w-full ">
        <div className="flex gap-3">
          <div className="flex">
            <img
              src="/images/caldera.png"
              alt=""
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="flex flex-grow flex-col">
            <div className="flex justify-between items-center">
              <span className="text-md font-medium">{props.Title}</span>
              <div className="ml-auto">
                <DropdownMenu
                  options={options}
                  onSelect={handleSelect}
                  className=""
                />
              </div>
            </div>
            <div className="flex text-xs gap-5">
              <span>{props.CreatedBy}</span>
              <span>Miembros: {props.Members}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCom;
