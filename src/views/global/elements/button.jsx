import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = (props) => {
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
      value={props.value}
      className={`font-semibold py-2 px-6 my-3 flex items-center justify-center text-center ${props.className}`}
      style={props.style}
    >
      {props.icon && <i className={`${props.icon} `}></i>}
      {props.text}
    </button>
  );
};

export default Button;
