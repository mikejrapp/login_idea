import React from "react";
import {shiftPanel} from "../scripts/shiftPanel";

const Button = (props) =>{
    return(
        <div className={"button"} onClick={() =>
            shiftPanel(props.name)
        }>
            <div className={"button-title"}>{props.name}</div>
        </div>
    )
};

export default Button;