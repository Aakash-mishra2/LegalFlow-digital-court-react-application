import React from "react";
import Card from "../../shared/UIelements/Card";
import CaseItem from "./CaseItem";
export default function CaseList(props) {
    if (props.cases.length === 0) {
        return (
            <div>
                <Card>
                    <p>No cases found ! Maybe create one. </p>
                </Card>
            </div>
        );
    }

    return (
        <ul>
            <li>
                {props.cases.map(items => (
                    <CaseItem
                        key={items.id}
                        id={items.id}
                        court={items.court}
                        description={items.description}
                        image={items.imageUrl}
                        judge={items.judge}
                        status={items.status}
                        nextDate={items.nextHearing}
                    />
                ))}
            </li>
        </ul>
    );
};