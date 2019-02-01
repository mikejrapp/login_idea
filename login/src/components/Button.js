import React from "react";

const Button = (props) =>{
    return(
        <div className={"button"}>
            <div className={"button-title"}>{props.name}</div>
        </div>
    )
};

export default Button;