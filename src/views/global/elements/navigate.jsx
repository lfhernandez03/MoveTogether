import React from "react";

const NavigateH = (props) => {
    return (
        <a href={props.navigateTo} className={`${props.bgColor ? `bg-${props.bgColor}` : ''} ${props.textColor ? `text-${props.textColor}` : ''} rounded-3xl w-8 h-8 flex justify-center items-center hover:bg-slate-200`}>
            <i className={`fa-solid ${props.icon}`}></i>
        </a>
    )
};

export default NavigateH;