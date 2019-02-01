import React from 'react';
import Button from './Button';

const LoginCover = (props) => {
    return(
        <div className="login-cover">
            <div className={"button-wrapper"}>
                <Button name={"Login"}/>
                <Button name={"Sign Up"}/>
            </div>
        </div>
    )
};

export default LoginCover;