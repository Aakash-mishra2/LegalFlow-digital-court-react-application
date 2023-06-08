import React from "react";
import ReactDOM from "react-dom";
import CitizenList from "../components/CitizenList";
export default function Citizens() {

    const DUMMY_USERS = [
        {
            id: "c1",
            name: "Bhaskar",
            image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            cases: 3
        },
        {
            id: "c2",
            name: "Roshan",
            image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            cases: 2
        }
    ]

    return (
        <CitizenList users={DUMMY_USERS} />
    )
};