import React from "react";
import ReactDOM from "react-dom";

import './styles/Backdrop.css';

const Backdrop = (props) => {
    const bkg = (
        <div className="backdrop" onClick={props.onClick}>
        </div>
    );
    return ReactDOM.createPortal(bkg, document.getElementById('backdrop'));

}

export default Backdrop;