import { useCallback, useReducer } from "react";

function editForm(state, action) {
    switch (action.type) {
        case 'filledForm': {
            let formIsValid = true;
            let temp;
            for (temp in state.inputs) {
                if (temp === action.id) {

                    if (!state.inputs[temp]) continue;

                    formIsValid = formIsValid && action.isValid
                } else
                    formIsValid = formIsValid && state.inputs[temp].isValid;
            }
            if (!Object(state.inputs).hasOwnProperty(action.id)) {
                state[action.id] = { value: action.val, isValid: action.isValid };
                return state;
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.id]: { value: action.val, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        }

        case 'newForm':
            return {
                inputs: action.inputs,
                isValid: action.isValid
            };
        default:
            return state;
    }
};

export function useForm(initialInput, initialValidity) {

    const [formState, updateFormState] = useReducer(editForm, {
        inputs: initialInput,
        isValid: initialValidity
    });

    const inputHandler = useCallback((id, value, isValid) => {
        updateFormState({
            type: 'filledForm',
            val: value,
            isValid: isValid,
            id: id
        });
    }, []);

    const setFormData = useCallback((newInputs, formValidity) => {
        updateFormState({
            type: 'newForm',
            inputs: newInputs,
            isValid: formValidity
        });
    }, []);

    return [formState, inputHandler, setFormData];
}