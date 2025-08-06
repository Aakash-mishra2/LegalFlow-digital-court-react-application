import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../../constants/constants";

const initialState = {
    isloggedIn: false,
    userId: '',
    userName: '',
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
            localStorage.removeItem('Access-token');
        }
    }
});
export const { login, logOut } = loginSlice.actions;
export default loginSlice.reducer;
