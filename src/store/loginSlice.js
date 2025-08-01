
import { createSlice } from '@reduxjs/toolkit';
import { ROLES } from '../config/constants';

const initialState = {
    isloggedIn: false,
    userId: '',
    userName: '',
    role: ROLES.USER,
};

const loginSlice = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isloggedIn = true;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.role = action.payload.role || ROLES.USER;
        },
        logout: (state) => {
            state.isloggedIn = false;
            state.userId = '';
            state.userName = '';
            state.role = ROLES.USER;
        },
        updateProfile: (state, action) => {
            state.userName = action.payload.userName || state.userName;
            state.role = action.payload.role || state.role;
        }
    }
});

export const { login, logout, updateProfile } = loginSlice.actions;
export default loginSlice.reducer;
