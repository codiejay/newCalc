import React from "react";
import "./Button.css"



const Button = (props) => {
    return( 
        <button id="keys" onClick={props.btnClick}    key={props.value}> {props.value} </button>
    )
}
export default Button; 