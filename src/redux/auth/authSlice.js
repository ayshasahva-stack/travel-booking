import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk } from "./authThunk";

const savedUser = JSON.parse(localStorage.getItem("currentUser"));

const initialState = {
    user: savedUser,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {

        builder
            .addCase(registerThunk.pending, (state) => {
                state.loading = true,
                    state.error = null
            })

            .addCase(registerThunk.fulfilled, (state, action) => {
                state.loading = false,
                    state.user = action.payload
                state.error = null
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload

            })

            .addCase(loginThunk.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false,
                    state.user = action.payload,
                    state.error = null

            })

            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })

    },
})

export const { logout } = authSlice.actions;
export default authSlice.reducer