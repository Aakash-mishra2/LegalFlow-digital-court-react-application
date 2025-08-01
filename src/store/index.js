
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import inputReducer from './inputSlice';
import caseReducer from './caseSlice';

export const store = configureStore({
  reducer: {
    userAccount: loginReducer,
    input: inputReducer,
    cases: caseReducer
  },
});

export default store;
