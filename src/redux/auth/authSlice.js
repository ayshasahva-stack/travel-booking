import { createSlice } from "@reduxjs/toolkit";
import { registerThunk,loginThunk } from "./authThunk";

const initialState = {
    user: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
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

            .addCase(loginThunk.pending,(state)=>{
                state.loading=true,
                state.error=null
            })
            .addCase(loginThunk.fulfilled,(state,action)=>{
                state.loading=false,
                state.user=action.payload,
                state.error=null

            })

            .addCase(loginThunk.rejected,(state,action)=>{
                state.loading=false,
                state.error=action.payload
            })

    },
})

export default authSlice.reducer