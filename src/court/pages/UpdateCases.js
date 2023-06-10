import React, { useEffect, useState } from "react";
import Input from "../../shared/formElements/Input";
import Button from "../../shared/formElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useParams } from "react-router";
import Card from "../../shared/UIelements/Card";

const CURRENT_CASES = [
    {
        id: 'thl234',
        court: 'Delhi High Court',
        description: " A Money Laundering case against relatives. ",
        imageUrl:
            'data:image/jpeg;base64,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',
        judge: "Mr. Suresh Joshi",
        status: "PENDING",
        nextHearing: "05/07/2023",
        plaintiff: "c1",
        idCardNo: 4343 - 4343 - 3325
    },
    {
        id: 'ccl456',
        court: 'High court of Uttar Pradesh',
        description: " A Defamation case on opposition leader.",
        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRholMhydH0A3KqdWelqNqBG_YgCPQaOXa2vS2SufTU5w&usqp=CAU&ec=48600113',
        judge: "Mr. Devesh Patel",
        status: "PENDING",
        nextHearing: "13/08/2027",
        plaintiff: "c2",
        idCardNo: 5564 - 4737 - 7738
    }
];

export default function UpdateCases() {
    const [isLoading, setIsLoading] = useState(true);

    const caseid = useParams().caseID;
    const req_case = CURRENT_CASES.find(item => item.id === caseid);
    const [formState, inputHandler, setFormData] = useForm({
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

    useEffect(() => {
        if (req_case) {
            setFormData(
                {
                    cardNo: {
                        value: req_case.idCardNo,
                        isValid: true
                    },
                    description: {
                        value: req_case.description,
                        isValid: true
                    }
                },
                true
            );
        }
        setIsLoading(false);
    }, [req_case, setFormData]);

    if (!req_case) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find case!</h2>
                </Card>
            </div>
        );
    }
    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        )
    }

    function caseSubmitHandler(event) {
        event.preventDefault();
        console.log(formState.inputs);

    }

    return (
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
    );
};