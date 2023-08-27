import React, { useState } from "react";
import Button from "../../shared/formElements/Button";
import Input from "../../shared/formElements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/UIelements/Card";
import './Authenticate.css';

export default function Authenticate() {
    const [isLogin, setIsLogin] = useState(true);
    const [formState, inputHandler, setFormData] = useForm({
        email: { value: '', isValid: false },
        password: { value: '', isValid: false }
    }, false);

    function switchModeHandler() {
        if (isLogin) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                false
            )
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: ' ',
                        isValid: false
                    }
                },
                false
            );
        }
        setIsLogin(prevMode => !prevMode);
    };

    function userSubmitHandler(event) {
        console.log(formState.inputs);
        event.preventDefault();
    };
    return (
        <React.Fragment>
            <Card className="authentication">
                <form onSubmit={userSubmitHandler}>
                    {!isLogin && <Input
                        type="text"
                        element="input"
                        id="name"
                        label=" Name "
                        errorText="Please enter valid Name. "
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />}
                    <Input
                        type="text"
                        element="input"
                        id="email"
                        label=" Email "
                        errorText="Please enter a valid E-Mail input. "
                        validators={[VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                    />
                    <Input
                        type="password"
                        element="input"
                        id="password"
                        label=" Password "
                        errorText="Enter a valid Password of 10 digits or more."
                        validators={[VALIDATOR_MINLENGTH(10)]}
                        onInput={inputHandler} l
                    />
                    <Button type="submit" disabled={!formState.isValid}>{isLogin ? 'LOGIN' : 'SIGNUP'}</Button>
                </form>
                <hr />
                <p><b><tt>Do not have an accout? Create one!</tt></b></p>
                <Button inverse onClick={switchModeHandler}>Switch to {isLogin ? 'SIGNUP' : 'LOGIN'}</Button>
            </Card>
        </React.Fragment>
    );
}
