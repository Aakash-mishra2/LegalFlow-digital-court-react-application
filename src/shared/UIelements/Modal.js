import React from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import "./styles/Modal.css";

const ModalOverlay = (props) => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                {props.header}
            </header>
            <div className={`modal__content ${props.contentClass}`}>
                <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                    {props.children}
                </form>
            </div>
            <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
            </footer>
        </div >
    )
    return ReactDOM.createPortal(content, document.getElementById('modal'));
}

const Modal = (props) => {

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
}
export default Modal;