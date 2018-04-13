import React from 'react';


const Button = (props) => {
    return(
        <div className="Button">
            <button onClick={props.handleReset} >Reset Game</button>
        </div>
    )
}

export default Button;