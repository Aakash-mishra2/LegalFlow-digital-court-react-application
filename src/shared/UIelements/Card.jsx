import React from "react";
import './styles/Card.css';

const Card = (props) => {
    return (
        <div className={`m-0 shadow-card overflow-auto bg-transparent rounded-lg ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
};

export default Card;