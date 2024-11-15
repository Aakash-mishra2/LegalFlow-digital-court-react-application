import { createSlice } from "@reduxjs/toolkit";
import { allDummyCases } from "../../constants/data/dummyCasesList";

const initialState = allDummyCases;

export const courtSlice = createSlice({
    name: 'courtAccount',
    initialState,
    reducers: {
        addNewCase: (state, action) => {
            // console.log('action.payload')
            const existingData = state.allCases;
            const updatedData = [action.payload, ...existingData];
            state.allCases = updatedData;
        }
    },
});
export const { addNewCase } = courtSlice.actions;
export default courtSlice.reducer;