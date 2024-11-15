import React, { useState } from "react";
import Input from "../../shared/formElements/Input";
import Button from "../../shared/formElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useParams } from "react-router";
import api from "../../api/ccmsBase";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import ErrorModal from "../../shared/modals/ErrorModal";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export default function UpdateCases() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const caseid = useParams().caseID;
    const history = useNavigate();
    const currentUserId = useSelector((state) => state.userAccount.UserId);
    //const req_case = CURRENT_CASES.find(item => item.id === caseid);
    const [formState, inputHandler] = useForm({
        cardNo: {
            value: ' ',
            isValid: false
        },
        description: {
            value: ' ',
            isValid: false
        }
    },
        false
    );
    const clearError = () => {
        setError(null);
    }
    const caseSubmitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const updatedCase = {
            cardNo: formState.inputs.cardNo.value,
            description: formState.inputs.description.value,
        }
        try {
            const response = await api.post(`/public/update/${caseid}`, updatedCase);
            console.log(response.data.message);
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
        if (error === null) history(`/${currentUserId}/cases`);
    }

    return (
        <>
            {isLoading && <LoadingSpinner asOverlay />}
            <ErrorModal error={error} onClear={clearError} />
            <form className="case-form" onSubmit={caseSubmitHandler}>
                <Input
                    id="cardNo"
                    type="text"
                    label="ID-Card No. :"
                    element="input"
                    errorText="This is a required field. Please Enter a valid 12 digit ID Card No."
                    validators={[VALIDATOR_MINLENGTH(12), VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    initialValue={formState.inputs.cardNo.value}
                    initialValidity={formState.inputs.cardNo.isValid}
                />
                <Input
                    id="description"
                    type="text"
                    label="Case Description:  "
                    element="textarea"
                    errorText="This is a required Field."
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    initialValue={formState.inputs.description.value}
                    initialValidity={formState.inputs.description.isValid}
                />
                <Button type="submit" disabled={!formState.isValid} >
                    Update
                </Button>
            </form>
        </>
    );
};
