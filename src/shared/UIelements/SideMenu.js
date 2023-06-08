import React from "react";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";

import './styles/Sidemenu';

export default function SideMenu(props) {
    const sideDrawer = (
        <div>
            <CSSTransition
                in={props.openMenu}
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