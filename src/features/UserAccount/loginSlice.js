import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isloggedIn: true,
    UserId: '648db724c8dfa0ec049c6cb',
    userName: 'Sharma Ji',
};

export const loginSlice = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isloggedIn = !state.isloggedIn;
            state.UserId = action.payload.id;
            state.userName = action.payload.name;
        },
        logOut: (state) => {
            state.isloggedIn = false;
            state.UserId = '';
            state.userName = ''
        }
    }
});
export const { login, logOut } = loginSlice.actions;
export default loginSlice.reducer;