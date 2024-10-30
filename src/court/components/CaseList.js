import React from "react";
import CaseItem from "./CaseItem";

import './styles/CaseList.css';

export default function CaseList(props) {
    if (!props.cases) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <span className="text-4xl font-bold mt-2">Oops</span>
                <span className="text-md mt-3">No registered cases found! </span>
                <p className="text-md mb-5">Try again in some time</p>

            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-8 h-full m-16 mt-8 mb-4 w-auto overflow-auto">
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
        </div>
    );
};