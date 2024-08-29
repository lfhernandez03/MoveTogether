import React from 'react';

export const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={props.className}> {props.text} </button>
        </div>
    );
}

export default Button;

