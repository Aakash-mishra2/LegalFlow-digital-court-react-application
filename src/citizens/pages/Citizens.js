import React from 'react';
import CitizenList from '../components/CitizenList';
const Citizens = () => {

    const DUMMY_USERS = [
        {
            id: "c1",
            name: "Bhaskar",
            idCardNo: 4343 - 4343 - 3325,
            image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            cases: 3
        },
        {
            id: "c2",
            name: "Roshan",
            idCardNo: 5564 - 4737 - 7738,
            image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            cases: 2
        }
    ];

    return (
        <CitizenList users={DUMMY_USERS} />
    );
}
export default Citizens;