import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../formElements/Button";
import { login, logOut } from '../../features/UserAccount/loginSlice';
import "./styles/Navlinks.css";

export default function Navlinks() {
    const currentUserId = useSelector((state) => state.userAccount.UserId);
    const isLoggedIn = useSelector((state) => state.userAccount.isloggedIn);
    const dispatch = useDispatch();
    return (
        <ul className="nav-links">
            
            {/* <li>
                <NavLink to="/">Citizens</NavLink>
            </li> */}
            
            <li>
                {isLoggedIn && <NavLink to={`/${currentUserId}/cases`}>My Cases</NavLink>}
            </li>
            <li>
                {isLoggedIn && <NavLink to="/cases/new">New Case</NavLink>}
            </li>
            <li>
                {!isLoggedIn && <NavLink to="/"> LOGIN </NavLink>}
            </li>
            
            <li>
                {isLoggedIn && <Button onClick={() => dispatch(logOut())}> LOGOUT </Button>}
            </li>
            <li>
                <Button inverse href="https://github.com/Aakash-mishra2/CCMS-frontEnd#readme" target="_blank">The Idea!!</Button>
            </li>
        </ul>
    );
}