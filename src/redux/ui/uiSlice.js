import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAuthModal: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        openAuthModal: (state) => {
            state.showAuthModal = true;
        },

        closeAuthModal: (state) => {
            state.showAuthModal = false;
        },
    },
});

export const { openAuthModal, closeAuthModal } = uiSlice.actions;

export default uiSlice.reducer;