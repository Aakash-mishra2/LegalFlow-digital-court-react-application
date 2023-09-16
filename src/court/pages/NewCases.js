import React, { useState } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import api from "../../api/ccmsBase";

import Input from "../../shared/formElements/Input";
import Button from "../../shared/formElements/Button";
import Modal from "../../shared/UIelements/Modal";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";

import './CasesForm.css';
import '../components/styles/CaseItem.css';
import ErrorModal from "../../shared/UIelements/ErrorModal";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";

export default function NewCases() {
    const currentUserId = useSelector((state) => state.userAccount.UserId);
    const currentUserName = useSelector((state) => state.userAccount.userName);
    const [confirmCase, setConfirmCase] = useState(false);
    const [isDescBox, setIsBox] = useState(false);
    const openDescBox = () => { setIsBox(true); }
    const closeDescBox = () => { 
        setError(' Application Not Submitted! Recheck your Application and ADD CASE again.')
        setConfirmCase(false); 
        setIsBox(false); }

    const [formState, inputHandler] = useForm({
        aadhar_no: {
            value: '',
            isValid: false
        },
        courtName: {
            value: '',
            isValid: false
        },
        caseDesc: {
            value: '',
            isValid: false
        }
    }, false
    )
    const caseConfirmation = () => {
        setConfirmCase(prevMode => !prevMode);
    }

    const [newCase, setNewCase] = useState({
        court: '', description: '', judge: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useNavigate();

    const caseSubmitHandler = async (event) => {
        event.preventDefault();
        setNewCase({
            court: formState.inputs.courtName.value,
            description: formState.inputs.caseDesc.value,
            location_city: 'Delhi',
            location_pincode: 1100998,
            judge: "To Be Decided",
            plaintiff: currentUserId,
        });
        openDescBox();
        caseConfirmation();
    };
    const clearError = () => {
        setError(null);
    }
    const submitApplication = async () => {
        caseConfirmation();
        setIsLoading(true);
        try {
            const response = await api.post('/admin/newcase', newCase);
            console.log(response.data.added_NewCase);
            setIsLoading(false);
        }
        catch (err) {
            setIsLoading(false);
            if (err.response) {
                setError(err.response.data.message);
                console.log(err.response.status);
                console.log(error);
            } else {
                setError(err.message);
            }
        }
        
    }

return (
    <React.Fragment>
        <Modal
            show={isDescBox && confirmCase}
            closeBox={closeDescBox}
            header="Confirm Your New Case Application "
            contentClass="case-item__modal-content"
            footerClass="case-item__modal-actions"
            footer={
                <span>
                    <p style={{ fontSize: 13, textAlign: "left" }}> I hereby confirm all above details for my new case application.
                        Correctness of all details while verification is my responsibility. </p>
                    <Button onClick={submitApplication}>SUBMIT</Button>
                    <Button danger onClick={closeDescBox}>GO BACK </Button>
                </span>
            }
        >
            <h5><b>Registered User-ID : </b><tt>{currentUserId}</tt></h5>
            <h4><b>Your Full Name : </b><em>{currentUserName}</em></h4>
            <p><b>Court Name : </b><em>{newCase.court}</em></p>
            <h4><b>Description : </b><em>{newCase.description}</em></h4>
            <p><b>Judge : </b><em>{newCase.judge}</em></p>
        </Modal>
        {isLoading && <LoadingSpinner asOverlay />}
        <ErrorModal error={error} onClear={clearError} />
        <form className="case-form" onSubmit={caseSubmitHandler}>
            <Input
                id="aadhar_no"
                element="input"
                type="text"
                label="Your AADHAR/ID card no. "
                placeHolder="Enter your Aadhar Card NO. / Voter ID no. "
                errorText="Please Enter a valid no. "
                validators={[VALIDATOR_MINLENGTH(12)]}
                onInput={inputHandler}
            />
            <Input
                id="courtName"
                element="textarea"
                type="text"
                label="Court Name"
                placeHolder="Name of your Court"
                errorText="This is a required field. "
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Input
                id="caseDesc"
                element="textarea"
                type="text"
                label="Case Description"
                placeHolder=" Brief Summary of your case Application (200 words )."
                errorText="This is a required field! Minimum 10 words. "
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>ADD CASE</Button>
        </form>
    </React.Fragment>
);
}