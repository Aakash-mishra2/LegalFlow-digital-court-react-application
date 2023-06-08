import React from "react";
import Card from "../../shared/UIelements/Card";
import Button from "";
import Modal from "../../shared/UIelements/Modal";

export default function CaseItem(props) {

    const [isDescBox, setIsBox] = useState(false);
    const openDescBox = () => { setIsBox(true); }
    const closeDescBox = () => { setIsBox(false); }

    return (
        <div>
            <React.Fragment>
                <Modal
                    show={isDescBox}
                    closeBox={closeDescBox}
                    header={props.description}
                    footer={<Button onClick={closeDescBox} >CLOSE</Button>}
                    contentClass="case-item__modal-content"
                    footerClass="case-item__modal-actions"
                >
                    <p> CASE DESCRIPTION </p>
                </Modal>
                <li className="case-item">
                    <Card className="case-item__content">
                        <div className="case-item__image">
                            <img src={props.image} alt={props.court} />
                        </div>
                        <div className="case-item__info">
                            <h2>{props.court} </h2>
                            <h3>{props.nextDate}</h3>
                        </div>
                        <div className="case-item__actions">

                            <Button onClick={openDescBox} >VIEW DESCRIPTION</Button>
                            <Button >EDIT</Button>
                            <Button >DELETE</Button>
                        </div>
                    </Card>
                </li>
            </React.Fragment>
        </div>
    );
}