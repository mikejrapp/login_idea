import React from 'react';
import LoginPanel from './loginPanel';
import LoginCover from './LoginCover';

const Grid = (props) => {
    return(
        <div className="grid">
            <LoginCover/>
            <LoginPanel/>
        </div>
    )
};

export default Grid;