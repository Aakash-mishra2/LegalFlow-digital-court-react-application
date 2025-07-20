import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../../constants/constants";

const initialState = {
    isloggedIn: true,
    userId: '65683cc7204b0b09e0c2c432',
    userName: 'John Doe',
    role: ROLES.USER,
};

export const loginSlice = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isloggedIn = !state.isloggedIn;
            state.userId = action.payload.id;
            state.userName = action.payload.name;
            state.role = action.payload.role;
        },
        logOut: (state) => {
            state.isloggedIn = false;
            state.userId = '';
            state.userName = '';
            state.role = ROLES.USER;
        }
    }
});
export const { login, logOut } = loginSlice.actions;
export default loginSlice.reducer;