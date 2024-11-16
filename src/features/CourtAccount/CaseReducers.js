import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCases: 0,
    closedCases: 0,
    totalCases: 0,
    allCases: []
};

export const courtSlice = createSlice({
    name: 'courtAccount',
    initialState,
    reducers: {
        addNewCase: (state, action) => {
            const existingData = state.allCases;
            const updatedData = [action.payload, ...existingData];
            state.allCases = updatedData;
            state.activeCases += 1;
            state.totalCases += 1;
        },
        setData: (state, action) => {
            const { activeCases, closedCases, totalCases, allCases } = action.payload;

            state.activeCases = activeCases;
            state.totalCases = totalCases;
            state.closedCases = closedCases;
            state.allCases = allCases;
        }
    },
});
export const { addNewCase, setData } = courtSlice.actions;
export default courtSlice.reducer;