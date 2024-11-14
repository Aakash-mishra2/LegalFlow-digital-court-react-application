import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import inputReducer from '../features/inputValidation/inputSlice';
import loginReducer from '../features/UserAccount/loginSlice';
import CaseReducer from '../features/CourtAccount/CaseReducers';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        validBox: inputReducer,
        userAccount: loginReducer,
        courtAccount: CaseReducer,
    }
})

