import React from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

import './styles/Modal.css';
import Backdrop from "./Backdrop";


function ModalOverlay(props) {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                {props.header}
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    <h2>{props.children}</h2>
                </div>
                <footer className={`modal__footer ${props.footerClass}`} >
                    {props.footer}</footer>
            </form>
        </div>
    );

    return ReactDOM.createPortal(content, document.getElementById('modal'));
}

export default function Modal(props) {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.closeBox} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </React.Fragment>
    );
};