import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../shared/hooks/form-hook";
import { login } from "../../features/UserAccount/loginSlice";
import ErrorModal from "../../shared/modals/ErrorModal";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import api from "../../api/ccmsBase";
import Button from "../../shared/formElements/Button";
import Input from "../../shared/formElements/Input";
import Card from "../../shared/UIelements/Card";
import courtImage from "../../assets/images/court-background.png";
import { IoChatboxEllipses } from "react-icons/io5";
import io from 'socket.io-client';


import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { ROLES } from "../../constants/constants";

const Authenticate = () => {
    const dispatch = useDispatch();
    const [islogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [role, setRole] = useState(ROLES.USER);
    const [disableSignup, setDisableSignup] = useState(false);
    //const [messages, setMessages] = useState([]);

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
                const response = await api.post("/user/login", loginUser);
                setIsLoading(false);
                const { token } = response.data;
                localStorage.setItem('Access-token', token);

                dispatch(
                    login({
                        id: response.data.citizen.id,
                        name: response.data.citizen.name,
                        email: response.data.citizen.email,
                        role: role,
                    })
                );
            } catch (err) {
                setIsLoading(false);
                if (err.response) {
                    setError(err.response.data.message);
                    console.log('AUTHENTICATION ERROR:', err.response.status, error);
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

                const response = await api.post("/user/signup", newUser);
                const { token } = response.data;
                localStorage.setItem('Access-token', token);

                setIsLoading(false);
                dispatch(
                    login({
                        id: response.data.added.id,
                        name: response.data.added.name,
                        email: response.data.added.email,
                        role: role,
                    })
                );
            } catch (err) {
                setIsLoading(false);
                if (err.response) {
                    setError(err.response.data.message)
                    console.log("AUTHENTICATION ERROR: ", err.response.status, error);
                } else {
                    setError(err.message);
                }
            }
        }
    };

    const clearError = () => setError(null);

    const socket = io(process.env.REACT_APP_CHAT_URL);
    socket.on('connect', () => {
        console.log('connected to socket server');
    });
    socket.on('testEvent', (message) => {
        console.log(message);
    });

    useEffect(() => {
        //listen for message from the server
        socket.on('reply-message', (data) => {
            console.log('recieved :', data);
        });

        return () => {
            socket.off('message', (data) => {
                console.log('socket is off!');
            }); //cleanup the event listener on unmount
        };
    }, [socket]);

    const sendMessage = () => {
        console.log('send message');
        socket.emit('sent-message', "Hi");
    }

    return (
        <>
            {isLoading && <LoadingSpinner asOverlay />}
            <ErrorModal error={error} onClear={clearError} />
            <div className="h-screen w-screen object-cover fixed top-0 right-0">
                <img src={courtImage} alt="court_bg" className="h-[100%] w-[100%] aspect-auto" />
            </div>
            <div className="flex flex-col relative lg:flex-row mt-32 items-baseline h-max z-20">
                <div className="hidden md:block h-fit w-auto md:w-full lg:w-1/2 pt-0 pb-0 pl-8 pr-8 object-cover">

                    {/* <img src={loginImg} className="aspect-auto mr-auto bg-transparent md:max-h-[40vh] lg:max-h-[65vh] " alt="loginImage" /> */}
                </div>
                <Card className={` md:min-h-[35vh] lg:min-h-[45vh]  min-w-[85%] lg:min-w-[32%] flex flex-col justify-between h-full max-w-fit bg-white rounded-lg text-left ml-8 mr-8 lg:ml-16 lg:mr-16 p-2 px-6 py-6 ${islogin ? "mt-8" : 'mt-0'}`}>
                    <div className="flex flex-col gap-2">
                        <div id="role-selector" className="flex flex-row gap-4">
                            <Button
                                handler={() => { setRole(ROLES.USER); setDisableSignup(false); }}
                                className={`py-2 w-full rounded-lg font-medium text-md ${role === ROLES.USER ? 'bg-[#213555] text-white ' : 'bg-white text-[#213555] border-2 border-[#213555]'} `}
                            >Login as USER</Button>
                            <Button
                                handler={() => { setRole(ROLES.ADMIN); setDisableSignup(true); }}
                                className={`py-2 w-full rounded-lg text-md font-medium ${role === ROLES.ADMIN ? 'bg-[#213555] text-white ' : 'bg-white text-[#213555] border-2 border-[#213555]'} `}
                            >Login as ADMIN</Button>
                        </div>
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
                            <div className={`flex ${islogin ? 'flex-col' : ' flex-col sm:flex-row gap-4'}`}>
                                <Input
                                    element="input"
                                    id="email"
                                    type="text"
                                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                                    onInput={inputHandler}
                                    label="Email"
                                    placeHolder=" Your email address "
                                    errorText=" Must be a valid email address"
                                    customStyle={{ minWidth: '45%' }}
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
                                    customStyle={{ minWidth: '45%' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col font-thin items-center pt-4`}>
                        <Button type="submit" disabled={!formState.isValid} handler={submitHandler} className={`${formState.isValid ? '!cursor-pointer' : '!cursor-not-allowed'} bg-[#213555]  w-full rounded-lg text-white font-thin font-circular text-md tracking-wide pt-3 pb-3`}>
                            {islogin ? "LOGIN" : "SIGNUP"}
                        </Button>
                        {!disableSignup && (
                            islogin ? (
                                <span className="flex flex-row gap-2 font-circular mt-2 text-sm ">
                                    <p>Do not have an account yet?</p><p className="text-red-500 cursor-pointer underline underline-offset-2" onClick={switchModeHandler}>Sign up</p>
                                </span>
                            ) : (
                                <span className="flex flex-row gap-2 font-circular mt-2 text-sm ">
                                    <p>You already have an account?</p><p className="text-red-500 underline underline-offset-2 cursor-pointer" onClick={switchModeHandler}>Login</p>
                                </span>
                            )
                        )}
                    </div>
                </Card>
                <div
                    className="rounded-full bg-white w-16 h-16 absolute left-16 bottom-4 cursor-pointer "
                    onClick={sendMessage}
                >
                    <IoChatboxEllipses className="text-5xl text-[#213555] mt-2 ml-2" />
                </div>
            </div>
        </>
    );
};

export default Authenticate;
