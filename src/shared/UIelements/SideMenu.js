import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import './styles/Sidemenu.css';

export default function SideMenu(props) {
    const sideDrawer = (
        <div>
            <CSSTransition
                in={props.show}
                mountonEnter
                unmountOnExit
                timeout={200}
                classNames="slide-in-left"
            >
                <aside className="side-drawer" onClick={props.closeMenu}>{props.children}</aside>
            </CSSTransition>
        </div>
    );

    return ReactDOM.createPortal(sideDrawer, document.getElementById('sidemenu'));
}