import React, { useEffect, useReducer } from "react";
import { validate } from "../util/validators";

function caseReducer(state, action) {
    switch (action.type) {
        case 'ALTER':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            };
        default:
            return state;
    }
};

export default function Input(props) {

    const [inputState, dispatch] = useReducer(caseReducer, {
        isValid: props.initialValid || false,
        value: props.initialValue || '',
        isTouched: false
    })

    function changeHandler(event) {
        dispatch({
            type: 'ALTER',
            val: event.target.value,
            validators: props.validators
        });
    };

    function touchHandler(event) {
        dispatch({
            type: 'TOUCH',
        })
    }
    const { id, onInput } = props;
    const { isValid, value } = inputState;

    //useEffect(() = > {trigger this action - function  },[when these things change - dependencies])
    useEffect(() => onInput(id, value, isValid), [id, isValid, value, onInput]);

    const element =
        props.element === "input" ? (
            <input
                type={props.type}
                placeholder={props.placeHolder}
                id={props.id}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                autoComplete="off"
                onKeyDown={props.onKeyDown}
                maxLength={props.maxLength}
                className="block w-full border-[1px] border-gray-300 h-fit font-circular font-thin p-2 mt-1 bg-white text-sm text-gray-500 rounded-md placeholder-gray-400 placeholder:font-extralight placeholder:font-circular
                focus:outline-none focus:ring-opacity-50 focus:ring-gray-500
                "
            />
        ) :
            (
                <textarea
                    type={props.type}
                    placeholder={props.placeHolder}
                    id={props.id}
                    rows={props.rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                    autoComplete="off"
                    className="block w-full border-[1px] border-gray-300 rounded-md h-16 font-circular p-2 mt-2 font-thin bg-white text-sm text-gray-500 focus:outline-none focus:ring-opacity-50 focus:ring-gray-500"
                />
            );

    return (
        <div
            className={`mt-2 mb-1 m-0 ${!inputState.isValid && inputState.isTouched &&
                'text-red-600'}`}
            style={props.customStyle}
        >
            <label className={`font-circular text-sm font-thin ${props.labelStyles}`} htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p className="font-circular text-wider text-xs mt-2">{props.errorText}</p>}
        </div>
    )
}