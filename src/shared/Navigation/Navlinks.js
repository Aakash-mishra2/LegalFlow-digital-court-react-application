import React from "react";
import { NavLink } from "react-router-dom";


import "./styles/Navlinks.css";

export default function Navlinks() {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">Citizens</NavLink>
            </li>
            <li>
                <NavLink to="/c1/cases">Your Cases</NavLink>
            </li>
            <li>
                <NavLink to="/cases/new">New Case</NavLink>
            </li>
            <li>
                <NavLink to="users/authenticate">Authentication</NavLink>
            </li>
        </ul>
    );
}