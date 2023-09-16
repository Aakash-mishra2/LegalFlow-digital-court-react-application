import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles/Navlinks.css";

export default function Navlinks() {
    const currentUserId = useSelector((state) => state.userAccount.UserId);
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">Citizens</NavLink>
            </li>
            <li>
                <NavLink to={`/${currentUserId}/cases`}>Your Cases</NavLink>
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