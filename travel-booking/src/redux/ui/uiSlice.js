import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAuthModal: false,
  mode: "login",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,

  reducers: {
    openLogin: (state) => {
      state.showAuthModal = true;
      state.mode = "login";
    },

    openRegister: (state) => {
      state.showAuthModal = true;
      state.mode = "register";
    },

    closeAuthModal: (state) => {
      state.showAuthModal = false;
    },
    setLoginMode: (state) => {
      state.mode = "login";
    },
  },
});

export const {
  openLogin,
  openRegister,
  closeAuthModal,
  setLoginMode,
} = uiSlice.actions;

export default uiSlice.reducer;