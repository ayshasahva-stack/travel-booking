import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAuthModal: false,
    isLogin: true,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        openAuthModal: (state) => {
            console.log("openAuthModal");
            state.showAuthModal = true;
        },

        closeAuthModal: (state) => {
            console.log("closeAuthModal");
            state.showAuthModal = false;
        },

        setLoginMode: (state) => {
            console.log("setLoginMode");
            state.isLogin = true;
        },

        setRegisterMode: (state) => {
            console.log("setRegisterMode");
            state.isLogin = false;
        },
    },
});

export const {
    openAuthModal,
    closeAuthModal,
    setLoginMode,
    setRegisterMode,
} = uiSlice.actions;

export default uiSlice.reducer;