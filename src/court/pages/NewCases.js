import React, { useEffect, useState } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import MuiAlert from "@material-ui/lab/Alert";
import api from "../../api/ccmsBase";
import Dropdown from "../../shared/formElements/Dropdown";

import Input from "../../shared/formElements/Input";
import Button from "../../shared/formElements/Button";
import Modal from "../../shared/UIelements/Modal";

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";

import './CasesForm.css';
import '../components/styles/CaseItem.css';
import ErrorModal from "../../shared/UIelements/ErrorModal";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import StateAndDistrict from "../components/StateAndDistrict";

import { typeOfCases } from "../../data/dummyCasesList";

export default function NewCases() {
    const currentUserId = useSelector((state) => state.userAccount.UserId);
    const currentUserName = useSelector((state) => state.userAccount.userName);
    const [confirmCase, setConfirmCase] = useState(false);
    const [isDescBox, setIsBox] = useState(false);
    const openDescBox = () => { setIsBox(true); }
    const closeDescBox = () => {
        setError(' Application Not Submitted! Recheck your Application and ADD CASE again.')
        setConfirmCase(false);
        setIsBox(false);
    }

    const [formState, inputHandler] = useForm({
        aadhar_no: {
            value: '',
            isValid: false
        },
        state: {
            value: '',
            isValid: false
        },
        district: {
            value: '',
            isValid: false
        },
        caseType: {
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
    const [regnSuccess, setSuccess] = useState(false);
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
    function Alert(props) {
        return <MuiAlert elevation={6}
            variant="filled" {...props} />;
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
        setSuccess(true);
        if (error === '') history('/');
    }
    return (
        <>
            {regnSuccess && <Alert severity="success" color="info">
                Success! New Case registered. Check out in My Cases tab
            </Alert>}
            <Modal
                show={isDescBox && confirmCase}
                closeBox={closeDescBox}
                header={"Confirm Your New Case Application "}
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
            <div className="bg-gray-200 h-screen p-4 font-circular">

                <p className="text-xl font-circular font-thin mt-2">Register New Case </p>
                <div className="mt-4 mb-0 p-4 w-full shadow-card bg-white" onSubmit={caseSubmitHandler}>
                    <p className="text-sm font-circular font-thin mt-2">Basic information</p>
                    <div className="flex flex-row W-full">


                        <div className="flex flex-col w-1/2 p-2">
                            <Input
                                id="aadhar_no"
                                element="input"
                                type="text"
                                label="Verify your ID "
                                placeHolder="Enter your Aadhar Card NO. / Voter ID no. "
                                errorText="Must contain 12 digits (0-9)"
                                validators={[VALIDATOR_MINLENGTH(12)]}
                                onInput={inputHandler}
                            />
                            <StateAndDistrict
                                inputHandler={inputHandler}
                                formState={formState}
                                validators={[VALIDATOR_REQUIRE()]}
                            />
                        </div>
                        <div className="flex flex-col w-1/2 p-2">
                            <Dropdown
                                id="case_type"
                                label="Select type of case"
                                data={typeOfCases}
                                setSelectedItem={(type) => {
                                    inputHandler("case_type", type.name, true);
                                }}
                                placeholder="Enter case type"
                                dropdownWithDescription={true}
                            />
                            <Input
                                id="caseDesc"
                                element="textarea"
                                type="text"
                                label="Case Description"
                                rows="5"
                                placeHolder=" Write Summary...  (200 words )."
                                errorText="Must contain min 10 words. "
                                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
                                onInput={inputHandler}
                            />
                        </div>
                    </div>

                    <Button className="rounded-full bg-blue-500 px-8 py-2 text-white font-circular font-thin" disabled={!formState.isValid}> Save and Continue </Button>
                </div>
            </div>
        </>
    );
}