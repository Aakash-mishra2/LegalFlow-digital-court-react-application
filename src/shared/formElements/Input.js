import React, { useEffect, useReducer } from "react";
import {validate} from "../util/validators";
import './Input.css';

function caseReducer(state, action) {
    switch(action.type){
        case 'ALTER':
            return {
                ...state,
                inputValue: action.newValue,
                isValid: validate(action.newValue, action.validators)
            }
        case 'TOUCH': return{
            ...state,
            isTouched: true
        }
        default : return state
    }
};

export default function Input(props) {

    const [inputState, dispatch] = useReducer(caseReducer, {
        inputValue : props.initialValue || '',
        isValid: props.initialValidity || false,
        isTouched: false
    })
//dispaltch(action object)
    function changeHandler(event) {
       dispatch({
        type: 'ALTER',
        validators: props.validators,
        newValue : event.target.value,
       })
    };

    function touchHandler(event) {
        dispatch({
            type: 'TOUCH'
        })
    }
   
    //change layout on parent component and parent form validity dynamically
   const { id, onInput } = props;
   const { inputValue, isValid } = inputState;
    useEffect(() => {
        onInput(id, inputValue, isValid);
    }, [id, onInput, inputValue, isValid ])
    
    const element =
        props.element === "input" ? (
            <input
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                autoComplete="off"
            />
        ) :
            (
                <textarea
                    type={props.type}
                    placeholder={props.placeholder}
                    id={props.id}
                    rows={props.rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                    autoComplete="off"
                />
            );

    return (
        <div
            className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control-invalid'}` }
        >
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            <p>{!inputState.isValid && inputState.isTouched && props.errorText}</p> 
        </div>
    )
}