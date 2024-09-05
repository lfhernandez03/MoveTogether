import React, { Component } from "react";

export const Input = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="rounded font-semibold py-1.5 px-3 my-1 bg-slate-100 border-gray-500 border"
        style={props.style}
      />
    </div>
  );
};

export default Input;
