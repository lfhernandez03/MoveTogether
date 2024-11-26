import React from "react";
import { useNavigate } from "react-router-dom";

const CardOption = (props) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (props.onClick) {
      props.onClick(event);
    }
    if (props.navigateTo) {
      navigate(props.navigateTo);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`justify-centerbg-white px-4 pt-2 text-end gap-4 flex items-center hover:bg-slate-200 rounded-md ${props.className}`}
    >
      <div className="bg-blue-500 m-1 rounded-full text-white h-7 w-7 flex items-center justify-center">
        <i className={`fa-solid ${props.icon}`}></i>
      </div>
      <h1 className="flex-1">{props.label}</h1>
    </button>
  );
};

export default CardOption;
