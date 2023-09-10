import { useEffect, useReducer } from "react";
import React from "react";
import {validate} from "../util/validators";

import "./Input.css";

const inputReducer = (action, state) =>{
    switch(action.type){
        case 'ALTER':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validator)
            }
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default :
            return state
    }
}

const Input = (props) => {

    const [ inputState, dispatch ] = useReducer(inputReducer, {
        value: ' '||props.initialValue,
        isValid: false || props.initialvalidity,
        isTouched: false
    });

    const changeHandler = (event) => {
        dispatch({
            type: 'ALTER',
            val: event.target.value,
            validator : props.validators,
        })
    }
    const touchHandler = (event) => {
        dispatch({
            type: 'TOUCH'
        })
    }
    const [id, onInput] = props;
    const [isValid, value] = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    },[id, onInput, isValid, value])

    const element = 
        props.element === 'input' ?
        (<input 
            id= {props.id}
            type = {props.type}
            placeholder={props.placeholder}
            autoComplete="off"
            onChange={changeHandler}
            onBlur={touchHandler}
            value = {inputState.value}
        /> )
        : (<textarea 
            type={props.type}
            id={props.id}
            rows={ 3 || props.rows}
            autoComplete="off"
            onChange={changeHandler}
            onBlur={touchHandler}
            placeholder={props.placeholder}
            value={inputState.value}
        />)
    ;

    return (
        <React.Fragment>
            <div className={`form-control ${ !inputState.isValid && inputState.isTouched && 'form-control-invalid' }`}>
                <label htmlFor={props.id} >{props.label}</label>
                {element}
                {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
            </div>
        </React.Fragment>
    )
}
export default Input;