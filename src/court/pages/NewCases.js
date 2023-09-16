import React from "react";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/formElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import './CasesForm.css';
import { useNavigate } from "react-router";
import api from "../../api/ccmsBase";
export default function NewCases() {

    const history = useNavigate();
    const [formState, inputHandler] = useForm({
        name: {
            value: '',
            isValid: false
        },
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
    
    const  caseSubmitHandler = async (event) => {
        event.preventDefault();
        const [ name, aadhar_no, courtName, caseDesc] = formState.inputs;
        const newCase = {
            court: courtName.value,
            description: caseDesc.value,
            location_city: 'Delhi',
            location_pincode: 1100998,
            judge: "To Be Decided",
        }
        try{
            const loggedInUser = api.post('/public/single/');
        }
        catch(err){

        }
        try{
            const response = api.post('/admin/newCase');
        }
        catch(err){

        }
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
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Input
                element="input"
                type="text"
                id="aadhar_no"
                label="ID no. "
                placeHolder="Enter your Aadhar Card NO. / Voter ID no. "
                errorText="Please Enter a valid no. "
                validators={[VALIDATOR_MINLENGTH(12)]}
                onInput={inputHandler}
            />
            <Input
                element="textarea"
                type="text"
                id="courtName"
                label="Court Name"
                placeHolder="Name of your Court"
                errorText="This is a required field. "
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Input
                element="textarea"
                type="text"
                id="caseDesc"
                label="Case Description"
                placeHolder=" Brief Summary of your case Application (200 words )."
                errorText="This is a required field. "
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />

            <Button type="submit" disabled={!formState.isValid}>ADD CASE</Button>
        </form>
    );
}