import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles/Navlinks.css";

export default function Navlinks() {
    const currentUserId = useSelector((state) => state.userAccount.UserId);
    const isLoggedIn = useSelector((state) => state.userAccount.isloggedIn);
    return (
        <ul className="nav-links list-none m-0 p-0 w-full h-full flex flex-col justify-center items-center font-circular">
            <li>
                {isLoggedIn && <NavLink to={`/${currentUserId}/cases`}>My Cases</NavLink>}
            </li>
            <li >
                {isLoggedIn && <NavLink to="/allParties">Other Parties</NavLink>}
            </li>
            <li>
                {isLoggedIn && <NavLink to="/cases/new">New Case</NavLink>}
            </li>
            {/* {!isLoggedIn && <li>
                <NavLink to="/"> LOGIN </NavLink>
            </li>}

            <li>
                {isLoggedIn && <Button onClick={() => dispatch(logOut())}> LOGOUT </Button>}
            </li>
            <li>
                <Button inverse href="https://github.com/Aakash-mishra2/CCMS-frontEnd#readme" target="_blank"> New User Guide</Button>
            </li> */}
        </ul>
    );
}