import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import inputReducer from "../features/inputValidation/inputSlice";
import caseReducer from "../features/CourtAccount/CaseReducers";

export const store = configureStore({
  reducer: {
    userAccount: loginReducer,
    input: inputReducer,
    cases: caseReducer,
  },
});

export default store;
