import React from "react";

const NavigateH = (props) => {
    return (
        <a href={props.navigateTo} className={`${props.bgColor ? `bg-${props.bgColor}` : ''} ${props.textColor ? `text-${props.textColor}` : ''} rounded-3xl w-8 h-8 flex justify-center items-center`}>
            <i className={`fa-solid ${props.icon} relative pt-1`}></i>
        </a>
    )
};

export default NavigateH;