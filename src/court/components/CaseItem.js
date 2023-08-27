import React, { useState } from "react";
import Modal from "../../shared/UIelements/Modal";
import Card from "../../shared/UIelements/Card";
import Button from "../../shared/formElements/Button";
import "./styles/CaseItem.css";

const CaseItem = (props) => {

    const [isDescBox, setIsBox] = useState(false);
    const openDescBox = () => { setIsBox(true); }
    const closeDescBox = () => { setIsBox(false); }

    return (
        <React.Fragment>
            <Modal
                show={isDescBox}
                closeBox={closeDescBox}
                header={<span><p>CASE-ID: {props.id}</p><p>STATUS: {props.status}</p></span>}
                footer={
                    <span>
                        <Button onClick={closeDescBox} danger>CLOSE</Button>
                        <Button> ADD TO CALENDER </Button>
                    </span>
                }
                contentClass="case-item__modal-content"
                footerClass="case-item__modal-actions"
            >
                <h4><b>Description : </b><em>{props.description}</em></h4>
                <p><b>Next Hearing  : </b><em>{props.nextDate}</em></p>
                <p><b>Judge : </b><em>{props.judge}</em></p>
            </Modal>
            <li className="case-item">
                <Card className="case-item__content">
                    <div className="top-half">
                        <div className="case-item__image">
                            <img src={props.image} alt={props.court} />
                        </div>
                        <div className="case-item__actions">

                            <Button onClick={openDescBox}><b></b>DESCRIPTION</Button>
                            <Button to={`/update/${props.id}`}>EDIT</Button>
                            <Button danger>DELETE</Button>
                        </div>
                    </div>
                    <div className="case-item__info">
                        <h2>{props.court} </h2>
                        <h3>Next Hearing Date: {props.nextDate}</h3>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
}

export default CaseItem;