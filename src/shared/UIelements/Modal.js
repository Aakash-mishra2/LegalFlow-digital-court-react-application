import "./styles/Modal.css";
import Backdrop from "./Backdrop";
import ReactDom from "react-dom";

const ModalOverlay = (props) => {
    const ModalOverlay = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>{props.header}</header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>{props.footer}</footer>
            </form>
        </div >
    )
    return ReactDOM.createPortal(ModalOverlay, document.getElementById('modal'));
}

const Modal = (props) => {

    return (
        <div>
            {props.show && <Backdrop onClick={props.onClick} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                className="modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </div>
    );
}
export default Modal;