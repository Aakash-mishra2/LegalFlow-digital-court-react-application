import React, { useState } from "react";
import Modal from "../../shared/modals/Modal";
import Card from "../../shared/UIelements/Card";
import Button from "../../shared/formElements/Button";
import "./styles/CaseItem.css";
import { useSelector } from "react-redux";
import api from "../../api/ccmsBase";
import ErrorModal from "../../shared/modals/ErrorModal";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const CaseItem = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isDescBox, setIsBox] = useState(false);
    const openDescBox = () => setIsBox(true);
    const closeDescBox = () => setIsBox(false);
    const currentUserId = useSelector((state) => state.userAccount.UserId);
    const [deleteCase, setDeleteCase] = useState(false);
    const deleteCaseHandler = () => setDeleteCase(prevMode => !prevMode);
    const clearError = () => setError(null);
    const navigate = useNavigate();

    const handleRedirection = () => { navigate(`/update/${props.id}`); }

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
        //  deleteCaseHandler();
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
            <div className="mt-4 mb-4 m-0 max-w-[27%]">
                <Card className="mt-4 mb-4 m-0 text-xl bg-[#607eaa] rounded-2xl h-full">
                    <div className="flex flex-col p-0 gap-2 justify-center">
                        <div className="w-fit min-h-50">
                            <img src={props.image} alt={props.court} className="w-full h-ful object-cover" />
                        </div>
                        <div className="text-center flex flex-col items-center justify-center text-lg font-bold tracking-wider m-0 ">

                            <Button className="m-1" handler={openDescBox}><b></b>DESCRIPTION</Button>
                            <div className="flex flex-row gap-2">

                                <Button handler={handleRedirection}>EDIT</Button>
                                <Button danger handler={deleteCaseHandler}>DELETE</Button>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 mt-1 text-center flex flex-col text-md font-circular items-center text-white justify-center">
                        <p className="text-md font-circular tracking-wider" >{props.court} </p>
                        <p className="text-sm mt-2 font-circular text-white">Hearing Date: {props.nextDate}</p>
                    </div>
                </Card>
            </div >
        </React.Fragment >
    );
}

export default CaseItem;