import React from "react";
import { NavLink } from "react-router-dom";


import "./styles/Navlinks.css";

export default function Navlinks() {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">CITIZENS</NavLink>
            </li>
            <li>
                <NavLink to="/c1/cases">MY CASES</NavLink>
            </li>
            <li>
                <NavLink to="/cases/new">NEW CASE</NavLink>
            </li>
            <li>
                <NavLink to="users/authenticate">AUTHENTICATE</NavLink>
            </li>
        </ul>
    );
}