import React from 'react';

export const Button = (props) => {
    return (
        <button 
            onClick={props.onClick} 
            className={`font-semibold py-2 px-6 my-3 flex items-center justify-center ${props.className}`} 
            style={props.style}
        > 
            {props.icon && <i className={`${props.icon} mr-2`}></i>}
            {props.text} 
        </button>
    );
}

export default Button;
