import React from "react";
import ReactDOM from "react-dom";

import './styles/Backdrop.css';

export default function Backdrop(props) {
    return ReactDOM.createPortal(<div className="backdrop" onClick={props.onClick}></div>, document.getElementById('backdrop'));

}