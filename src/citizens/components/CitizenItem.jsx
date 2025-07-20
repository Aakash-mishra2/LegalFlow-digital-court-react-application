import React from "react";
import Card from "../../shared/UIelements/Card";
import { Link } from "react-router-dom";
import Avatar from "../../shared/UIelements/Avatar";
import './styles/CitizenItem.css'

const CitizenItem = (props) => {
    return (
        <div className="citizen-item">
            <Card className="citizen-item__content">
                <Link to={`${props.id}/cases`} >

                    <div className="citizen-item__image">
                        <Avatar image={`${props.imgURL}`} alt={`Image of ${props.name}`} />
                    </div>

                    <div className="citizen-item__info">
                        <h2>{props.name}</h2>
                        { props.name!== 'ADMIN' && <h3>
                            {props.caseCount} {props.caseCount === 1 ? "Case" : "Cases"}
                        </h3>}
                    </div>
                </Link>
            </Card>
        </div>
    );
}
export default CitizenItem;