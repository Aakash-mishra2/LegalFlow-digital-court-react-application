import React from "react";
import Card from "../../shared/UIelements/Card";
import CaseItem from "./CaseItem";

import './styles/CaseList.css';

export default function CaseList(props) {
    if (!props.cases === 0) {
        return (
            <div className="case-list center" >
                <Card>
                    <h2>No registered cases found yet!! </h2>
                    <p> Please wait we are fetching server data!!</p>
                    <hr />
                    <h3> Register New case in 'New Case' Tab instead !</h3>
                </Card>
            </div>
        );
    }

    return (
        <ul className="case-list">
            {props.cases.map(items => (
                <CaseItem
                    key={items.id}
                    id={items.id}
                    court={items.court}
                    description={items.description}
                    image={items.image}
                    judge={items.judge}
                    status={items.status}
                    nextDate={items.next_hearing}
                />
            ))}
        </ul>
    );
};