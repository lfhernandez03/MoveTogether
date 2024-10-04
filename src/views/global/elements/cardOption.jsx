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
      className={`bg-white mt-3 w-64 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center ${props.className}`}
    >
      <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
        <i className={`fa-solid ${props.icon} pt-1`}></i>
      </div>
      <h1>{props.label}</h1>
    </button>
  );
};

export default CardOption;
