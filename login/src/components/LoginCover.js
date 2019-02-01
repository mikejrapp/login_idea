import React from 'react';
import Button from './Button';
import {shiftPanel} from '../scripts/shiftPanel';

class LoginCover extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            position: "center",
        };

    }

    handleShift = (direction) => {
        shiftPanel();
    };

    render(){
        return(
            <div className="login-cover">
                <div className={"button-wrapper"}>
                    <Button name={"Login"} handleClick={this.handleShift}/>
                    <Button name={"Sign Up"}/>
                </div>
            </div>
        )
    }
}

export default LoginCover;