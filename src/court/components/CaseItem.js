import React, { useState } from "react";
import Modal from "../../shared/UIelements/Modal";
import Card from "../../shared/UIelements/Card";
import Button from "../../shared/formElements/Button";
import "./styles/CaseItem.css";
import { useSelector } from "react-redux";
import api from "../../api/ccmsBase";
import ErrorModal from "../../shared/UIelements/ErrorModal";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";

const CaseItem = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isDescBox, setIsBox] = useState(false);
    const openDescBox = () => { setIsBox(true); }
    const closeDescBox = () => { setIsBox(false); }
    const currentUserId = useSelector((state) => state.userAccount.UserId);
    const [deleteCase, setDeleteCase] = useState(false);
    const deleteCaseHandler = () => { setDeleteCase(prevMode => !prevMode); }
    const clearError = () => {
        setError(null);
    }
    const withdraw = async () => {
        console.log(props.id);
        setIsLoading(true);
            try {
                const response = await api.delete(`/admin/remove/${props.id}`);
                console.log(response.data.message);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                if (err.response) {
                    setError(err.response.data.message);
                    console.log(err.response.status);
                    console.log(error);
                } else {
                    setError(err.message);
                }
            }
            deleteCaseHandler();
        }

    return (
        <React.Fragment>
            {isLoading && <LoadingSpinner asOverlay />}
            <ErrorModal error={error} onClear={clearError} />
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
            <Modal
                show={deleteCase}
                closeBox={deleteCaseHandler}

                header={<span><p> Withdraw this Case Confirmation </p></span>}
                footer={<span>
                    <Button danger onClick={deleteCaseHandler}> GO BACK</Button>
                    <Button onClick={withdraw}> CONFIRM </Button>
                </span>}
                contentClass="case-item__modal-content"
                footerClass="case-item__modal-actions"
            >
                <h4><b>Registered User Id:  </b><em>{currentUserId}</em></h4>
                <p><b>Case Id:  </b><em>{props.id}</em></p>
                <p> CASE WITHDRAW application will be sent to Court. Further actions will be
                    decided by Judge, {props.judge}. Do you want to continue?</p>
                <h4>This is a non-Reversible Action.</h4>
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
                            <Button danger onClick={deleteCaseHandler}>DELETE</Button>
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