import React, { useCallback, useState } from "react";
import Button from "../../shared/formElements/Button";
import Input from "../../shared/formElements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
export { useForm } from "../../shared/hooks/form-hook";

export default function Authenticate() {
    const [isLogin, setIslogin] = useState(true);
    const [formState, inputHandler, setFormData] = useForm({
        email: { value: '', isValid: false },
        password: { value: '', isValid: false }
    }, false)
};

function switchModeHandler() {
    if (!isLogin) {
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
}
return (
    <React.Fragment>
        <form onSubmit={userSubmitHandler}>
            <Input
                type="text"
                element="input"
                id="name"
                label=" Name: "
                errorText="Please enter valid Name. "
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Input
                type="text"
                element="input"
                id="email"
                label=" Your Email: "
                errorText="Please enter a valid E-Mail input. "
                validators={[VALIDATOR_EMAIL()]}
                onInput={inputHandler}
            />
            <Input
                type="text"
                element="input"
                id="password"
                label=" Your Password: "
                errorText="Enter a valid Password of 10 digits or more."
                validators={[VALIDATOR_MINLENGTH(10)]}
                onInput={inputHandler} l
            />
            <Button type="submit">{isLogin ? 'LOGIN' : 'SIGNUP'}</Button>
        </form>
        <hr />
        <Button onClick={switchModeHandler}>{`Switch To `}</Button>
    </React.Fragment>
);

}