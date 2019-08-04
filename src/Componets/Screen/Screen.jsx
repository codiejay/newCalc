import React from "react";
import "./Screen.css"


const Screen = (props) => {
     
    return ( 
        <div className="calcScreen">
        <span> {props.result} </span>
        <h1>{props.calcProcess} </h1>
        </div>
    )
}

export default Screen; 
