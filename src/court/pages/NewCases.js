import React from "react";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/formElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import './CasesForm.css';


export default function NewCases() {

    const [formState, inputHandler] = useForm({
        name: {
            value: '',
            isValid: false
        },
        aadhar_no: {
            value: '',
            isValid: false
        },
        case_desc: {
            value: '',
            isValid: false
        }
    }, false
    )

    function caseSubmitHandler(event) {
        event.preventDefault();
        console.log(formState.inputs); //send this to backend.
    };

    return (
        <form className="case-form" onSubmit={caseSubmitHandler}>
            <Input
                element="input"
                type="text"
                id="name"
                label="Your name"
                placeHolder="Enter your full name"
                errorText="Please Enter a valid name. "
                validators={VALIDATOR_REQUIRE()}
                onInput={inputHandler}
            />
            <Input
                element="input"
                type="text"
                id="aadhar_no"
                label="ID no. "
                placeHolder="Enter your Aadhar Card NO. / Voter ID no. "
                errorText="Please Enter a valid no. "
                validators={VALIDATOR_MINLENGTH(12)}
                onInput={inputHandler}
            />
            <Input
                element="textarea"
                type="text"
                id="case_desc"
                label="Case Description"
                placeHolder=" Brief Summary of your case Application (200 words )."
                errorText="This is a required field. "
                validators={VALIDATOR_REQUIRE()}
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>ADD CASE</Button>
        </form>
    );
}