import { useCallback, useReducer } from "react";

function deduceFormValidity(state, action) {
    switch (action.type) {
    case 'boxAlter':{
        let formisValid = true; 
        for( const temp in state.inputs ){
            if( action.id === temp ){
                if(! state.inputs[temp]){ continue; }

                formisValid = action.validity && formisValid
            }
            else {
                formisValid = formisValid && state.inputs[temp].isValid
            }
        }
        return {
            ...state,
            inputs : {
                ...state.inputs,
                [action.id] : { action: action.value, isValid: action.isValid }
            },
            isValid: formisValid
        };
    }
    case 'newForm' :
        return{
            inputs: action.newList,
            isValid: action.validity 
        }
    default:
        return state;
    }
};

const useForm = (inputsJson, initialValidity) => {

    const [formState, dispatch] = useReducer(deduceFormValidity, {
        inputs: inputsJson,
        isValid: initialValidity || false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'boxAlter',
            id: id,
            val: value,
            boxValidity: isValid
        });
    },[]);

    const setFormData = useCallback(( newState ) => {
        dispatch({
            type: 'newForm',
            newList: newState,
            validity: newState.isValid
        });
    },[]);

    return [formState, inputHandler, setFormData];
}

export {useForm};