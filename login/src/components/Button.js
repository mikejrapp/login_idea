import React from "react";

const Button = (props) =>{
    return(
        <div className={"button"} onClick={() =>
            props.handleClick(props.name === "Login" ? "right" : "left")
        }>
            <div className={"button-title"}>{props.name}</div>
        </div>
    )
};

export default Button;