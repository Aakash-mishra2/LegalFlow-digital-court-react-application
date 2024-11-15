import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../shared/hooks/form-hook";
import { login } from "../../features/UserAccount/loginSlice";
import ErrorModal from "../../shared/modals/ErrorModal";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import api from "../../api/ccmsBase";
import Button from "../../shared/formElements/Button";
import Input from "../../shared/formElements/Input";
import loginImg from "../../assets/images/login.jpg";
import Card from "../../shared/UIelements/Card";

import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const Authenticate = () => {
    const [islogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
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

    const clearError = () => setError(null);

    return (
        <>
            {isLoading && <LoadingSpinner asOverlay />}
            <ErrorModal error={error} onClear={clearError} />
            <div className="flex flex-col lg:flex-row mt-24 items-center lg:items-end h-max">
                <div className="hidden md:block h-fit w-auto md:w-full lg:w-1/2 pt-0 pb-0 pl-8 pr-8 object-cover">

                    <img src={loginImg} className="aspect-auto mr-auto bg-transparent md:max-h-[40vh] lg:max-h-[65vh] " alt="loginImage" />
                </div>
                <Card className={` md:min-h-[35vh] lg:min-h-[60vh]  min-w-[85%] lg:min-w-[35%] flex flex-col justify-between h-full max-w-fit bg-white rounded-3xl sm:rounded-2xl text-left ml-8 mr-8 lg:ml-16 lg:mr-16 p-4 pl-8 pr-8 ${islogin ? "mt-8" : 'mt-0'}`}>
                    <div id="login-signup-form">
                        {!islogin && (
                            <div className="flex flex-col">
                                <Input
                                    element="input"
                                    id="name"
                                    type="text"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    label=" Name"
                                    placeHolder=" Your full name "
                                    errorText="Must contain A-Z / a-z characters only "
                                />

                                <Input
                                    element="input"
                                    id="cardNo"
                                    type="number"
                                    minValue="0"
                                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(12)]}
                                    onInput={inputHandler}
                                    label="Aadhar-Card/ID no. "
                                    placeHolder=" Your 12 digit ID card no."
                                    errorText=" Must contain 12 digits (0-9 only)"
                                />
                            </div>
                        )}
                        <div className={`flex ${islogin ? 'flex-col' : ' flex-col sm:flex-row gap-4'} justify-between`}>
                            <Input
                                element="input"
                                id="email"
                                type="text"
                                validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                                onInput={inputHandler}
                                label="Email"
                                placeHolder=" Your email address "
                                errorText=" Must be a valid email address"
                            />
                            <Input
                                element="input"
                                id="password"
                                type="password"
                                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
                                onInput={inputHandler}
                                autocomplete="new-password"
                                label={islogin ? "Password" : "New Password"}
                                placeHolder=" Your 8 digit password"
                                errorText=" Enter a valid password of 8 digit or more"
                            />
                        </div>
                    </div>
                    <div className={` flex flex-col font-thin items-center pt-4`}>
                        <Button type="submit" disabled={!formState.isValid} handler={submitHandler} className="w-full bg-[#213555] rounded-full text-white font-thin font-circular text-md tracking-wide pt-3 pb-3">
                            {islogin ? "LOGIN" : "SIGNUP"}
                        </Button>
                        {
                            islogin ? (
                                <span className="flex flex-row gap-2 font-circular mt-2 text-sm ">
                                    <p>Do not have an account yet?</p><p className="text-red-500 cursor-pointer underline underline-offset-2" onClick={switchModeHandler}>Sign up</p>
                                </span>
                            ) : (
                                <span className="flex flex-row gap-2 font-circular mt-2 text-sm ">
                                    <p>You already have an account?</p><p className="text-red-500 underline underline-offset-2 cursor-pointer" onClick={switchModeHandler}>Login</p>
                                </span>
                            )
                        }
                    </div>

                </Card>
            </div>
        </>
    );
};

export default Authenticate;
