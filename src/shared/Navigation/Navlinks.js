import React from "react";
import { NavLink } from "react-router-dom";

export default function Navlink() {
    return (
        <ul>
            <li>
                <Navlink to="/">CITIZENS</Navlink>
            </li>
            <li>
                <NavLink to="/u1/cases">MY CASES</NavLink>
            </li>
            <li>
                <NavLink to="/cases/new">NEW CASE</NavLink>
            </li>
        </ul>
    );
}