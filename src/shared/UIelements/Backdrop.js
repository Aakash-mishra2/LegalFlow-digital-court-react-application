import React from "react";
import ReacDOM from "react-dom";

import './styles/Backdrop.css';

export default function Backdrop(props) {
    return
    ReacDOM.createPortal(<div className="backdrop" onClick={props.onClick}></div>, document.getElementById('backdrop'));

}