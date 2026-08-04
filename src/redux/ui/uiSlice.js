import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAuthModal: false,
  mode: "login", // "login" | "register"
};

const uiSlice = createSlice({
  name: "ui",
  initialState,

  reducers: {
    openLogin: (state) => {
  console.trace("openLogin");
  state.showAuthModal = true;
  state.mode = "login";
},

openRegister: (state) => {
  console.trace("openRegister");
  state.showAuthModal = true;
  state.mode = "register";
},

closeAuthModal: (state) => {
  console.trace("closeAuthModal");
  state.showAuthModal = false;
},
  },
});

export const {
  openLogin,
  openRegister,
  closeAuthModal,
} = uiSlice.actions;

export default uiSlice.reducer;