import React, { useState } from "react";
import Button from "../../shared/formElements/Button";
import Input from "../../shared/formElements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/UIelements/Card";
import './Authenticate.css';
import api from "../../api/ccmsBase";

const Authenticate  = () => {
    const [islogin, setIsLogin] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState();

    const [ formState, inputHandler, setFormData ] = useForm({
        'email' : { value: ' ', isValid: false},
        'password': {value: ' ', isValid: false}
    }, false);
    const switchModeHandler = () => {
        if(!islogin) {
            setFormData({
                ...formState.inputs,
                name: undefined,
                cardNo: undefined
            },
            ((formState.inputs.email.isValid) && (formState.inputs.password.isValid))
        );
        }
        else{
            setFormData({
                ...formState.inputs,
                name: {
                    value: ' ',
                    isValid: false
                },
                cardNo: {
                    value: ' ',
                    isValid: false
                }
            }, 
            false
        );
        }
        setIsLogin(prevMode => !prevMode)
    };
    const submitHandler = async (event) =>{
        event.preventDefault();
        setLoggedInUser(null);
        if( islogin ){
            const loginUser = {
                email: formState.inputs.email.value,
                password: formState.inputs.password.value,
            };
            try{
                const response = await api.post('/public/login',loginUser);
                setLoggedInUser(response.data.citizen); 
            }
            catch(err){
                if(err.response){
                        console.log(err.response.data);
                        console.log(err.response.header);
                        console.log(err.response.status);
                    }
                    else{
                        console.log("An unexpected error occured---");
                        console.log(`Error: ${err.message}`);
                    }
                }
                console.log(loggedInUser);
            }
            else{
            try{
                const newUser = {
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value,
                    name: formState.inputs.name.value,
                    idCardNo: formState.inputs.cardNo.value
                };

                const response = await api.post('/public/signup',newUser);
                setLoggedInUser(response.data.added);
            }
            catch(err){
                if(err.response){
                    console.log(err.response.data);
                    console.log(err.response.header);
                    console.log(err.response.status);
            }
            else{
                    console.log("An unexpected error occured---");
                    console.log(`Error: ${err.message}`);
                }
            }
            console.log(loggedInUser);
        }
        
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
                label = " Enter Name"
                placeHolder=" Enter your full name "
                errorText = "This is required field. Enter valid Name. "
            />}
            {!islogin && <Input 
                element = "input"
                id="cardNo"
                type="number"
                validators = {[ VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(12)]}
                onInput = {inputHandler}
                label = "Your Aadhar-Card/ID no. "
                placeHolder=" Enter your ID card no. s"
                errorText=" This is required field.Min 12 Numbers"
            />}
            <Input 
                element = "input"
                id="email"
                type="text"
                validators = {[ VALIDATOR_REQUIRE() , VALIDATOR_EMAIL()]}
                onInput = {inputHandler}
                label = "Your Email address"
                placeHolder=" Enter your email address "
                errorText=" This is required field "
            />
            <Input 
                element = "input"
                id="password"
                type="password"
                validators = {[ VALIDATOR_REQUIRE() , VALIDATOR_MINLENGTH(8)]}
                onInput = {inputHandler}
                label = { islogin ? 'Enter Password' : 'Create New Password'}
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
