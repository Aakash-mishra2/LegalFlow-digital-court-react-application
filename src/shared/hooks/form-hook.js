import { useCallback, useReducer } from "react";

const formReducer = (action, state) => {
    let formValidity = true
    switch(action.type){
        case 'inputAltered':
        
        for(const temp in state.inputs){
            if( temp.id === action.id){
                if(!state.inputs[temp]){ continue; }
                
                formValidity = formValidity && action.validity
            }
            else
                formValidity = formValidity && state.inputs[temp].isValid
        }
        
        return {
               inputs: { 
                    ...state.inputs,
                    [action.id] : { value: action.value, isValid: action.validity }
                },
                formValidity: formValidity
            }
    case 'changeForm' :
        return {
            inputs: action.newForm,
            formValidity: action.validity
        }
        default: 
            return state
    }
};

const useForm = (initialState, initialValidity) => {

const [formstate, dispatch] = useReducer(formReducer,{
    inputs: initialState,
    formValidity: initialValidity
});

const inputHandler = useCallback((id, value, validity) => {
    dispatch({
        type: 'inputAltered',
        id: id,
        valueID: value,
        validity: validity
    });
},[])

const setFormData = useCallback((newForm, validity)=>{
    dispatch({
        type: 'changeForm',
        validity: validity,
        newInputs: newForm
    })
},[])

    return [ formstate, inputHandler, setFormData];

}
export {useForm};