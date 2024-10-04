import React from "react";

export const Input = (props) => {
  const className = props.placeholder === "correo"
    ? "rounded font-semibold py-1.5 px-3 my-1 bg-blue-100 border-gray-500 border lg:w-96 w-80"
    : "rounded font-semibold py-1.5 px-3 my-1 bg-slate-100 border-gray-500 border";
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        className={`rounded font-semibold py-1.5 px-3 my-1 bg-slate-100 border-gray-500 border ${props.className}`}
      />
    </div>
  );
};

export default Input;
