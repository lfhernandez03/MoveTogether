import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button className={props.className}> {props.text} </button>
        </div>
    );
}

export { Button };