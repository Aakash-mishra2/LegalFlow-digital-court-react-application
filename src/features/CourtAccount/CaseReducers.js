import { createSlice } from "@reduxjs/toolkit";
import { allDummyCases } from "../../data/dummyCasesList";

const initialState = allDummyCases;

export const courtSlice = createSlice({
    name: 'courtAccount',
    initialState,
    reducers: {
        addNewCase: (state, action) => {
            // console.log('action.payload')
            const existingData = state.allCases;
            const updatedData = [...existingData, action.payload];
            state.allCases = updatedData;
        }
    },
});
export const { addNewCase } = courtSlice.actions;
export default courtSlice.reducer;