import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../shared/hooks/form-hook";
import { login, logOut } from "../../features/UserAccount/loginSlice";

import ErrorModal from "../../shared/UIelements/ErrorModal";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import api from "../../api/ccmsBase";
import Button from "../../shared/formElements/Button";
import Input from "../../shared/formElements/Input";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Card from "../../shared/UIelements/Card";

import "./Authenticate.css";
const Authenticate = () => {
    const [islogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const currentUserId = useSelector((state) => state.userAccount.UserId);
  const currentUserName = useSelector((state) => state.userAccount.userName);
    const history = useNavigate();
    const dispatch = useDispatch();

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: { value: " ", isValid: false },
            password: { value: " ", isValid: false },
        },
        false
    );
  
    const switchModeHandler = () => {
        if (!islogin) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                    cardNo: undefined,
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: " ",
                        isValid: false,
                    },
                    cardNo: {
                        value: " ",
                        isValid: false,
                    },
                },
                false
            );
        }
        setIsLogin((prevMode) => !prevMode);
    };
    const submitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (islogin) {
            const loginUser = {
                email: formState.inputs.email.value,
                password: formState.inputs.password.value,
            };
            try {
                const response = await api.post("/public/login", loginUser);
                setIsLoading(false);
                dispatch(
                    login({
                        id: response.data.citizen.id,
                        name: response.data.citizen.name,
                    })
                );
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
        } else {
            try {
                const newUser = {
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value,
                    name: formState.inputs.name.value,
                    idCardNo: formState.inputs.cardNo.value,
                };

                const response = await api.post("/public/signup", newUser);
                setIsLoading(false);
                dispatch(
                    login({
                        id: response.data.added.id,
                        name: response.data.added.name,
                    })
                    );
            } catch (err) {
                setIsLoading(false); 
                if (err.response) {
                    setError(err.response.data.message)
                    console.log(err.response.status);
                    console.log(error);
                } else {
                    setError(err.message);
                }
            }
        }
    };

    const clearError = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            {isLoading && <LoadingSpinner asOverlay />}
            <ErrorModal error={error} onClear={clearError} />
            <h1>{currentUserId} :: {currentUserName} is Logged In!</h1>
            <Card className="authentication">
                <form onSubmit={submitHandler}>
                    {!islogin && (
                        <Input
                            element="input"
                            id="name"
                            type="text"
                            validators={[VALIDATOR_REQUIRE()]}
                            onInput={inputHandler}
                            label=" Enter Name"
                            placeHolder=" Enter your full name "
                            errorText="This is required field. Enter valid Name. "
                        />
                    )}
                    {!islogin && (
                        <Input
                            element="input"
                            id="cardNo"
                            type="number"
                            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(12)]}
                            onInput={inputHandler}
                            label="Your Aadhar-Card/ID no. "
                            placeHolder=" Enter your ID card no. s"
                            errorText=" This is required field.Min 12 Numbers"
                        />
                    )}
                    <Input
                        element="input"
                        id="email"
                        type="text"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                        label="Your Email address"
                        placeHolder=" Enter your email address "
                        errorText=" This is required field "
                    />
                    <Input
                        element="input"
                        id="password"
                        type="password"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
                        onInput={inputHandler}
                        label={islogin ? "Enter Password" : "Create New Password"}
                        placeHolder=" Enter your password min 8 digit "
                        errorText=" Enter a valid password of 8 digit or more"
                    />
                    <Button type="submit" disabled={!formState.isValid}>
                        {islogin ? "LOGIN" : "SIGNUP"}
                    </Button>
                </form>
                <hr />
                <p>
                    <b>
                        <tt>Do not have an accout? Create one!</tt>
                    </b>
                </p>
                <Button onClick={switchModeHandler}>
                    {" "}
                    Switch to {islogin ? "SIGNUP" : "LOGIN"}{" "}
                </Button>
            </Card>
        </React.Fragment>
    );
};

export default Authenticate;
