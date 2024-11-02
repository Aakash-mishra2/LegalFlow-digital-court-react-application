// import React from "react";
// import { CSSTransition } from "react-transition-group";
// import ReactDOM from "react-dom";
// import Backdrop from "./Backdrop";
// import "./styles/Modal.css";

// const ModalOverlay = (props) => {
//     const content = (
//         <div className={`z-50 fixed top-[18%] left-[25%] w-3/5 bg-white shadow-card rounded-2xl font-circular tracking-widest ${props.className}`} style={props.style}>
//             <div className={`modal__content ${props.contentClass}`}>
//                 <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
//                     {props.children}
//                 </form>
//             </div>
//         </div >
//     )
//     return ReactDOM.createPortal(content, document.getElementById('modal'));
// }

// const Modal = (props) => {

//     return (
//         <React.Fragment>
//             {props.show && <Backdrop onClick={props.closeBox} />}
//             <CSSTransition
//                 in={props.show}
//                 mountOnEnter
//                 unmountOnExit
//                 timeout={200}
//                 classNames="modal"
//             >
//                 <ModalOverlay {...props} />
//             </CSSTransition>
//         </React.Fragment>
//     );
// }
// export default Modal;
import Modal from "react-modal";

const customStyles = {
    content: {
        position: "fixed",
        top: "50%",
        left: "50%",
        right: "auto",
        width: "auto",
        bottom: "auto",
        maxWidth: "90%",
        overflow: "none",
        borderRadius: "12px",
        backgroundColor: "white",
        outline: "none",
        transform: "translate(-50%, -50%)",
    },
    overlay: {
        zIndex: 1000,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        overflow: "none",
        backdropFilter: "blur(5px)",
        background: "rgba(54, 54, 54, 0.75)",
    },
};
Modal.setAppElement("#root");

const CommonModal = (props) => {
    return (
        <div className="mx-5">
            {props.children && (
                <Modal
                    isOpen={props.openModal}
                    onRequestClose={
                        props.notAllowClickAnywhere
                            ? props.notAllowClickAnywhere
                            : props.handleClose
                    }
                    style={customStyles}
                    contentLabel="modals"
                    className={props.className}
                    id={props.id}
                >
                    {props.children}
                </Modal>
            )}
        </div>
    );
};

export default CommonModal;
