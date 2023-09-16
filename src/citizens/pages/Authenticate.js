import React, { useState } from "react";
import Button from "../../shared/formElements/Button";
import Input from "../../shared/formElements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/UIelements/Card";
import './Authenticate.css';

const Authenticate  = () => {
    const [islogin, setIsLogin] = useState(false);
    const [ formState, inputHandler, setFormData ] = useForm({
        'email' : { value: ' ', isValid: false},
        'password': {value: ' ', isValid: false}
    }, false);
    const switchModeHandler = () => {
        if(islogin) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, false);
        }
        else{
            setFormData({
                ...formState.inputs,
                name: {
                    value: ' ',
                    isValid: false
                }
            }, false);
        }
        setIsLogin(prevMode => !prevMode)
    };
    const submitHandler = (event) =>{
        console.log("hello");
        event.preventDefault();
    }
    return (
        <React.Fragment>
        <Card className = "authentication">
            <form onSubmit={submitHandler}>
            {!islogin && <Input 
                element = "input"
                id="name"
                type="text"
                validators= {[ VALIDATOR_REQUIRE() ]}
                onInput = {inputHandler}
                label = "Your Name :"
                placeHolder=" Enter your full name "
                errorText = "This is required field. Enter valid Name. "
            />}
            <Input 
                element = "input"
                id="email"
                type="text"
                validators = {[ VALIDATOR_REQUIRE() , VALIDATOR_EMAIL()]}
                onInput = {inputHandler}
                label = "Your email address is:"
                placeHolder=" Enter your email address "
                errorText=" This is required field "
            />
            <Input 
                element = "input"
                id="password"
                type="password"
                validators = {[ VALIDATOR_REQUIRE() , VALIDATOR_MINLENGTH(8), VALIDATOR_EMAIL()]}
                onInput = {inputHandler}
                label = "Your Password: "
                placeHolder=" Enter your password min 8 digit "
                errorText=" Enter a valid password of 8 digit or more"
            />
            <Button type="submit" disabled={!formState.isValid}>{islogin ? 'LOGIN' : 'SIGNUP'}</Button>
            </form>
            <hr />
            <p><b><tt>Do not have an accout? Create one!</tt></b></p>
            <Button onClick={switchModeHandler} > Switch to {islogin ? 'SIGNUP' : 'LOGIN'} </Button>
        </Card>
        </React.Fragment>
    )
}

export default Authenticate;
