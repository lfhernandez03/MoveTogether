import React from "react";

const CardOption = (props) => {
    return (
        <a href={props.navigateTo} className="bg-white mt-3 rounded-xl shadow-custom border border-green-500 flex justify-between px-4 items-center">
            <div className="bg-blue-400 m-1 rounded-full text-white h-7 w-7 flex justify-center items-center">
                <i className={`fa-solid ${props.icon} pt-1`}></i>
            </div>
            <h1>{props.label}</h1>
        </a>
    )
};

export default CardOption;