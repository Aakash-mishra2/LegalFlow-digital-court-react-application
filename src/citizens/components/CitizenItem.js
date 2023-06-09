import React from "react";
import Card from "../../shared/UIelements/Card";
import Avatar from "../../shared/UIelements/Avatar";
import { Link } from "react-router-dom";
import './styles/CitizenItem.css'

export default function CitizenItem(props) {
    return (
        <li className="citizen-item">
            <Card className="citizen-item__content">
                <Link to={`${props.id}/cases`} >

                    <div className="citizen-item__image">
                        <Avatar image={props.imgURL} alt={`Image of ${props.name}`} />
                    </div>

                    <div className="citizen-item__info">
                        <h2>{props.name}</h2>
                        <h3>
                            {props.caseCount} {props.caseCount === 1 ? "Case" : "Cases"}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
}