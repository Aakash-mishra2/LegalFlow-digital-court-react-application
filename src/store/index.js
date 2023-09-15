import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import inputReducer from '../features/inputValidation/inputSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        validBox: inputReducer,
    }
})

