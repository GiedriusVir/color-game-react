import React from 'react';
import './Header.css';


const header = () => {
    return(
        <div className="header">
            <h1>
                The Great<br />
                <span className="colorDisplay">RGB</span><br /> 
                Color Game
            </h1>
        </div>
    )
}

export default header;