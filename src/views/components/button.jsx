import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={props.className}> {props.text} </button>
        </div>
    );
}

export { Button };