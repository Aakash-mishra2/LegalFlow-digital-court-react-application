import { createSlice } from "@reduxjs/toolkit";
import {validate} from "../../shared/util/validators";

const initialState = {
    value: '',
    isValid: false,
    isTouched: false,
}

export const inputSlice = createSlice({
    name: 'validBox',
    initialState,
    reducers: {
            alter: (state, action) => {
                state.value = action.payload.value;
                state.isValid = validate(action.payload.value, action.payload.validator);
            },
            touch: (state) => {
                state.isTouched = true;
            },
    }
});

export const { alter, touch } = inputSlice.actions; 
export default inputSlice.reducer;