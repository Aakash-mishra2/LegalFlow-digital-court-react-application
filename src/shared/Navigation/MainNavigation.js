import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function MainNavigation() {
    return (
        <MainHeader>
            <button>
                <span />
                <span />
                <span />
            </button>

            <h1>
                <Link to='/'>Meri Adalat</Link>
            </h1>
            <nav>
                <NavLink />
            </nav>
        </MainHeader>

    );
};