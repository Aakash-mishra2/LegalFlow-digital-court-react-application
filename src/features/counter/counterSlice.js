import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0,
    showCounter: true,
    allCounter: [
        {
            value: 0,
            name: '',
        }
    ]
};
export const counterSlice = createSlice({
    name: 'numberCounter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        addAmount: (state, action) => {
            state.count += action.payload.value;
        },
        reset: (state) => {
            state.count = 0;
        },
        toggleCounter: (state) => {
            state.showCounter = !state.showCounter;
        }
    }
});

export const { increment, decrement, addAmount, reset,toggleCounter } = counterSlice.actions;
export default counterSlice.reducer;